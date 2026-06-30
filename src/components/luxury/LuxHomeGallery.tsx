import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SmartImage from "@/components/media/SmartImage";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxLinkBtn } from "@/components/luxury/LuxButton";
import { useMediaAssets } from "@/hooks/useMediaAssets";
import culturalDance from "@/assets/cultural-dance.jpg";
import localMarket from "@/assets/local-market.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";

/**
 * Homepage Gallery strip.
 *
 * Phase 2: reads images flagged `featured_homepage` from the central media
 * library. When the library has fewer than 4 featured images, the remaining
 * tiles fall back to bundled assets — so the homepage looks identical to
 * before until an admin promotes images.
 */

const fallbackTiles = [
  { src: culturalDance, alt: "Rajasthani folk dance performance" },
  { src: localMarket, alt: "Colorful Jaipur bazaar" },
  { src: desertSafari, alt: "Desert camel safari at sunset" },
  { src: jaisalmerFort, alt: "Jaisalmer Golden Fort" },
];

const LuxHomeGallery = () => {
  const { assets } = useMediaAssets({ flag: "featured_homepage", limit: 4 });

  const tiles = fallbackTiles.map((f, i) => {
    const a = assets[i];
    return a
      ? { src: a.url, alt: a.alt_text || a.title || f.alt }
      : { src: f.src, alt: f.alt };
  });

  return (
    <section className="py-24 md:py-32 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Gallery"
          title="Photos from Our Recent Trips"
          intro="A few photos from recent Rajasthan trips planned by our Jaipur team."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tiles.map((img, i) => (
            <Link
              key={i}
              to="/gallery"
              className="relative overflow-hidden aspect-square group cursor-pointer rounded-sm"
            >
              <SmartImage
                fallback={img.src}
                alt={img.alt}
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
