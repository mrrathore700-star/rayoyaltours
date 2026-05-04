import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/data/experiences";

const waLink = (msg: string) =>
  `https://wa.me/919461069858?text=${encodeURIComponent(msg)}`;

const ExperienceCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) return <Navigate to="/experiences" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.title,
    description: category.intro,
    itemListElement: category.experiences.map((exp, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.heritagejaipurtravels.com/experiences/${exp.slug}`,
      name: exp.title,
    })),
  };

  return (
    <main className="pt-16 md:pt-20">
      <SEO
        title={`${category.title} in Rajasthan | Heritage Jaipur Travels`}
        description={`${category.intro} Explore ${category.experiences.length}+ handcrafted ${category.title.toLowerCase()} for international travellers.`}
        path={`/experiences/category/${category.id}`}
        image={category.image}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-5xl mb-3">{category.icon}</div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 drop-shadow-lg">
            {category.title}
          </h1>
          <p className="font-serif text-base md:text-xl text-foreground/90 max-w-3xl mx-auto">
            {category.intro}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="container mx-auto px-4 pt-6">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/experiences" className="hover:text-primary">Experiences</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{category.title}</span>
        </nav>
      </section>

      {/* Experiences grid */}
      <section className="py-10 md:py-16 container mx-auto px-4">
        <SectionHeading
          title={`All ${category.title}`}
          subtitle={`${category.experiences.length} curated experiences — handpicked by our local Rajasthan experts`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {category.experiences.map((exp) => (
            <article
              key={exp.slug}
              className="group rounded-lg overflow-hidden border border-border bg-card heritage-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Link to={`/experiences/${exp.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                  {exp.duration}
                </div>
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-display text-xl font-bold text-foreground mb-2">
                  <Link to={`/experiences/${exp.slug}`} className="hover:text-primary transition">
                    {exp.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground mb-3 flex-1">{exp.shortDesc}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  📍 {exp.location} · 🗓 {exp.bestTime}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <Link
                    to={`/experiences/${exp.slug}`}
                    className="flex-1 text-center px-4 py-2 rounded-md heritage-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
                  >
                    Book Now
                  </Link>
                  <a
                    href={waLink(`Hi! I'd like to customise the "${exp.title}" experience.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-md border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition"
                  >
                    Customize
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            Can't decide? Let our experts plan it for you
          </h2>
          <p className="text-muted-foreground mb-7">
            Tell us your dates and dream moments — we'll craft a free, personalised {category.title.toLowerCase()} itinerary.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink(`Hi! I'm interested in ${category.title} in Rajasthan. Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href={`mailto:info@heritagejaipurtravels.com?subject=${encodeURIComponent(category.title + " Enquiry")}`}
              className="px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition"
            >
              ✉️ Email Us
            </a>
            <Link
              to="/experiences"
              className="px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              ← All Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperienceCategory;
