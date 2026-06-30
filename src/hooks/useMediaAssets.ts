import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Phase 2 — Central Media Library hook.
 *
 * Single source of truth for any UI surface that needs to read images from
 * the `media_assets` table. Returns rows + signed Cloud Storage URLs.
 *
 * Pass a `flag` ("featured_homepage", "featured_gallery", ...) to scope to
 * one placement. Omit the flag to fetch every asset (used by Gallery Admin).
 *
 * Bundled-asset fallbacks remain the responsibility of consuming components
 * via <SmartImage fallback={...} /> — this hook never mutates UI.
 */

export type FeaturedFlag =
  | "featured_homepage"
  | "featured_gallery"
  | "featured_package"
  | "featured_blog"
  | "featured_destination"
  | "featured_experience"
  | "featured_vehicle";

export const FEATURED_FLAGS: FeaturedFlag[] = [
  "featured_homepage",
  "featured_gallery",
  "featured_package",
  "featured_blog",
  "featured_destination",
  "featured_experience",
  "featured_vehicle",
];

export interface MediaAsset {
  id: string;
  bucket: string;
  image_path: string;
  title: string;
  alt_text: string;
  description: string;
  category: string;
  location: string;
  sort_order: number;
  width: number | null;
  height: number | null;
  focal_x: number | null;
  focal_y: number | null;
  featured_homepage: boolean;
  featured_gallery: boolean;
  featured_package: boolean;
  featured_blog: boolean;
  featured_destination: boolean;
  featured_experience: boolean;
  featured_vehicle: boolean;
  url: string;
}

const SIGN_EXPIRY = 60 * 60 * 24 * 365;

export interface UseMediaAssetsOpts {
  /** If set, only rows where this flag is true are returned. */
  flag?: FeaturedFlag;
  /** Optional max count after sorting by sort_order, created_at. */
  limit?: number;
}

export function useMediaAssets(opts: UseMediaAssetsOpts = {}) {
  const { flag, limit } = opts;
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    let query = supabase
      .from("media_assets")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (flag) query = query.eq(flag, true);
    if (limit) query = query.limit(limit);

    const { data, error: dbErr } = await query;
    if (dbErr) {
      setError(dbErr.message);
      setLoading(false);
      return;
    }

    const rows = data ?? [];
    if (rows.length === 0) {
      setAssets([]);
      setLoading(false);
      return;
    }

    // Sign URLs grouped by bucket (so one call covers all paths per bucket).
    const byBucket = new Map<string, string[]>();
    rows.forEach((r) => {
      const b = r.bucket || "gallery";
      if (!byBucket.has(b)) byBucket.set(b, []);
      byBucket.get(b)!.push(r.image_path);
    });

    const urlByKey = new Map<string, string>(); // key = `${bucket}|${path}`
    await Promise.all(
      Array.from(byBucket.entries()).map(async ([bucket, paths]) => {
        const { data: signed } = await supabase.storage
          .from(bucket)
          .createSignedUrls(paths, SIGN_EXPIRY);
        signed?.forEach((s, i) => {
          if (s.signedUrl) urlByKey.set(`${bucket}|${paths[i]}`, s.signedUrl);
        });
      }),
    );

    setAssets(
      rows.map((r) => ({
        id: r.id,
        bucket: r.bucket || "gallery",
        image_path: r.image_path,
        title: r.title ?? "",
        alt_text: r.alt_text ?? "",
        description: r.description ?? "",
        category: r.category ?? "Culture",
        location: r.location ?? "",
        sort_order: r.sort_order ?? 0,
        width: r.width,
        height: r.height,
        focal_x: r.focal_x,
        focal_y: r.focal_y,
        featured_homepage: !!r.featured_homepage,
        featured_gallery: !!r.featured_gallery,
        featured_package: !!r.featured_package,
        featured_blog: !!r.featured_blog,
        featured_destination: !!r.featured_destination,
        featured_experience: !!r.featured_experience,
        featured_vehicle: !!r.featured_vehicle,
        url: urlByKey.get(`${r.bucket || "gallery"}|${r.image_path}`) ?? "",
      })),
    );
    setLoading(false);
  }, [flag, limit]);

  useEffect(() => {
    load();
  }, [load]);

  return { assets, loading, error, reload: load };
}
