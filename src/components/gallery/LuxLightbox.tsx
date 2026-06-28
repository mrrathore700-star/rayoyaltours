import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/hooks/useGalleryImages";

interface LuxLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

const LuxLightbox = ({ images, index, onClose, onIndexChange }: LuxLightboxProps) => {
  const touchStart = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const img = images[index];

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onIndexChange]);

  if (!img) return null;

  const prev = () => onIndexChange((index - 1 + images.length) % images.length);
  const next = () => onIndexChange((index + 1) % images.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt_text || img.title || "Gallery image"}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close gallery"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      <div
        className="relative max-w-[92vw] max-h-[88vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart.current == null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
          touchStart.current = null;
        }}
      >
        <img
          src={img.url}
          alt={img.alt_text || img.title}
          className={`max-w-[92vw] max-h-[78vh] object-contain rounded-xl shadow-2xl transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
        {(img.title || img.location) && (
          <div className="mt-4 text-center text-white/90 px-4">
            {img.title && <p className="font-serif text-base md:text-lg">{img.title}</p>}
            {img.location && (
              <p className="font-display tracking-[0.2em] uppercase text-[10px] md:text-xs text-[#C9A84C] mt-1">
                {img.location}
              </p>
            )}
          </div>
        )}
        <p className="mt-2 text-white/40 text-xs">{index + 1} / {images.length}</p>
      </div>
    </div>
  );
};

export default LuxLightbox;
