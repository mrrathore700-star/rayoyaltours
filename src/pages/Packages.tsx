import SEO from "@/components/SEO";
import TourCard from "@/components/TourCard";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import { tours } from "@/data/tours";
import royalTour from "@/assets/royal-tour.jpg";

const Packages = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Rajasthan Tour Packages | Private Journeys by Heritage Jaipur Travels"
      description="Explore our private Rajasthan tours — Golden Triangle, Jaipur Heritage, Jaisalmer Desert Safari, Udaipur Lake Tour and more. Planned by Jaipur-based specialists."
      path="/packages"
    />

    <LuxHero
      image={royalTour}
      eyebrow="Signature Journeys"
      title={<>Private <span className="text-[#C9A84C]">Rajasthan</span> Itineraries</>}
      subtitle="Each journey is private, paced to you, and built on twenty years of local Rajasthan knowledge."
      actions={
        <>
          <LuxLinkBtn to="/contact" variant="gold">Plan Your Journey</LuxLinkBtn>
          <LuxAnchorBtn href="https://wa.me/919887688843" external variant="outline">Speak With A Specialist</LuxAnchorBtn>
        </>
      }
    />

    <section className="container mx-auto px-6 py-24 md:py-32">
      <LuxSectionHeading
        eyebrow="Our Collection"
        title="Private Rajasthan Journeys"
        intro="Our most-loved itineraries — adapt any of them, or design something entirely your own with our specialists."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.slug} {...tour} />
        ))}
      </div>
    </section>

    <LuxCtaBand
      image={royalTour}
      eyebrow="Custom Journeys"
      title={<>Design Your Own <span className="text-[#C9A84C]">Rajasthan</span> Itinerary</>}
      subtitle="Looking for something different? We plan fully custom itineraries — palace stays, desert nights, wildlife trails."
      primary={{ label: "Plan Your Journey", to: "/contact" }}
      secondary={{ label: "WhatsApp A Specialist", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default Packages;
