import { ArrowRight } from "lucide-react";
import heroPalace from "@/assets/hero-palace.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import TourCard from "@/components/TourCard";
import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxTrustStrip from "@/components/luxury/LuxTrustStrip";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";
import LuxWhyChoose from "@/components/luxury/LuxWhyChoose";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";
import LuxFAQ from "@/components/luxury/LuxFAQ";
import LuxHomeGallery from "@/components/luxury/LuxHomeGallery";

import LuxJournalPreview from "@/components/luxury/LuxJournalPreview";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxCustomJourney from "@/components/luxury/LuxCustomJourney";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import { tours } from "@/data/tours";

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
            <LuxLinkBtn to="/contact" variant="gold">Plan My Rajasthan Journey</LuxLinkBtn>
            <LuxAnchorBtn href="https://wa.me/919887688843?text=Hi!%20I%20want%20to%20plan%20my%20Rajasthan%20trip" external variant="outline">WhatsApp Us</LuxAnchorBtn>
          </>
        }
      />

      <LuxTrustStrip />

      {/* Signature Journeys */}
      <section className="lux-cream-bg py-20 md:py-24">
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
      <LuxHomeGallery />

      <LuxGoogleReviews />

      <LuxWhyChoose />

      <LuxJournalPreview />

      <LuxFAQ />

      <LuxCustomJourney />

      {/* Final CTA */}
      <LuxCtaBand
        image={heroPalace}
        eyebrow="Start Planning"
        title={<>Ready To Explore <span className="text-[#C9A84C]">Rajasthan</span>?</>}
        subtitle="Share your travel dates, destinations and what you'd like to do — we'll send a personalized plan and quote."
        primary={{ label: "Plan My Rajasthan Journey", to: "/contact" }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/919887688843?text=Hi!%20I'd%20like%20a%20quote%20for%20a%20Rajasthan%20tour", external: true }}
      />

    </main>
  );
};

export default Index;
