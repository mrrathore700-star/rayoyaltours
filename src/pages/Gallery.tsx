import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { useGalleryImages } from "@/hooks/useGalleryImages";
import { GALLERY_CATEGORIES } from "@/data/galleryCategories";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import heroPalace from "@/assets/hero-palace.jpg";

const Gallery = () => {
  const { images, loading } = useGalleryImages();
  const [active, setActive] = useState<string>("All");

  const presentCategories = useMemo(() => {
    const set = new Set(images.map((i) => i.category));
    return GALLERY_CATEGORIES.filter((c) => set.has(c));
  }, [images]);

  const filtered = useMemo(
    () => (active === "All" ? images : images.filter((i) => i.category === active)),
    [images, active],
  );

  return (
    <main className="lux-cream-bg">
      <SEO
        title="Rajasthan Gallery | Forts, Palaces, Desert & Culture"
        description="A visual journey through Rajasthan — forts, palaces, desert dunes, vibrant bazaars and traditional culture, captured by Heritage Jaipur Travels."
        path="/gallery"
      />

      <LuxHero
        image={udaipurLake}
        eyebrow="Visual Journey"
        title={<>Moments From <span className="text-[#C9A84C]">Rajasthan</span></>}
        subtitle="A quiet album of palaces, deserts, dance and dust — the Rajasthan we know."
        actions={
          <>
            <LuxLinkBtn to="/experiences" variant="gold">Explore Experiences</LuxLinkBtn>
            <LuxAnchorBtn href="https://wa.me/919887688843" external variant="outline">Plan My Journey</LuxAnchorBtn>
          </>
        }
      />

      <section className="py-20 md:py-28" aria-label="Photo gallery">
        <div className="container mx-auto px-5 md:px-8" style={{ maxWidth: 1400 }}>
          {presentCategories.length > 0 && (
            <div
              className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
              role="tablist"
              aria-label="Filter gallery by category"
            >
              {(["All", ...presentCategories] as string[]).map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(cat)}
                    className={`px-4 md:px-5 py-2 rounded-full text-[11px] md:text-xs font-display tracking-[0.18em] uppercase transition-all duration-300 border ${
                      isActive
                        ? "bg-[#0F0F0F] text-[#FFF8F0] border-[#0F0F0F] shadow-sm"
                        : "bg-white text-[#0F0F0F]/70 border-[#0F0F0F]/12 hover:border-[#C9A84C] hover:text-[#0F0F0F]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}

          {loading ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 md:gap-6 [&>*]:mb-5 md:[&>*]:mb-6" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-2xl bg-[#0F0F0F]/5 animate-pulse"
                  style={{ height: 240 + ((i * 53) % 180) }}
                />
              ))}
            </div>
          ) : (
            <GalleryGrid images={filtered} />
          )}
        </div>
      </section>

      <LuxCtaBand
        image={heroPalace}
        eyebrow="Begin"
        title={<>Live The <span className="text-[#C9A84C]">Frame</span></>}
        subtitle="Scenes from recent guest journeys — handpicked by our Rajasthan team."
        primary={{ label: "Plan My Journey", to: "/contact" }}
        secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919887688843", external: true }}
      />
    </main>
  );
};

export default Gallery;
