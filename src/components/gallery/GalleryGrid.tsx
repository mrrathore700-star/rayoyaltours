import { useState } from "react";

import SmartImage from "@/components/media/SmartImage";
import LuxLightbox from "./LuxLightbox";
import type { GalleryImage } from "@/hooks/useGalleryImages";

interface Props {
  images: GalleryImage[];
}

/**
 * A single uniform tile ratio keeps every row the same height, so the grid
 * never rearranges and no blank space appears under shorter images. The real
 * intrinsic dimensions are still passed to the <img> so the browser can size
 * and prioritise correctly; `object-cover` fills the reserved box.
 */
const TILE_RATIO = "4 / 3";

/** Above-the-fold tiles load eagerly; everything else is lazy. */
const EAGER_COUNT = 3;


const GalleryTile = ({
  img,
  eager,
  onOpen,
}: {
  img: GalleryImage;
  eager: boolean;
  onOpen: () => void;
}) => {
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full overflow-hidden rounded-2xl bg-[#0F0F0F]/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-500 cursor-pointer text-left"
      style={{ aspectRatio: TILE_RATIO }}
      aria-label={`Open ${img.alt_text || img.title || "gallery image"}`}
    >
      {/* Loading/atomic-swap/error behaviour lives in SmartImage. */}
      <SmartImage
        fallback={img.url}
        srcSet={img.srcSet || undefined}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        alt={img.alt_text || img.title}
        width={img.width ?? undefined}
        height={img.height ?? undefined}
        priority={eager}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />


      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {(img.title || img.location) && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {img.location && (
            <span className="lux-eyebrow text-[10px] text-[#C9A84C]">{img.location}</span>
          )}
          {img.title && (
            <p className="font-serif text-[#FFF8F0] text-base md:text-lg mt-1 leading-snug">
              {img.title}
            </p>
          )}
        </div>
      )}
    </button>
  );
};

const GalleryGrid = ({ images }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className="text-center font-serif italic text-[#0F0F0F]/60 py-16">
        No images yet. Add your first photographs from the admin panel.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {images.map((img, i) => (
          <GalleryTile
            key={img.id}
            img={img}
            eager={i < EAGER_COUNT}
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </div>

      {openIndex !== null && (
        <LuxLightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
};

export default GalleryGrid;
