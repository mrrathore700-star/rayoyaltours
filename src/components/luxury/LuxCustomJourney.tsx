import { useState } from "react";
import { Check, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import royalTour from "@/assets/royal-tour.jpg";

const features = [
  "Customized Itineraries",
  "Private Tours & Drivers",
  "Heritage & Premium Hotels",
  "Flexible Travel Dates",
  "Local Rajasthan Experts",
  "WhatsApp & Phone Support",
];

const WA_NUMBER = "919887688843";

const LuxCustomJourney = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    dates: "",
    travelers: "",
    destinations: "",
    requirements: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please share your name and email.");
      return;
    }
    const msg = [
      "Hi Heritage Jaipur Travels! I'd like to plan a custom Rajasthan journey.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.whatsapp && `WhatsApp: ${form.whatsapp}`,
      form.dates && `Travel Dates: ${form.dates}`,
      form.travelers && `Travelers: ${form.travelers}`,
      form.destinations && `Destinations: ${form.destinations}`,
      form.requirements && `Special Requirements: ${form.requirements}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp — our specialist will reply shortly.");
  };

  return (
    <section className="relative overflow-hidden lux-black-bg">
      <div className="absolute inset-0">
        <img
          src={royalTour}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover lux-ken-burns"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.78) 0%, rgba(15,15,15,0.88) 60%, rgba(15,15,15,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left: pitch */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="lux-rule-gold" />
              <span className="lux-eyebrow">Customized Tours</span>
            </div>
            <h2 className="font-display font-semibold text-[#FFF8F0] text-3xl md:text-5xl leading-[1.1]">
              Plan Your Own <span className="text-[#C9A84C]">Rajasthan</span> Tour
            </h2>
            <p className="font-serif italic text-[#FFF8F0]/80 text-lg md:text-xl mt-6 leading-relaxed">
              Share your travel dates, destinations and preferences. Our Jaipur-based team will
              put together a private itinerary built around how you want to travel.
            </p>

            <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#FFF8F0]/90">
                  <Check className="h-5 w-5 text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="font-sans text-sm md:text-base tracking-wide">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden lg:block">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to plan a custom Rajasthan tour.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#FFF8F0] transition-colors font-display tracking-[0.18em] uppercase text-xs"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Our Jaipur Team
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFF8F0] rounded-sm p-7 md:p-10 heritage-shadow border border-[#C9A84C]/40"
          >
            <h3 className="font-display text-2xl text-[#0F0F0F] mb-1">Request A Custom Itinerary</h3>
            <p className="text-sm text-[#0F0F0F]/65 mb-6">
              Share a few details about your trip — our Jaipur team usually replies within a few hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name *" value={form.name} onChange={update("name")} required />
              <Field label="Email *" type="email" value={form.email} onChange={update("email")} required />
              <Field label="WhatsApp Number" value={form.whatsapp} onChange={update("whatsapp")} />
              <Field label="Travel Dates" placeholder="e.g. 12–20 Nov 2026" value={form.dates} onChange={update("dates")} />
              <Field label="Number of Travelers" placeholder="e.g. 2 adults" value={form.travelers} onChange={update("travelers")} />
              <Field label="Destinations Interested In" placeholder="e.g. Jaipur, Udaipur, Jaisalmer" value={form.destinations} onChange={update("destinations")} />
            </div>

            <div className="mt-4">
              <label className="block text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/70 mb-1.5">
                Special Requirements
              </label>
              <textarea
                value={form.requirements}
                onChange={update("requirements")}
                rows={3}
                placeholder="Heritage hotels, dietary needs, accessibility, special occasions…"
                className="w-full bg-transparent border border-[#C9A84C]/40 rounded-sm px-3 py-2.5 text-sm text-[#0F0F0F] focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/40 transition"
              />
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="lux-btn-gold inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display tracking-[0.18em] uppercase text-xs flex-1"
              >
                <Send className="h-4 w-4" /> Request Itinerary
              </button>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to plan a custom Rajasthan tour.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-btn-outline inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display tracking-[0.18em] uppercase text-xs flex-1"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Our Team
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Field = ({ label, ...props }: FieldProps) => (
  <div>
    <label className="block text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/70 mb-1.5">{label}</label>
    <input
      {...props}
      className="w-full bg-transparent border border-[#C9A84C]/40 rounded-sm px-3 py-2.5 text-sm text-[#0F0F0F] focus:border-[#C9A84C] focus:outline-none focus:ring-1 focus:ring-[#C9A84C]/40 transition"
    />
  </div>
);

export default LuxCustomJourney;
