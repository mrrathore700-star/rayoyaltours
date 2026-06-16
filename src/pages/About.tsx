import SEO from "@/components/SEO";
import heroPalace from "@/assets/hero-palace.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxMeetFounder from "@/components/luxury/LuxMeetFounder";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";


const About = () => (
  <main className="lux-cream-bg">
    <SEO
      title="About Us | Heritage Jaipur Travels"
      description="Meet Kailash and the Heritage Jaipur Travels family — a local Rajasthan travel company built on relationships, trust, and over twenty years of experience."
      path="/about"
    />

    <LuxHero
      image={heroPalace}
      eyebrow="Our Story"
      title={<>About <span className="text-[#C9A84C]">Heritage Jaipur Travels</span></>}
      subtitle="A family-run Rajasthan travel company built on trust, local knowledge and over twenty years of experience."
    />

    {/* Meet Kailash */}
    <div id="meet-kailash" className="scroll-mt-32">
      <LuxMeetFounder />
    </div>


    {/* Our Philosophy */}
    <section id="our-story" className="py-24 md:py-32 lux-black-bg text-[#FFF8F0] scroll-mt-32">
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
      subtitle="Share your travel dates and interests — Kailash and the team will plan the rest."
      primary={{ label: "Contact Us", to: "/contact" }}
      secondary={{ label: "WhatsApp Us", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default About;
