import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, XCircle, MapPin, Calendar, Users, Star, Plane, Hotel, Send } from "lucide-react";
import { tourDetails } from "@/data/tourDetails";
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
          <h1 className="font-display text-3xl font-bold mb-4">Tour Not Found</h1>
          <Link to="/packages" className="text-primary hover:underline">← Back to Packages</Link>
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
      `Hi! I'm interested in the ${tour.title}.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTravelers: ${form.travelers}\nPreferred Date: ${form.date}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919461069858?text=${whatsappMsg}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "Our team will respond shortly." });
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>{tour.metaTitle}</title>
        <meta name="description" content={tour.metaDescription} />
        <meta name="keywords" content={tour.seoKeywords.join(", ")} />
        <meta property="og:title" content={tour.metaTitle} />
        <meta property="og:description" content={tour.metaDescription} />
      </Helmet>

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 heritage-gradient text-primary-foreground">
          <div className="absolute inset-0 mandala-bg opacity-20" />
          <div className="relative container mx-auto px-4">
            <Link to="/packages" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to All Packages
            </Link>
            <p className="font-serif text-lg text-secondary italic mb-2">"{tour.tagline}"</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {tour.duration}</span>
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {tour.highlights.slice(0, 3).join(", ")}</span>
              <a href="#book" className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-bold hover:opacity-90 transition-opacity">Contact Us for Pricing</a>
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
            <SectionHeading title="Arrival & Departure" subtitle="Flexible pickup and drop options for your convenience" />
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
                <p className="mt-4 text-xs text-muted-foreground italic">Our driver will greet you with a placard and assist with luggage.</p>
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
                <p className="mt-4 text-xs text-muted-foreground italic">Private air-conditioned vehicle with professional driver throughout.</p>
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
                    {day.overnight && (
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
                  <Star className="h-6 w-6 text-secondary" /> Why Choose This Tour?
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
            <SectionHeading title="Book This Tour" subtitle="Fill in your details and we'll get back to you instantly" />
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
                  <label className="block text-sm font-semibold text-foreground mb-1">No. of Travelers</label>
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
                  <Send className="h-4 w-4" /> Book via WhatsApp
                </button>
                <a
                  href={`https://wa.me/919461069858?text=${encodeURIComponent(`Hi! I'm interested in the ${tour.title}. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-md gold-gradient text-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  Get Instant Quote
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default TourDetail;
