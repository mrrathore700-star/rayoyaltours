import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Search, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import TourCard from "@/components/TourCard";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxWhyChoose from "@/components/luxury/LuxWhyChoose";
import LuxGoogleReviews from "@/components/luxury/LuxGoogleReviews";
import LuxFAQ from "@/components/luxury/LuxFAQ";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import { tours } from "@/data/tours";
import { dayToursList } from "@/data/dayTours";
import royalTour from "@/assets/royal-tour.jpg";

const WHATSAPP_URL =
  "https://wa.me/919887688843?text=" +
  encodeURIComponent("Hi! I'd like to plan a private Rajasthan tour. Please help me choose a journey.");

type Category =
  | "All"
  | "Golden Triangle"
  | "Heritage"
  | "Desert"
  | "Wildlife"
  | "Luxury"
  | "Short Break";

const FILTERS: Category[] = [
  "All",
  "Golden Triangle",
  "Heritage",
  "Desert",
  "Wildlife",
  "Luxury",
  "Short Break",
];

const categorize = (t: (typeof tours)[number]): Category[] => {
  const cats: Category[] = [];
  const h = t.highlights.map((x) => x.toLowerCase());
  const title = t.title.toLowerCase();
  const nights = parseInt(t.duration.match(/(\d+)\s*Night/i)?.[1] ?? "0", 10);

  if (title.includes("golden triangle") || (h.includes("delhi") && h.includes("agra"))) {
    cats.push("Golden Triangle");
  }
  if (h.some((x) => ["jaisalmer"].includes(x)) || title.includes("desert")) {
    cats.push("Desert");
  }
  if (h.some((x) => ["ranthambore"].includes(x)) || title.includes("wildlife") || title.includes("tiger")) {
    cats.push("Wildlife");
  }
  if (title.includes("heritage") || title.includes("royal") || h.includes("udaipur") || h.includes("jodhpur")) {
    cats.push("Heritage");
  }
  if (title.includes("luxury") || title.includes("palace") || nights >= 10) cats.push("Luxury");
  if (nights > 0 && nights <= 3) cats.push("Short Break");
  return cats;
};

const Packages = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Category>("All");

  const enriched = useMemo(
    () => tours.map((t) => ({ ...t, categories: categorize(t) })),
    []
  );

  const filtered = useMemo(() => {
    return enriched.filter((t) => {
      if (filter !== "All" && !t.categories.includes(filter)) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.duration.toLowerCase().includes(q) ||
        t.highlights.some((h) => h.toLowerCase().includes(q))
      );
    });
  }, [enriched, query, filter]);

  const featured = useMemo(() => enriched.filter((t) => t.badge).slice(0, 3), [enriched]);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.heritagejaipurtravels.com/" },
        { "@type": "ListItem", position: 2, name: "Journeys", item: "https://www.heritagejaipurtravels.com/packages" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Rajasthan Journeys",
      itemListElement: tours
        .filter((t) => t.slug)
        .map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://www.heritagejaipurtravels.com/packages/${t.slug}`,
          name: t.title,
        })),
    },
  ];

  return (
    <main className="lux-cream-bg">
      <SEO
        title="Rajasthan Tour Packages | Private Journeys by Heritage Jaipur Travels"
        description="Explore our private Rajasthan tours — Golden Triangle, Jaipur Heritage, Jaisalmer Desert Safari, Udaipur Lake Tour and more. Planned by Jaipur-based specialists."
        path="/packages"
        jsonLd={jsonLd}
      />

      <LuxHero
        image={royalTour}
        eyebrow="Signature Journeys"
        title={<>Private <span className="text-[#C9A84C]">Rajasthan</span> Journeys</>}
        subtitle="Each journey is private, paced to you, and built on twenty years of local Rajasthan knowledge."
        actions={
          <>
            <LuxLinkBtn to="/enquire?type=Packages" variant="gold">
              Plan My Rajasthan Tour
            </LuxLinkBtn>
            <LuxAnchorBtn href={WHATSAPP_URL} external variant="outline">
              WhatsApp Us
            </LuxAnchorBtn>
          </>
        }
      />

      {/* Search + Filters + All Journeys */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Our Collection"
            title="Every Rajasthan Journey We Offer"
            intro="Search by name, filter by style, then open any journey to see the itinerary in detail."
          />

          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6E0F1F]/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search journeys by name, city or duration…"
                aria-label="Search journeys"
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

          {filtered.length === 0 ? (
            <div className="text-center py-20 font-serif text-[#0F0F0F]/60">
              No journeys match your search. Try another keyword or filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((tour) => (
                <TourCard key={tour.slug ?? tour.title} {...tour} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Journeys */}
      {featured.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
          <div className="container mx-auto px-6">
            <LuxSectionHeading
              eyebrow="Featured"
              title="Our Most-Loved Journeys"
              intro="Signature itineraries our travellers return to again and again."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((t) => (
                <TourCard key={t.slug ?? t.title} {...t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Private Day Tours */}
      <section className="py-20 md:py-28 lux-cream-bg">
        <div className="container mx-auto px-6">
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
                    <Sparkles className="h-3.5 w-3.5" /> View Day Tour
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LuxWhyChoose />
      <LuxGoogleReviews />
      <LuxFAQ />

      <LuxCtaBand
        image={royalTour}
        eyebrow="Start Planning"
        title="Ready to Explore Rajasthan?"
        subtitle="Tell us your travel dates and preferred journey — our Jaipur team will craft a private itinerary just for you."
        primary={{ label: "Plan My Rajasthan Tour", to: "/enquire?type=Packages" }}
        secondary={{ label: "WhatsApp Us", href: WHATSAPP_URL, external: true }}
      />
    </main>
  );
};

export default Packages;
