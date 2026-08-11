import { CSSProperties, ImgHTMLAttributes, useEffect, useMemo, useRef, useState } from "react";
import { useMediaSlot } from "@/hooks/useMediaSlot";

/**
 * Global image component — the ONE place image loading/swapping is handled.
 *
 * Rules implemented here (site-wide guarantees):
 *   1. Media system is the source of truth. If `slotKey` resolves to an asset
 *      in `media_slots`/`media_assets`, that asset wins over the bundled
 *      `fallback` file.
 *   2. No old-image flash. While a slot is still resolving, nothing renders
 *      except a neutral skeleton — a real photograph is never used as a
 *      loading placeholder.
 *   3. Atomic swap. When the resolved source changes, the new image is
 *      preloaded off-screen and the visible <img> is only switched once the
 *      new file has fully decoded. The currently visible image stays put in
 *      the meantime.
 *   4. Error safety. If the new source fails to load, the last valid visible
 *      image is kept (never a broken icon, never an unrelated stock image).
 *      With nothing visible yet, the neutral skeleton stays.
 *   5. Responsive: `srcSet` + `sizes` are honoured, and preloading uses the
 *      same srcSet so the browser picks the size it will actually paint.
 */

type BaseImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "loading">;

export interface SmartImageProps extends BaseImgProps {
  /** Optional named slot to look up in `media_slots`. */
  slotKey?: string;
  /** Bundled/base asset used when no slot is bound. */
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
  /** Set false to disable the neutral skeleton (rarely needed). */
  skeleton?: boolean;
}

interface Shown {
  src: string;
  srcSet?: string;
}

/** Preload a source (respecting srcSet/sizes) and resolve when decoded. */
function preload(src: string, srcSet?: string, sizes?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error("empty src"));
      return;
    }
    const img = new Image();
    if (srcSet) img.srcset = srcSet;
    if (sizes) img.sizes = sizes;
    img.src = src;
    const done = () => {
      if (typeof img.decode === "function") {
        img.decode().then(() => resolve()).catch(() => resolve());
      } else {
        resolve();
      }
    };
    if (img.complete && img.naturalWidth > 0) {
      done();
      return;
    }
    img.onload = done;
    img.onerror = () => reject(new Error(`failed to load ${src}`));
  });
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
  skeleton = true,
  ...imgProps
}: SmartImageProps) => {
  const { media, loading: slotLoading } = useMediaSlot(slotKey);

  // Target source resolved from the single source of truth.
  const target: Shown | null = useMemo(() => {
    if (media?.url) return { src: media.url, srcSet: media.srcSet || undefined };
    // A slot that is still resolving must NOT paint the bundled image yet,
    // otherwise an outdated photo would flash before the managed one.
    if (slotKey && slotLoading) return null;
    return { src: fallback, srcSet: (imgProps.srcSet as string | undefined) || undefined };
  }, [media?.url, media?.srcSet, slotKey, slotLoading, fallback, imgProps.srcSet]);

  const [shown, setShown] = useState<Shown | null>(null);
  const shownRef = useRef<Shown | null>(null);
  shownRef.current = shown;

  useEffect(() => {
    if (!target?.src) return;
    if (shownRef.current?.src === target.src && shownRef.current?.srcSet === target.srcSet) return;
    let active = true;
    preload(target.src, target.srcSet, sizes)
      .then(() => {
        if (active) setShown(target);
      })
      .catch((err) => {
        // Keep the last valid image; never fall back to an unrelated photo.
        console.error("[SmartImage] image failed to load", err);
      });
    return () => {
      active = false;
    };
  }, [target?.src, target?.srcSet, sizes]);

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

  const { srcSet: _ignoredSrcSet, ...restImgProps } = imgProps;

  const placeholder =
    skeleton && !shown ? (
      <div
        className={`${className ?? ""} bg-[#0F0F0F]/[0.06] animate-pulse`}
        style={aspectRatio ? undefined : { aspectRatio: undefined, ...style }}
        aria-hidden="true"
      />
    ) : null;

  const img = shown ? (
    <img
      src={shown.src}
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
      {...restImgProps}
      srcSet={shown.srcSet}
    />
  ) : (
    placeholder
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
