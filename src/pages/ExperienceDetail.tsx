import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { findExperience, allExperiences } from "@/data/experiences";
import { Clock, MapPin, CalendarRange, Check, X, ArrowLeft } from "lucide-react";

const waLink = (msg: string) =>
  `https://wa.me/919461069858?text=${encodeURIComponent(msg)}`;

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const exp = slug ? findExperience(slug) : undefined;

  if (!exp) return <Navigate to="/experiences" replace />;

  const related = allExperiences
    .filter((e) => e.category === exp.category && e.slug !== exp.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: exp.title,
    description: exp.description,
    image: exp.image,
    touristType: "International tourists",
    location: { "@type": "Place", name: exp.location, address: exp.location },
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
        title={`${exp.title} | ${exp.location} | Heritage Jaipur Travels`}
        description={exp.shortDesc}
        path={`/experiences/${exp.slug}`}
        image={exp.image}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> All Experiences
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-xs uppercase tracking-widest mb-3">
            {exp.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 max-w-3xl">
            {exp.title}
          </h1>
          <p className="font-serif text-lg md:text-xl text-foreground/90 max-w-2xl">
            {exp.shortDesc}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">About This Experience</h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg whitespace-pre-line">
                {exp.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="text-secondary mt-1">◆</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-[hsl(142,70%,40%)]" /> Inclusions
                </h3>
                <ul className="space-y-2">
                  {exp.inclusions.map((i, k) => (
                    <li key={k} className="text-sm text-muted-foreground flex gap-2">
                      <Check className="h-4 w-4 text-[hsl(142,70%,40%)] mt-0.5 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" /> Exclusions
                </h3>
                <ul className="space-y-2">
                  {exp.exclusions.map((i, k) => (
                    <li key={k} className="text-sm text-muted-foreground flex gap-2">
                      <X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <aside className="lg:sticky lg:top-24 self-start space-y-5">
            <div className="rounded-lg border border-border bg-card p-6 heritage-shadow">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-display text-3xl font-bold text-primary mb-5">{exp.priceFrom}</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span><strong>Duration:</strong> {exp.duration}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span><strong>Location:</strong> {exp.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CalendarRange className="h-4 w-4 text-secondary" />
                  <span><strong>Best Time:</strong> {exp.bestTime}</span>
                </li>
              </ul>
              <a
                href={waLink(`Hi! I'd like to book "${exp.title}" in ${exp.location}. Please share details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold hover:opacity-90 transition mb-3"
              >
                💬 Book on WhatsApp
              </a>
              <a
                href={`mailto:info@heritagejaipurtravels.com?subject=${encodeURIComponent("Enquiry: " + exp.title)}`}
                className="block w-full text-center py-3 rounded-md heritage-gradient text-primary-foreground font-semibold hover:opacity-90 transition"
              >
                ✉️ Email Enquiry
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              More {exp.category} Experiences
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/experiences/${r.slug}`} className="heritage-card group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{r.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ExperienceDetail;
