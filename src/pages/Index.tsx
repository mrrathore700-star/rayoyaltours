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
import LuxWhyChoose from "@/components/luxury/LuxWhyChoose";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";
import LuxFAQ from "@/components/luxury/LuxFAQ";

import LuxJournalPreview from "@/components/luxury/LuxJournalPreview";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxCustomJourney from "@/components/luxury/LuxCustomJourney";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import { tours } from "@/data/tours";


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
        title="Heritage Jaipur Travels | Private Rajasthan Tours"
        description="A family-run Rajasthan travel company planning private tours — palaces, deserts, wildlife and culture, designed by Jaipur-based specialists for over 20 years."
        path="/"
      />

      <LuxHero
        image={heroPalace}
        eyebrow="Jaipur-Based Rajasthan Travel Company"
        title={<>Private <span className="text-[#C9A84C]">Rajasthan</span> Tours, Planned in Jaipur</>}
        subtitle="A family-run Rajasthan travel company with 20+ years of experience. Private tours, chauffeur services and customized itineraries for travelers from India and around the world."
        height="tall"
        actions={
          <>
            <LuxAnchorBtn href="https://wa.me/919887688843?text=Hi!%20I%20want%20to%20plan%20my%20Rajasthan%20trip" external variant="gold">WhatsApp Us</LuxAnchorBtn>
            <LuxLinkBtn to="/contact" variant="outline">Request A Quote</LuxLinkBtn>
          </>
        }
      />

      <LuxTrustStrip />

      {/* Signature Journeys */}
      <section className="lux-cream-bg py-24 md:py-32">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Our Tours"
            title="Popular Rajasthan Tour Packages"
            intro="A selection of our most-booked private Rajasthan tours. Every itinerary can be customized to your dates, interests and budget."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 6).map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
          </div>
          <div className="text-center mt-14">
            <LuxLinkBtn to="/packages" variant="outline">
              View All Tour Packages <ArrowRight className="h-4 w-4" />
            </LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* Heritage Experience Banner */}
      <LuxCtaBand
        image={culturalDance}
        eyebrow="Experiences"
        title={<>Cultural & Heritage <span className="text-[#C9A84C]">Experiences</span> in Rajasthan</>}
        subtitle="Heritage walks, camel safaris, village visits, cooking sessions, evening folk performances — add experiences to any tour."
        primary={{ label: "View Experiences", to: "/experiences" }}
        secondary={{ label: "Speak With Our Team", href: "https://wa.me/919887688843", external: true }}
      />


      {/* Gallery Preview */}
      <section className="py-24 md:py-32 lux-cream-bg">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Gallery"
            title="Photos from Our Recent Trips"
            intro="A few photos from recent Rajasthan trips planned by our Jaipur team."
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

      <LuxWhyChoose />

      <LuxJournalPreview />

      <LuxFAQ />





      <LuxCustomJourney />

      {/* Final CTA */}
      <LuxCtaBand
        image={heroPalace}
        eyebrow="Start Planning"
        title={<>Plan Your <span className="text-[#C9A84C]">Rajasthan</span> Trip With Our Jaipur Team</>}
        subtitle="Share your travel dates, destinations and what you'd like to do — we'll send a personalized plan and quote."
        primary={{ label: "Request A Custom Itinerary", to: "/contact" }}
        secondary={{ label: "WhatsApp Our Jaipur Team", href: "https://wa.me/919887688843", external: true }}
      />

    </main>
  );
};

export default Index;
