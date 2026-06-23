import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, MapPin, Clock, Users, Shield, Heart, Award } from "lucide-react";
import SEO from "@/components/SEO";
import { categories, allExperiences, type Experience } from "@/data/experiences";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";
import heroPalace from "@/assets/hero-palace.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import jodhpurFort from "@/assets/jodhpur-fort.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import pushkarLake from "@/assets/pushkar-lake.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import rajasthaniFood from "@/assets/rajasthani-food.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import villageTour from "@/assets/village-tour.jpg";

const waLink = (msg: string) =>
  `https://wa.me/919887688843?text=${encodeURIComponent(msg)}`;

// Unique theme-level descriptions for each category (do NOT repeat experience copy)
const CATEGORY_THEME: Record<string, string> = {
  royal:
    "Heritage hotel stays, palace tours and royal dining experiences across Rajasthan's former princely cities.",
  wildlife:
    "Tiger safaris in Ranthambore, leopard tracking in Jawai and birding in Bharatpur — arranged with experienced local naturalists.",
  desert:
    "Camel safaris, desert camps and overnight stays in the Thar — from Jaisalmer and Bikaner.",
  food:
    "Rajasthani thalis, family-run kitchens, cooking classes and street-food walks in Jaipur and Jodhpur.",
  wellness:
    "Morning yoga, temple aartis and Ayurveda sessions — easy add-ons to slow down your trip.",
  art:
    "Block printing, blue pottery, puppet making and folk dance sessions with Rajasthani artisans.",
  local:
    "Bishnoi village visits, farm walks and bazaar tours — get a feel of everyday life in Rajasthan.",
  festivals:
    "Plan your trip around Pushkar Camel Fair, Holi, Teej or Gangaur — Rajasthan's biggest festivals.",
  photography:
    "Portrait sessions, golden-hour palace shoots and street photography walks with local photographers.",
};

// Curated featured slugs (most loved across categories)
const FEATURED_SLUGS = [
  "luxury-desert-camping-jaisalmer",
  "leopard-safari-jawai",
  "palace-hotel-stays-rajasthan",
  "rajasthani-cooking-class",
  "block-printing-jaipur",
  "maharaja-photoshoot",
];

const trustPillars = [
  { icon: Shield, title: "Private, Not Group Tours", text: "Every experience is hosted privately — just you, your family or your friends." },
  { icon: Users, title: "Personal Service", text: "Whether you're a couple, family or small group, you'll have one point of contact throughout." },
  { icon: MapPin, title: "Local Rajasthan Guides", text: "Our guides are from Rajasthan and have years of experience showing visitors around." },
  { icon: Sparkles, title: "Tried & Tested", text: "We only recommend experiences our team has personally checked." },
  { icon: Heart, title: "Real Cultural Contact", text: "Meet artisans, cooks and families — not just monuments." },
  { icon: Award, title: "20+ Years in Rajasthan Travel", text: "Trusted by travelers from India and over 30 countries." },
];

const STYLES = [
  { title: "Heritage & Palaces", text: "Stay in heritage hotels, tour royal palaces and visit Rajasthan's historic forts.", image: royalTour },
  { title: "Food & Cooking", text: "Family-run kitchens, cooking classes, street-food walks and spice market visits.", image: rajasthaniFood },
  { title: "Arts & Crafts", text: "Block printing, blue pottery, puppet making and turban tying with local artisans.", image: culturalDance },
  { title: "Wildlife & Safaris", text: "Tiger safaris in Ranthambore, leopard tracking in Jawai and birding in Bharatpur.", image: ranthamboreTiger },
  { title: "Yoga & Wellness", text: "Morning yoga, temple aartis, meditation and Ayurveda sessions.", image: udaipurLake },
  { title: "Desert & Camel Safaris", text: "Camel rides, desert camps, jeep safaris and stargazing in the Thar.", image: desertSafari },
];

