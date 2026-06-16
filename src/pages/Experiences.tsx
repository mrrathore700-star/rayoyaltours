import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { categories, allExperiences, type Experience } from "@/data/experiences";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroPalace from "@/assets/hero-palace.jpg";
import desertSafari from "@/assets/desert-safari.jpg";

const waLink = (msg: string) =>
  `https://wa.me/919887688843?text=${encodeURIComponent(msg)}`;

// Display-only emotional title overrides keyed by slug substring
const emotionalTitle = (exp: Experience): string => {
  const s = exp.slug.toLowerCase();
  const map: Array<[RegExp, string]> = [
    [/leopard/, "Track the Wild Leopards of Jawai"],
    [/camel/, "Ride Through Rajasthan's Golden Dunes"],
    [/village/, "Discover Rajasthan Through Local Village Life"],
    [/desert-camp|jaisalmer-camp|luxury-desert/, "Sleep Beneath a Sky of Desert Stars"],
    [/cooking|culinary/, "Cook Like a Rajasthani Royal"],
    [/tiger|ranthambore/, "Trail the Tigers of Ranthambore"],
    [/palace-stay|heritage-stay|palace-hotel/, "Live a Night Inside a Royal Palace"],
    [/maharaja-photo|photoshoot/, "Step Into a Maharaja Portrait"],
    [/yoga|meditation|spiritual/, "Find Stillness in Sacred Rajasthan"],
    [/block-print|pottery|art/, "Learn the Hands of Rajasthani Artisans"],
    [/festival|fair/, "Walk Inside a Living Rajasthani Festival"],
  ];
  for (const [re, t] of map) if (re.test(s)) return t;
  return exp.title;
};

// Luxury section grouping over existing category IDs
const SECTIONS: Array<{ id: string; title: string; intro: string; catIds: string[] }> = [
  {
    id: "royal",
    title: "Royal Rajasthan",
    intro: "Sleep where maharajas slept, walk through palaces still warm with stories, and inherit — for a moment — the rhythm of Indian royalty.",
    catIds: ["royal", "luxury"],
  },
  {
    id: "desert",
    title: "Desert Experiences",
    intro: "The Thar reveals itself slowly — in the silence of dunes at dusk, the glow of campfires, and the low rhythm of desert song.",
    catIds: ["desert"],
  },
  {
    id: "wildlife",
    title: "Wildlife & Nature",
    intro: "From the tigers of Ranthambore to the elusive leopards of Jawai, encounter Rajasthan's wild kingdoms with private naturalists.",
    catIds: ["wildlife"],
  },
  {
    id: "spiritual",
    title: "Spiritual Rajasthan",
    intro: "Quiet temples, dawn rituals, and ancient practices — moments designed to slow time and stir the soul.",
    catIds: ["wellness"],
  },
  {
    id: "village",
    title: "Village & Cultural Life",
    intro: "Step beyond the guidebook into living villages, artisan workshops, and the festivals that shape Rajasthan's heart.",
    catIds: ["local", "art", "festivals"],
  },
  {
    id: "food",
    title: "Food & Culinary",
    intro: "From royal kitchens to family courtyards — discover Rajasthan one carefully spiced plate at a time.",
    catIds: ["food"],
  },
  {
    id: "photography",
    title: "Luxury Photography",
    intro: "Cinematic portraits in palaces, deserts, and havelis — keepsakes worthy of the journey itself.",
    catIds: ["photography"],
  },
];

const trustPillars = [
  { title: "Local Experts", text: "Born and raised in Rajasthan." },
  { title: "Private Experiences", text: "Designed exclusively around you." },
  { title: "Custom Itineraries", text: "No templates — every journey is planned for you." },
  { title: "Trusted Specialists", text: "20+ years planning trips for international travellers." },
];

const testimonials = [
  {
    quote:
      "From the moment we landed in Jaipur, every detail was anticipated. The leopard safari and our night in the desert will stay with us forever.",
    name: "Charlotte & James",
    place: "London, United Kingdom",
  },
  {
    quote:
      "It felt less like a tour and more like being welcomed into a Rajasthani family. Truly the most personal luxury travel I have experienced.",
    name: "Emiko Tanaka",
    place: "Kyoto, Japan",
  },
  {
    quote:
      "Heritage Jaipur Travels designed a Rajasthan I did not know existed — quiet temples at dawn, palace dinners, real artisans. Unforgettable.",
    name: "Daniel Becker",
    place: "Munich, Germany",
  },
];

