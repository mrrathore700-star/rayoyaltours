import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Public gallery hook.
 *
 * Reads from the central `media_assets` table, filtered to rows flagged
 * `featured_gallery = true`. Falls back to the legacy `gallery_images` table
 * when no media assets are flagged yet.
 *
 * Stability notes (layout-shift fix):
 *   - `width`/`height` are returned so tiles can reserve their exact aspect
 *     ratio before the image bytes arrive.
 *   - Rows + signed URLs are cached in-module for the session, so navigating
 *     away and back re-renders instantly instead of flashing an empty grid
 *     and re-signing every storage object.
 */

export interface GalleryImage {
  id: string;
  image_path: string;
  title: string;
  location: string;
  description: string;
  alt_text: string;
  category: string;
  sort_order: number;
  url: string;
  /** Responsive srcset from the optimized variants (empty for legacy rows). */
  srcSet: string;
  /** Intrinsic pixel width of the largest variant (null for legacy rows). */
  width: number | null;
  /** Intrinsic pixel height of the largest variant (null for legacy rows). */
  height: number | null;
}

const SIGN_EXPIRY = 60 * 60 * 24 * 365;

/** Session cache: signed URLs are valid for a year, so reuse them. */
let cachedImages: GalleryImage[] | null = null;
let inflight: Promise<GalleryImage[]> | null = null;

const signedUrlCache = new Map<string, string>();

async function signGalleryPaths(paths: string[]): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  const missing: string[] = [];

  for (const p of paths) {
    const cached = signedUrlCache.get(p);
    if (cached) map.set(p, cached);
    else missing.push(p);
  }

  if (missing.length > 0) {
    const { data: signed } = await supabase.storage
      .from("gallery")
      .createSignedUrls(missing, SIGN_EXPIRY);
    signed?.forEach((s, i) => {
      if (s.signedUrl) {
        signedUrlCache.set(missing[i], s.signedUrl);
        map.set(missing[i], s.signedUrl);
      }
    });
  }

  return map;
}

async function fetchGalleryImages(): Promise<GalleryImage[]> {
  // 1. Primary source: central media library, featured_gallery rows.
  const { data: mediaRows, error: mediaErr } = await supabase
    .from("media_assets")
    .select(
      "id, image_path, path_hero, path_standard, path_thumb, title, location, description, alt_text, category, sort_order, bucket, width, height",
    )
    .eq("featured_gallery", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (mediaErr) throw new Error(mediaErr.message);

  if (mediaRows && mediaRows.length > 0) {
    const paths = Array.from(
      new Set(
        mediaRows.flatMap((r) =>
          [r.image_path, r.path_hero, r.path_standard, r.path_thumb].filter(Boolean) as string[],
        ),
      ),
    );
    const urlByPath = await signGalleryPaths(paths);

    return mediaRows.map((r) => {
      const url =
        urlByPath.get(r.image_path) ??
        (r.path_standard ? urlByPath.get(r.path_standard) : undefined) ??
        "";
      const srcSet = [
        r.path_thumb && urlByPath.get(r.path_thumb) ? `${urlByPath.get(r.path_thumb)} 500w` : "",
        r.path_standard && urlByPath.get(r.path_standard)
          ? `${urlByPath.get(r.path_standard)} 1200w`
          : "",
        r.path_hero && urlByPath.get(r.path_hero) ? `${urlByPath.get(r.path_hero)} 1600w` : "",
      ]
        .filter(Boolean)
        .join(", ");
      return {
        id: r.id,
        image_path: r.image_path,
        title: r.title ?? "",
        location: r.location ?? "",
        description: r.description ?? "",
        alt_text: r.alt_text ?? "",
        category: r.category ?? "Culture",
        sort_order: r.sort_order ?? 0,
        url,
        srcSet,
        width: r.width ?? null,
        height: r.height ?? null,
      };
    });
  }

  // 2. Legacy fallback: original gallery_images table.
  const { data: legacy, error: legacyErr } = await supabase
    .from("gallery_images")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (legacyErr) throw new Error(legacyErr.message);

  const rows = legacy ?? [];
  if (rows.length === 0) return [];

  const urlByPath = await signGalleryPaths(rows.map((r) => r.image_path));

  return rows.map((r) => ({
    id: r.id,
    image_path: r.image_path,
    title: r.title ?? "",
    location: r.location ?? "",
    description: r.description ?? "",
    alt_text: r.alt_text ?? "",
    category: r.category ?? "Culture",
    sort_order: r.sort_order ?? 0,
    url: urlByPath.get(r.image_path) ?? "",
    srcSet: "",
    width: null,
    height: null,
  }));
}

export function useGalleryImages() {
  const [images, setImages] = useState<GalleryImage[]>(cachedImages ?? []);
  const [loading, setLoading] = useState(cachedImages === null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (force = false) => {
    if (force) {
      cachedImages = null;
      inflight = null;
      signedUrlCache.clear();
    } else if (cachedImages) {
      setImages(cachedImages);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      inflight = inflight ?? fetchGalleryImages();
      const result = await inflight;
      cachedImages = result;
      setImages(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load gallery");
    } finally {
      inflight = null;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { images, loading, error, reload: () => load(true) };
}

/** Clears the session gallery cache (used by the admin UI after edits). */
export function clearGalleryCache() {
  cachedImages = null;
  inflight = null;
  signedUrlCache.clear();
}