const CITIES = [
  { slug: "jaipur", name: "Jaipur", tagline: "The Pink City", image: hawaMahal, signature: "Palace tours, block printing, Rajasthani food and Old City bazaar walks." },
  { slug: "udaipur", name: "Udaipur", tagline: "City of Lakes", image: udaipurLake, signature: "Lake Pichola boat rides, vintage car tours and heritage hotel stays." },
  { slug: "jodhpur", name: "Jodhpur", tagline: "The Blue City", image: jodhpurFort, signature: "Mehrangarh Fort tours, Bishnoi village visits and rooftop dining." },
  { slug: "jaisalmer", name: "Jaisalmer", tagline: "The Golden City", image: jaisalmerFort, signature: "Camel safaris, desert camps and stargazing in the Thar." },
  { slug: "pushkar", name: "Pushkar", tagline: "Lake Town", image: pushkarLake, signature: "Temple visits, the Brahma temple and the annual Camel Fair." },
  { slug: "ranthambore", name: "Ranthambore", tagline: "Tiger Country", image: ranthamboreTiger, signature: "Bengal tiger safaris in one of India's most well-known national parks." },
];

const Experiences = () => {
  const featured = useMemo(
    () =>
      FEATURED_SLUGS.map((s) => allExperiences.find((e) => e.slug === s)).filter(
        (e): e is Experience => Boolean(e),
      ),
    [],
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Rajasthan Experiences & Activities",
    description:
      "Private Rajasthan experiences and activities — heritage stays, desert camps, wildlife safaris, artisan workshops, food tours and wellness sessions, planned by our Jaipur-based team.",
    image: heroPalace,
    provider: {
      "@type": "TravelAgency",
      name: "Heritage Jaipur Travels",
      telephone: "+91-9887688843",
      email: "info@heritagejaipurtravels.com",
      url: "https://www.heritagejaipurtravels.com",
    },
  };

  return (
    <main style={{ background: "#FFF8F0" }}>
      <SEO
        title="Rajasthan Experiences & Activities | Heritage Jaipur Travels"
        description="Private Rajasthan experiences — heritage stays, desert camps, wildlife safaris, artisan workshops, food tours, wellness sessions and more, arranged by our Jaipur-based team."
        path="/experiences"
        image={heroPalace}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ height: "82vh", minHeight: 600 }}>
        <div className="absolute inset-0">
          <img src={heroPalace} alt="Luxury Rajasthan palace at golden hour" className="w-full h-full object-cover lux-ken-burns" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.55) 45%, rgba(15,15,15,0.25) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,15,15,0.45) 0%, rgba(15,15,15,0.1) 40%, rgba(15,15,15,0.8) 100%)" }} />
        </div>
        <div className="relative z-10 h-full container mx-auto px-5 md:px-10 flex items-center">
          <div className="max-w-2xl text-center md:text-left lux-fade-up mx-auto md:mx-0">
            <span className="lux-glass inline-block px-5 py-2 rounded-full text-[11px] md:text-[12px] tracking-[0.3em] uppercase mb-8" style={{ color: "#FFF8F0" }}>
              Rajasthan Experiences
            </span>
            <h1
              className="font-display font-medium leading-[1.05] mb-7 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: "#FFF8F0", textShadow: "0 4px 30px rgba(0,0,0,0.6)", letterSpacing: "-0.015em", maxWidth: 720 }}
            >
              Rajasthan Experiences
              <span className="block lux-gold italic font-serif font-normal">& Activities</span>
            </h1>
            <p className="font-serif text-base md:text-lg lg:text-xl leading-[1.7] mb-9 mx-auto md:mx-0" style={{ color: "rgba(255,248,240,0.88)", maxWidth: 620 }}>
              Heritage walks, cooking classes, artisan workshops, wildlife safaris, desert camps and
              village visits — add any of these to your Rajasthan tour.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#categories" className="lux-btn-gold px-7 py-3.5 rounded-full font-medium text-sm tracking-[0.15em] uppercase inline-flex items-center gap-2">
                Browse Categories <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="lux-btn-outline px-7 py-3.5 rounded-full font-medium text-sm tracking-[0.15em] uppercase inline-flex items-center gap-2">
                Plan Your Rajasthan Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SHOWCASE */}
      <section id="categories" className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 lux-bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">Categories</span>
              <span className="h-px w-12 lux-bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1]" style={{ color: "#0F0F0F", letterSpacing: "-0.01em" }}>
              Browse Experiences by Category
            </h2>
            <p className="font-serif italic text-lg md:text-xl mt-5 leading-relaxed" style={{ color: "#5a4a3a" }}>
              Nine categories of Rajasthan experiences — pick what interests you and we'll add it to your tour.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/experiences/category/${cat.id}`}
                className="lux-card group block relative overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img src={cat.image} alt={cat.title} loading="lazy" className="lux-card-img w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase lux-gold">
                    {cat.experiences.length} Experiences
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h3 className="font-display text-xl md:text-2xl font-medium mb-3 leading-snug" style={{ color: "#FFF8F0" }}>
                      {cat.title}
                    </h3>
                    <p className="font-serif italic text-sm md:text-[15px] leading-relaxed mb-5 opacity-90" style={{ color: "#FFF8F0" }}>
                      {CATEGORY_THEME[cat.id] ?? cat.intro}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase lux-gold lux-cta-underline">
                      Explore Category <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="py-20 md:py-28" style={{ background: "#FAF1E2" }}>
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 lux-bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">Popular</span>
              <span className="h-px w-12 lux-bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1]" style={{ color: "#0F0F0F", letterSpacing: "-0.01em" }}>
              Popular Rajasthan Experiences
            </h2>
            <p className="font-serif italic text-lg md:text-xl mt-5 leading-relaxed" style={{ color: "#5a4a3a" }}>
              A few of the experiences travelers ask us for most often.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
            {featured.map((exp) => (
              <article key={exp.slug} className="lux-card group block relative overflow-hidden bg-white">
                <Link to={`/experiences/${exp.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <img src={exp.image} alt={exp.title} loading="lazy" className="lux-card-img w-full h-full object-cover" />
                </Link>
                <div className="p-6 md:p-7">
                  <span className="text-[10px] tracking-[0.3em] uppercase lux-gold">{exp.category}</span>
                  <h3 className="font-display text-xl md:text-2xl font-medium mt-3 mb-3 leading-snug" style={{ color: "#0F0F0F" }}>
                    <Link to={`/experiences/${exp.slug}`} className="hover:opacity-80 transition">{exp.title}</Link>
                  </h3>
                  <p className="font-serif italic text-[15px] leading-relaxed mb-5 line-clamp-2" style={{ color: "#5a4a3a" }}>
                    {exp.shortDesc}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] tracking-[0.1em] mb-5" style={{ color: "#7a6a5a" }}>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 lux-gold" />{exp.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 lux-gold" />{exp.location}</span>
                  </div>
                  <Link to={`/experiences/${exp.slug}`} className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase lux-gold lux-cta-underline">
                    View Experience <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR EXPERIENCES ARE DIFFERENT */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 lux-bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">How We Work</span>
              <span className="h-px w-12 lux-bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1]" style={{ color: "#0F0F0F", letterSpacing: "-0.01em" }}>
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {trustPillars.map((p) => (
              <div key={p.title} className="p-7 rounded-sm" style={{ background: "#FFF8F0", border: "1px solid rgba(201,168,76,0.3)" }}>
                <div className="mb-5 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.5)" }}>
                  <p.icon className="h-4 w-4 lux-gold" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-medium mb-3" style={{ color: "#0F0F0F" }}>{p.title}</h3>
                <p className="font-serif italic text-[15px] leading-relaxed" style={{ color: "#5a4a3a" }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE STYLES */}
      <section className="py-20 md:py-28" style={{ background: "#0F0F0F" }}>
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 lux-bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">Travel Styles</span>
              <span className="h-px w-12 lux-bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1]" style={{ color: "#FFF8F0", letterSpacing: "-0.01em" }}>
              Six Ways to Travel Rajasthan
            </h2>
            <p className="font-serif italic text-lg md:text-xl mt-5 leading-relaxed" style={{ color: "rgba(255,248,240,0.75)" }}>
              Tell us what kind of trip you'd like — we'll build it around that.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
            {STYLES.map((s) => (
              <div key={s.title} className="relative overflow-hidden rounded-sm group" style={{ border: "1px solid rgba(201,168,76,0.25)" }}>
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,15,15,0.2) 0%, rgba(15,15,15,0.85) 100%)" }} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="font-display text-xl md:text-2xl font-medium mb-2" style={{ color: "#FFF8F0" }}>{s.title}</h3>
                  <p className="font-serif italic text-[14px] md:text-[15px] leading-relaxed" style={{ color: "rgba(255,248,240,0.88)" }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAJASTHAN EXPERIENCE MAP */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 lux-bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">By Destination</span>
              <span className="h-px w-12 lux-bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1]" style={{ color: "#0F0F0F", letterSpacing: "-0.01em" }}>
              Experiences by City
            </h2>
            <p className="font-serif italic text-lg md:text-xl mt-5 leading-relaxed" style={{ color: "#5a4a3a" }}>
              Every Rajasthan city has its own experiences — combine them into a single private tour.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
            {CITIES.map((c) => (
              <Link key={c.slug} to={`/destinations/${c.slug}`} className="lux-card group block relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img src={c.image} alt={c.name} loading="lazy" className="lux-card-img w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[10px] tracking-[0.3em] uppercase lux-gold">{c.tagline}</span>
                    <h3 className="font-display text-2xl font-medium mt-2 mb-2" style={{ color: "#FFF8F0" }}>{c.name}</h3>
                    <p className="font-serif italic text-[14px] leading-relaxed opacity-90" style={{ color: "#FFF8F0" }}>{c.signature}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: stats + Google reviews */}
      <section className="py-20 md:py-24" style={{ background: "#FAF1E2" }}>
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 lux-bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">Trusted By Travelers</span>
              <span className="h-px w-12 lux-bg-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-[1.1]" style={{ color: "#0F0F0F", letterSpacing: "-0.01em" }}>
              Trusted by Travelers From India and Abroad
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
            {[
              { n: "4.9★", l: "Google Reviews" },
              { n: "30+", l: "Countries Hosted" },
              { n: "20+", l: "Years in Rajasthan Travel" },
              { n: "5,000+", l: "Happy Travelers" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-5xl font-medium lux-gold mb-2">{s.n}</div>
                <div className="text-[11px] tracking-[0.25em] uppercase" style={{ color: "#5a4a3a" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <LuxGoogleReviews />
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={desertSafari} alt="Rajasthan desert at twilight" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,15,15,0.85) 0%, rgba(110,15,31,0.7) 100%)" }} />
        </div>
        <div className="relative z-10 container mx-auto px-5 md:px-8 py-28 md:py-36 text-center max-w-3xl">
          <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">Start Planning</span>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] mt-5 mb-7" style={{ color: "#FFF8F0", letterSpacing: "-0.015em" }}>
            Plan Your Rajasthan Tour
          </h2>
          <p className="font-serif italic text-lg md:text-xl leading-relaxed mb-10" style={{ color: "rgba(255,248,240,0.88)" }}>
            Tell our Jaipur team what you'd like to see and do — we'll put together a private
            Rajasthan tour built around your dates and interests.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="lux-btn-gold px-8 py-4 rounded-full font-medium text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2">
              Plan Your Rajasthan Tour <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink("Hi! I'd like to plan a Rajasthan tour with your team.")}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-btn-outline px-8 py-4 rounded-full font-medium text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2"
            >
              WhatsApp Our Jaipur Team
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] tracking-[0.25em] uppercase mt-10" style={{ color: "rgba(255,248,240,0.7)" }}>
            {["Private Tours", "Local Rajasthan Team", "20+ Years Experience", "5,000+ Travelers"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Star className="h-3 w-3 lux-gold fill-current" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Experiences;
