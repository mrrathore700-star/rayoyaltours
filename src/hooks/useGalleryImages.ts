import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

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

const SIGN_EXPIRY = 60 * 60 * 24 * 365; // 1 year

export function useGalleryImages() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: dbErr } = await supabase
      .from("gallery_images")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (dbErr) {
      setError(dbErr.message);
      setLoading(false);
      return;
    }

    const rows = data ?? [];
    if (rows.length === 0) {
      setImages([]);
      setLoading(false);
      return;
    }

    const paths = rows.map((r) => r.image_path);
    const { data: signed, error: signErr } = await supabase.storage
      .from("gallery")
      .createSignedUrls(paths, SIGN_EXPIRY);

    if (signErr) {
      setError(signErr.message);
      setLoading(false);
      return;
    }

    const urlByPath = new Map<string, string>();
    signed?.forEach((s, i) => {
      if (s.signedUrl) urlByPath.set(paths[i], s.signedUrl);
    });

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
