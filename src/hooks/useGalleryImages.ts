import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Public gallery hook.
 *
 * Phase 2 update: the Gallery page now reads from the central
 * `media_assets` table, filtered to rows flagged `featured_gallery = true`.
 *
 * Legacy fallback: if no media assets are flagged for the gallery yet, we
 * transparently fall back to the original `gallery_images` table so the
 * Gallery never appears empty during the transition.
 *
 * Exported `GalleryImage` shape is unchanged so `GalleryGrid` and
 * `LuxLightbox` keep working without edits.
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
}

const SIGN_EXPIRY = 60 * 60 * 24 * 365;

async function signGalleryPaths(paths: string[]): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  if (paths.length === 0) return map;
  const { data: signed } = await supabase.storage
    .from("gallery")
    .createSignedUrls(paths, SIGN_EXPIRY);
  signed?.forEach((s, i) => {
    if (s.signedUrl) map.set(paths[i], s.signedUrl);
  });
  return map;
}

export function useGalleryImages() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    // 1. Primary source: central media library, featured_gallery rows.
    const { data: mediaRows, error: mediaErr } = await supabase
      .from("media_assets")
      .select(
        "id, image_path, title, location, description, alt_text, category, sort_order, bucket",
      )
      .eq("featured_gallery", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (mediaErr) {
      setError(mediaErr.message);
      setLoading(false);
      return;
    }

    if (mediaRows && mediaRows.length > 0) {
      const paths = mediaRows.map((r) => r.image_path);
      const urlByPath = await signGalleryPaths(paths);
      setImages(
        mediaRows.map((r) => ({
          id: r.id,
          image_path: r.image_path,
          title: r.title ?? "",
          location: r.location ?? "",
          description: r.description ?? "",
          alt_text: r.alt_text ?? "",
          category: r.category ?? "Culture",
          sort_order: r.sort_order ?? 0,
          url: urlByPath.get(r.image_path) ?? "",
        })),
      );
      setLoading(false);
      return;
    }

    // 2. Legacy fallback: original gallery_images table.
    const { data: legacy, error: legacyErr } = await supabase
      .from("gallery_images")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (legacyErr) {
      setError(legacyErr.message);
      setLoading(false);
      return;
    }

    const rows = legacy ?? [];
    if (rows.length === 0) {
      setImages([]);
      setLoading(false);
      return;
    }
    const paths = rows.map((r) => r.image_path);
    const urlByPath = await signGalleryPaths(paths);
    setImages(
      rows.map((r) => ({
        id: r.id,
        image_path: r.image_path,
        title: r.title ?? "",
        location: r.location ?? "",
        description: r.description ?? "",
        alt_text: r.alt_text ?? "",
        category: r.category ?? "Culture",
        sort_order: r.sort_order ?? 0,
        url: urlByPath.get(r.image_path) ?? "",
      })),
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { images, loading, error, reload: load };
}
