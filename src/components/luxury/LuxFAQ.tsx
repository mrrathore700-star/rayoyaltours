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
    q: "Is Rajasthan safe for international travelers?",
    a: "Yes. Rajasthan is one of India's most popular destinations for international travelers. We assist guests throughout their journey and provide reliable transportation, local expertise, and travel support.",
  },
  {
    q: "What is the best time to visit Rajasthan?",
    a: "The most comfortable travel season is from October to March, when the weather is pleasant for sightseeing, cultural experiences, wildlife safaris, and heritage stays.",
  },
  {
    q: "Do you provide private drivers?",
    a: "Yes. We offer professional chauffeur-driven vehicles for individuals, couples, families, and private groups throughout Rajasthan.",
  },
  {
    q: "Can itineraries be customized?",
    a: "Absolutely. Every itinerary can be tailored according to your interests, travel dates, preferred destinations, accommodation style, and pace of travel.",
  },
  {
    q: "Do you arrange airport transfers?",
    a: "Yes. We provide airport and railway station transfers in Jaipur and across Rajasthan for a smooth arrival and departure experience.",
  },
  {
    q: "Do you offer luxury Rajasthan tours?",
    a: "Yes. We specialize in luxury Rajasthan experiences including heritage hotels, palace stays, private guides, exclusive cultural experiences, and personalized travel planning.",
  },
  {
    q: "Do you organize Golden Triangle tours?",
    a: "Yes. We offer customized Golden Triangle tours covering Delhi, Agra, and Jaipur, with optional extensions to Ranthambore, Udaipur, Jodhpur, Jaisalmer, and other destinations.",
  },
  {
    q: "How many days are recommended for Rajasthan?",
    a: "A well-planned Rajasthan trip typically ranges from 7 to 14 days depending on the destinations and experiences you wish to include.",
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
          intro="Everything you need to know before planning your Rajasthan journey."
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
            Still have questions? Contact Heritage Jaipur Travels and our team will be happy to help plan your Rajasthan journey.
          </p>
          <LuxLinkBtn to="/contact" variant="gold">
            Contact Our Team
          </LuxLinkBtn>
        </div>
      </div>
    </section>
  );
};

export default LuxFAQ;
