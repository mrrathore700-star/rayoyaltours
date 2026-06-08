import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroPalace from "@/assets/hero-palace.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import localMarket from "@/assets/local-market.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import TourCard from "@/components/TourCard";
import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxTrustStrip from "@/components/luxury/LuxTrustStrip";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import { tours } from "@/data/tours";

const testimonials = [
  { name: "Sophie L.", origin: "London, UK", text: "From the moment we landed in Jaipur to our last sunset in Udaipur, every detail felt curated for us. A true private journey.", rating: 5 },
  { name: "Marcus W.", origin: "Berlin, Germany", text: "The desert nights in Jaisalmer were unforgettable. Our specialist understood exactly the kind of slow, quiet travel we wanted.", rating: 5 },
  { name: "Aiko T.", origin: "Tokyo, Japan", text: "Twenty years of local knowledge shows. Palaces, kitchens, artisans — places no guidebook would have found us.", rating: 5 },
];

const galleryImages = [
  { src: culturalDance, alt: "Rajasthani folk dance performance" },
  { src: localMarket, alt: "Colorful Jaipur bazaar" },
  { src: desertSafari, alt: "Desert camel safari at sunset" },
  { src: jaisalmerFort, alt: "Jaisalmer Golden Fort" },
];

const Index = () => {
  return (
    <main className="lux-cream-bg">
      <SEO
        title="Heritage Jaipur Travels | Private Rajasthan Journeys"
        description="A boutique Rajasthan travel atelier crafting cinematic private journeys — palaces, deserts, wildlife and culture, designed by Jaipur-born specialists for over 20 years."
        path="/"
      />

      <LuxHero
        image={heroPalace}
        eyebrow="A Boutique Rajasthan Atelier"
        title={<>Royal Rajasthan, <span className="text-[#C9A84C]">Privately</span> Reimagined</>}
        subtitle="Cinematic, slow, and entirely your own — journeys through palaces, deserts and living culture, crafted by Jaipur locals for over twenty years."
        height="tall"
        actions={
          <>
            <LuxLinkBtn to="/contact" variant="gold">Begin Your Journey</LuxLinkBtn>
            <LuxAnchorBtn href="https://wa.me/919887688843?text=Hi!%20I%20want%20to%20plan%20my%20Rajasthan%20trip" external variant="outline">Speak To A Specialist</LuxAnchorBtn>
          </>
        }
      />

      <LuxTrustStrip />

      {/* Signature Journeys */}
      <section className="lux-cream-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Signature Journeys"
            title="Handcrafted Itineraries Across Rajasthan"
            intro="From the marble corridors of Udaipur to the dunes beyond Jaisalmer — each route is shaped around your pace, taste and curiosities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 6).map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
          </div>
          <div className="text-center mt-14">
            <LuxLinkBtn to="/packages" variant="outline">
              View All Journeys <ArrowRight className="h-4 w-4" />
            </LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* Heritage Experience Banner */}
      <LuxCtaBand
        image={culturalDance}
        eyebrow="Beyond the Guidebook"
        title={<>Live the Royal <span className="text-[#C9A84C]">Rajasthani</span> Experience</>}
        subtitle="Camel rides through golden dunes, candlelit dinners inside ancient forts, mornings with master artisans. The Rajasthan most travelers only read about."
        primary={{ label: "Explore Experiences", to: "/experiences" }}
        secondary={{ label: "Speak To A Specialist", href: "https://wa.me/919887688843", external: true }}
      />

      {/* Gallery Preview */}
      <section className="py-24 md:py-32 lux-cream-bg">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="A Glimpse"
            title="Moments From The Journey"
            intro="Quiet portraits of Rajasthan as we know it — warmer, slower, and lit from within."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <Link
                key={i}
                to="/gallery"
                className="relative overflow-hidden aspect-square group cursor-pointer rounded-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <LuxLinkBtn to="/gallery" variant="outline">View Full Gallery <ArrowRight className="h-4 w-4" /></LuxLinkBtn>
          </div>
        </div>
      </section>

      <LuxGoogleReviews />

      {/* Testimonials */}
      <section className="py-24 md:py-32 lux-black-bg text-[#FFF8F0]">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            tone="dark"
            eyebrow="From Our Travellers"
            title="Stories From Around The World"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 md:p-10 border border-[#C9A84C]/25 rounded-sm bg-[#FFF8F0]/[0.03] backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
                <p className="font-serif italic text-lg leading-relaxed text-[#FFF8F0]/90 mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-display text-base text-[#C9A84C]">{t.name}</p>
                  <p className="text-xs tracking-[0.18em] uppercase text-[#FFF8F0]/55 mt-1">{t.origin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <LuxCtaBand
        image={heroPalace}
        eyebrow="Begin"
        title={<>Begin Your <span className="text-[#C9A84C]">Rajasthan</span> Story</>}
        subtitle="Tell us how you love to travel — we'll quietly craft the rest."
        primary={{ label: "Plan My Journey", to: "/contact" }}
        secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919887688843", external: true }}
      />

    </main>
  );
};

export default Index;