// Lightweight scroll-reveal hook
const useReveal = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
};

const SectionBlock = ({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: Experience[];
}) => {
  const { ref, shown } = useReveal<HTMLElement>();
  if (items.length === 0) return null;
  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 ${shown ? "lux-fade-up" : "opacity-0"}`}
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 lux-bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">
              Chapter
            </span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-5"
            style={{ color: "#0F0F0F", letterSpacing: "-0.01em" }}
          >
            {title}
          </h2>
          <p
            className="font-serif italic text-lg md:text-xl leading-relaxed"
            style={{ color: "#5a4a3a" }}
          >
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
          {items.map((exp) => (
            <Link
              key={exp.slug}
              to={`/experiences/${exp.slug}`}
              className="lux-card group block relative overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="lux-card-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase lux-gold">
                  {exp.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3
                    className="font-display text-xl md:text-2xl font-medium mb-2 leading-snug"
                    style={{ color: "#FFF8F0" }}
                  >
                    {emotionalTitle(exp)}
                  </h3>
                  <p
                    className="font-serif italic text-sm md:text-[15px] leading-relaxed mb-5 line-clamp-2 opacity-90"
                    style={{ color: "#FFF8F0" }}
                  >
                    {exp.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase lux-gold lux-cta-underline">
                    View Experience <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experiences = () => {
  // Map catIds → experiences from existing data (no data changes)
  const sectionGroups = useMemo(() => {
    return SECTIONS.map((s) => {
      const items: Experience[] = [];
      const seen = new Set<string>();
      for (const cid of s.catIds) {
        const cat = categories.find((c) => c.id === cid);
        if (!cat) continue;
        for (const e of cat.experiences) {
          if (!seen.has(e.slug)) {
            seen.add(e.slug);
            items.push(e);
          }
        }
      }
      return { ...s, items };
    });
  }, []);

  const totalCount = allExperiences.length;

  // Particles
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: `${(i * 53) % 100}%`,
        delay: `${(i * 1.7) % 14}s`,
        duration: `${14 + (i % 8) * 2}s`,
        size: 2 + (i % 3),
      })),
    []
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Experience Rajasthan Beyond The Guidebooks",
    description:
      "A handpicked collection of luxury Rajasthan experiences — royal palace stays, desert nights, leopard safaris, spiritual rituals, artisan workshops and private cultural moments for international travellers.",
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
        title="Luxury Rajasthan Experiences | Heritage Jaipur Travels"
        description="A handpicked collection of luxury Rajasthan experiences — royal palace stays, desert nights, leopard safaris, spiritual rituals, artisan workshops and private cultural moments for international travellers."
        path="/experiences"
        image={heroPalace}
        jsonLd={jsonLd}
      />

      {/* CINEMATIC HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "90vh", minHeight: 620 }}
      >
        <div className="absolute inset-0">
          <img
            src={heroPalace}
            alt="Rajasthan palace at golden hour"
            className="w-full h-full object-cover lux-ken-burns"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.55) 45%, rgba(15,15,15,0.25) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.15) 40%, rgba(15,15,15,0.85) 100%)",
            }}
          />
          <div className="lux-particles">
            {particles.map((p, i) => (
              <span
                key={i}
                style={{
                  left: p.left,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                  width: p.size,
                  height: p.size,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 h-full container mx-auto px-5 md:px-10 flex items-center">
          <div className="max-w-2xl text-center md:text-left lux-fade-up mx-auto md:mx-0">
            <span className="lux-glass inline-block px-5 py-2 rounded-full text-[11px] md:text-[12px] tracking-[0.3em] uppercase lux-cream mb-8">
              {totalCount} Rajasthan Experiences
            </span>
            <h1
              className="font-display font-medium leading-[1.05] mb-7 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                color: "#FFF8F0",
                textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                letterSpacing: "-0.015em",
                maxWidth: 700,
              }}
            >
              Experience Rajasthan
              <span className="block lux-gold italic font-serif font-normal">
                Beyond The Guidebooks
              </span>
            </h1>
            <p
              className="font-serif text-base md:text-lg lg:text-xl leading-[1.7] mb-9 lux-cream/90 mx-auto md:mx-0"
              style={{ color: "rgba(255,248,240,0.85)", maxWidth: 600 }}
            >
              From royal palaces and desert camps to hidden villages, leopard safaris,
              spiritual rituals, and private cultural moments — discover Rajasthan through
              private experiences planned for international travellers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <a
                href="#explore"
                className="lux-btn-gold px-7 py-3.5 rounded-full font-medium text-sm tracking-[0.15em] uppercase inline-flex items-center gap-2"
              >
                Explore Experiences <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="lux-btn-outline px-7 py-3.5 rounded-full font-medium text-sm tracking-[0.15em] uppercase inline-flex items-center gap-2"
              >
                Plan Your Journey
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-[11px] md:text-[12px] tracking-[0.25em] uppercase lux-cream"
                style={{ color: "rgba(255,248,240,0.75)" }}>
              {["Private Experiences", "Local Experts", "Luxury Journeys", "20+ Years"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Star className="h-3 w-3 lux-gold fill-current" /> {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#explore"
            className="text-[10px] tracking-[0.4em] uppercase lux-cream opacity-70 hover:opacity-100 transition"
            style={{ color: "rgba(255,248,240,0.7)" }}
          >
            Scroll
          </a>
        </div>
      </section>

      {/* Anchor */}
      <div id="explore" />

      {/* Editorial sections */}
      {sectionGroups.map((s) => (
        <SectionBlock key={s.id} title={s.title} intro={s.intro} items={s.items} />
      ))}

      {/* TRUST STRIP */}
      <section className="py-24 md:py-32" style={{ background: "#FFF8F0" }}>
        <div className="container mx-auto px-5 md:px-8 text-center max-w-5xl">
          <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">
            Our Promise
          </span>
          <h2
            className="font-display text-3xl md:text-5xl font-medium leading-tight mt-5 mb-12"
            style={{ color: "#0F0F0F" }}
          >
            Crafting Rajasthan Experiences for International Travellers for Over 20 Years
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {trustPillars.map((p) => (
              <div key={p.title} className="px-2">
                <div className="mx-auto mb-5 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.5)" }}>
                  <Sparkles className="h-4 w-4 lux-gold" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-medium mb-2" style={{ color: "#0F0F0F" }}>
                  {p.title}
                </h3>
                <p className="font-serif italic text-sm md:text-base leading-relaxed" style={{ color: "#5a4a3a" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32" style={{ background: "#0F0F0F" }}>
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">
              Guest Letters
            </span>
            <h2
              className="font-display text-3xl md:text-5xl font-medium mt-4"
              style={{ color: "#FFF8F0" }}
            >
              From travellers across the world
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="p-8 md:p-10 rounded-sm"
                style={{
                  background: "rgba(255,248,240,0.04)",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                <div className="lux-gold text-3xl font-display leading-none mb-4">"</div>
                <blockquote
                  className="font-serif italic text-lg leading-[1.75] mb-7"
                  style={{ color: "rgba(255,248,240,0.92)" }}
                >
                  {t.quote}
                </blockquote>
                <figcaption>
                  <div className="text-sm tracking-[0.2em] uppercase lux-gold mb-1">
                    {t.name}
                  </div>
                  <div className="text-xs tracking-[0.15em]" style={{ color: "rgba(255,248,240,0.55)" }}>
                    {t.place}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={desertSafari}
            alt="Rajasthan desert at twilight"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,15,0.85) 0%, rgba(110,15,31,0.7) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-5 md:px-8 py-28 md:py-40 text-center max-w-3xl">
          <span className="text-[11px] tracking-[0.35em] uppercase lux-gold">
            Begin Here
          </span>
          <h2
            className="font-display text-4xl md:text-6xl font-medium leading-[1.05] mt-5 mb-7"
            style={{ color: "#FFF8F0", letterSpacing: "-0.015em" }}
          >
            Begin Your Rajasthan Story
          </h2>
          <p
            className="font-serif italic text-lg md:text-xl leading-relaxed mb-10"
            style={{ color: "rgba(255,248,240,0.88)" }}
          >
            Let our local experts craft a private Rajasthan experience designed
            around your style of travel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="lux-btn-gold px-8 py-4 rounded-full font-medium text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2"
            >
              Plan My Journey <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink("Hi! I'd like to speak with a Rajasthan specialist about a private experience.")}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-btn-outline px-8 py-4 rounded-full font-medium text-sm tracking-[0.2em] uppercase inline-flex items-center gap-2"
            >
              Speak With a Specialist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiences;
