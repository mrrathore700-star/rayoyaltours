import { Link } from "react-router-dom";
import { Star, Shield, Users, Heart, ArrowRight } from "lucide-react";
import heroPalace from "@/assets/hero-palace.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import localMarket from "@/assets/local-market.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

const testimonials = [
  { name: "Sarah M.", country: "United Kingdom", text: "An absolutely unforgettable experience. The team at Heritage Jaipur Travels made us feel like royalty throughout our Rajasthan journey.", rating: 5 },
  { name: "James & Linda", country: "Australia", text: "Best tour company in Jaipur! Their local knowledge and attention to detail made our Golden Triangle tour truly special.", rating: 5 },
  { name: "Hiroshi T.", country: "Japan", text: "The desert safari was magical. Professional guides, authentic experiences, and incredible hospitality. Highly recommend!", rating: 5 },
];

const whyChoose = [
  { icon: Shield, title: "20+ Years Experience", desc: "Two decades of trusted offline service in Jaipur and Rajasthan" },
  { icon: Users, title: "1000+ Happy Customers", desc: "Families, tourists & corporate clients trust our reliable service" },
  { icon: Heart, title: "Authentic Experiences", desc: "Go beyond tourist spots with genuine cultural immersions" },
  { icon: Star, title: "Pan-India Services", desc: "Travel across Rajasthan and all over India with our fleet" },
];

const galleryImages = [
  { src: culturalDance, alt: "Rajasthani folk dance performance" },
  { src: localMarket, alt: "Colorful Jaipur bazaar" },
  { src: desertSafari, alt: "Desert camel safari at sunset" },
  { src: jaisalmerFort, alt: "Jaisalmer Golden Fort" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroPalace} alt="Rajasthan Palace at Sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-serif text-lg md:text-xl text-sand tracking-widest uppercase mb-4 animate-fade-in">
            Heritage Jaipur Travels
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-sand mb-6 animate-fade-in-up leading-tight">
            Experience the Royal Heritage of Rajasthan
          </h1>
          <p className="font-serif text-lg md:text-2xl text-sand/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Private Tours • Authentic Experiences • Local Jaipur Experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md gold-gradient text-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Plan My Rajasthan Trip
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/919461069858?text=Hi!%20I%20want%20to%20plan%20my%20Rajasthan%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-sand text-sand font-bold text-lg hover:bg-sand/10 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 sand-gradient mandala-bg">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Popular Rajasthan Tour Packages"
            subtitle="Handcrafted itineraries for the discerning traveler seeking authentic royal experiences"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 3).map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
            {tours.slice(3).map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 font-display text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View All Packages <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Heritage Jaipur Travels"
            subtitle="We don't just show you Rajasthan — we help you live it"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Heritage Experience Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={culturalDance} alt="Rajasthani cultural experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 heritage-gradient opacity-80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Live the Royal Rajasthani Experience
          </h2>
          <p className="font-serif text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            From camel safaris in the Thar Desert to candlelit dinners in ancient forts — create memories that last a lifetime
          </p>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md gold-gradient text-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Explore Experiences <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Tour Gallery" subtitle="Glimpses of unforgettable Rajasthan moments" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-display text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View Full Gallery <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sand-gradient mandala-bg">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Our Guests Say" subtitle="Trusted by travelers from around the world" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-lg p-6 heritage-shadow">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-serif text-lg text-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {[
              { q: "How do I book a tour with Heritage Jaipur Travels?", a: "Simply contact us via WhatsApp, email, or our contact form. We'll customize your perfect Rajasthan itinerary within 24 hours." },
              { q: "Are your tours private or group tours?", a: "All our tours are 100% private. You'll have a dedicated driver and guide throughout your journey." },
              { q: "What is included in the tour price?", a: "Our packages typically include private AC vehicle, professional guide, hotel accommodation, monument entry fees, and select meals." },
              { q: "Is it safe for solo female travelers?", a: "Absolutely! We have extensive experience hosting solo female travelers and ensure the highest safety standards throughout the trip." },
            ].map((faq, i) => (
              <details key={i} className="group bg-card rounded-lg heritage-shadow">
                <summary className="p-5 font-display font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
