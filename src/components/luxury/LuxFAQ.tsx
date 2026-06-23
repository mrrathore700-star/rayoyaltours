import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxLinkBtn } from "./LuxButton";

const faqs = [
  {
    q: "Is Rajasthan safe for travelers?",
    a: "Yes. Rajasthan is one of India's most visited states and is considered safe for families, couples, solo travelers and groups. Our team supports you throughout the trip with reliable transport, local guidance and WhatsApp assistance whenever you need it.",
  },
  {
    q: "What is the best time to visit Rajasthan?",
    a: "October to March is the most comfortable season, with pleasant weather for sightseeing, heritage walks, wildlife safaris and desert stays. We can also plan trips during other months — just share your dates and we'll suggest the best routes.",
  },
  {
    q: "Do you provide private drivers?",
    a: "Yes. We provide our own chauffeur-driven cars, SUVs and tempo travellers across Rajasthan. Our drivers are experienced, local, and have worked with us for years.",
  },
  {
    q: "Can itineraries be customized?",
    a: "Yes. Every itinerary is built around your travel dates, interests, destinations, hotels and pace. You can change the number of days, add or remove cities, and choose between heritage, budget or premium hotels.",
  },
  {
    q: "Do you arrange airport transfers?",
    a: "Yes. We arrange airport and railway station pickups and drop-offs in Jaipur and across Rajasthan, including late-night arrivals.",
  },
  {
    q: "Do you offer heritage and premium hotel bookings?",
    a: "Yes. We can book heritage hotels, palace stays, boutique properties, mid-range hotels or budget accommodations — based on what suits your trip.",
  },
  {
    q: "Do you organize Golden Triangle tours?",
    a: "Yes. We arrange Delhi–Agra–Jaipur tours, with optional add-ons to Ranthambore, Udaipur, Jodhpur, Jaisalmer, Pushkar and other destinations.",
  },
  {
    q: "How many days do I need for Rajasthan?",
    a: "Most travelers spend 7 to 14 days in Rajasthan, depending on how many cities they want to cover. Shorter 4–6 day trips around Jaipur are also popular. Share your dates and we'll suggest a route that fits.",
  },
];

const LuxFAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="lux-cream-bg py-24 md:py-32 border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          intro="Practical answers to help you plan your Rajasthan trip with our Jaipur-based team."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-[#C9A84C]/30 bg-white/55 backdrop-blur-sm rounded-sm px-6 md:px-8 transition-colors duration-300 hover:border-[#C9A84C]/60 data-[state=open]:border-[#C9A84C]"
              >
                <AccordionTrigger className="font-display text-left text-base md:text-lg text-[#6E0F1F] font-semibold py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-serif text-[15px] md:text-base leading-relaxed text-[#0F0F0F]/75 pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-14 max-w-2xl mx-auto">
          <p className="font-serif italic text-base md:text-lg text-[#0F0F0F]/65 mb-6">
            Have another question? Message our Jaipur office and we'll get back to you with practical advice for your trip.
          </p>
          <LuxLinkBtn to="/contact" variant="gold">
            Contact Our Jaipur Team
          </LuxLinkBtn>
        </div>
      </div>
    </section>
  );
};

export default LuxFAQ;
