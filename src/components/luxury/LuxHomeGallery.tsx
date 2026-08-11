import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SmartImage from "@/components/media/SmartImage";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxLinkBtn } from "@/components/luxury/LuxButton";
import { useMediaAssets } from "@/hooks/useMediaAssets";

/**
 * Homepage Gallery strip.
 *
 * Reads images flagged `featured_homepage` from the central media library —
 * the single source of truth. There are deliberately NO bundled stock
 * fallbacks: while the library loads (or if fewer images are featured), a
 * neutral skeleton is shown instead, so an outdated photo can never flash.
 */

const TILE_COUNT = 4;

const LuxHomeGallery = () => {
  const { assets, loading } = useMediaAssets({ flag: "featured_homepage", limit: TILE_COUNT });

  return (
    <section className="py-20 md:py-24 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Gallery"
          title="Photos from Our Recent Trips"
          intro="A few photos from recent Rajasthan trips planned by our Jaipur team."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {loading || assets.length === 0
            ? Array.from({ length: TILE_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm bg-[#0F0F0F]/[0.06] animate-pulse"
                  aria-hidden="true"
                />
              ))
            : assets.map((a) => (
                <Link
                  key={a.id}
                  to="/gallery"
                  className="relative overflow-hidden aspect-square group cursor-pointer rounded-sm"
                >
                  <SmartImage
                    fallback={a.url}
                    srcSet={a.srcSet || undefined}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    alt={a.alt_text || a.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                </Link>
              ))}
        </div>
        <div className="text-center mt-12">
          <LuxLinkBtn to="/gallery" variant="outline">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </LuxLinkBtn>
        </div>
      </div>
    </section>
  );
};

export default LuxHomeGallery;
