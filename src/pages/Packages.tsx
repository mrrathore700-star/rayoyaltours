import SEO from "@/components/SEO";
import TourCard from "@/components/TourCard";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import { tours } from "@/data/tours";
import { dayToursList } from "@/data/dayTours";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
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

    {/* Private Day Tours */}
    <section className="container mx-auto px-6 pb-24 md:pb-32">
      <LuxSectionHeading
        eyebrow="Private Day Tours"
        title="Single-Day Rajasthan Experiences"
        intro="Shorter chauffeur-driven journeys — perfect to add to any itinerary or as a standalone day out."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dayToursList.map((dt) => (
          <Link
            key={dt.slug}
            to={`/day-tours/${dt.slug}`}
            className="group bg-card rounded-sm overflow-hidden heritage-shadow border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-all flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={dt.image}
                alt={dt.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
              />
              {dt.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C9A84C] text-[#0F0F0F] font-display text-[10px] tracking-[0.18em] uppercase shadow-md">
                  {dt.badge}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="lux-eyebrow mb-3">Private Day Tour</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 leading-tight">
                {dt.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#C9A84C]" /> {dt.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#C9A84C]" />
                  {dt.places.slice(0, 3).map((p) => p.name).join(" · ")}
                </span>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[#C9A84C] group-hover:text-[#6E0F1F] transition-colors">
                <span className="lux-rule-gold" /> View Day Tour
              </span>
            </div>
          </Link>
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
