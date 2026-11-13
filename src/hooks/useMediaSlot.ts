import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getPublicMediaUrls } from "@/lib/publicMediaUrls";

/**
 * Phase 1 Media Foundation — slot resolver hook.
 *
 * Looks up a named placement (e.g. "home.hero", "destination.jaipur.hero") in
 * the `media_slots` table, joins to `media_assets`, and returns a signed URL
 * for the bound storage object.
 *
 * Returns `null` (not an error) when the slot is unbound — callers are
 * expected to use their bundled fallback image in that case, so the website
 * keeps rendering exactly as today until slots are populated.
 *
 * Results are cached in-memory per session to avoid refetching when the same
 * slot is used by multiple components.
 */

export interface ResolvedMedia {
  url: string;
  /** Responsive srcset from the optimized variants (may be empty). */
  srcSet: string;
  alt: string;
  width: number | null;
  height: number | null;
  focalX: number | null;
  focalY: number | null;
}

const CACHE_TTL_MS = 45 * 60 * 1000;
const cache = new Map<string, { media: ResolvedMedia | null; expiresAt: number }>();
const inflight = new Map<string, Promise<ResolvedMedia | null>>();

async function resolveSlot(slotKey: string): Promise<ResolvedMedia | null> {
  const cached = cache.get(slotKey);
  if (cached && cached.expiresAt > Date.now()) return cached.media;
  if (cached) cache.delete(slotKey);
  if (inflight.has(slotKey)) return inflight.get(slotKey)!;

  const p = (async (): Promise<ResolvedMedia | null> => {
    const { data, error } = await supabase
      .from("media_slots")
      .select(
        "alt_override, media_assets:asset_id (bucket, image_path, path_hero, path_standard, path_thumb, alt_text, width, height, focal_x, focal_y)",
      )
      .eq("slot_key", slotKey)
      .maybeSingle();

    if (error || !data || !data.media_assets) {
      cache.set(slotKey, { media: null, expiresAt: Date.now() + CACHE_TTL_MS });
      return null;
    }

    const asset = data.media_assets as {
      bucket: string;
      image_path: string;
      path_hero: string | null;
      path_standard: string | null;
      path_thumb: string | null;
      alt_text: string;
      width: number | null;
      height: number | null;
      focal_x: number | null;
      focal_y: number | null;
    };

    const bucket = asset.bucket || "gallery";
    const variantPaths = Array.from(
      new Set(
        [asset.image_path, asset.path_hero, asset.path_standard, asset.path_thumb].filter(
          Boolean,
        ) as string[],
      ),
    );
    let urlByPath: Map<string, string>;
    try {
      urlByPath = await getPublicMediaUrls(bucket, variantPaths);
    } catch {
      cache.set(slotKey, { media: null, expiresAt: Date.now() + CACHE_TTL_MS });
      return null;
    }
    const mainUrl = urlByPath.get(asset.image_path) ?? "";

    if (!mainUrl) {
      cache.set(slotKey, { media: null, expiresAt: Date.now() + CACHE_TTL_MS });
      return null;
    }

    const srcSet = [
      asset.path_thumb && urlByPath.get(asset.path_thumb)
        ? `${urlByPath.get(asset.path_thumb)} 500w`
        : "",
      asset.path_standard && urlByPath.get(asset.path_standard)
        ? `${urlByPath.get(asset.path_standard)} 1200w`
        : "",
      asset.path_hero && urlByPath.get(asset.path_hero)
        ? `${urlByPath.get(asset.path_hero)} 1600w`
        : "",
    ]
      .filter(Boolean)
      .join(", ");

    const resolved: ResolvedMedia = {
      url: mainUrl,
      srcSet,
      alt: data.alt_override?.trim() || asset.alt_text || "",
      width: asset.width,
      height: asset.height,
      focalX: asset.focal_x,
      focalY: asset.focal_y,
    };
    cache.set(slotKey, { media: resolved, expiresAt: Date.now() + CACHE_TTL_MS });
    return resolved;
  })();

  inflight.set(slotKey, p);
  try {
    return await p;
  } finally {
    inflight.delete(slotKey);
  }
}

export function useMediaSlot(slotKey: string | undefined | null) {
  const [media, setMedia] = useState<ResolvedMedia | null>(
    slotKey ? cache.get(slotKey)?.media ?? null : null,
  );
  const [loading, setLoading] = useState<boolean>(
    !!slotKey && !cache.has(slotKey),
  );

  useEffect(() => {
    let active = true;
    if (!slotKey) {
      setMedia(null);
      setLoading(false);
      return;
    }
    const cached = cache.get(slotKey);
    if (cached && cached.expiresAt > Date.now()) {
      setMedia(cached.media);
      setLoading(false);
      return;
    }
    setLoading(true);
    resolveSlot(slotKey).then((res) => {
      if (!active) return;
      setMedia(res);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [slotKey]);

  return { media, loading };
}

/** Clears the in-memory slot cache. Used by the admin UI after edits. */
export function clearMediaSlotCache(slotKey?: string) {
  if (slotKey) cache.delete(slotKey);
  else cache.clear();
}
