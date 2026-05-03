import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import heroPalace from "@/assets/hero-palace.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import villageTour from "@/assets/village-tour.jpg";
import rajasthaniFood from "@/assets/rajasthani-food.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import localMarket from "@/assets/local-market.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import luxuryCar from "@/assets/luxury-car.jpg";

const categories = [
  {
    icon: "🐪",
    title: "Desert & Adventure",
    image: desertSafari,
    items: [
      "Camel safari across the golden Thar dunes",
      "Luxury desert camp with folk music & cultural night",
      "Jeep safari through remote desert villages",
      "Sandboarding on rolling sand dunes",
      "Sunset views & magical desert stargazing",
    ],
  },
  {
    icon: "🐯",
    title: "Wildlife & Nature",
    image: ranthamboreTiger,
    items: [
      "Ethical elephant interaction at Dera Amer",
      "Leopard safari in Jhalana & Jawai hills",
      "Tiger safari in Ranthambore National Park",
      "Bird watching at Keoladeo & Mansagar Lake",
      "Horse riding through royal countryside",
    ],
  },
  {
    icon: "👑",
    title: "Royal & Heritage",
    image: royalTour,
    items: [
      "Stay in authentic Rajput palace hotels",
      "Royal candlelight dinner with traditional thaal",
      "Vintage car ride through pink city heritage lanes",
      "Fort tours with personal storytelling guides",
      "Maharaja & Maharani costume photoshoot",
    ],
  },
  {
    icon: "🍛",
    title: "Food & Culture",
    image: rajasthaniFood,
    items: [
      "Cooking class with a local Rajasthani family",
      "Old city street food walking tour",
      "Traditional thali — dal baati churma feast",
      "Authentic village lunch on a charpai",
      "Aromatic spice market discovery tour",
    ],
  },
  {
    icon: "🎨",
    title: "Art & Craft Learning",
    image: culturalDance,
    items: [
      "Hands-on block printing workshop in Bagru",
      "Blue pottery making with master artisans",
      "Royal turban (safa) tying experience",
      "Bridal mehendi & henna art session",
      "Folk dance and puppet making workshop",
    ],
  },
  {
    icon: "🎉",
    title: "Festivals & Events",
    image: jaisalmerFort,
    items: [
      "Pushkar Camel Fair — colours, camels & culture",
      "Jaisalmer Desert Festival under the stars",
      "Holi celebrations in royal courtyards",
      "Teej & Gangaur — women's heritage festivals",
      "Diwali in Jaipur — the city of a million lamps",
    ],
  },
  {
    icon: "🏡",
    title: "Local Lifestyle",
    image: villageTour,
    items: [
      "Guided village walk among Bishnoi communities",
      "Hands-on farming and milking experience",
      "Local bazaar shopping with a Hindi-speaking guide",
      "Cycle rickshaw ride through old Jaipur",
      "Tea with a local family in their haveli",
    ],
  },
  {
    icon: "🧘",
    title: "Wellness & Spiritual",
    image: udaipurLake,
    items: [
      "Sunrise yoga overlooking Aravalli hills",
      "Guided meditation in ancient temples",
      "Authentic Ayurvedic spa & abhyanga massage",
      "Aarti rituals at Govind Dev Ji & Galta Ji",
      "Sound healing with traditional instruments",
    ],
  },
  {
    icon: "📸",
    title: "Photography Experiences",
    image: udaipurLake,
    items: [
      "Sunrise photoshoot at Amber Fort",
      "Jodhpur blue city heritage photo walk",
      "Boat ride photography on Lake Pichola",
      "Hidden stepwells & secret havelis tour",
      "Personal photographer for your Rajasthan trip",
    ],
  },
  {
    icon: "💎",
    title: "Luxury Experiences",
    image: luxuryCar,
    items: [
      "Private chauffeur-driven luxury car tours",
      "Helicopter rides over forts & lakes",
      "Candlelight dinner under desert stars",
      "Palace on Wheels & Maharajas' Express journeys",
      "VIP custom itineraries with concierge service",
    ],
  },
];

