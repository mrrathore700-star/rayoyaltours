import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  MapPin,
  Calendar,
  Clock,
  Star,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { dayTours } from "@/data/dayTours";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import LuxTourEnhancements from "@/components/luxury/LuxTourEnhancements";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DayTourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = slug ? dayTours[slug] : null;
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  if (!tour) {
    return (
      <main className="pt-24 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold mb-4">Day Tour Not Found</h1>
          <Link to="/packages" className="text-primary hover:underline">
            ← Back to Journeys
          </Link>
        </div>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const whatsappMsg = encodeURIComponent(
      `Hello, I would like to enquire about the ${tour.title}.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTravellers: ${form.travelers}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919887688843?text=${whatsappMsg}`, "_blank");
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your specialist will be in touch shortly.",
    });
    setSubmitting(false);
  };

  const canonical = `https://www.heritagejaipurtravels.com/day-tours/${slug}`;

  return (
    <>
      <Helmet>
        <title>{tour.metaTitle}</title>
        <meta name="description" content={tour.metaDescription} />
        <meta name="keywords" content={tour.seoKeywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tour.metaTitle} />
        <meta property="og:description" content={tour.metaDescription} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: tour.title,
            description: tour.metaDescription,
            url: canonical,
            provider: {
              "@type": "TravelAgency",
              name: "Heritage Jaipur Travels",
              telephone: "+919887688843",
              url: "https://www.heritagejaipurtravels.com",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tour.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <main className="lux-cream-bg">
        {/* Hero */}
        <section className="relative min-h-[70vh] md:min-h-[78vh] flex items-end overflow-hidden lux-black-bg">
          <div className="absolute inset-0">
            <img
              src={tour.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover lux-ken-burns"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)",
              }}
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24 pt-32 text-[#FFF8F0]">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#FFF8F0] mb-6 text-xs tracking-[0.18em] uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All Journeys
            </Link>
            <div className="inline-flex items-center gap-3 mb-5 flex-wrap">
              <span className="lux-rule-gold" />
              <span className="lux-eyebrow">Private Day Tour</span>
              {tour.badge && (
                <span className="px-3 py-1 rounded-full bg-[#C9A84C] text-[#0F0F0F] font-display text-[10px] tracking-[0.18em] uppercase shadow-md">
                  {tour.badge}
                </span>
              )}
            </div>
            <p className="font-serif italic text-lg md:text-xl text-[#C9A84C] mb-3">
              "{tour.tagline}"
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6 max-w-4xl">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="flex items-center gap-2 text-sm text-[#FFF8F0]/80">
                <Calendar className="h-4 w-4 text-[#C9A84C]" /> {tour.duration}
              </span>
              <span className="flex items-center gap-2 text-sm text-[#FFF8F0]/80">
                <MapPin className="h-4 w-4 text-[#C9A84C]" />{" "}
                {tour.places.slice(0, 4).map((p) => p.name).join(" · ")}
              </span>
              <a
                href={`https://wa.me/919887688843?text=${encodeURIComponent(`Hi! Please check availability for the ${tour.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-full lux-btn-gold tracking-[0.18em] uppercase text-xs font-display"
              >
                Check Availability
              </a>
              <a
                href="#enquire"
                className="inline-flex items-center px-5 py-2 rounded-full lux-btn-outline tracking-[0.18em] uppercase text-xs font-display text-[#FFF8F0] border-[#C9A84C]/60"
              >
                Request Quote
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading title="Tour Overview" />
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              {tour.overview}
            </p>
          </div>
        </section>

        <LuxInlineCta
          tone="cream"
          eyebrow="Like This Day Tour?"
          heading={<>Customize the route, pickup or pace to suit you.</>}
          primary={{ label: "Customize This Tour", to: "/contact", icon: "send" }}
          secondary={{ label: "WhatsApp Us", href: `https://wa.me/919887688843?text=${encodeURIComponent(`Hi! I'd like to customize the ${tour.title}.`)}`, external: true, icon: "wa" }}
          compact
        />


        {/* Places Covered */}
        <section className="py-20 sand-gradient">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading
              title="Places Covered"
              subtitle="Monument information, opening hours and what to expect at each stop."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tour.places.map((place, i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg p-6 heritage-shadow border border-[#C9A84C]/20 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#C9A84C] text-[#0F0F0F] w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {place.name}
                    </h3>
                  </div>
                  {place.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {place.description}
                    </p>
                  )}
                  {place.bullets && place.bullets.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {place.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-[#C9A84C] shrink-0 mt-0.5" />{" "}
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {place.hours && (
                    <div className="mt-auto pt-4 border-t border-[#C9A84C]/20">
                      <p className="font-display text-[11px] tracking-[0.16em] uppercase text-[#7A5C1E] mb-1.5 flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" /> {place.hoursLabel ?? "Opening Hours"}
                      </p>
                      {Array.isArray(place.hours) ? (
                        <ul className="space-y-1">
                          {place.hours.map((h, hi) => (
                            <li key={hi} className="text-sm font-medium text-foreground">
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{place.hours}</p>
                      )}
                      {place.hoursNote && (
                        <p className="mt-1.5 text-xs italic text-muted-foreground">
                          {place.hoursNote}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading title="Tour Highlights" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tour.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg p-4 heritage-shadow flex items-center gap-3 border border-[#C9A84C]/15"
                >
                  <Star className="h-5 w-5 text-[#C9A84C] shrink-0" />
                  <span className="text-foreground font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="py-20 sand-gradient">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-7 heritage-shadow">
                <h3 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" /> Inclusions
                </h3>
                <ul className="space-y-2.5">
                  {tour.inclusions.map((inc, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />{" "}
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-7 heritage-shadow">
                <h3 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" /> Exclusions
                </h3>
                <ul className="space-y-2.5">
                  {tour.exclusions.map((exc, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />{" "}
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <LuxInlineCta
          tone="white"
          eyebrow="Ready To Book?"
          heading={<>Check availability and get a quick price.</>}
          primary={{ label: "Check Availability", href: `https://wa.me/919887688843?text=${encodeURIComponent(`Hi! Please check availability for the ${tour.title}.`)}`, external: true, icon: "wa" }}
          secondary={{ label: "Request Quote", to: "/contact", icon: "send" }}
          compact
        />


        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Everything you need to know before booking your day tour."
            />
            <Accordion type="single" collapsible className="space-y-4">
              {tour.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-[#C9A84C]/30 bg-card rounded-sm px-6 transition-colors duration-300 hover:border-[#C9A84C]/60 data-[state=open]:border-[#C9A84C]"
                >
                  <AccordionTrigger className="font-display text-left text-base md:text-lg text-[#6E0F1F] font-semibold py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-serif text-[15px] md:text-base leading-relaxed text-foreground/75 pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Enquiry CTA */}
        <section className="py-20 sand-gradient" id="enquire">
          <div className="container mx-auto px-4 max-w-2xl">
            <SectionHeading
              title="Enquire About This Day Tour"
              subtitle="Share your details and our specialist will respond shortly."
            />
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-lg p-8 heritage-shadow space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    maxLength={255}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">
                    Number of Travellers
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={form.travelers}
                    onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Preferred Travel Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  maxLength={1000}
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-md heritage-gradient text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" /> Enquire via WhatsApp
                </button>
                <a
                  href={`https://wa.me/919887688843?text=${encodeURIComponent(
                    `Hello, I would like to enquire about the ${tour.title}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-md gold-gradient text-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" /> Get a Quick Quote
                </a>
              </div>
            </form>
          </div>
        </section>

        <LuxTourEnhancements
          tourTitle={tour.title}
          slug={slug}
          duration={tour.duration}
          destinations={tour.places.map((p) => p.name)}
          tourType="Private Day Tour"
          startLocation="Jaipur"
          endLocation="Jaipur"
          isDayTour
          hideFaqs
          relatedBasePath="/packages"
        />
      </main>
    </>
  );
};

export default DayTourDetail;
