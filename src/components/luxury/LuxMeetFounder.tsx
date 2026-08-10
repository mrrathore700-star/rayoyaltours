import { Quote } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxAnchorBtn } from "./LuxButton";

const LuxMeetFounder = () => (
  <section className="lux-cream-bg py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <LuxSectionHeading
        eyebrow="Meet The Founder"
        title={<>The Family Behind <span className="text-[#C9A84C]">Heritage Jaipur Travels</span></>}
      />

      <div className="mt-2 md:mt-4">
        <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
          <span className="lux-rule-gold" />
          <span className="lux-eyebrow">Namaste, I'm Kailash</span>
        </div>

        <Quote className="h-8 w-8 text-[#C9A84C]/60 mb-5 md:mb-6" strokeWidth={1.25} />

        <div className="space-y-6 md:space-y-7 font-serif text-[17px] md:text-[20px] leading-[1.85] md:leading-[1.9] text-[#0F0F0F]/80 max-w-3xl">
          <p>
            I'm from Jaipur, and I started Heritage Jaipur Travels over twenty years ago with a single car and a simple idea — to help travelers see Rajasthan the way locals do, with someone they could trust behind the wheel.
          </p>
          <p>
            Today, we're still a family-run business based in Jaipur. Our team of drivers, guides, and travel planners are all from Rajasthan, and most have been with us for years. We plan private tours for families, couples, solo travelers, and small groups from India and around the world.
          </p>
          <p>
            We don't use fixed group itineraries. We listen to what you want, suggest what works, and plan a comfortable trip around your dates, budget, and pace. If something needs to change during the trip, we're just a phone call away.
          </p>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-14 mb-10 md:mb-12 py-7 md:py-8 border-y border-[#C9A84C]/30 max-w-3xl">
          {[
            { v: "20+", l: "Years on the road" },
            { v: "1000+", l: "Happy guests" },
            { v: "4.8★", l: "Google rating" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl md:text-4xl text-[#6E0F1F] font-semibold">{s.v}</div>
              <div className="text-[10px] md:text-[12px] tracking-[0.18em] uppercase text-[#0F0F0F]/60 mt-2">
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
  </section>
);

export default LuxMeetFounder;
