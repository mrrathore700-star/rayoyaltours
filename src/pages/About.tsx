import { Shield, Users, Clock, Phone, Car, CheckCircle, Star, MapPin, Plane, Navigation, Bus } from "lucide-react";
import SEO from "@/components/SEO";
import heroPalace from "@/assets/hero-palace.jpg";
import fleetImg from "@/assets/fleet-vehicles.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxTrustStrip from "@/components/luxury/LuxTrustStrip";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";

const whyChoose = [
  { icon: Clock, title: "20+ Years", desc: "Two decades of crafting Rajasthan journeys" },
  { icon: Users, title: "1000+ Travelers", desc: "Trusted by families and travelers worldwide" },
  { icon: Shield, title: "Private Chauffeurs", desc: "Polite, multilingual, deeply local" },
  { icon: Car, title: "Curated Fleet", desc: "Spotless, sanitized, regularly serviced" },
  { icon: Phone, title: "Concierge Care", desc: "24/7 support throughout your stay" },
  { icon: CheckCircle, title: "Transparent", desc: "No hidden charges. Ever." },
  { icon: Star, title: "Pan-India", desc: "Rajasthan and beyond, seamlessly" },
];

const services = [
  { icon: MapPin, title: "Private Jaipur Sightseeing", desc: "Quiet mornings at Amber, sunsets at Nahargarh — at your own pace." },
  { icon: Bus, title: "Tempo Traveller Atelier", desc: "12, 16, 20-seater vehicles for families and small groups." },
  { icon: Navigation, title: "Outstation Journeys", desc: "Door-to-door routes to Delhi, Agra, Udaipur, Jodhpur and beyond." },
  { icon: Plane, title: "Airport Concierge", desc: "Quiet, punctual transfers from any Indian airport." },
];

const fleet = [
  { name: "Sedan", models: "Dzire · Etios", capacity: "4 Passengers", icon: Car },
  { name: "SUV", models: "Innova · Ertiga", capacity: "6–7 Passengers", icon: Car },
  { name: "Tempo Traveller", models: "12 / 16 / 20 Seater", capacity: "Groups & Families", icon: Bus },
];

const About = () => (
  <main className="lux-cream-bg">
    <SEO
      title="About Heritage Jaipur Travels | Two Decades of Private Rajasthan Journeys"
      description="A Jaipur-born travel atelier with 20+ years of experience designing private Rajasthan journeys, transfers and curated tours for international travelers."
      path="/about"
    />

    <LuxHero
      image={heroPalace}
      eyebrow="Our House"
      title={<>Crafted in <span className="text-[#C9A84C]">Jaipur</span>, Trusted Worldwide</>}
      subtitle="Two decades of intimate Rajasthan knowledge, distilled into private journeys for travelers from over forty countries."
    />

    <LuxTrustStrip />

    {/* Story */}
    <section className="py-24 md:py-32 lux-cream-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <LuxSectionHeading
          eyebrow="Our Story"
          title="Twenty years of slow, considered travel"
        />
        <div className="font-serif text-lg md:text-xl leading-[1.85] text-[#0F0F0F]/80 space-y-6">
          <p className="first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-[#6E0F1F] first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1">
            Heritage Jaipur Travels began in a small office on MI Road — quietly, without fanfare, with a single conviction: that Rajasthan deserved to be travelled slowly, privately, and by those who knew its rhythms intimately.
          </p>
          <p>
            For more than twenty years we have been composing journeys for travelers from London, Tokyo, Berlin, Sydney, and beyond — families, couples, photographers, writers. Our work is not in the brochure; it is in the morning the host of a haveli unlocks a private courtyard for you, the chef who teaches you a dish his grandmother taught him, the chauffeur who knows the back road to Amber before the crowds.
          </p>
          <p>
            We remain a small house by choice. Every itinerary is shaped by hand. Every traveler is known by name.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="py-24 md:py-32 lux-black-bg text-[#FFF8F0]">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          tone="dark"
          eyebrow="Why Travelers Choose Us"
          title="A boutique standard, lovingly maintained"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyChoose.map((item, i) => (
            <div key={i} className="text-center p-8 border border-[#C9A84C]/20 rounded-sm bg-[#FFF8F0]/[0.02]">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] mb-5">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#FFF8F0]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 md:py-32 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="What We Do"
          title="Private Travel Services"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white/60 backdrop-blur-sm border border-[#C9A84C]/20 rounded-sm flex gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#6E0F1F] text-[#C9A84C] flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-2">{s.title}</h3>
                <p className="font-serif text-[15px] text-[#0F0F0F]/70 leading-relaxed">{s.desc}</p>
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
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#0F0F0F] mb-1">{v.name}</h3>
              <p className="font-serif text-sm text-[#0F0F0F]/65 mb-2">{v.models}</p>
              <p className="text-xs tracking-[0.18em] uppercase text-[#C9A84C]">{v.capacity}</p>
            </div>
          ))}
        </div>
        <div className="rounded-sm overflow-hidden max-w-4xl mx-auto">
          <img src={fleetImg} alt="Heritage Jaipur Travels fleet of vehicles" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <LuxCtaBand
      image={heroPalace}
      eyebrow="Begin"
      title={<>Ready to <span className="text-[#C9A84C]">Travel?</span></>}
      subtitle="Tell us your dates and rhythm — we'll quietly shape the rest."
      primary={{ label: "Plan My Journey", to: "/contact" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919461069858", external: true }}
    />
  </main>
);

export default About;
