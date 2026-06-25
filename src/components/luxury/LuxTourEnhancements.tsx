import { Link } from "react-router-dom";

import {
  CheckCircle,
  Plane,
  Train,
  Hotel,
  MapPin,
  Clock,
  Globe,
  Tag,
  Car,
  Languages as LanguagesIcon,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { tours, type TourSummary } from "@/data/tours";

interface FAQ { q: string; a: string }

interface Props {
  tourTitle: string;
  slug?: string;
  duration: string;
  destinations: string[];
  tourType: string;
  startLocation: string;
  endLocation: string;
  priceLabel?: string;
  isDayTour?: boolean;
  faqs?: FAQ[];
  hideFaqs?: boolean;
  relatedBasePath?: string;
  relatedTours?: { slug: string; title: string; image: string; duration: string; href?: string }[];
}

const defaultFaqs: FAQ[] = [
  { q: "Is this a private tour?", a: "Yes — every Heritage Jaipur Travels journey is operated privately for you and your travel companions, with a dedicated chauffeur and vehicle throughout." },
  { q: "Can the itinerary be customized?", a: "Absolutely. We tailor the pace, hotels, included experiences and routing to match your interests, travel dates and budget." },
  { q: "Are entrance tickets included?", a: "Monument entrance fees are typically excluded so we can pass on the exact ticket cost without markup. We can pre-book them on your behalf on request." },
  { q: "What hotel categories are available?", a: "We arrange 3-star, 4-star, 5-star and authentic Heritage Palace hotels. Share your preference and we'll curate the right stays." },
  { q: "Can airport transfers be arranged?", a: "Yes — airport, railway station and hotel pickups and drops can be arranged in Jaipur, Delhi, Udaipur, Jodhpur and other major cities." },
  { q: "Is this tour suitable for families?", a: "Yes. Private vehicles, flexible timings and family-friendly hotels make this ideal for families with children and senior travellers." },
];

const enhancements = [
  { title: "Heritage Palace Hotels", desc: "Stay in restored royal palaces and havelis curated for an unforgettable experience." },
  { title: "Hot Air Balloon, Jaipur", desc: "Float above Amer's forts and lakes at sunrise — a rare aerial perspective of the Pink City." },
  { title: "Udaipur Boat Ride", desc: "Private sunset cruise on Lake Pichola with views of Jag Mandir and the City Palace." },
  { title: "Leopard Safari at Jawai", desc: "Track wild leopards across the granite hills of Jawai with expert naturalists." },
  { title: "Luxury Desert Camp", desc: "Dune dinners, folk performances and a night under the Thar's star-strewn sky." },
  { title: "Professional Tour Guide", desc: "Government-licensed multilingual guides in every city for deeper cultural context." },
];

const LuxTourEnhancements = ({
  tourTitle,
  slug,
  duration,
  destinations,
  tourType,
  startLocation,
  endLocation,
  priceLabel,
  isDayTour = false,
  faqs,
  hideFaqs = false,
  relatedBasePath = "/packages",
  relatedTours,
}: Props) => {
  const finalFaqs = faqs && faqs.length ? faqs : defaultFaqs;
  const finalPrice = priceLabel || (isDayTour ? "Starting From ₹2,500" : "Custom Pricing Available");

  const fallbackRelated: TourSummary[] = tours
    .filter((t) => t.slug && t.slug !== slug)
    .slice(0, 4);
  const related =
    relatedTours && relatedTours.length
      ? relatedTours
      : fallbackRelated.map((t) => ({
          slug: t.slug!,
          title: t.title,
          image: t.image,
          duration: t.duration,
        }));

  const quote = (msg: string) =>
    `https://wa.me/919887688843?text=${encodeURIComponent(msg)}`;

  const enquireHref = (() => {
    const p = new URLSearchParams();
    p.set("tour", tourTitle);
    if (duration) p.set("duration", duration);
    if (destinations?.length) p.set("destination", destinations.join(", "));
    if (tourType) p.set("type", tourType);
    return `/enquire?${p.toString()}`;
  })();

  return (
    <>
      {/* Pickup Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading title="Pickup Information" subtitle="Flexible pickup options across Jaipur and beyond." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Plane, label: "Jaipur Airport Pickup" },
              { icon: Train, label: "Jaipur Railway Station" },
              { icon: Hotel, label: "Jaipur Hotel Pickup" },
              { icon: MapPin, label: "Custom Pickup Available" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-card rounded-lg p-5 heritage-shadow border border-[#C9A84C]/20 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#FFF8F0] border border-[#C9A84C]/40 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#C9A84C]" />
                </span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Tour Details" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, label: "Duration", value: duration },
              { icon: Globe, label: "Destinations Covered", value: destinations.join(" · ") || "Rajasthan" },
              { icon: Tag, label: "Tour Type", value: tourType },
              { icon: Car, label: "Transportation", value: "Private Air-Conditioned Vehicle" },
              { icon: MapPin, label: "Start Location", value: startLocation },
              { icon: MapPin, label: "End Location", value: endLocation },
            ].map((c) => (
              <div key={c.label} className="bg-card rounded-lg p-6 heritage-shadow border border-[#C9A84C]/20">
                <div className="flex items-center gap-3 mb-2">
                  <c.icon className="h-5 w-5 text-[#C9A84C]" />
                  <p className="font-display text-[11px] tracking-[0.18em] uppercase text-[#7A5C1E]">{c.label}</p>
                </div>
                <p className="text-foreground font-medium">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-7 heritage-shadow border border-[#C9A84C]/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                <LanguagesIcon className="h-5 w-5 text-[#C9A84C]" /> Available Languages
              </h3>
              <ul className="space-y-2.5">
                {["English", "Hindi"].map((l) => (
                  <li key={l} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0" /> {l}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Additional language guides (French, Spanish, German, Italian, Japanese) available on request.
              </p>
            </div>

            <div className="bg-[#0F0F0F] text-[#FFF8F0] rounded-lg p-7 heritage-shadow border border-[#C9A84C]/30">
              <p className="font-display text-[11px] tracking-[0.22em] uppercase text-[#C9A84C] mb-2">Pricing</p>
              <p className="font-display text-3xl md:text-4xl font-semibold mb-4">{finalPrice}</p>
              {!isDayTour && (
                <ul className="space-y-1.5 text-sm text-[#FFF8F0]/80 mb-5">
                  {["Travel Dates", "Hotel Category", "Number of Travellers", "Room Preferences", "Included Experiences"].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" /> {p}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to={enquireHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full lux-btn-gold tracking-[0.18em] uppercase text-xs font-display"
              >
                <Send className="h-4 w-4" /> Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 sand-gradient">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Cancellation Policy" />
          <div className="bg-card rounded-lg p-7 heritage-shadow border border-[#C9A84C]/20">
            <ul className="space-y-3">
              {[
                "Free cancellation up to 48 hours before departure.",
                "Date changes are subject to availability and hotel policies.",
                "Special cancellation terms may apply during peak season and festivals.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <ShieldCheck className="h-5 w-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Enhance Your Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Enhance Your Journey" subtitle="Optional experiences to elevate your Rajasthan tour." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {enhancements.map((e) => (
              <div key={e.title} className="bg-card rounded-lg p-6 heritage-shadow border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-colors">
                <Sparkles className="h-5 w-5 text-[#C9A84C] mb-3" />
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{e.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (only render if caller didn't already render one) */}
      {!hideFaqs && (
        <section className="py-16 sand-gradient">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeading title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="space-y-4">
              {finalFaqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`enh-${i}`}
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
      )}

      {/* Booking CTA */}
      <section className="py-20 lux-black-bg text-[#FFF8F0]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="lux-eyebrow text-[#C9A84C]">Ready To Book This Tour?</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 mb-5">
            Plan This Tour With Our Jaipur Team
          </h2>
          <p className="text-[#FFF8F0]/75 mb-8 max-w-xl mx-auto">
            Share your dates and we'll send a personalized quote with hotel options, pricing and a day-by-day plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={enquireHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full lux-btn-gold tracking-[0.18em] uppercase text-xs font-display"
            >
              <Send className="h-4 w-4" /> Request Quote
            </Link>
            <a
              href={quote(`Hello Heritage Jaipur Travels,\n\nI am interested in ${tourTitle}.\n\nTravel Dates:\nNumber of Travelers:\n\nPlease share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full lux-btn-outline tracking-[0.18em] uppercase text-xs font-display"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {related.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading title="Related Tours" subtitle="Other journeys travellers loved." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.slice(0, 4).map((t) => {
                const href = (t as any).href || `${relatedBasePath}/${t.slug}`;
                return (
                  <Link
                    key={t.slug}
                    to={href}
                    className="group bg-card rounded-lg overflow-hidden heritage-shadow border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={t.image}
                        alt={t.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-display text-[10px] tracking-[0.18em] uppercase text-[#7A5C1E] mb-2">
                        {t.duration}
                      </p>
                      <h4 className="font-display text-base font-semibold text-foreground mb-3 leading-snug">
                        {t.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs tracking-[0.18em] uppercase font-display text-[#C9A84C] group-hover:text-[#6E0F1F] transition-colors">
                        View Details →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LuxTourEnhancements;
