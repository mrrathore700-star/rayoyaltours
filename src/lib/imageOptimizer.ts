/**
 * Automatic Image Optimization Pipeline (browser-first).
 *
 * One entry point — `optimizeImage(file)` — used by every upload surface on the
 * site (Media Library / Gallery Admin today, any future admin upload).
 *
 * Steps, all automatic:
 *   1. Validate  — JPG / JPEG / PNG / WEBP only, max 25 MB.
 *   2. Resize    — hero 1600px, standard 1200px, thumb 500px (width-based,
 *                  aspect ratio always preserved, never upscaled).
 *   3. Convert   — everything becomes WebP (quality 80 start).
 *   4. Compress  — quality is stepped down until each variant fits its byte
 *                  budget (400 KB / 250 KB / 80 KB).
 *   5. Metadata  — canvas re-encode drops all EXIF (GPS, camera, device,
 *                  software). Colors are re-encoded in sRGB.
 *   6. Skip      — if a variant's source is already WebP and within both the
 *                  target width and byte budget, the original bytes are reused
 *                  as-is (no re-compression, no resize).
 *
 * Future ready: `TARGET_FORMAT` is the single switch for AVIF — flip it to
 * "image/avif" (with a `canEncode` probe) and the rest of the pipeline works
 * unchanged.
 */

export const ACCEPTED_MIME = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const ACCEPT_ATTR = ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp";
export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024; // 25 MB

const TARGET_FORMAT = "image/webp" as const;
const TARGET_EXT = "webp";
const START_QUALITY = 0.8;
const MIN_QUALITY = 0.45;

export type VariantName = "hero" | "standard" | "thumb";

interface VariantSpec {
  name: VariantName;
  width: number;
  maxBytes: number;
}

export const VARIANTS: VariantSpec[] = [
  { name: "hero", width: 1600, maxBytes: 400 * 1024 },
  { name: "standard", width: 1200, maxBytes: 250 * 1024 },
  { name: "thumb", width: 500, maxBytes: 80 * 1024 },
];

export interface OptimizedVariant {
  name: VariantName;
  blob: Blob;
  width: number;
  height: number;
  bytes: number;
  /** True when the source file was reused untouched (already optimized). */
  passthrough: boolean;
}

export interface OptimizedImage {
  /** SEO-friendly base slug, no extension. */
  slug: string;
  ext: string;
  contentType: string;
  width: number;
  height: number;
  bytesOriginal: number;
  bytesOptimized: number;
  variants: Record<VariantName, OptimizedVariant>;
  /** True when nothing needed re-encoding. */
  alreadyOptimized: boolean;
}

export class ImageValidationError extends Error {}

/* ------------------------------------------------------------------ naming */

export function slugifyFilename(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/\.[a-z0-9]+$/i, "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70) || "image"
  );
}

/**
 * Returns a slug that does not collide with `taken`, appending -2, -3, …
 * `taken` should hold slugs already used in storage.
 */
export function uniqueSlug(slug: string, taken: Set<string>): string {
  if (!taken.has(slug)) {
    taken.add(slug);
    return slug;
  }
  let n = 2;
  while (taken.has(`${slug}-${n}`)) n++;
  const out = `${slug}-${n}`;
  taken.add(out);
  return out;
}

export function variantPath(slug: string, v: VariantName, ext = TARGET_EXT) {
  const suffix = v === "hero" ? "1600" : v === "standard" ? "1200" : "500";
  return `${slug}-${suffix}.${ext}`;
}

