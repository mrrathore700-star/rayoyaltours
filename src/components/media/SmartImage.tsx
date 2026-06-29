import { CSSProperties, ImgHTMLAttributes, useMemo } from "react";
import { useMediaSlot } from "@/hooks/useMediaSlot";

/**
 * Phase 1 Media Foundation — SmartImage.
 *
 * Single reusable <img> wrapper that prepares the site for a centralized
 * media library without changing how any existing image renders.
 *
 * Resolution order (first match wins):
 *   1. `slotKey`  – if bound in the `media_slots` table, use the resolved
 *                   storage URL + stored alt text.
 *   2. `fallback` – the existing imported asset (string from `@/assets/...`),
 *                   so today's pages keep working untouched.
 *
 * Other features:
 *   - Lazy loading by default; pass `priority` for hero/LCP images.
 *   - Native `decoding="async"`.
 *   - Optional `aspectRatio` (e.g. "16/9") to reserve space and avoid CLS.
 *   - Optional `sizes` for responsive selection by the browser.
 *   - Fully transparent to the rest of the app: until any slot is populated,
 *     <SmartImage> behaves exactly like a plain <img src={fallback} />.
 */

type BaseImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "loading">;

export interface SmartImageProps extends BaseImgProps {
  /** Optional named slot to look up in `media_slots`. */
  slotKey?: string;
  /** Bundled asset used when no slot is bound. Required for safety. */
  fallback: string;
  /** Accessible description. Slot alt overrides win when present. */
  alt: string;
  /** When true, eager + high fetch priority (use for hero / above-the-fold). */
  priority?: boolean;
  /** CSS aspect ratio string, e.g. "16/9" or "3/2". Prevents layout shift. */
  aspectRatio?: string;
  /** Responsive sizes hint, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes?: string;
  /** Wrapper className (only applied when aspectRatio is set). */
  wrapperClassName?: string;
}

const SmartImage = ({
  slotKey,
  fallback,
  alt,
  priority = false,
  aspectRatio,
  sizes,
  wrapperClassName,
  className,
  style,
  width,
  height,
  ...imgProps
}: SmartImageProps) => {
  const { media } = useMediaSlot(slotKey);

  const src = media?.url ?? fallback;
  const resolvedAlt = media?.alt?.trim() ? media.alt : alt;
  const resolvedWidth = width ?? media?.width ?? undefined;
  const resolvedHeight = height ?? media?.height ?? undefined;

  const objectPosition = useMemo(() => {
    if (media?.focalX == null || media?.focalY == null) return undefined;
    return `${Math.round(media.focalX * 100)}% ${Math.round(media.focalY * 100)}%`;
  }, [media?.focalX, media?.focalY]);

  const imgStyle: CSSProperties = {
    ...(objectPosition ? { objectPosition } : {}),
    ...style,
  };

  const img = (
    <img
      src={src}
      alt={resolvedAlt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      // `fetchpriority` is valid HTML but not yet in React's typed props.
      {...({ fetchpriority: priority ? "high" : "auto" } as Record<string, string>)}
      width={resolvedWidth as number | undefined}
      height={resolvedHeight as number | undefined}
      sizes={sizes}
      className={className}
      style={imgStyle}
      {...imgProps}
    />
  );

  if (!aspectRatio) return img;

  return (
    <div
      className={wrapperClassName}
      style={{ aspectRatio, position: "relative", overflow: "hidden" }}
    >
      {img}
    </div>
  );
};

export default SmartImage;
