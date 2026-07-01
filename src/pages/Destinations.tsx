import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, MapPin, Search, Sparkles, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import TourCard from "@/components/TourCard";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { allExperiences } from "@/data/experiences";
import heroPalace from "@/assets/hero-palace.jpg";

const WHATSAPP_URL =
  "https://wa.me/919887688843?text=" +
  encodeURIComponent("Hi! I'd like to plan my Rajasthan trip. Please help me choose destinations.");

type Category = "City" | "Wildlife" | "Heritage" | "Desert" | "Spiritual" | "Luxury" | "Nature";

interface CardMeta {
  shortDescription: string;
  bestFor: string[];
  categories: Category[];
}

const META: Record<string, CardMeta> = {
  jaipur: {
    shortDescription: "The royal Pink City of forts, palaces and vibrant bazaars.",
    bestFor: ["First-Timers", "Heritage", "Luxury"],
    categories: ["City", "Heritage", "Luxury"],
  },
  udaipur: {
    shortDescription: "Romantic lakes, palace hotels and timeless heritage.",
    bestFor: ["Couples", "Honeymoons", "Luxury"],
    categories: ["City", "Heritage", "Luxury", "Nature"],
  },
  jodhpur: {
    shortDescription: "The Blue City beneath the mighty Mehrangarh Fort.",
    bestFor: ["Heritage", "Photography"],
    categories: ["City", "Heritage"],
  },
  jaisalmer: {
    shortDescription: "Golden sandstone architecture and unforgettable desert experiences.",
    bestFor: ["Adventure", "Desert Camps", "Photography"],
    categories: ["City", "Heritage", "Desert"],
  },
  pushkar: {
    shortDescription: "Sacred lake, Brahma Temple and colourful local culture.",
    bestFor: ["Spiritual", "Culture", "Camel Fair"],
    categories: ["Spiritual", "Heritage"],
  },
  ranthambore: {
    shortDescription: "India's most famous tiger reserve and wildlife destination.",
    bestFor: ["Wildlife", "Safaris", "Families"],
    categories: ["Wildlife", "Nature"],
  },
};

const FILTERS: (Category | "All")[] = [
  "All",
  "City",
  "Wildlife",
  "Heritage",
  "Desert",
  "Spiritual",
  "Luxury",
  "Nature",
];

const featuredExperienceSlugs = [
  "luxury-desert-camping-jaisalmer",
  "palace-hotel-stays-rajasthan",
  "rajasthani-cooking-class",
];

