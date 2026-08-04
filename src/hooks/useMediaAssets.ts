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
  path_hero: string | null;
  path_standard: string | null;
  path_thumb: string | null;
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
  /** Signed URLs for each stored size (fall back to `url`). */
  urlHero: string;
  urlThumb: string;
  /** Automatic responsive srcset built from the stored variants. */
  srcSet: string;
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

    // Sign URLs grouped by bucket (one call covers every variant path).
    const byBucket = new Map<string, Set<string>>();
    rows.forEach((r) => {
      const b = r.bucket || "gallery";
      if (!byBucket.has(b)) byBucket.set(b, new Set());
      const set = byBucket.get(b)!;
      [r.image_path, r.path_hero, r.path_standard, r.path_thumb].forEach((p) => {
        if (p) set.add(p);
      });
    });

    const urlByKey = new Map<string, string>(); // key = `${bucket}|${path}`
    await Promise.all(
      Array.from(byBucket.entries()).map(async ([bucket, pathSet]) => {
        const paths = Array.from(pathSet);
        const { data: signed } = await supabase.storage
          .from(bucket)
          .createSignedUrls(paths, SIGN_EXPIRY);
        signed?.forEach((s, i) => {
          if (s.signedUrl) urlByKey.set(`${bucket}|${paths[i]}`, s.signedUrl);
        });
      }),
    );

    setAssets(
      rows.map((r) => {
        const bucket = r.bucket || "gallery";
        const sign = (p?: string | null) => (p ? urlByKey.get(`${bucket}|${p}`) ?? "" : "");
        const url = sign(r.image_path) || sign(r.path_standard) || sign(r.path_hero);
        const urlHero = sign(r.path_hero) || url;
        const urlThumb = sign(r.path_thumb) || url;
        const srcSet = [
          urlThumb && r.path_thumb ? `${urlThumb} 500w` : "",
          sign(r.path_standard) ? `${sign(r.path_standard)} 1200w` : "",
          r.path_hero && urlHero ? `${urlHero} 1600w` : "",
        ]
          .filter(Boolean)
          .join(", ");
        return {
          id: r.id,
          bucket,
          image_path: r.image_path,
          path_hero: r.path_hero ?? null,
          path_standard: r.path_standard ?? null,
          path_thumb: r.path_thumb ?? null,
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
          url,
          urlHero,
          urlThumb,
          srcSet,
        };
      }),
    );

    setLoading(false);
  }, [flag, limit]);

  useEffect(() => {
    load();
  }, [load]);

  return { assets, loading, error, reload: load };
}
