import SectionHeading from "@/components/SectionHeading";
import { Car, Plane, MapPin, Navigation } from "lucide-react";
import luxuryCar from "@/assets/luxury-car.jpg";

const services = [
  { icon: Plane, title: "Airport Pickup & Drop", desc: "Reliable and comfortable airport transfers to and from Jaipur International Airport. Meet & greet included.", price: "From $15" },
  { icon: Car, title: "Private Driver Tours", desc: "Explore Jaipur and Rajasthan at your pace with an experienced English-speaking chauffeur.", price: "From $35/day" },
  { icon: Navigation, title: "Luxury Cars & SUVs", desc: "Choose from premium sedans, SUVs, and tempo travelers for ultimate comfort on your journey.", price: "From $50/day" },
  { icon: MapPin, title: "Outstation Trips", desc: "Travel to Agra, Delhi, Udaipur, Jodhpur, and other destinations with door-to-door service.", price: "Custom Quote" },
];

const Taxi = () => (
  <main className="pt-24 pb-20">
    <section className="relative py-20 mb-16 overflow-hidden rounded-none">
      <div className="absolute inset-0">
        <img src={luxuryCar} alt="Luxury transport Rajasthan" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-sand mb-4">Taxi & Transport Services</h1>
        <p className="font-serif text-xl text-sand/80 max-w-2xl mx-auto">
          Premium chauffeur-driven vehicles for a seamless Rajasthan travel experience
        </p>
      </div>
    </section>
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="heritage-card p-6 flex gap-4">
            <div className="shrink-0 w-14 h-14 rounded-full heritage-gradient flex items-center justify-center text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <span className="text-sm font-bold text-secondary">{s.price}</span>
              </div>
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
  </main>
);

export default Taxi;
