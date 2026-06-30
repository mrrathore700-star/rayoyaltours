import { useState } from "react";
import LuxLightbox from "./LuxLightbox";
import SmartImage from "@/components/media/SmartImage";
import type { GalleryImage } from "@/hooks/useGalleryImages";

interface Props {
  images: GalleryImage[];
}

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
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 md:gap-6 [&>*]:mb-5 md:[&>*]:mb-6">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-[#0F0F0F]/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-500 cursor-pointer text-left animate-fade-in"
            aria-label={`Open ${img.alt_text || img.title || "gallery image"}`}
          >
            <SmartImage
              fallback={img.url}
              alt={img.alt_text || img.title}
              className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
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
