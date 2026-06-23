const pillars = [
  { title: "20+", text: "Years planning Rajasthan tours" },
  { title: "1000+", text: "Travelers from India and abroad" },
  { title: "24/7", text: "WhatsApp and phone support" },
  { title: "Private", text: "tours and chauffeur service" },
  { title: "Jaipur", text: "based, family-run team" },
  { title: "Local", text: "Rajasthan experts and drivers" },
];

const LuxTrustStrip = () => (
  <section className="lux-cream-bg border-y" style={{ borderColor: "rgba(110,15,31,0.12)" }}>
    <div className="container mx-auto px-6 py-14 md:py-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="lux-rule-gold" />
          <span className="lux-eyebrow">A Trusted Jaipur Travel Company</span>
          <span className="lux-rule-gold" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl text-[#6E0F1F] font-semibold leading-snug max-w-2xl mx-auto">
          A Jaipur-Based Family Business Planning Private Rajasthan Tours for Over 20 Years
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pillars.map((p) => (
          <div key={p.title} className="text-center">
            <div className="font-display text-3xl md:text-4xl text-[#C9A84C] font-semibold">{p.title}</div>
            <div className="font-serif text-sm md:text-base text-[#0F0F0F]/70 mt-2 leading-snug">{p.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LuxTrustStrip;
