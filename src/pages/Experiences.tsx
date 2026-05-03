import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/data/experiences";
import heroPalace from "@/assets/hero-palace.jpg";
import localMarket from "@/assets/local-market.jpg";

const waLink = (msg: string) =>
  `https://wa.me/919461069858?text=${encodeURIComponent(msg)}`;

const whyChoose = [
  { icon: "🏆", title: "20+ Years Experience", desc: "Two decades crafting Rajasthan journeys for guests from over 40 countries." },
  { icon: "🧭", title: "Local Heritage Experts", desc: "Born and raised in Rajasthan — insider access to families, palaces and hidden gems." },
  { icon: "🌍", title: "Trusted by Travellers", desc: "Hundreds of 5-star reviews from international travellers, year after year." },
  { icon: "✨", title: "Custom Itineraries", desc: "Every experience tailored to your interests, pace and travel style." },
];

const Experiences = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Live Rajasthan Experiences – Beyond Sightseeing",
    description:
      "Premium handcrafted Rajasthan experiences for international travellers — desert safaris, royal heritage stays, wildlife, food, art workshops, festivals and luxury journeys.",
    image: heroPalace,
    touristType: ["International tourists", "Luxury travellers", "Culture seekers", "Honeymooners"],
    provider: {
      "@type": "TravelAgency",
      name: "Heritage Jaipur Travels",
      telephone: "+91-9461069858",
      email: "info@heritagejaipurtravels.com",
      url: "https://www.heritagejaipurtravels.com",
    },
  };

  return (
    <main className="pt-16 md:pt-20">
      <SEO
        title="Live Rajasthan Experiences – Beyond Sightseeing | Heritage Jaipur Travels"
        description="Don't just visit Rajasthan — live it. Handcrafted cultural, royal, wildlife, food and luxury experiences for international travellers. 50+ authentic experiences with local experts."
        path="/experiences"
        image={heroPalace}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        <img
          src={heroPalace}
          alt="Royal Rajasthan palace at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/85" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-xs md:text-sm uppercase tracking-widest mb-4">
            Beyond Sightseeing • Authentic • Royal
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 drop-shadow-lg">
            Don't Just Visit Rajasthan — Live It
          </h1>
          <p className="font-serif text-lg md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Handcrafted cultural, royal and adventure experiences designed for global travellers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#experiences"
              className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition"
            >
              Explore Experiences
            </a>
            <a
              href={waLink("Hi! I'd like to plan my Rajasthan journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border-2 border-secondary text-secondary bg-background/40 backdrop-blur-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Rajasthan Is a Feeling — Not Just a Destination"
            subtitle="A land where deserts whisper, palaces sing and every meal tells a story"
          />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Rajasthan is not a place you simply visit — it is a vivid, living world to be experienced
            with all five senses. Sleep in a 400-year-old palace. Learn block printing from a master
            craftsman whose family has practised the art for ten generations. Ride a camel into a
            Thar sunset. Sip masala chai with a Bishnoi family beneath a neem tree. Watch wild
            leopards at dusk in Jawai. Dance Ghoomar around a desert bonfire.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Every experience below is hand-curated by our local heritage experts — designed to make
            you <em>feel</em> Rajasthan, not just see it.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="experiences" className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Signature Experience Collections"
            subtitle="Ten curated worlds of Rajasthan — choose one, mix many, or let us craft your own"
          />

          <div className="space-y-16 mt-10">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                {/* Category header */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-8">
                  <div className="md:w-1/3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg heritage-shadow">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-2xl">
                        {cat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {cat.icon} {cat.title}
                    </h2>
                    <p className="text-muted-foreground mb-5 text-base md:text-lg">{cat.intro}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                      {cat.experiences.map((exp) => (
                        <li key={exp.slug}>
                          <Link
                            to={`/experiences/${exp.slug}`}
                            className="flex items-start gap-2 text-sm text-foreground hover:text-primary transition group"
                          >
                            <span className="text-secondary mt-1">◆</span>
                            <span className="group-hover:underline underline-offset-4">{exp.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(`Hi! I'm interested in ${cat.title} in Rajasthan.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 rounded-md heritage-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
                    >
                      View {cat.title.split(" ")[0]} Experiences →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <SectionHeading
          title="Why Travellers Choose Heritage Jaipur Travels"
          subtitle="Two decades of crafting Rajasthan journeys for guests from over 40 countries"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {whyChoose.map((w, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{w.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <img
          src={localMarket}
          alt="Vibrant Rajasthan local market"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/60" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Start Planning Your Rajasthan Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Tell us your dates, interests and dream moments. Our local heritage experts will craft a
            personal itinerary — completely free, with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink("Hi! I'd like to plan a customised Rajasthan experience tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="mailto:info@heritagejaipurtravels.com?subject=Rajasthan%20Experience%20Enquiry"
              className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition"
            >
              ✉️ Email Us
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiences;