const Destinations = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Category | "All">("All");

  const cards = useMemo(() => {
    return destinations
      .map((d) => {
        const meta = META[d.slug] ?? { shortDescription: d.tagline, bestFor: [], categories: [] as Category[] };
        return {
          slug: d.slug,
          name: d.name,
          tagline: d.tagline,
          image: d.heroImage,
          duration: d.recommendedDuration,
          highlights: d.topAttractions.slice(0, 3).map((a) => a.name),
          ...meta,
        };
      })
      .filter((c) => {
        if (filter !== "All" && !c.categories.includes(filter)) return false;
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return (
          c.name.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.shortDescription.toLowerCase().includes(q) ||
          c.bestFor.some((b) => b.toLowerCase().includes(q))
        );
      });
  }, [query, filter]);

  const popularTours = tours.slice(0, 3);
  const popularExperiences = featuredExperienceSlugs
    .map((slug) => allExperiences.find((e) => e.slug === slug))
    .filter(Boolean) as typeof allExperiences;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.heritagejaipurtravels.com/" },
        { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.heritagejaipurtravels.com/destinations" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Rajasthan Destinations",
      itemListElement: destinations.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://www.heritagejaipurtravels.com/destinations/${d.slug}`,
        name: d.name,
      })),
    },
  ];

  return (
    <>
      <SEO
        title="Rajasthan Destinations | Jaipur, Udaipur, Jodhpur, Jaisalmer & More"
        description="Explore every Rajasthan destination we offer — royal cities, desert towns, wildlife reserves and sacred lakes. Build your private Rajasthan journey with Heritage Jaipur Travels."
        path="/destinations"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden lux-black-bg">
        <div className="absolute inset-0">
          <img src={heroPalace} alt="" aria-hidden="true" className="w-full h-full object-cover lux-ken-burns" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.72) 60%, rgba(15,15,15,0.9) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 text-center max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Destinations</span>
            <span className="lux-rule-gold" />
          </div>
          <h1 className="font-display font-semibold text-[#FFF8F0] text-4xl md:text-5xl lg:text-6xl leading-tight">
            Explore Rajasthan Destinations
          </h1>
          <p className="font-serif text-[#FFF8F0]/85 text-lg md:text-xl mt-6 leading-relaxed">
            Discover Rajasthan one destination at a time. From royal capitals and desert cities to wildlife
            reserves and sacred towns, explore every destination we offer and build your own private
            Rajasthan journey.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <LuxLinkBtn to="/enquire?type=Destinations" variant="gold">
              Plan My Rajasthan Tour
            </LuxLinkBtn>
            <LuxAnchorBtn href={WHATSAPP_URL} external variant="outline">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </LuxAnchorBtn>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="All Destinations"
            title="Every Rajasthan Destination We Offer"
            intro="Search by name, filter by style, then open any destination guide to plan your visit."
          />

          {/* Search + Filters */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6E0F1F]/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search destinations…"
                aria-label="Search destinations"
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-[#C9A84C]/30 bg-white text-[#0F0F0F] font-serif text-[15px] focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase font-display transition-all border ${
                      active
                        ? "bg-[#6E0F1F] text-[#FFF8F0] border-[#6E0F1F]"
                        : "bg-white text-[#0F0F0F]/70 border-[#C9A84C]/30 hover:border-[#C9A84C] hover:text-[#6E0F1F]"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {cards.length === 0 ? (
            <div className="text-center py-20 font-serif text-[#0F0F0F]/60">
              No destinations match your search. Try another keyword or filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((c) => (
                <article
                  key={c.slug}
                  className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-[0_2px_30px_rgba(110,15,31,0.06)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(110,15,31,0.18)] hover:-translate-y-1 border border-[#C9A84C]/10 hover:border-[#C9A84C]/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={`${c.name} — ${c.tagline}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0709]/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] bg-[#1a0709]/60 backdrop-blur-sm px-3 py-1.5 border border-[#C9A84C]/40">
                        {c.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6 md:p-7">
                    <h3 className="font-display text-2xl md:text-[26px] font-semibold text-[#0F0F0F] mb-2">
                      {c.name}
                    </h3>
                    <div className="h-px w-10 bg-[#C9A84C] mb-4" />
                    <p className="font-serif text-[15px] text-[#0F0F0F]/70 leading-relaxed mb-5">
                      {c.shortDescription}
                    </p>

                    {c.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {c.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-[13px] text-[#0F0F0F]/75 font-serif">
                            <Sparkles className="h-3.5 w-3.5 text-[#C9A84C] mt-1 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center gap-4 text-[12px] text-[#0F0F0F]/65 mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#C9A84C]" /> {c.duration}
                      </span>
                    </div>

                    {c.bestFor.length > 0 && (
                      <div className="mb-6">
                        <span className="lux-eyebrow text-[10px] mr-2">Best For</span>
                        <span className="inline-flex flex-wrap gap-1.5 mt-2">
                          {c.bestFor.map((b) => (
                            <span
                              key={b}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-[#F8F5EF] text-[#6E0F1F] border border-[#C9A84C]/30"
                            >
                              {b}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    <Link
                      to={`/destinations/${c.slug}`}
                      className="mt-auto inline-flex items-center justify-between gap-2 text-[11px] tracking-[0.3em] uppercase text-[#6E0F1F] hover:text-[#C9A84C] border-t border-[#C9A84C]/20 pt-4 transition-colors"
                    >
                      View Destination
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Journeys"
            title="Popular Rajasthan Tours"
            intro="Our most-booked private itineraries — easy to customise around your chosen destinations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularTours.map((t) => (
              <TourCard key={t.slug ?? t.title} {...t} />
            ))}
          </div>
          <div className="text-center mt-12">
            <LuxLinkBtn to="/packages" variant="outline">View All Journeys</LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* Popular Experiences */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Experiences"
            title="Popular Experiences"
            intro="Add these signature experiences to any destination in your itinerary."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularExperiences.map((e) => (
              <Link
                key={e.slug}
                to={`/experiences/${e.slug}`}
                className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-[0_2px_30px_rgba(110,15,31,0.06)] hover:shadow-[0_20px_50px_rgba(110,15,31,0.18)] transition-all duration-500 hover:-translate-y-1 border border-[#C9A84C]/10 hover:border-[#C9A84C]/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-2">{e.title}</h3>
                  <p className="font-serif text-[14px] text-[#0F0F0F]/70 leading-relaxed mb-4 line-clamp-3">
                    {e.shortDesc}
                  </p>
                  <div className="mt-auto flex items-center gap-4 text-[12px] text-[#0F0F0F]/65">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#C9A84C]" /> {e.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#C9A84C]" /> {e.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <LuxLinkBtn to="/experiences" variant="outline">View All Experiences</LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <LuxCtaBand
        image={heroPalace}
        eyebrow="Start Planning"
        title="Ready to Explore Rajasthan?"
        subtitle="Tell us your travel dates and preferred destinations — we'll craft a private itinerary just for you."
        primary={{ label: "Plan My Rajasthan Tour", to: "/enquire?type=Destinations" }}
        secondary={{ label: "WhatsApp Us", href: WHATSAPP_URL, external: true }}
      />
    </>
  );
};

export default Destinations;