const whyChoose = [
  { icon: "✨", title: "Authentic Experiences", desc: "Curated by locals who live the culture every day, not staged tourist shows." },
  { icon: "🧭", title: "Local Heritage Experts", desc: "20+ years of insider access to families, palaces and hidden Rajasthan." },
  { icon: "🛠️", title: "Fully Customisable", desc: "Every itinerary is tailored to your interests, pace and travel style." },
  { icon: "🛡️", title: "Safe & Reliable", desc: "Verified guides, sanitised vehicles and 24/7 on-trip English support." },
];

const waLink = (msg: string) =>
  `https://wa.me/919461069858?text=${encodeURIComponent(msg)}`;

const LiveExperiences = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Live Rajasthan Experiences",
    description:
      "Authentic and luxury Rajasthan experiences for international travellers — desert safari, royal heritage stays, cultural immersion, wildlife and wellness.",
    image: heroPalace,
    touristType: ["International tourists", "Luxury travellers", "Culture seekers"],
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
        title="Live Rajasthan Experiences | Authentic & Luxury Rajasthan Tours"
        description="Go beyond sightseeing — live Rajasthan through desert safaris, royal palace stays, cultural immersion, wildlife and luxury experiences crafted for international travellers."
        path="/live-experiences"
        image={heroPalace}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <img
          src={heroPalace}
          alt="Royal Rajasthan palace at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-xs md:text-sm uppercase tracking-widest mb-4">
            Authentic • Royal • Unforgettable
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 drop-shadow-lg">
            Live Rajasthan Experiences
          </h1>
          <p className="font-serif text-lg md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Go beyond sightseeing and experience the real Rajasthan — its people, palaces, deserts and timeless soul.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#experiences"
              className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition"
            >
              Explore Experiences
            </a>
            <a
              href={waLink("Hi! I'd like to customize a Rajasthan experience tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border-2 border-secondary text-secondary bg-background/40 backdrop-blur-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Customize Your Tour
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="More Than Sightseeing — A Way of Life"
            subtitle="Rajasthan is not a place you visit. It's a feeling you live."
          />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            For 20+ years, Heritage Jaipur Travels has helped international travellers step beyond the
            typical tourist trail and into the warm, vivid heart of <strong>authentic Rajasthan travel</strong>.
            From sleeping in a 400-year-old palace to learning block printing from a master craftsman,
            from sipping chai with a desert family to riding camels into a Thar sunset — every moment
            is designed to make you <em>feel</em> Rajasthan, not just see it.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you're seeking <strong>luxury Rajasthan experiences</strong>, raw cultural immersion,
            an epic <strong>desert safari in India</strong>, or a quiet spiritual retreat — we craft it
            personally for you.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {categories.map((cat, i) => (
              <article key={i} className="heritage-card group flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={cat.image}
                    alt={`${cat.title} in Rajasthan`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-2xl">
                    {cat.icon}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {cat.title}
                  </h2>
                  <ul className="space-y-2 mb-5 flex-1">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-secondary mt-1">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Hi! I'm interested in ${cat.title} experiences in Rajasthan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-md heritage-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
                  >
                    Enquire About {cat.title}
                  </a>
                </div>
              </article>
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

      {/* Marketplace strip */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif italic text-lg md:text-xl text-muted-foreground">
            "Heritage Jaipur Travels turned our 10-day Rajasthan trip into the journey of a lifetime —
            every detail, every smile, every sunset perfectly arranged."
          </p>
          <p className="mt-3 text-sm text-foreground font-semibold">— Sophie & Marc, France</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <img
          src={localMarket}
          alt="Vibrant Rajasthan local market"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/60" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Customize Your Rajasthan Experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Tell us your travel dates, interests and dream moments. Our local heritage experts will
            craft a personal itinerary — completely free, with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink("Hi! I'd like a free quote for a customised Rajasthan experience tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              💬 Get Quote on WhatsApp
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919461069858"
              className="px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              📞 +91 94610 69858
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LiveExperiences;
