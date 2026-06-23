import { Award, UserCheck, Route, Car, Sparkles, Headphones } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";

const features = [
  {
    icon: Award,
    title: "20+ Years in Rajasthan Travel",
    text: "A Jaipur-based family business planning private Rajasthan tours for travelers from India and around the world since 2003.",
  },
  {
    icon: UserCheck,
    title: "Private Tours, Not Group Tours",
    text: "Every tour is private — just you, your family or your friends, with your own driver and itinerary.",
  },
  {
    icon: Route,
    title: "Customized Itineraries",
    text: "We plan each itinerary around your dates, interests, budget and pace — not a fixed schedule.",
  },
  {
    icon: Car,
    title: "Experienced Local Drivers",
    text: "Our drivers are from Rajasthan, know every route, and have looked after travelers on our team for years.",
  },
  {
    icon: Sparkles,
    title: "Real Local Knowledge",
    text: "Heritage walks, village visits, food stops and artisan meetings recommended by people who actually live here.",
  },
  {
    icon: Headphones,
    title: "Direct WhatsApp Support",
    text: "Reach our Jaipur office anytime on phone or WhatsApp — before, during and after your trip.",
  },
];

const LuxWhyChoose = () => (
  <section className="lux-cream-bg py-24 md:py-32 border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Why Travel With Us"
        title="Why Choose Heritage Jaipur Travels"
        intro="A Jaipur-based, family-run travel company offering private Rajasthan tours, chauffeur services and customized itineraries — for travelers from India and around the world."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group p-8 md:p-10 bg-white/55 backdrop-blur-sm border border-[#C9A84C]/30 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-[0_18px_40px_-18px_rgba(110,15,31,0.35)]"
          >
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-6 transition-transform duration-500 group-hover:scale-110">
              <Icon className="h-6 w-6 text-[#C9A84C]" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl md:text-2xl text-[#6E0F1F] font-semibold mb-3 leading-snug">
              {title}
            </h3>
            <p className="font-serif text-[15px] md:text-base leading-relaxed text-[#0F0F0F]/70">
              {text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center font-serif italic text-base md:text-lg text-[#0F0F0F]/65 max-w-3xl mx-auto mt-16">
        Trusted by families, couples, friends and solo travelers from India and around the world.
      </p>
    </div>
  </section>
);

export default LuxWhyChoose;
