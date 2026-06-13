import { Star, MessageSquare } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxAnchorBtn } from "./LuxButton";

const reviews = [
  {
    name: "Muriel Chaume",
    country: "",
    text: "A pleasure to travel with Kailash: perfect driving in all circumstances, punctual, discreet, and elegant…the perfect driver to show you the beauties of North India! 👌🏼",
  },
  {
    name: "Yuliya Masyukova",
    country: "",
    text: "Me and my Mom travelled through Golden Triangle and absolutely loved Kailash services! Honest, always in time, super friendly. His restaurant and places to visit recommendations worked 100%. Thank you very much for an amazing holidays!",
  },
  {
    name: "Janine Parmenter",
    country: "",
    text: "My husband and I enjoyed a fantastic experience on our 10 day tour of Rajisthan with Kailash. He is reliable, trustworthy and knowledgable. His English is great and above all I felt 100% safe in the crazy traffic! I would definitely recommend using him as your driver and navigator!!",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2C41.3 35.3 44 30 44 24c0-1.3-.1-2.3-.4-3.5z"/>
  </svg>
);

const trustMetrics = [
  { icon: Star, value: "4.8", label: "Google Rating" },
  { icon: MessageSquare, value: "23", label: "Verified Google Reviews" },
];

const LuxGoogleReviews = () => (
  <section className="lux-cream-bg py-24 md:py-32">
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Google Reviews"
        title="Loved by Travellers Worldwide"
      />

      {/* Trust Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 mb-4 max-w-2xl mx-auto">
        {trustMetrics.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="group text-center p-6 md:p-7 bg-white/50 backdrop-blur-sm border border-[#C9A84C]/30 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-[0_12px_32px_-12px_rgba(201,168,76,0.45)]"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-4 transition-transform duration-500 group-hover:scale-110">
              <Icon className="h-5 w-5 text-[#C9A84C]" strokeWidth={1.5} />
            </div>
            <div className="font-display text-2xl md:text-3xl text-[#6E0F1F] font-semibold">{value}</div>
            <div className="text-[11px] md:text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/60 mt-2">{label}</div>
          </div>
        ))}
      </div>

      <p className="text-center font-serif italic text-sm md:text-base text-[#0F0F0F]/65 max-w-2xl mx-auto mb-12">
        Verified reviews from travelers who explored Rajasthan with Heritage Jaipur Travels.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-8 md:p-10 bg-white/60 backdrop-blur-sm border border-[#C9A84C]/30 rounded-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <GoogleLogo />
            </div>
            <p className="font-serif italic text-[15px] md:text-base leading-relaxed text-[#0F0F0F]/80 mb-6 flex-1">
              "{r.text}"
            </p>
            <div className="pt-5 border-t border-[#C9A84C]/25">
              <p className="font-display text-base text-[#6E0F1F] font-semibold">{r.name}</p>
              {r.country && (
                <p className="text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/55 mt-1">{r.country}</p>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default LuxGoogleReviews;
