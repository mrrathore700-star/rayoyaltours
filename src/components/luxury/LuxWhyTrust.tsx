import { Star, ShieldCheck, MapPin, Heart } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxAnchorBtn } from "./LuxButton";

const pillars = [
  {
    icon: Heart,
    title: "Real People, Real Care",
    text: "You'll know your driver's name before you land. We answer our own WhatsApp — no call centres, no scripts.",
  },
  {
    icon: MapPin,
    title: "Born-And-Raised Local Expertise",
    text: "Twenty years of back-lanes, hidden havelis, and the right chai stall at the right hour. Rajasthan, the way Rajasthanis know it.",
  },
  {
    icon: Star,
    title: "23 Verified Google Reviews · 4.8★",
    text: "Honest words from travellers who came as strangers and left as friends. Read every one of them on Google.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Transparent, Trusted",
    text: "Licensed vehicles, certified guides, clear pricing on WhatsApp, and someone you can call at 2 a.m. if you ever need to.",
  },
];

const guestQuotes = [
  {
    quote: "Felt like travelling with family. Kailash thought of everything before we even asked.",
    name: "Muriel · France",
  },
  {
    quote: "Honest, punctual, kind. The kind of driver you hope to meet anywhere in the world.",
    name: "Yuliya · Cyprus",
  },
  {
    quote: "Ten days, zero stress. I felt 100% safe in the crazy traffic. Highly recommend.",
    name: "Janine · Australia",
  },
];

const LuxWhyTrust = () => (
  <section className="lux-cream-bg py-24 md:py-32">
    <div className="container mx-auto px-6">
      <LuxSectionHeading
        eyebrow="Why Travellers Trust Us"
        title={<>Two Decades Of <span className="text-[#C9A84C]">Honest</span> Hospitality</>}
        intro="Trust isn't built in a brochure. It's built one journey, one chai, one safely-driven mountain road at a time."
      />

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group flex gap-5 p-7 md:p-8 bg-white/60 backdrop-blur-sm border border-[#C9A84C]/25 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#C9A84C]/60 hover:shadow-[0_18px_40px_-20px_rgba(201,168,76,0.45)]"
          >
            <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 transition-transform duration-500 group-hover:scale-110">
              <Icon className="h-5 w-5 text-[#C9A84C]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl text-[#6E0F1F] font-semibold leading-snug">
                {title}
              </h3>
              <p className="font-serif text-[15px] leading-relaxed text-[#0F0F0F]/75 mt-2">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Guest mini-quotes */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="lux-eyebrow">In Their Words</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guestQuotes.map((g) => (
            <figure
              key={g.name}
              className="p-7 bg-white/50 border border-[#C9A84C]/25 rounded-sm text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <blockquote className="font-serif italic text-[15px] leading-relaxed text-[#0F0F0F]/80">
                "{g.quote}"
              </blockquote>
              <figcaption className="mt-4 text-[11px] tracking-[0.2em] uppercase text-[#6E0F1F]">
                {g.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-12">
          <LuxAnchorBtn
            href="https://www.google.com/search?q=Heritage+Jaipur+Travels+reviews"
            external
            variant="gold"
          >
            Read All Google Reviews
          </LuxAnchorBtn>
        </div>
      </div>
    </div>
  </section>
);

export default LuxWhyTrust;
