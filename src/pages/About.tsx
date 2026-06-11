import { Clock, Users, MapPin, Sparkles, Headphones, Route } from "lucide-react";
import SEO from "@/components/SEO";
import heroPalace from "@/assets/hero-palace.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxMeetFounder from "@/components/luxury/LuxMeetFounder";
import LuxMeetTeam from "@/components/luxury/LuxMeetTeam";
import LuxWhyTrust from "@/components/luxury/LuxWhyTrust";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";

const trustCards = [
  { icon: Clock, title: "20+ Years Experience", desc: "Two decades guiding travellers across Rajasthan." },
  { icon: Users, title: "1000+ Happy Guests", desc: "Families and travellers from over 40 countries." },
  { icon: Route, title: "Private Rajasthan Tours", desc: "Never shared. Always at your pace, your rhythm." },
  { icon: MapPin, title: "Local Expertise", desc: "Born-and-raised Rajasthani drivers and guides." },
  { icon: Sparkles, title: "Personalised Itineraries", desc: "Every journey shaped around your taste and curiosities." },
  { icon: Headphones, title: "24/7 Travel Support", desc: "A real person on WhatsApp, day or night." },
];

const About = () => (
  <main className="lux-cream-bg">
    <SEO
      title="About Us | Heritage Jaipur Travels"
      description="Meet Kailash and the Heritage Jaipur Travels family — a local Rajasthan travel company built on relationships, trust, and over twenty years of experience."
      path="/about"
    />

    <LuxHero
      image={heroPalace}
      eyebrow="Our House"
      title={<>About <span className="text-[#C9A84C]">Heritage Jaipur Travels</span></>}
      subtitle="A local Rajasthan travel company built on relationships, trust, and over twenty years of experience."
    />

    {/* Meet Kailash */}
    <LuxMeetFounder />

    {/* Meet Our Team */}
    <LuxMeetTeam />

    {/* Why Travelers Trust Us — trust cards */}
    <section className="py-24 md:py-32" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Why Travellers Trust Us"
          title={<>The Quiet Reasons People <span className="text-[#C9A84C]">Come Back</span></>}
          intro="Twenty years of journeys, distilled into six simple promises we keep on every trip."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {trustCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-8 bg-white/70 backdrop-blur-sm border border-[#C9A84C]/25 rounded-sm text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A84C]/60 hover:shadow-[0_20px_40px_-20px_rgba(201,168,76,0.45)]"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#6E0F1F] text-[#C9A84C] mb-5 transition-transform duration-500 group-hover:scale-110">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-[#6E0F1F] font-semibold mb-2">{title}</h3>
              <p className="font-serif text-[15px] leading-relaxed text-[#0F0F0F]/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Trust Us — pillars + guest quotes */}
    <LuxWhyTrust />

    {/* Our Philosophy */}
    <section className="py-24 md:py-32 lux-black-bg text-[#FFF8F0]">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <LuxSectionHeading
          tone="dark"
          eyebrow="Our Philosophy"
          title={<>Travel Slowly. <span className="text-[#C9A84C]">Travel Deeply.</span></>}
        />
        <div className="font-serif text-lg md:text-xl leading-[1.9] text-[#FFF8F0]/80 space-y-6 text-left md:text-center">
          <p>
            Rajasthan is not a checklist. It is a slow unfolding — of courtyards opened
            quietly at sunrise, of conversations with artisans whose hands have worked the
            same craft for six generations, of evenings on a rooftop where the only sound
            is the call to prayer drifting across the old city.
          </p>
          <p>
            We design journeys that leave room for these moments. Fewer monuments, more
            mornings. Fewer transfers, more time. The Rajasthan we love is the one you'll
            remember in ten years — not the one you'll forget by the next flight.
          </p>
          <p className="font-display italic text-[#C9A84C] text-xl md:text-2xl">
            "Travel with us, and travel with friends."
          </p>
        </div>
      </div>
    </section>

    {/* Reviews Preview */}
    <LuxGoogleReviews />

    {/* Final CTA */}
    <LuxCtaBand
      image={heroPalace}
      eyebrow="Begin"
      title={<>Let's Plan Your <span className="text-[#C9A84C]">Rajasthan</span> Journey</>}
      subtitle="Tell us your dates and rhythm — Kailash and the team will quietly shape the rest."
      primary={{ label: "Contact Us", to: "/contact" }}
      secondary={{ label: "WhatsApp Us", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default About;
