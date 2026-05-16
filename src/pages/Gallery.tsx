import SEO from "@/components/SEO";
import heroPalace from "@/assets/hero-palace.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import cityPalace from "@/assets/city-palace.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import localMarket from "@/assets/local-market.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import rajasthaniFood from "@/assets/rajasthani-food.jpg";
import villageTour from "@/assets/village-tour.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";

const images = [
  { src: heroPalace, alt: "Rajasthan palace at sunset", cat: "Palaces" },
  { src: amberFort, alt: "Amber Fort Jaipur", cat: "Forts" },
  { src: cityPalace, alt: "Jaipur City Palace", cat: "Palaces" },
  { src: hawaMahal, alt: "Hawa Mahal Palace of Winds", cat: "Palaces" },
  { src: desertSafari, alt: "Camel desert safari", cat: "Desert" },
  { src: udaipurLake, alt: "Udaipur Lake Palace", cat: "Palaces" },
  { src: localMarket, alt: "Colorful Jaipur market", cat: "Markets" },
  { src: culturalDance, alt: "Rajasthani folk dance", cat: "Culture" },
  { src: jaisalmerFort, alt: "Jaisalmer golden fort", cat: "Forts" },
  { src: royalTour, alt: "Royal palace interior", cat: "Palaces" },
  { src: rajasthaniFood, alt: "Traditional Rajasthani cuisine", cat: "Culture" },
  { src: villageTour, alt: "Rajasthan village life", cat: "Culture" },
];

const Gallery = () => (
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
          <LuxAnchorBtn href="https://wa.me/919461069858" external variant="outline">Plan My Journey</LuxAnchorBtn>
        </>
      }
    />

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-sm group cursor-pointer relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="lux-eyebrow text-[10px]">{img.cat}</span>
                  <p className="font-serif text-[#FFF8F0] text-base mt-1">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LuxCtaBand
      image={heroPalace}
      eyebrow="Begin"
      title={<>Live The <span className="text-[#C9A84C]">Frame</span></>}
      subtitle="Step into the moments — privately curated by our Rajasthan specialists."
      primary={{ label: "Plan My Journey", to: "/contact" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919461069858", external: true }}
    />
  </main>
);

export default Gallery;