export function titleFromSlug(slug: string) {
  return slug
    .replace(/-\d+$/, "")
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ------------------------------------------------------------- processing */

function validate(file: File) {
  const type = (file.type || "").toLowerCase();
  const okExt = /\.(jpe?g|png|webp)$/i.test(file.name);
  if (!ACCEPTED_MIME.includes(type) && !okExt) {
    throw new ImageValidationError(
      `"${file.name}" isn't a supported image. Please upload a JPG, PNG or WebP file.`,
    );
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new ImageValidationError(
      `"${file.name}" is ${(file.size / 1024 / 1024).toFixed(1)} MB. Maximum upload size is 25 MB.`,
    );
  }
}

async function decode(file: File): Promise<{ bitmap: ImageBitmap | HTMLImageElement; width: number; height: number }> {
  if (typeof createImageBitmap === "function") {
    try {
      const bitmap = await createImageBitmap(file);
      return { bitmap, width: bitmap.width, height: bitmap.height };
    } catch {
      /* fall through to <img> decoding */
    }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new ImageValidationError(`"${file.name}" could not be read as an image.`));
      el.src = url;
    });
    return { bitmap: img, width: img.naturalWidth, height: img.naturalHeight };
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), TARGET_FORMAT, quality));
}

async function encodeVariant(
  source: ImageBitmap | HTMLImageElement,
  srcW: number,
  srcH: number,
  spec: VariantSpec,
): Promise<{ blob: Blob; width: number; height: number }> {
  // Preserve aspect ratio, never upscale.
  const scale = Math.min(1, spec.width / srcW);
  const width = Math.max(1, Math.round(srcW * scale));
  const height = Math.max(1, Math.round(srcH * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) throw new Error("Canvas is unavailable in this browser.");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  // Transparent background is preserved (no fillRect), WebP keeps the alpha.
  ctx.drawImage(source as CanvasImageSource, 0, 0, width, height);

  let quality = START_QUALITY;
  let blob = await canvasToBlob(canvas, quality);
  while (blob && blob.size > spec.maxBytes && quality > MIN_QUALITY) {
    quality = Math.max(MIN_QUALITY, quality - 0.08);
    blob = await canvasToBlob(canvas, quality);
  }
  if (!blob) throw new Error("Image encoding failed in this browser.");
  return { blob, width, height };
}

/**
 * Runs the full pipeline for one file. Throws `ImageValidationError` for
 * user-fixable problems (format / size) — show `error.message` directly.
 */
export async function optimizeImage(
  file: File,
  onStep?: (label: string, pct: number) => void,
): Promise<OptimizedImage> {
  validate(file);
  onStep?.("Reading image", 10);

  const isWebp = (file.type || "").toLowerCase() === "image/webp" || /\.webp$/i.test(file.name);
  const { bitmap, width, height } = await decode(file);

  const variants: Partial<Record<VariantName, OptimizedVariant>> = {};
  let allPassthrough = true;
  let step = 0;

  for (const spec of VARIANTS) {
    step++;
    onStep?.(`Optimizing ${spec.name} version`, 10 + step * 25);

    const fitsWidth = width <= spec.width;
    const fitsBytes = file.size <= spec.maxBytes;
    if (isWebp && fitsWidth && fitsBytes) {
      // Already optimized for this variant — reuse untouched bytes.
      variants[spec.name] = {
        name: spec.name,
        blob: file,
        width,
        height,
        bytes: file.size,
        passthrough: true,
      };
      continue;
    }
    allPassthrough = false;
    const out = await encodeVariant(bitmap, width, height, spec);
    variants[spec.name] = {
      name: spec.name,
      blob: out.blob,
      width: out.width,
      height: out.height,
      bytes: out.blob.size,
      passthrough: false,
    };
  }

  if ("close" in bitmap && typeof bitmap.close === "function") bitmap.close();
  onStep?.("Ready", 95);

  const full = variants.hero!;
  const bytesOptimized = (Object.values(variants) as OptimizedVariant[])
    .filter((v, i, arr) => arr.findIndex((x) => x.blob === v.blob) === i)
    .reduce((s, v) => s + v.bytes, 0);

  return {
    slug: slugifyFilename(file.name),
    ext: TARGET_EXT,
    contentType: TARGET_FORMAT,
    width: full.width,
    height: full.height,
    bytesOriginal: file.size,
    bytesOptimized,
    variants: variants as Record<VariantName, OptimizedVariant>,
    alreadyOptimized: allPassthrough,
  };
}

export function formatBytes(b: number) {
  if (b >= 1024 * 1024) return `${(b / 1024 / 1024).toFixed(1)} MB`;
  return `${Math.round(b / 1024)} KB`;
}
