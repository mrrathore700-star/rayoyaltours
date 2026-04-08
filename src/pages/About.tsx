import { Shield, Users, Clock, Phone, Car, CheckCircle, Star, MapPin, Plane, Navigation, Bus } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import heroPalace from "@/assets/hero-palace.jpg";
import fleetImg from "@/assets/fleet-vehicles.jpg";

const whyChoose = [
  { icon: Clock, title: "20+ Years Experience", desc: "Serving customers offline for more than two decades in the travel industry" },
  { icon: Users, title: "1000+ Happy Customers", desc: "Families, tourists, and corporate clients trust us for reliable service" },
  { icon: Shield, title: "Verified & Experienced Drivers", desc: "Polite, well-trained drivers with deep knowledge of routes across India" },
  { icon: Car, title: "Clean & Well-Maintained Vehicles", desc: "Every vehicle is clean, sanitized, safe, and ready for your journey" },
  { icon: Phone, title: "24/7 Customer Support", desc: "Round-the-clock assistance for all your travel needs" },
  { icon: CheckCircle, title: "Affordable & Transparent Pricing", desc: "No hidden charges – honest and competitive rates" },
  { icon: Star, title: "On-Time Pickup & Drop", desc: "We value your time – always punctual, always reliable" },
];

const services = [
  { icon: MapPin, title: "Jaipur Local Sightseeing", desc: "Explore Jaipur's top attractions with our comfortable taxi service." },
  { icon: Bus, title: "Tempo Traveller on Rent", desc: "12, 16, 20 seater tempo travellers for family & group trips across India." },
  { icon: Navigation, title: "Outstation Taxi Service", desc: "Travel from Jaipur to Delhi, Agra, Udaipur, Jodhpur, Mumbai, and destinations across India." },
  { icon: Plane, title: "Airport Pickup & Drop", desc: "On-time pickup and drop service from Jaipur Airport and other major airports." },
];

const fleet = [
  { name: "Sedan", models: "Dzire, Etios", capacity: "4 Passengers", icon: Car },
  { name: "SUV", models: "Innova, Ertiga", capacity: "6-7 Passengers", icon: Car },
  { name: "Tempo Traveller", models: "12 / 16 / 20 Seater", capacity: "Groups & Families", icon: Bus },
];

const About = () => (
  <main className="pt-24 pb-20">
    {/* Hero */}
    <section className="relative py-20 mb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPalace} alt="Heritage Jaipur Travels" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-sand mb-4">About Heritage Jaipur Travels</h1>
        <p className="font-serif text-xl text-sand/80 max-w-3xl mx-auto">
          Your trusted travel partner in Jaipur with 20+ years of experience in the travel industry
        </p>
      </div>
    </section>

    {/* About Story */}
    <section className="container mx-auto px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Our Story" subtitle="Two decades of trust and service" />
        <div className="prose prose-lg mx-auto text-muted-foreground space-y-4">
          <p className="text-lg leading-relaxed">
            Welcome to <strong className="text-foreground">Heritage Jaipur Travels</strong> – your trusted travel partner in Jaipur with 20+ years of experience in the travel industry.
          </p>
          <p className="text-lg leading-relaxed">
            Although our website is new, our business is not. We have been serving customers offline for more than two decades, providing reliable taxi and tempo traveller services across Jaipur, Rajasthan, and all over India. With years of experience, we understand what travelers really need – <strong className="text-foreground">safety, comfort, and on-time service</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Over the years, we have successfully served <strong className="text-foreground">1000+ happy customers</strong>, including families, tourists, and corporate clients. Our long journey in this field has helped us build strong local knowledge and a reputation for dependable service.
          </p>
          <p className="text-lg leading-relaxed">
            One of our biggest strengths is our team of <strong className="text-foreground">experienced and professional drivers</strong>. They are polite, well-trained, and have deep knowledge of Jaipur, Rajasthan, and pan-India routes, ensuring a smooth and enjoyable journey for every customer.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 sand-gradient mandala-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose Us?" subtitle="20+ years of trust, reliability, and service excellence" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-card heritage-shadow">
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

    {/* Our Services */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Travel Services" subtitle="Reliable services across Rajasthan and all over India" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="heritage-card p-6 flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-full heritage-gradient flex items-center justify-center text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fleet */}
    <section className="py-20 sand-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Fleet" subtitle="Clean, sanitized, and regularly maintained vehicles" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {fleet.map((v, i) => (
            <div key={i} className="bg-card rounded-lg p-8 heritage-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full heritage-gradient text-primary-foreground mb-4">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">{v.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{v.models}</p>
              <p className="text-sm font-semibold text-primary">{v.capacity}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden max-w-4xl mx-auto heritage-shadow">
          <img src={fleetImg} alt="Heritage Jaipur Travels fleet of vehicles" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Travel?</h2>
        <p className="font-serif text-lg text-muted-foreground mb-8">
          Book your ride today and experience the Heritage Jaipur Travels difference – safe, comfortable, and on-time service across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md heritage-gradient text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/919461069858?text=Hi!%20I%20want%20to%20book%20a%20ride"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md gold-gradient text-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default About;
