import { supabase } from "@/integrations/supabase/client";

const CACHE_TTL_MS = 50 * 60 * 1000;
const MAX_BATCH_SIZE = 100;

const urlCache = new Map<string, { url: string; expiresAt: number }>();

/**
 * Gets short-lived URLs only for image files the site has explicitly published.
 * The Cloud function checks each requested path against published media slots,
 * featured media, or legacy gallery entries before signing it.
 */
export async function getPublicMediaUrls(
  bucket: string,
  paths: string[],
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const now = Date.now();
  const missing: string[] = [];

  for (const path of new Set(paths.filter(Boolean))) {
    const key = `${bucket}:${path}`;
    const cached = urlCache.get(key);
    if (cached && cached.expiresAt > now) result.set(path, cached.url);
    else {
      urlCache.delete(key);
      missing.push(path);
    }
  }

  for (let i = 0; i < missing.length; i += MAX_BATCH_SIZE) {
    const batch = missing.slice(i, i + MAX_BATCH_SIZE);
    const { data, error } = await supabase.functions.invoke("sign-public-media", {
      body: { bucket, paths: batch },
    });
    if (error) throw error;

    const signedUrls = (data?.signedUrls ?? {}) as Record<string, string>;
    for (const [path, url] of Object.entries(signedUrls)) {
      if (typeof url !== "string" || !url) continue;
      result.set(path, url);
      urlCache.set(`${bucket}:${path}`, { url, expiresAt: Date.now() + CACHE_TTL_MS });
    }
  }

  return result;
}

export function clearPublicMediaUrlCache() {
  urlCache.clear();
}