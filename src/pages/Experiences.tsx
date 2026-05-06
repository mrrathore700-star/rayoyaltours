import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { categories, allExperiences, type Experience } from "@/data/experiences";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, MessageCircle, Sparkles, Star, Crown, Heart, Camera, Footprints, Users, Award, Phone } from "lucide-react";
import heroPalace from "@/assets/hero-palace.jpg";

const waLink = (msg: string) =>
  `https://wa.me/919461069858?text=${encodeURIComponent(msg)}`;

const POPULAR = new Set([
  "luxury-desert-camping-jaisalmer",
  "tiger-safari-ranthambore",
  "palace-hotel-stays-rajasthan",
  "rajasthani-cooking-class",
  "maharaja-photoshoot",
]);

const Experiences = () => {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Experience | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allExperiences.filter((e) => {
      const inCat =
        activeCat === "all" ||
        categories.find((c) => c.id === activeCat)?.experiences.some((x) => x.slug === e.slug);
      if (!inCat) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.shortDesc.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
      );
    });
  }, [activeCat, query]);

  const related = open
    ? allExperiences.filter((e) => e.category === open.category && e.slug !== open.slug).slice(0, 3)
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Experience Rajasthan Like Never Before",
    description:
      "45 handcrafted Rajasthan experiences — desert safaris, royal palace stays, tiger safaris, food, art workshops, festivals and luxury journeys for international travellers.",
    image: heroPalace,
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
        title="Experience Rajasthan Like Never Before | Heritage Jaipur Travels"
        description="45 unique handcrafted Rajasthan experiences — desert safaris, royal palace stays, tiger safaris, cooking classes, art workshops, festivals and luxury journeys for international travellers."
        path="/experiences"
        image={heroPalace}
        jsonLd={jsonLd}
      />

      {/* Cinematic Hero */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroPalace}
          alt="Royal Rajasthan palace at golden hour"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[fade-in_1.2s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/90" />
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-xs md:text-sm uppercase tracking-[0.25em] mb-5">
            45 Unique Experiences • Curated by Locals
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-5 drop-shadow-lg leading-tight">
            Experience Rajasthan Like Never Before
          </h1>
          <p className="font-serif text-lg md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-8 italic">
            Beyond sightseeing — live the desert, the palaces, the people, the magic.
          </p>
          <a
            href="#explore"
            className="inline-flex items-center px-7 py-3.5 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition hover-scale"
          >
            Explore All Experiences ↓
          </a>
        </div>
      </section>

      {/* Sticky Filter + Search */}
      <div
        id="explore"
        className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative md:w-72 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search experiences…"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
              <button
                onClick={() => setActiveCat("all")}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
                  activeCat === "all"
                    ? "heritage-gradient text-primary-foreground shadow"
                    : "bg-muted text-foreground hover:bg-muted/70"
                }`}
              >
                All ({allExperiences.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
                    activeCat === c.id
                      ? "heritage-gradient text-primary-foreground shadow"
                      : "bg-muted text-foreground hover:bg-muted/70"
                  }`}
                >
                  <span className="mr-1">{c.icon}</span>
                  {c.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground mb-6">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> experiences
            {activeCat !== "all" && (
              <>
                {" "}in{" "}
                <span className="font-semibold text-foreground">
                  {categories.find((c) => c.id === activeCat)?.title}
                </span>
              </>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No experiences match your search. Try another keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((exp) => (
                <article
                  key={exp.slug}
                  className="group relative bg-card rounded-xl overflow-hidden border border-border heritage-shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col cursor-pointer animate-fade-in"
                  onClick={() => setOpen(exp)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    {POPULAR.has(exp.slug) && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-wide shadow">
                        <Star className="h-3 w-3 fill-current" /> Most Popular
                      </span>
                    )}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[11px] font-medium text-foreground">
                      {exp.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-5 flex-1">
                      {exp.shortDesc}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(exp);
                      }}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md heritage-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
                    >
                      <Sparkles className="h-4 w-4" /> Book This Experience
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Can't decide? Let our local experts craft your journey.
        </h2>
        <p className="text-muted-foreground mb-8">
          20+ years curating Rajasthan trips for travellers from over 40 countries. Tell us your dream — we'll
          design it, free of charge.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={waLink("Hi! I'd like help planning my Rajasthan experiences.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            💬 Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto p-0 gap-0 [&>button]:bg-background/80 [&>button]:backdrop-blur [&>button]:rounded-full [&>button]:p-1.5 [&>button]:top-3 [&>button]:right-3 [&>button]:opacity-100">
          {open && (
            <>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={open.image} alt={open.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                  {POPULAR.has(open.slug) && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-wide mb-2">
                      <Star className="h-3 w-3 fill-current" /> Most Popular
                    </span>
                  )}
                  <span className="block text-xs uppercase tracking-widest text-secondary mb-1">
                    {open.category}
                  </span>
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight text-left">
                      {open.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              <div className="p-5 md:p-7 space-y-6">
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  {open.description}
                </p>

                {open.highlights?.length > 0 && (
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-secondary" /> Highlights
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {open.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-sm text-foreground">
                          <span className="text-secondary mt-1">◆</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={waLink(`Hi! I'd like to book the "${open.title}" experience. Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold hover:opacity-90 transition"
                  >
                    <MessageCircle className="h-5 w-5" /> Book on WhatsApp
                  </a>
                  <Link
                    to={`/experiences/${open.slug}`}
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold hover:opacity-90 transition"
                  >
                    View Full Details →
                  </Link>
                </div>

                {related.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      You may also love
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {related.map((r) => (
                        <button
                          key={r.slug}
                          onClick={() => setOpen(r)}
                          className="text-left group rounded-lg overflow-hidden border border-border bg-card hover:shadow-md transition"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={r.image}
                              alt={r.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-3">
                            <h4 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition">
                              {r.title}
                            </h4>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Experiences;
