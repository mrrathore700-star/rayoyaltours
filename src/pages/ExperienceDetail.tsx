import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import { findExperience, allExperiences } from "@/data/experiences";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  ChevronRight,
  Sparkles,
  Crown,
  Star,
  Heart,
  Camera,
  Footprints,
  Users,
  Award,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Calendar,
  UserCircle2,
  Sparkle,
  PlusCircle,
  X,
} from "lucide-react";

const waLink = (msg: string) =>
  `https://wa.me/919887688843?text=${encodeURIComponent(msg)}`;

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="animate-fade-in">
    <div className="flex items-center gap-3 mb-5">
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full heritage-gradient text-primary-foreground shadow">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="grid sm:grid-cols-2 gap-3">
    {items.map((h, i) => (
      <li
        key={i}
        className="flex gap-3 items-start p-4 rounded-lg border border-border bg-card hover:shadow-md transition"
      >
        <span className="text-secondary mt-1 text-lg leading-none">◆</span>
        <span className="text-foreground/90">{h}</span>
      </li>
    ))}
  </ul>
);

const Badge = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border text-foreground text-xs md:text-sm">
    <Icon className="h-3.5 w-3.5 text-secondary" />
    {label}
  </span>
);

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const exp = slug ? findExperience(slug) : undefined;
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!exp) return <Navigate to="/experiences" replace />;

  const related = allExperiences
    .filter((e) => e.category === exp.category && e.slug !== exp.slug)
    .slice(0, 3);

  const d = exp.details;
  const subtitle = d?.subtitle ?? exp.shortDesc;
  const overview = d?.overview ?? exp.description;
  const willExperience = d?.willExperience ?? exp.highlights ?? [];
  const perfectMoments = d?.perfectMoments ?? [];
  const idealFor = d?.idealFor ?? [];
  const flow = d?.flow ?? [];
  const planExperience =
    d?.planExperience ?? [
      `Duration: ${exp.duration}`,
      `Location: ${exp.location}`,
      `Best time to visit: ${exp.bestTime}`,
    ];

  const gallery = exp.gallery && exp.gallery.length > 0 ? exp.gallery : [exp.image];
  const inquiryMsg = `Hi! I'd like to plan the "${exp.title}" experience. Please share details.`;
  const customizeMsg = `Hi! I want to CUSTOMIZE the "${exp.title}" experience. Please help me design it.`;
  const itineraryMsg = `Hi! Please ADD "${exp.title}" to my Rajasthan itinerary.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: exp.title,
    description: exp.description,
    image: gallery,
    touristType: "International tourists",
    provider: {
      "@type": "TravelAgency",
      name: "Heritage Jaipur Travels",
      telephone: "+91-9887688843",
      email: "info@heritagejaipurtravels.com",
      url: "https://www.heritagejaipurtravels.com",
    },
  };

  return (
    <main className="pt-16 md:pt-20 scroll-smooth pb-24 md:pb-0">
      <SEO
        title={`${exp.title} | Heritage Jaipur Travels`}
        description={exp.shortDesc}
        path={`/experiences/${exp.slug}`}
        image={exp.image}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[560px] flex items-end overflow-hidden">
        <img
          src={exp.image}
          alt={exp.title}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[fade-in_1s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative z-10 container mx-auto px-4 pb-14 animate-fade-in">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs md:text-sm text-foreground/80 mb-5"
          >
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/experiences" className="hover:text-primary transition">Experiences</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[60vw]">{exp.title}</span>
          </nav>

          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-xs uppercase tracking-widest mb-4">
            {exp.category}
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 max-w-4xl leading-tight drop-shadow">
            {exp.title}
          </h1>
          <p className="font-serif text-lg md:text-2xl text-foreground/90 max-w-3xl italic mb-6">
            {subtitle}
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap gap-2">
            <Badge icon={Clock} label={exp.duration} />
            <Badge icon={MapPin} label={exp.location} />
            <Badge icon={Calendar} label={exp.bestTime} />
            {exp.experienceType && <Badge icon={Sparkle} label={exp.experienceType} />}
            {exp.groupType && <Badge icon={UserCircle2} label={exp.groupType} />}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 space-y-16">
        <Section icon={Sparkles} title="Experience Overview">
          <p className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line">
            {overview}
          </p>
        </Section>

        {d?.unique?.length ? (
          <Section icon={Crown} title="What Makes This Experience Unique">
            <div className="grid sm:grid-cols-2 gap-4">
              {d.unique.map((u, i) => (
                <div key={i} className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition">
                  <p className="font-semibold text-foreground mb-1">{u.title}</p>
                  <p className="text-sm text-muted-foreground">{u.text}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {willExperience.length > 0 && (
          <Section icon={Star} title="What You Will Experience">
            <Bullets items={willExperience} />
          </Section>
        )}

        {d?.willFeel ? (
          <Section icon={Heart} title="What You Will Feel">
            <blockquote className="p-6 rounded-lg bg-muted/30 border-l-4 border-secondary font-serif italic text-foreground/90 leading-relaxed text-lg">
              {d.willFeel}
            </blockquote>
          </Section>
        ) : null}

        {perfectMoments.length > 0 && (
          <Section icon={Camera} title="Perfect Moments">
            <Bullets items={perfectMoments} />
          </Section>
        )}

        {flow.length > 0 && (
          <Section icon={Footprints} title="Experience Flow">
            <ol className="space-y-4">
              {flow.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full heritage-gradient text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-foreground/90 pt-1.5">{h}</span>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {idealFor.length > 0 && (
          <Section icon={Users} title="Ideal For">
            <Bullets items={idealFor} />
          </Section>
        )}

        {d?.whyLove ? (
          <Section icon={Award} title="Why Travellers Love It">
            <p className="font-serif italic text-foreground/90 text-lg leading-relaxed">
              {d.whyLove}
            </p>
          </Section>
        ) : null}

        <Section icon={Phone} title="Plan Your Experience">
          <Bullets items={planExperience} />
        </Section>
      </div>

      {/* Image Gallery */}
      {gallery.length > 1 && (
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Experience Gallery
            </h2>
            <Carousel opts={{ loop: true }} className="px-6 md:px-12">
              <CarouselContent>
                {gallery.map((src, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <button
                      type="button"
                      onClick={() => setLightbox(src)}
                      className="group relative block w-full aspect-[4/3] overflow-hidden rounded-xl border border-border heritage-shadow"
                      aria-label={`View image ${i + 1} of ${exp.title}`}
                    >
                      <img
                        src={src}
                        alt={`${exp.title} – ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to begin this experience?
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-8">
            Speak with our Rajasthan specialist — we'll arrange every detail personally for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waLink(inquiryMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold shadow-lg hover:opacity-90 transition hover-scale"
            >
              <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
            </a>
            <a
              href={waLink(customizeMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md heritage-gradient text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition hover-scale"
            >
              <Sparkle className="h-5 w-5" /> Customize This Experience
            </a>
            <a
              href={waLink(itineraryMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-secondary-foreground transition hover-scale"
            >
              <PlusCircle className="h-5 w-5" /> Add to Rajasthan Itinerary
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground inline-flex items-center gap-2 justify-center">
            <Phone className="h-4 w-4 text-secondary" /> +91 9887688843
          </p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-14 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              You May Also Enjoy
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/experiences/${r.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border heritage-shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{r.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky mobile booking CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border p-3 shadow-2xl">
        <a
          href={waLink(inquiryMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[hsl(142,70%,40%)] text-white font-semibold"
        >
          <MessageCircle className="h-5 w-5" /> Enquire About This Experience
        </a>
      </div>

      {/* Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-border">
          {lightbox && (
            <div className="relative">
              <img
                src={lightbox}
                alt={exp.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background border border-border"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ExperienceDetail;
