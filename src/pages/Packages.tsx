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
      description="Explore our curated private Rajasthan journeys — Golden Triangle, Jaipur Heritage, Jaisalmer Desert Safari, Udaipur Lake Tour and more. Private journeys designed by Jaipur specialists."
      path="/packages"
    />

    <LuxHero
      image={royalTour}
      eyebrow="Signature Journeys"
      title={<>Curated <span className="text-[#C9A84C]">Rajasthan</span> Itineraries</>}
      subtitle="Each journey is private, paced to you, and shaped by twenty years of intimate Rajasthan knowledge."
      actions={
        <>
          <LuxLinkBtn to="/contact" variant="gold">Design My Journey</LuxLinkBtn>
          <LuxAnchorBtn href="https://wa.me/919461069858" external variant="outline">Speak With A Specialist</LuxAnchorBtn>
        </>
      }
    />

    <section className="container mx-auto px-6 py-24 md:py-32">
      <LuxSectionHeading
        eyebrow="Our Collection"
        title="Private Rajasthan Journeys"
        intro="Our signature journeys — tailor any of them, or craft something entirely your own with our specialists."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.slug} {...tour} />
        ))}
      </div>
    </section>

    <LuxCtaBand
      image={royalTour}
      eyebrow="Bespoke"
      title={<>Craft Your Private <span className="text-[#C9A84C]">Rajasthan</span> Experience</>}
      subtitle="Looking for something different? We design entirely bespoke itineraries — palace stays, desert nights, wildlife trails."
      primary={{ label: "Plan My Journey", to: "/contact" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919461069858", external: true }}
    />
  </main>
);

export default Packages;
