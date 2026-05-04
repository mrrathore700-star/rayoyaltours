import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { findExperience, allExperiences } from "@/data/experiences";
import { ArrowLeft, Sparkles, MessageCircle, Mail, Phone } from "lucide-react";

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
        title={`${exp.title} | Heritage Jaipur Travels`}
        description={exp.shortDesc}
        path={`/experiences/${exp.slug}`}
        image={exp.image}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> All Experiences
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-xs uppercase tracking-widest mb-4">
            {exp.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 max-w-4xl leading-tight">
            {exp.title}
          </h1>
          <p className="font-serif text-lg md:text-2xl text-foreground/90 max-w-3xl italic">
            {exp.shortDesc}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Sparkles className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What You Will Experience
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg md:text-xl whitespace-pre-line text-center">
            {exp.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      {exp.highlights?.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {exp.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-6 rounded-lg border border-border bg-card heritage-shadow"
                >
                  <span className="text-secondary text-2xl leading-none">◆</span>
                  <p className="text-foreground text-base md:text-lg">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Make This Experience Yours
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every journey is tailored to your taste. Tell us your dream — we'll craft it into reality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink(`Hi! I'd like to customize the "${exp.title}" experience. Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold hover:opacity-90 transition"
            >
              <MessageCircle className="h-5 w-5" /> Get Quote on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md heritage-gradient text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              <Sparkles className="h-5 w-5" /> Customize This Experience
            </Link>
            <a
              href={`mailto:info@heritagejaipurtravels.com?subject=${encodeURIComponent("Enquiry: " + exp.title)}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-border bg-card text-foreground font-semibold hover:bg-muted transition"
            >
              <Mail className="h-5 w-5" /> Contact Us
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground inline-flex items-center gap-2 justify-center">
            <Phone className="h-4 w-4 text-secondary" /> +91 9461069858
          </p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
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
