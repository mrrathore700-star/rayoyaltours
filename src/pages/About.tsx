import SEO from "@/components/SEO";
import heroPalace from "@/assets/hero-palace.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxMeetFounder from "@/components/luxury/LuxMeetFounder";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";


const About = () => (
  <main className="lux-cream-bg">
    <SEO
      title="About Us | Heritage Jaipur Travels"
      description="Meet Kailash and the Heritage Jaipur Travels family — a local Rajasthan travel company built on relationships, trust, and over twenty years of experience."
      path="/about"
    />

    <LuxHero
      image={heroPalace}
      eyebrow="About Us"
      title={<>About <span className="text-[#C9A84C]">Heritage Jaipur Travels</span></>}
      subtitle="A Jaipur-based, family-run travel company planning private Rajasthan tours and chauffeur services for over 20 years."
    />

    {/* Meet Kailash */}
    <div id="meet-kailash" className="scroll-mt-32">
      <LuxMeetFounder />
    </div>

    <LuxInlineCta
      tone="cream"
      eyebrow="Speak With Kailash"
      heading={<>Have a question? Talk to Kailash directly.</>}
      primary={{ label: "Talk To Kailash", href: "https://wa.me/919887688843?text=Namaste%20Kailash!%20I'd%20like%20to%20plan%20a%20Rajasthan%20tour.", external: true, icon: "wa" }}
      secondary={{ label: "WhatsApp Us", href: "https://wa.me/919887688843", external: true, icon: "wa" }}
      compact
    />


    {/* Our Philosophy */}
    <section id="our-story" className="py-24 md:py-32 lux-black-bg text-[#FFF8F0] scroll-mt-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <LuxSectionHeading
          tone="dark"
          eyebrow="How We Work"
          title={<>Comfortable Travel, <span className="text-[#C9A84C]">Honestly</span> Planned</>}
        />
        <div className="font-serif text-lg md:text-xl leading-[1.9] text-[#FFF8F0]/80 space-y-6 text-left md:text-center">
          <p>
            We plan private Rajasthan tours the way we would plan a trip for a friend visiting
            us in Jaipur. Comfortable cars, experienced drivers, hotels you can actually relax in,
            and an itinerary that has room to breathe.
          </p>
          <p>
            Every trip is customized. We ask about your dates, how you like to travel, what you
            want to see, and what you'd rather skip. Then we suggest a route that makes sense —
            with honest advice on hotels, distances and timings.
          </p>
          <p>
            We don't oversell. If a city needs only one night, we'll say so. If a longer drive
            isn't worth it, we'll tell you. The goal is a trip you enjoy and would recommend to
            someone else.
          </p>
          <p className="font-display italic text-[#C9A84C] text-xl md:text-2xl">
            "Real local knowledge, honest advice, and people you can reach when you need them."
          </p>
        </div>
      </div>
    </section>

    {/* Reviews Preview */}
    <LuxGoogleReviews />

    <LuxInlineCta
      tone="white"
      eyebrow="Plan Your Trip"
      heading={<>Loved by travelers — plan your Rajasthan tour with us.</>}
      primary={{ label: "Plan Your Rajasthan Tour", to: "/contact", icon: "send" }}
      secondary={{ label: "Request Quote", href: "https://wa.me/919887688843?text=Hi!%20I'd%20like%20a%20quote%20for%20a%20Rajasthan%20tour.", external: true, icon: "wa" }}
      compact
    />

    {/* Final CTA */}
    <LuxCtaBand
      image={heroPalace}
      eyebrow="Start Planning"
      title={<>Plan Your <span className="text-[#C9A84C]">Rajasthan</span> Tour With Us</>}
      subtitle="Share your travel dates and what you'd like to see — our Jaipur team will put together a plan."
      primary={{ label: "Contact Our Jaipur Team", to: "/contact" }}
      secondary={{ label: "WhatsApp Us", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default About;
