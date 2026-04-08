import SectionHeading from "@/components/SectionHeading";
import { Car, Plane, MapPin, Navigation, Bus, Clock, Shield } from "lucide-react";
import luxuryCar from "@/assets/luxury-car.jpg";
import fleetImg from "@/assets/fleet-vehicles.jpg";

const services = [
  { icon: MapPin, title: "Jaipur Local Sightseeing", desc: "Explore Jaipur's top attractions like Amber Fort, Hawa Mahal, City Palace with our comfortable taxi service." },
  { icon: Bus, title: "Tempo Traveller on Rent", desc: "12, 16, 20 seater tempo travellers for family & group trips across Rajasthan and all over India." },
  { icon: Navigation, title: "Outstation Taxi Service", desc: "Travel from Jaipur to Delhi, Agra, Udaipur, Jodhpur, Mumbai, and destinations across India. Door-to-door service." },
  { icon: Plane, title: "Airport Pickup & Drop", desc: "On-time pickup and drop service from Jaipur Airport and other major airports across India." },
];

const fleet = [
  { name: "Sedan", models: "Dzire, Etios", capacity: "4 Passengers" },
  { name: "SUV", models: "Innova, Ertiga", capacity: "6-7 Passengers" },
  { name: "Tempo Traveller", models: "12 / 16 / 20 Seater", capacity: "Groups & Families" },
];

const Taxi = () => (
  <main className="pt-24 pb-20">
    {/* Hero */}
    <section className="relative py-20 mb-16 overflow-hidden rounded-none">
      <div className="absolute inset-0">
        <img src={luxuryCar} alt="Luxury transport service" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-sand mb-4">Taxi & Transport Services</h1>
        <p className="font-serif text-xl text-sand/80 max-w-2xl mx-auto">
          Reliable chauffeur-driven vehicles for travel across Jaipur, Rajasthan & all over India
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="container mx-auto px-4 mb-20">
      <SectionHeading title="Our Travel Services" subtitle="Comfortable and reliable transport solutions across India" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="heritage-card p-6 flex gap-4">
            <div className="shrink-0 w-14 h-14 rounded-full heritage-gradient flex items-center justify-center text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <a
                href="https://wa.me/919461069858?text=I%20need%20taxi%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Book on WhatsApp →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Fleet */}
    <section className="py-20 sand-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Fleet" subtitle="All vehicles are clean, sanitized, and regularly maintained" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {fleet.map((v, i) => (
            <div key={i} className="bg-card rounded-lg p-8 heritage-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full heritage-gradient text-primary-foreground mb-4">
                <Car className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">{v.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{v.models}</p>
              <p className="text-sm font-semibold text-primary">{v.capacity}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden max-w-4xl mx-auto heritage-shadow">
          <img src={fleetImg} alt="Heritage Jaipur Travels fleet" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Shield, title: "Verified Drivers", desc: "Experienced, polite, and well-trained" },
            { icon: Clock, title: "On-Time Service", desc: "Punctual pickup & drop, always" },
            { icon: Car, title: "Pan-India Coverage", desc: "Services across Rajasthan and beyond" },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full heritage-gradient text-primary-foreground mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Taxi;
