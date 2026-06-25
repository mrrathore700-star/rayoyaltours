import { Car, Plane, MapPin, Navigation, Bus, Clock, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import luxuryCar from "@/assets/luxury-car.jpg";
import fleetImg from "@/assets/fleet-vehicles.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";

const services = [
  { icon: MapPin, title: "Jaipur Sightseeing Cabs", desc: "Private cars and SUVs for a full day of Jaipur sightseeing with an experienced local driver." },
  { icon: Bus, title: "Tempo Travellers for Groups", desc: "12, 16 and 20-seater tempo travellers for families and small groups." },
  { icon: Navigation, title: "Rajasthan Outstation Tours", desc: "Multi-day chauffeur service across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar and more." },
  { icon: Plane, title: "Airport & Railway Transfers", desc: "Pickups and drop-offs at Jaipur airport, railway stations and across Rajasthan, including late-night arrivals." },
];

const fleet = [
  { name: "Sedan", models: "Dzire · Etios", capacity: "4 Passengers" },
  { name: "SUV", models: "Innova · Ertiga", capacity: "6–7 Passengers" },
  { name: "Tempo Traveller", models: "12 / 16 / 20 Seater", capacity: "Groups & Families" },
];

const Taxi = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Private Transport in Jaipur | Chauffeur-Driven Cars & Tempo Travellers"
      description="Reliable private transportation across Rajasthan — chauffeur-driven cars, SUVs and tempo travellers for sightseeing, airport transfers and multi-day tours."
      path="/taxi"
    />

    <LuxHero
      image={luxuryCar}
      eyebrow="Private Transport"
      title={<>Chauffeur-Driven <span className="text-[#C9A84C]">Cars</span> & Tempo Travellers</>}
      subtitle="Reliable transportation across Rajasthan — airport transfers, full-day sightseeing and multi-day tours, with experienced local drivers."
      actions={
        <>
          <LuxAnchorBtn href="https://wa.me/919887688843?text=I%20need%20a%20private%20transfer" external variant="gold">WhatsApp Us</LuxAnchorBtn>
          <LuxLinkBtn to="/enquire?service=Private+Transport" variant="outline">Request Transport Quote</LuxLinkBtn>
        </>
      }
    />

    {/* Services */}
    <section className="py-24 md:py-32 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="What We Offer"
          title="A Private Transport Service"
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
                <Link
                  to={`/enquire?service=${encodeURIComponent(s.title)}`}
                  className="text-xs tracking-[0.18em] uppercase text-[#C9A84C] hover:text-[#6E0F1F] transition-colors"
                >
                  Request Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LuxInlineCta
      tone="cream"
      eyebrow="Need Pricing?"
      heading={<>Get a transport quote for your route and dates.</>}
      primary={{ label: "Get Pricing", to: "/enquire?service=Private+Transport", icon: "send" }}
      secondary={{ label: "Contact Team", href: "https://wa.me/919887688843", external: true, icon: "wa" }}
      compact
    />

    {/* Fleet */}
    <section className="py-24 md:py-32" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Our Fleet"
          title="Well-Maintained Vehicles, Experienced Drivers"
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

    <LuxInlineCta
      tone="cream"
      eyebrow="Pick The Right Vehicle"
      heading={<>Request a quote for the vehicle you need.</>}
      primary={{ label: "Request Vehicle Quote", to: "/enquire?service=Private+Transport", icon: "send" }}
      secondary={{ label: "WhatsApp Us", href: "https://wa.me/919887688843", external: true, icon: "wa" }}
      compact
    />

    {/* Why */}
    <section className="py-24 lux-black-bg text-[#FFF8F0]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: "Experienced Drivers", desc: "Local Rajasthan drivers who know the routes" },
            { icon: Clock, title: "On-Time Pickups", desc: "Reliable airport and hotel pickups, every time" },
            { icon: Car, title: "All of Rajasthan", desc: "Service across Rajasthan and pan-India" },
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
      eyebrow="Get A Quote"
      title={<>Book A <span className="text-[#C9A84C]">Private</span> Car or Tempo Traveller</>}
      subtitle="Share your dates, route and number of travelers — our Jaipur team will send you a personalized quote."
      primary={{ label: "Book Private Transport", to: "/enquire?service=Private+Transport" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default Taxi;
