import { Car, Plane, MapPin, Navigation, Bus, Clock, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import luxuryCar from "@/assets/luxury-car.jpg";
import fleetImg from "@/assets/fleet-vehicles.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";

const services = [
  { icon: MapPin, title: "Private Jaipur Sightseeing", desc: "Quiet mornings at Amber, sunsets at Nahargarh — at your own pace." },
  { icon: Bus, title: "Tempo Traveller Atelier", desc: "12, 16, 20-seater vehicles for families and small groups." },
  { icon: Navigation, title: "Outstation Journeys", desc: "Door-to-door routes across Rajasthan and beyond." },
  { icon: Plane, title: "Airport Concierge", desc: "Quiet, punctual transfers from any Indian airport." },
];

const fleet = [
  { name: "Sedan", models: "Dzire · Etios", capacity: "4 Passengers" },
  { name: "SUV", models: "Innova · Ertiga", capacity: "6–7 Passengers" },
  { name: "Tempo Traveller", models: "12 / 16 / 20 Seater", capacity: "Groups & Families" },
];

const Taxi = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Private Transport in Jaipur | Chauffeured Cars & Tempo Travellers"
      description="Private chauffeur-driven cars, SUVs and tempo travellers across Jaipur, Rajasthan and India — quiet, punctual and seamless."
      path="/taxi"
    />

    <LuxHero
      image={luxuryCar}
      eyebrow="Transport & Transfers"
      title={<>Private <span className="text-[#C9A84C]">Chauffeured</span> Journeys</>}
      subtitle="Quiet, punctual, and seamless. From a Jaipur airport pickup to a multi-week Rajasthan loop."
      actions={
        <>
          <LuxLinkBtn to="/contact" variant="gold">Request A Quote</LuxLinkBtn>
          <LuxAnchorBtn href="https://wa.me/919461069858?text=I%20need%20a%20private%20transfer" external variant="outline">WhatsApp Specialist</LuxAnchorBtn>
        </>
      }
    />

    {/* Services */}
    <section className="py-24 md:py-32 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="What We Offer"
          title="A Private Transport Atelier"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white/60 backdrop-blur-sm border border-[#C9A84C]/20 rounded-sm flex gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#6E0F1F] text-[#C9A84C] flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-2">{s.title}</h3>
                <p className="font-serif text-[15px] text-[#0F0F0F]/70 leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="https://wa.me/919461069858?text=I%20need%20private%20transport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.18em] uppercase text-[#C9A84C] hover:text-[#6E0F1F] transition-colors"
                >
                  Request Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fleet */}
    <section className="py-24 md:py-32" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="The Fleet"
          title="Spotless, sanitized, ever-ready"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {fleet.map((v, i) => (
            <div key={i} className="text-center p-10 border border-[#C9A84C]/30 bg-white/70 rounded-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6E0F1F] text-[#C9A84C] mb-5">
                <Car className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0F0F0F] mb-1">{v.name}</h3>
              <p className="font-serif text-sm text-[#0F0F0F]/65 mb-2">{v.models}</p>
              <p className="text-xs tracking-[0.18em] uppercase text-[#C9A84C]">{v.capacity}</p>
            </div>
          ))}
        </div>
        <div className="rounded-sm overflow-hidden max-w-4xl mx-auto">
          <img src={fleetImg} alt="Heritage Jaipur Travels fleet" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Why */}
    <section className="py-24 lux-black-bg text-[#FFF8F0]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: "Verified Drivers", desc: "Experienced, polite, deeply local" },
            { icon: Clock, title: "On Time, Always", desc: "Punctual pickup & drop, every time" },
            { icon: Car, title: "Pan-India", desc: "Rajasthan and beyond, seamlessly" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] mb-5">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#FFF8F0]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LuxCtaBand
      image={luxuryCar}
      eyebrow="Reserve"
      title={<>Request A <span className="text-[#C9A84C]">Private</span> Transfer</>}
      subtitle="Tell us your route and dates — we'll send a tailored quote within hours."
      primary={{ label: "Request Quote", to: "/contact" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919461069858", external: true }}
    />
  </main>
);

export default Taxi;
