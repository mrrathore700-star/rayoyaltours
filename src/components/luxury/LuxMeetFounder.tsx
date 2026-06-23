import { Quote } from "lucide-react";
import kailashPortrait from "@/assets/team-kailash.jpg";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxAnchorBtn } from "./LuxButton";

const LuxMeetFounder = () => (
  <section className="lux-cream-bg py-24 md:py-32">
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Meet The Founder"
        title={<>The Family Behind <span className="text-[#C9A84C]">Heritage Jaipur Travels</span></>}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        {/* Portrait */}
        <div className="relative">
          <div className="absolute -inset-3 md:-inset-5 border border-[#C9A84C]/40 rounded-sm pointer-events-none" />
          <div className="relative overflow-hidden rounded-sm shadow-[0_20px_60px_-20px_rgba(110,15,31,0.35)]">
            <img
              src={kailashPortrait}
              alt="Kailash — Founder of Heritage Jaipur Travels"
              loading="lazy"
              width={896}
              height={1152}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6E0F1F]/15 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#F8F5EF] px-5 py-2 border border-[#C9A84C]/40 rounded-full whitespace-nowrap">
            <span className="font-display text-xs tracking-[0.22em] uppercase text-[#6E0F1F]">
              Kailash · Founder
            </span>
          </div>
        </div>

        {/* Story */}
        <div>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Namaste, I'm Kailash</span>
          </div>

          <Quote className="h-8 w-8 text-[#C9A84C]/60 mb-4" strokeWidth={1.25} />

          <div className="space-y-5 font-serif text-[16px] md:text-[17px] leading-[1.85] text-[#0F0F0F]/80">
            <p>
              I'm from Jaipur, and I started Heritage Jaipur Travels over
              <strong className="text-[#6E0F1F] font-semibold"> twenty years ago</strong> with
              a single car and a simple idea — to help travelers see Rajasthan the way locals do,
              with someone they could trust behind the wheel.
            </p>
            <p>
              Today we're still a family-run business based in Jaipur. Our team of drivers,
              guides and travel planners are all from Rajasthan, and most have been with us for
              years. We plan private tours for families, couples, solo travelers and small groups
              from India and across the world.
            </p>
            <p>
              We don't use fixed group itineraries. We listen to what you want, suggest what works,
              and plan a comfortable trip around your dates, budget and pace. If something needs
              to change during the trip, we're a phone call away.
            </p>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-9 mb-9 py-6 border-y border-[#C9A84C]/30">
            {[
              { v: "20+", l: "Years on the road" },
              { v: "1000+", l: "Happy guests" },
              { v: "4.8★", l: "Google rating" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-[#6E0F1F] font-semibold">{s.v}</div>
                <div className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#0F0F0F]/60 mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <LuxAnchorBtn
              href="https://wa.me/919887688843?text=Namaste%20Kailash!%20I'd%20love%20to%20plan%20my%20Rajasthan%20journey."
              external
              variant="outline"
            >
              Message Kailash Directly
            </LuxAnchorBtn>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LuxMeetFounder;
