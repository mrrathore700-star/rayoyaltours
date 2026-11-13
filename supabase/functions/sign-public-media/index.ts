import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SIGNED_URL_SECONDS = 60 * 60;
const MAX_PATHS = 100;
const MAX_PATH_LENGTH = 512;

function respond(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return respond({ error: "Method not allowed" }, 405);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return respond({ error: "Invalid request" }, 400);
  }

  if (!body || typeof body !== "object") return respond({ error: "Invalid request" }, 400);
  const { bucket, paths } = body as { bucket?: unknown; paths?: unknown };
  if (
    bucket !== "gallery" ||
    !Array.isArray(paths) ||
    paths.length < 1 ||
    paths.length > MAX_PATHS ||
    paths.some(
      (path) =>
        typeof path !== "string" ||
        path.length < 1 ||
        path.length > MAX_PATH_LENGTH ||
        path.startsWith("/") ||
        path.split("/").includes("..") ||
        /[\u0000-\u001f\u007f]/.test(path),
    )
  ) {
    return respond({ error: "Invalid image request" }, 400);
  }

  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) return respond({ error: "Image service unavailable" }, 503);

  const cloud = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const [assetsResult, slotsResult, legacyResult] = await Promise.all([
      cloud
        .from("media_assets")
        .select(
          "id, image_path, path_hero, path_standard, path_thumb, featured_homepage, featured_gallery, featured_package, featured_blog, featured_destination, featured_experience, featured_vehicle",
        )
        .eq("bucket", "gallery"),
      cloud.from("media_slots").select("asset_id").not("asset_id", "is", null),
      cloud.from("gallery_images").select("image_path"),
    ]);

    if (assetsResult.error || slotsResult.error || legacyResult.error) {
      console.error("sign-public-media: published image lookup failed");
      return respond({ error: "Image service unavailable" }, 503);
    }

    const slotAssetIds = new Set((slotsResult.data ?? []).map((row) => row.asset_id));
    const allowedPaths = new Set<string>();
    for (const asset of assetsResult.data ?? []) {
      const isPublished =
        asset.featured_homepage ||
        asset.featured_gallery ||
        asset.featured_package ||
        asset.featured_blog ||
        asset.featured_destination ||
        asset.featured_experience ||
        asset.featured_vehicle ||
        slotAssetIds.has(asset.id);
      if (!isPublished) continue;
      [asset.image_path, asset.path_hero, asset.path_standard, asset.path_thumb].forEach((path) => {
        if (path) allowedPaths.add(path);
      });
    }
    for (const image of legacyResult.data ?? []) {
      if (image.image_path) allowedPaths.add(image.image_path);
    }

    const authorizedPaths = [...new Set(paths as string[])].filter((path) => allowedPaths.has(path));
    if (authorizedPaths.length === 0) return respond({ signedUrls: {} });

    const { data: signed, error: signError } = await cloud.storage
      .from("gallery")
      .createSignedUrls(authorizedPaths, SIGNED_URL_SECONDS);

    if (signError || !signed) {
      console.error("sign-public-media: signed URL creation failed");
      return respond({ error: "Image service unavailable" }, 503);
    }

    const signedUrls: Record<string, string> = {};
    signed.forEach((item, index) => {
      if (item.signedUrl) signedUrls[authorizedPaths[index]] = item.signedUrl;
    });
    return respond({ signedUrls });
  } catch {
    console.error("sign-public-media: unexpected request failure");
    return respond({ error: "Image service unavailable" }, 503);
  }
});