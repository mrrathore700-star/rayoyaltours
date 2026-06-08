import { Award, UserCheck, Route, Car, Sparkles, Headphones } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    text: "Over two decades of expertise creating memorable Rajasthan journeys for travelers from around the world.",
  },
  {
    icon: UserCheck,
    title: "Private Rajasthan Specialists",
    text: "Dedicated private tours designed around your interests, travel style, and pace.",
  },
  {
    icon: Route,
    title: "Personalized Itineraries",
    text: "Every itinerary is carefully tailored to match your preferences, schedule, and travel goals.",
  },
  {
    icon: Car,
    title: "Local Expert Drivers",
    text: "Travel with experienced local drivers who know Rajasthan's roads, culture, and hidden gems.",
  },
  {
    icon: Sparkles,
    title: "Authentic Cultural Experiences",
    text: "Go beyond sightseeing with heritage walks, village visits, artisan encounters, and local traditions.",
  },
  {
    icon: Headphones,
    title: "24/7 Travel Support",
    text: "Enjoy peace of mind with dedicated assistance before, during, and throughout your journey.",
  },
];

const LuxWhyChoose = () => (
  <section className="lux-cream-bg py-24 md:py-32 border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Why Choose Us"
        title="Why Choose Heritage Jaipur Travels"
        intro="Discover Rajasthan with a trusted local travel specialist offering personalized journeys, authentic experiences, and seamless travel planning."
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
        Trusted by international travelers seeking authentic, private, and unforgettable Rajasthan experiences.
      </p>
    </div>
  </section>
);

export default LuxWhyChoose;
