import { Star } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxAnchorBtn } from "./LuxButton";

const reviews = [
  {
    name: "Emma Richardson",
    country: "London, UK",
    text: "Heritage Jaipur Travels crafted the most magical Rajasthan journey for our family. Every detail was perfect — from the palace stays to the private guides. Truly a luxury experience.",
  },
  {
    name: "Hiroshi Tanaka",
    country: "Tokyo, Japan",
    text: "Outstanding service from start to finish. Our chauffeur was knowledgeable and the itinerary was beautifully balanced. The desert nights in Jaisalmer will stay with us forever.",
  },
  {
    name: "Olivia Martin",
    country: "Sydney, Australia",
    text: "A boutique experience in every sense. The team understood exactly the slow, private travel we wanted. Twenty years of expertise truly shows in every thoughtful touch.",
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

const LuxGoogleReviews = () => (
  <section className="lux-cream-bg py-24 md:py-32">
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Google Reviews"
        title="Loved by Travellers Worldwide"
      />

      {/* Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 mb-16 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <GoogleLogo />
          <span className="font-display text-lg md:text-xl text-[#0F0F0F] font-semibold">Google</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>
          <div className="font-display text-2xl md:text-3xl text-[#6E0F1F] font-semibold">4.9 / 5</div>
          <div className="text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/55 mt-1">Average Rating</div>
        </div>
        <div className="text-center">
          <div className="font-display text-2xl md:text-3xl text-[#6E0F1F] font-semibold">100+</div>
          <div className="text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/55 mt-1">Happy Travellers</div>
        </div>
      </div>

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
              <p className="text-xs tracking-[0.18em] uppercase text-[#0F0F0F]/55 mt-1">{r.country}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <LuxAnchorBtn
          href="https://www.google.com/search?q=Heritage+Jaipur+Travels+reviews"
          external
          variant="gold"
        >
          View All Reviews
        </LuxAnchorBtn>
      </div>
    </div>
  </section>
);

export default LuxGoogleReviews;
