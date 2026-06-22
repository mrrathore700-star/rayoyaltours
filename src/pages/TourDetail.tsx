import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, XCircle, MapPin, Calendar, Users, Star, Plane, Hotel, Send } from "lucide-react";
import { tourDetails } from "@/data/tourDetails";
import { tours } from "@/data/tours";
import LuxTourEnhancements from "@/components/luxury/LuxTourEnhancements";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = slug ? tourDetails[slug] : null;
  const { toast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", phone: "", travelers: "2", date: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!tour) {
    return (
      <main className="pt-24 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold mb-4">Journey Not Found</h1>
          <Link to="/packages" className="text-primary hover:underline">← Back to Journeys</Link>
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
    toast({ title: "Redirecting to WhatsApp!", description: "Your specialist will be in touch shortly." });
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>{tour.metaTitle}</title>
        <meta name="description" content={tour.metaDescription} />
        <meta name="keywords" content={tour.seoKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.heritagejaipurtravels.com/packages/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tour.metaTitle} />
        <meta property="og:description" content={tour.metaDescription} />
        <meta property="og:url" content={`https://www.heritagejaipurtravels.com/packages/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tour.metaTitle} />
        <meta name="twitter:description" content={tour.metaDescription} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": tour.title,
          "description": tour.metaDescription,
          "url": `https://www.heritagejaipurtravels.com/packages/${slug}`,
          "touristType": tour.idealFor,
          "itinerary": tour.itinerary.map((d) => ({
            "@type": "ItemList",
            "name": `Day ${d.day}: ${d.title}`,
            "itemListElement": d.activities,
          })),
          "provider": {
            "@type": "TravelAgency",
            "name": "Heritage Jaipur Travels",
            "telephone": "+919887688843",
            "url": "https://www.heritagejaipurtravels.com",
          },
        })}</script>
      </Helmet>

      <main className="lux-cream-bg">
        {/* Cinematic Hero */}
        <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-end overflow-hidden lux-black-bg">
          <div className="absolute inset-0">
            <img
              src={tours.find((t) => t.slug === slug)?.image || ""}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover lux-ken-burns"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)" }}
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24 pt-32 text-[#FFF8F0]">
            <Link to="/packages" className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#FFF8F0] mb-6 text-xs tracking-[0.18em] uppercase transition-colors">
              <ArrowLeft className="h-4 w-4" /> All Journeys
            </Link>
            <div className="inline-flex items-center gap-3 mb-5 flex-wrap">
              <span className="lux-rule-gold" />
              <span className="lux-eyebrow">Signature Journey</span>
              {tours.find((t) => t.slug === slug)?.badge && (
                <span className="px-3 py-1 rounded-full bg-[#C9A84C] text-[#0F0F0F] font-display text-[10px] tracking-[0.18em] uppercase shadow-md">
                  {tours.find((t) => t.slug === slug)?.badge}
                </span>
              )}
            </div>
            <p className="font-serif italic text-lg md:text-xl text-[#C9A84C] mb-3">"{tour.tagline}"</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6 max-w-4xl">{tour.title}</h1>

            <div className="flex flex-wrap gap-6 text-sm text-[#FFF8F0]/80">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[#C9A84C]" /> {tour.duration}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C9A84C]" /> {tours.find((t) => t.slug === slug)?.highlights.join(" · ") || "Rajasthan"}</span>
              <a href="#book" className="inline-flex items-center px-5 py-2 rounded-full lux-btn-gold tracking-[0.18em] uppercase text-xs font-display">Inquire</a>
            </div>
          </div>
        </section>


        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading title="Tour Overview" />
            <p className="text-muted-foreground text-lg leading-relaxed">{tour.overview}</p>
          </div>
        </section>

        {/* Arrival & Departure */}
        <section className="py-16 sand-gradient">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading title="Arrival & Departure" subtitle="Flexible arrival and departure arrangements for your journey" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 heritage-shadow">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-primary" /> Arrival Options
                </h3>
                <ul className="space-y-2">
                  {tour.arrivalOptions.map((opt, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> {opt}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground italic">Your chauffeur will greet you by name and assist with your luggage.</p>
              </div>
              <div className="bg-card rounded-lg p-6 heritage-shadow">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-primary rotate-45" /> Departure Options
                </h3>
                <ul className="space-y-2">
                  {tour.departureOptions.map((opt, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> {opt}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground italic">Private air-conditioned vehicle with a dedicated chauffeur throughout.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Day-by-Day Itinerary */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading title="Day-by-Day Itinerary" />
            <div className="space-y-6">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="bg-card rounded-lg overflow-hidden heritage-shadow">
                  <div className="heritage-gradient text-primary-foreground px-6 py-3 flex items-center gap-3">
                    <span className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                      D{day.day}
                    </span>
                    <h3 className="font-display font-bold text-lg">{day.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {act}
                        </li>
                      ))}
                    </ul>
                    {day.note && (
                      <div className="mt-5 rounded-lg border border-[#C9A84C]/40 bg-[#FFF8F0] p-5">
                        <p className="font-display text-sm tracking-[0.16em] uppercase text-[#7A5C1E] mb-3">
                          {day.note.title}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {day.note.options.map((opt, oi) => (
                            <div key={oi} className="bg-card rounded-md p-4 border border-border">
                              <p className="font-semibold text-foreground mb-2">{opt.label}</p>
                              <ul className="space-y-1">
                                {opt.details.map((d, di) => (
                                  <li key={di} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-[#C9A84C] shrink-0 mt-0.5" /> {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {day.note.footer && (
                          <p className="mt-3 text-xs italic text-muted-foreground">{day.note.footer}</p>
                        )}
                      </div>
                    )}
                    {day.overnight && day.overnight !== "—" && (
                      <p className="mt-4 text-sm font-semibold text-foreground flex items-center gap-2">
                        <Hotel className="h-4 w-4 text-secondary" /> Overnight stay in {day.overnight}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 sand-gradient mandala-bg">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading title="Tour Highlights" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tour.highlights.map((h, i) => (
                <div key={i} className="bg-card rounded-lg p-4 heritage-shadow flex items-center gap-3">
                  <Star className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodation, Inclusions, Exclusions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 heritage-shadow">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-primary" /> Accommodation
                </h3>
                <ul className="space-y-2">
                  {tour.accommodationOptions.map((opt, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" /> {opt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 heritage-shadow">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" /> Inclusions
                </h3>
                <ul className="space-y-2">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 heritage-shadow">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" /> Exclusions
                </h3>
                <ul className="space-y-2">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-destructive shrink-0" /> {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For & Why Choose */}
        <section className="py-16 sand-gradient">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" /> Ideal For
                </h3>
                <ul className="space-y-3">
                  {tour.idealFor.map((item, i) => (
                    <li key={i} className="bg-card rounded-lg p-3 heritage-shadow text-foreground font-medium">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6 text-secondary" /> Why Choose This Journey?
                </h3>
                <ul className="space-y-3">
                  {tour.whyChoose.map((item, i) => (
                    <li key={i} className="bg-card rounded-lg p-3 heritage-shadow text-foreground font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-background" id="book">
          <div className="container mx-auto px-4 max-w-2xl">
            <SectionHeading title="Enquire About This Journey" subtitle="Share your details and our specialist will respond shortly" />
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 heritage-shadow space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Name *</label>
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
                  <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
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
                  <label className="block text-sm font-semibold text-foreground mb-1">Phone / WhatsApp *</label>
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
                  <label className="block text-sm font-semibold text-foreground mb-1">Number of Travellers</label>
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
                <label className="block text-sm font-semibold text-foreground mb-1">Preferred Travel Date</label>
                <input
                  type="date"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Special Requests</label>
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
                  href={`https://wa.me/919887688843?text=${encodeURIComponent(`Hello, I would like to enquire about the ${tour.title}. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-md gold-gradient text-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  Get a Quick Quote
                </a>
              </div>
            </form>
          </div>
        </section>

        <LuxTourEnhancements
          tourTitle={tour.title}
          slug={slug}
          duration={tour.duration}
          destinations={tours.find((t) => t.slug === slug)?.highlights || []}
          tourType="Multi-Day Private Tour"
          startLocation={tour.arrivalOptions[0] || "Jaipur"}
          endLocation={tour.departureOptions[0] || "Jaipur"}
          priceLabel="Custom Pricing Available"
          relatedBasePath="/packages"
        />
      </main>
    </>
  );
};

export default TourDetail;
