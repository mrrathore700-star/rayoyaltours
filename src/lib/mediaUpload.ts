import { supabase } from "@/integrations/supabase/client";
import {
  optimizeImage,
  uniqueSlug,
  variantPath,
  titleFromSlug,
  type OptimizedImage,
  type VariantName,
} from "@/lib/imageOptimizer";

/**
 * Shared upload helper for every admin image upload surface.
 *
 * Optimizes in the browser, then stores ONLY the optimized files (hero /
 * standard / thumbnail WebP). The original uncompressed file is never stored.
 */

export interface UploadedMedia {
  paths: Record<VariantName, string>;
  /** Canonical path used as `media_assets.image_path` (standard version). */
  imagePath: string;
  title: string;
  width: number;
  height: number;
  bytesOriginal: number;
  bytesOptimized: number;
  result: OptimizedImage;
}

/** Collects slugs already used in the bucket so filenames stay unique. */
export async function loadTakenSlugs(bucket = "gallery"): Promise<Set<string>> {
  const taken = new Set<string>();
  const { data } = await supabase
    .from("media_assets")
    .select("image_path, path_hero, path_standard, path_thumb")
    .eq("bucket", bucket);
  data?.forEach((row) => {
    [row.image_path, row.path_hero, row.path_standard, row.path_thumb].forEach((p) => {
      if (!p) return;
      const base = p.replace(/\.[a-z0-9]+$/i, "").replace(/-(1600|1200|500)$/, "");
      taken.add(base);
    });
  });
  return taken;
}

export async function uploadOptimized(
  file: File,
  taken: Set<string>,
  opts: { bucket?: string; onStep?: (label: string, pct: number) => void } = {},
): Promise<UploadedMedia> {
  const bucket = opts.bucket ?? "gallery";
  const result = await optimizeImage(file, opts.onStep);
  const slug = uniqueSlug(result.slug, taken);

  const paths = {} as Record<VariantName, string>;
  const uploadedBlobs = new Map<Blob, string>();

  for (const name of ["hero", "standard", "thumb"] as VariantName[]) {
    const variant = result.variants[name];
    const existing = uploadedBlobs.get(variant.blob);
    if (existing) {
      paths[name] = existing;
      continue;
    }
    const path = variantPath(slug, name, result.ext);
    const { error } = await supabase.storage.from(bucket).upload(path, variant.blob, {
      cacheControl: "31536000",
      upsert: false,
      contentType: result.contentType,
    });
    if (error) {
      // Roll back anything already stored for this file.
      const done = Array.from(new Set(Object.values(paths)));
      if (done.length) await supabase.storage.from(bucket).remove(done);
      throw new Error(error.message);
    }
    paths[name] = path;
    uploadedBlobs.set(variant.blob, path);
  }

  opts.onStep?.("Ready for website", 100);

  return {
    paths,
    imagePath: paths.standard,
    title: titleFromSlug(slug),
    width: result.width,
    height: result.height,
    bytesOriginal: result.bytesOriginal,
    bytesOptimized: result.bytesOptimized,
    result,
  };
}

/** Removes every stored variant of an asset (deduplicated). */
export function assetPaths(a: {
  image_path: string;
  path_hero?: string | null;
  path_standard?: string | null;
  path_thumb?: string | null;
}) {
  return Array.from(
    new Set([a.image_path, a.path_hero, a.path_standard, a.path_thumb].filter(Boolean) as string[]),
  );
}
