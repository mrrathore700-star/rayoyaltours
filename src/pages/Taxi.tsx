import SmartImage from "@/components/media/SmartImage";
import { Link } from "react-router-dom";
import {
  Car, Plane, MapPin, Navigation, Bus, Clock, Shield, Users, Luggage, Snowflake, Fuel,
  BadgeCheck, PhoneCall, MessageCircle, ClipboardList, FileText, CheckCircle2, UserCheck,
  KeyRound, MapPinned, Star, LifeBuoy, ShieldCheck, HeartHandshake, IdCard, Route as RouteIcon,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import luxuryCar from "@/assets/luxury-car.jpg";
import fleetImg from "@/assets/fleet-vehicles.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const WA_URL = "https://wa.me/919887688843?text=Hi!%20I%20need%20a%20private%20chauffeur%20in%20Rajasthan";
const CALL_URL = "tel:+919887688843";

/* ---------- Data ---------- */

const trustBar = [
  "Licensed Drivers",
  "Commercial Vehicles",
  "Airport Pickup",
  "Sanitized Fleet",
  "24/7 Support",
  "Transparent Pricing",
];

const services = [
  { icon: MapPin, title: "Jaipur Sightseeing Cabs", desc: "Private cars and SUVs for a full day of Jaipur sightseeing with an experienced local driver." },
  { icon: Bus, title: "Tempo Travellers for Groups", desc: "12, 16 and 20-seater tempo travellers for families and small groups." },
  { icon: Navigation, title: "Rajasthan Outstation Tours", desc: "Multi-day chauffeur service across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Pushkar and more." },
  { icon: Plane, title: "Airport & Railway Transfers", desc: "Pickups and drop-offs at Jaipur airport, railway stations and across Rajasthan, including late-night arrivals." },
];

const fleet = [
  {
    name: "Sedan",
    models: "Dzire · Etios",
    passengers: "4 Passengers",
    luggage: "2 Large Bags",
    ac: "Air Conditioned",
    fuel: "Diesel / Petrol",
    bestFor: "Couples & solo travellers",
    trips: "Airport transfers · City tours · Jaipur–Ajmer / Pushkar",
    image: luxuryCar,
  },
  {
    name: "SUV — Ertiga / Innova",
    models: "Maruti Ertiga · Toyota Innova",
    passengers: "6 Passengers",
    luggage: "4 Large Bags",
    ac: "Air Conditioned",
    fuel: "Diesel",
    bestFor: "Small families & friends",
    trips: "Golden Triangle · Ranthambore · Udaipur",
    image: fleetImg,
  },
  {
    name: "Toyota Innova Crysta",
    models: "Premium 6+1 Seater",
    passengers: "6 Passengers",
    luggage: "5 Large Bags",
    ac: "Dual Air Conditioning",
    fuel: "Diesel",
    bestFor: "Long outstation tours",
    trips: "Jaipur → Jaisalmer · Full Rajasthan circuits",
    image: luxuryCar,
  },
  {
    name: "Tempo Traveller",
    models: "12 / 16 / 20 Seater",
    passengers: "Up to 20 Passengers",
    luggage: "Ample luggage boot",
    ac: "Air Conditioned",
    fuel: "Diesel",
    bestFor: "Groups & extended families",
    trips: "Group tours · Weddings · Corporate travel",
    image: fleetImg,
  },
  {
    name: "Luxury Vehicle",
    models: "Toyota Fortuner · Mercedes on request",
    passengers: "4–6 Passengers",
    luggage: "4 Large Bags",
    ac: "Climate Control",
    fuel: "Diesel",
    bestFor: "Premium & honeymoon trips",
    trips: "Palace stays · Private Rajasthan tours",
    image: luxuryCar,
  },
];

const airportFeatures = [
  { icon: Plane, title: "Flight Monitoring", desc: "We track your flight in real time and adjust pickup for delays or early arrivals." },
  { icon: HeartHandshake, title: "Meet & Greet", desc: "Your chauffeur waits inside the arrival hall with a personalised welcome." },
  { icon: ClipboardList, title: "Name Board", desc: "A printed name board makes it easy to spot your driver on arrival." },
  { icon: MapPinned, title: "Hotel Drop", desc: "Comfortable transfer straight to your Jaipur hotel or resort." },
  { icon: KeyRound, title: "Airport Pickup", desc: "24/7 pickups at Jaipur International Airport, including late-night flights." },
  { icon: Navigation, title: "Airport Departure", desc: "Timely drop-offs with buffer for check-in, immigration and security." },
  { icon: Clock, title: "Free Waiting Time", desc: "Up to 60 minutes of complimentary waiting after your flight lands." },
  { icon: Luggage, title: "Luggage Assistance", desc: "Help loading and unloading your bags — a small courtesy that matters." },
];

const routes = [
  { from: "Jaipur", to: "Agra", km: "240 km", time: "4–5 hrs", vehicle: "Sedan / SUV" },
  { from: "Jaipur", to: "Delhi", km: "270 km", time: "5–6 hrs", vehicle: "Sedan / Innova" },
  { from: "Jaipur", to: "Udaipur", km: "395 km", time: "7–8 hrs", vehicle: "Innova / Crysta" },
  { from: "Jaipur", to: "Jodhpur", km: "335 km", time: "6–7 hrs", vehicle: "Innova / Crysta" },
  { from: "Jaipur", to: "Pushkar", km: "145 km", time: "3 hrs", vehicle: "Sedan / SUV" },
  { from: "Jaipur", to: "Ajmer", km: "135 km", time: "2.5–3 hrs", vehicle: "Sedan / SUV" },
  { from: "Jaipur", to: "Ranthambore", km: "180 km", time: "3.5–4 hrs", vehicle: "SUV / Innova" },
  { from: "Jaipur", to: "Jaisalmer", km: "560 km", time: "10–11 hrs", vehicle: "Innova Crysta" },
  { from: "Jaipur", to: "Bikaner", km: "335 km", time: "6 hrs", vehicle: "Innova / Crysta" },
  { from: "Jaipur", to: "Mount Abu", km: "500 km", time: "9–10 hrs", vehicle: "Innova Crysta" },
];

const whyChoose = [
  { icon: HeartHandshake, title: "Family-Owned Company", desc: "A Jaipur family business planning Rajasthan tours for 20+ years." },
  { icon: UserCheck, title: "Experienced Local Drivers", desc: "Long-term chauffeurs who know every route across Rajasthan." },
  { icon: Car, title: "Clean Commercial Fleet", desc: "All-yellow-plate tourist vehicles, regularly serviced and detailed." },
  { icon: RouteIcon, title: "Custom Rajasthan Tours", desc: "Multi-day chauffeur service across Rajasthan and beyond." },
  { icon: FileText, title: "Transparent Pricing", desc: "Fixed, all-inclusive quotes — no hidden extras or surprise charges." },
  { icon: MessageCircle, title: "English Speaking Support", desc: "Office team and drivers who can communicate comfortably in English." },
  { icon: ClipboardList, title: "Flexible Itineraries", desc: "Change pickups, stops or the day's plan whenever you need to." },
  { icon: Shield, title: "Comfort & Safety", desc: "Well-maintained vehicles, seat belts, and safe driving above all." },
];

const driverPoints = [
  { icon: IdCard, title: "Licensed Drivers", desc: "Government-issued commercial driving licence with tourist permits." },
  { icon: BadgeCheck, title: "Professional Uniform", desc: "Presentable, uniformed drivers who represent the company well." },
  { icon: MapPinned, title: "Tour Knowledge", desc: "Familiar with monuments, timings, entry gates and photo stops." },
  { icon: MapPin, title: "Local Expertise", desc: "Rajasthan-born drivers who know shortcuts and the best routes." },
  { icon: ShieldCheck, title: "Safe Driving", desc: "Trained for defensive driving with long-distance experience." },
  { icon: MessageCircle, title: "English Communication", desc: "Comfortable understanding and answering travellers in English." },
  { icon: HeartHandshake, title: "Tour Assistance", desc: "Help with tickets, restaurant stops, water and small requests." },
  { icon: Star, title: "Friendly Service", desc: "Patient, courteous and used to travellers from all over the world." },
];

const safety = [
  { icon: MapPinned, title: "GPS Enabled" },
  { icon: BadgeCheck, title: "Regular Vehicle Inspection" },
  { icon: UserCheck, title: "Verified Drivers" },
  { icon: LifeBuoy, title: "First Aid Kit" },
  { icon: PhoneCall, title: "Emergency Assistance" },
  { icon: ShieldCheck, title: "Commercial Insurance" },
  { icon: Clock, title: "24/7 Customer Support" },
];

const steps = [
  { icon: MessageCircle, title: "Send Inquiry", desc: "Share your route, dates and number of travellers." },
  { icon: FileText, title: "Receive Quote", desc: "A clear, itemised quote from our Jaipur office." },
  { icon: CheckCircle2, title: "Confirm Booking", desc: "Simple confirmation over WhatsApp or email." },
  { icon: UserCheck, title: "Driver Assigned", desc: "We share your chauffeur's name and contact." },
  { icon: KeyRound, title: "Pickup", desc: "On-time pickup at your airport or hotel." },
  { icon: Star, title: "Enjoy Your Journey", desc: "Relax while we take care of the driving." },
];

const faqs = [
  { q: "How do I book a taxi in Jaipur?", a: "Send us your route, dates and number of travellers by WhatsApp, phone or the enquiry form. We'll reply with a fixed all-inclusive quote and confirm your booking once you approve it." },
  { q: "Can I hire a car for multiple days?", a: "Yes. Most of our travellers hire chauffeur-driven vehicles for multi-day Rajasthan tours — anywhere from 2 to 15+ days. The vehicle and driver stay with you for the whole trip." },
  { q: "Can I customise the itinerary during the trip?", a: "Absolutely. You can add sightseeing stops, adjust pickup times, change hotels or extend days. Our office team is on WhatsApp throughout your journey." },
  { q: "Are tolls and parking included in the price?", a: "Toll taxes, parking fees and interstate permits can be included in the quote on request. We'll clearly mention what is and isn't included before you confirm." },
  { q: "Is fuel included in the quoted price?", a: "Yes. Fuel is included in our fixed quotes. You never pay the driver directly for fuel." },
  { q: "Do you offer Jaipur airport pickup and drop?", a: "Yes. We provide 24/7 airport pickups and drop-offs at Jaipur International Airport with flight tracking, meet-and-greet and a name board." },
  { q: "Do you have luxury cars available?", a: "Yes. Toyota Fortuner and premium options such as Mercedes can be arranged on request for honeymoon, corporate and VIP trips." },
  { q: "Is a Tempo Traveller available for group travel?", a: "Yes. We operate 12, 16 and 20-seater Tempo Travellers for families, groups, weddings and corporate travel across Rajasthan." },
  { q: "Can you provide a child seat?", a: "Child seats can be arranged on request. Please mention the child's age when you enquire so we can plan the right seat and vehicle." },
  { q: "Are there any night charges?", a: "Standard driver night allowance applies for stays outside Jaipur. It is always mentioned in the quote — no surprise charges added later." },
  { q: "What is your cancellation policy?", a: "Cancellations made more than 48 hours in advance are usually free. Closer to the travel date a small cancellation fee may apply. Full policy is shared with your booking confirmation." },
  { q: "Is driver accommodation included?", a: "For outstation tours, driver stay and food are included in the quoted price. You never pay the driver on the road for their meals or accommodation." },
  { q: "Do you accept international payments?", a: "Yes. We accept international bank transfers, PayPal, credit cards and UPI. Payment details are shared once the booking is confirmed." },
  { q: "Do you handle last-minute bookings?", a: "Yes. Subject to vehicle availability, we regularly confirm same-day and next-day taxi bookings from Jaipur." },
  { q: "Will the driver speak English?", a: "Our regular chauffeurs are comfortable with basic to conversational English. For guided tours we can also arrange a separate certified English-speaking guide." },
  { q: "Do you provide chauffeur service outside Rajasthan?", a: "Yes. We regularly drive to Agra, Delhi, Rishikesh, Amritsar and other North India destinations from Jaipur." },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "10,000+", label: "Happy Travellers" },
  { value: "40+", label: "Countries Served" },
  { value: "25+", label: "Professional Drivers" },
  { value: "30+", label: "Vehicles in Fleet" },
  { value: "<1 hr", label: "Average Response Time" },
];

const reviews = [
  { name: "Emily & James", country: "United Kingdom", vehicle: "Toyota Innova Crysta", quote: "Our chauffeur was punctual, courteous and knew Rajasthan inside out. The car was spotless and comfortable for our 10-day trip.", rating: 5 },
  { name: "Marc Dupont", country: "France", vehicle: "Sedan", quote: "Late-night airport pickup, driver waiting with a name board, straight to the hotel. Exactly the reliable service we needed.", rating: 5 },
  { name: "The Müller Family", country: "Germany", vehicle: "Tempo Traveller (12-seater)", quote: "Travelled with our extended family. Plenty of space, cool air conditioning and a very patient driver — highly recommended.", rating: 5 },
  { name: "Priya Menon", country: "India", vehicle: "Ertiga SUV", quote: "Transparent pricing and no surprises. The driver knew every fort and stopped whenever we wanted photos.", rating: 5 },
];

/* ---------- Schema (JSON-LD) ---------- */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private Taxi & Chauffeur Service",
  provider: {
    "@type": "TravelAgency",
    name: "Heritage Jaipur Travels",
    telephone: "+91-9887688843",
    url: "https://www.heritagejaipurtravels.com/taxi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "State", name: "Rajasthan" },
    { "@type": "City", name: "Jaipur" },
    { "@type": "City", name: "Udaipur" },
    { "@type": "City", name: "Jodhpur" },
    { "@type": "City", name: "Jaisalmer" },
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Delhi" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    description: "Chauffeur-driven sedans, SUVs, Innova Crysta, Tempo Travellers and luxury vehicles for Jaipur, Rajasthan and North India tours.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Heritage Jaipur Travels — Private Taxi & Chauffeur Service",
  image: "https://www.heritagejaipurtravels.com/og-image.jpg",
  telephone: "+91-9887688843",
  url: "https://www.heritagejaipurtravels.com/taxi",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302001",
    addressCountry: "IN",
  },
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "480",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.heritagejaipurtravels.com/" },
    { "@type": "ListItem", position: 2, name: "Taxi Service", item: "https://www.heritagejaipurtravels.com/taxi" },
  ],
};

/* ---------- Component ---------- */

const Taxi = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Jaipur Taxi Service | Private Chauffeur & Rajasthan Cabs"
      description="Private taxi and chauffeur service in Jaipur — airport transfers, outstation cabs, sedans, SUVs, Innova Crysta and Tempo Travellers for Rajasthan tours. Transparent pricing, licensed drivers, 24/7 support."
      path="/taxi"
      jsonLd={[serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema]}
    />

    <LuxHero
      image={luxuryCar}
      eyebrow="Private Chauffeur Service"
      title={<>Jaipur Taxi Service & <span className="text-[#C9A84C]">Rajasthan</span> Chauffeurs</>}
      subtitle="Private chauffeur-driven vehicles across Rajasthan — airport transfers, local and outstation taxi, air-conditioned fleet and fixed transparent pricing."
      height="tall"
      actions={
        <>
          <LuxLinkBtn to="/enquire?service=Private+Transport" variant="gold">Get Instant Quote</LuxLinkBtn>
          <LuxAnchorBtn href={WA_URL} external variant="outline">WhatsApp a Travel Specialist</LuxAnchorBtn>
        </>
      }
    />

    {/* Trust bar */}
    <section className="lux-cream-bg border-y" style={{ borderColor: "rgba(110,15,31,0.12)" }}>
      <div className="container mx-auto px-6 py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBar.map((t) => (
            <li key={t} className="flex items-center gap-2 text-[#0F0F0F]/75">
              <BadgeCheck className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
              <span className="text-xs md:text-sm tracking-[0.14em] uppercase font-serif">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-24 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="What We Offer"
          title="Private Transport, Planned by Locals"
          intro="Chauffeur-driven cars for sightseeing, airport transfers and full Rajasthan tours — arranged by our Jaipur office."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="p-8 bg-white/60 backdrop-blur-sm border border-[#C9A84C]/20 rounded-sm flex gap-5">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#6E0F1F] text-[#C9A84C] flex items-center justify-center">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-2">{s.title}</h3>
                <p className="font-serif text-[15px] text-[#0F0F0F]/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fleet */}
    <section className="py-20 md:py-24" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Our Fleet"
          title="Well-Maintained Vehicles, Experienced Drivers"
          intro="Air-conditioned commercial vehicles for every group size — from a private sedan to a 20-seater Tempo Traveller."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fleet.map((v, i) => (
            <article key={i} className="bg-white/80 border border-[#C9A84C]/25 rounded-sm overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-[#0F0F0F]">
                <SmartImage
                  fallback={v.image}
                  alt={`${v.name} — chauffeur-driven vehicle`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-[#0F0F0F]">{v.name}</h3>
                <p className="font-serif text-sm text-[#0F0F0F]/65 mb-4">{v.models}</p>

                <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#0F0F0F]/80 mb-4">
                  <div className="flex items-center gap-2"><Users className="h-4 w-4 text-[#C9A84C]" /><span>{v.passengers}</span></div>
                  <div className="flex items-center gap-2"><Luggage className="h-4 w-4 text-[#C9A84C]" /><span>{v.luggage}</span></div>
                  <div className="flex items-center gap-2"><Snowflake className="h-4 w-4 text-[#C9A84C]" /><span>{v.ac}</span></div>
                  <div className="flex items-center gap-2"><Fuel className="h-4 w-4 text-[#C9A84C]" /><span>{v.fuel}</span></div>
                </dl>

                <p className="text-xs tracking-[0.14em] uppercase text-[#6E0F1F] font-semibold mb-1">Best For</p>
                <p className="font-serif text-[15px] text-[#0F0F0F]/75 mb-3">{v.bestFor}</p>
                <p className="text-xs tracking-[0.14em] uppercase text-[#6E0F1F] font-semibold mb-1">Recommended Trips</p>
                <p className="font-serif text-[15px] text-[#0F0F0F]/75 mb-6">{v.trips}</p>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <LuxLinkBtn
                    to={`/enquire?service=${encodeURIComponent(v.name)}`}
                    variant="gold"
                    className="!px-5 !py-2.5 !text-[11px]"
                  >
                    Book Now
                  </LuxLinkBtn>
                  <LuxAnchorBtn
                    href={`https://wa.me/919887688843?text=I'd%20like%20a%20quote%20for%20${encodeURIComponent(v.name)}`}
                    external
                    variant="outline"
                    className="!px-5 !py-2.5 !text-[11px]"
                  >
                    Get Quote
                  </LuxAnchorBtn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Airport Transfer */}
    <section className="py-20 md:py-24 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Airport Transfers"
          title="Jaipur Airport Taxi — 24/7 Pickups & Drop-Offs"
          intro="A calm, unhurried arrival after a long flight. Our chauffeur will be waiting for you."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {airportFeatures.map((f, i) => (
            <div key={i} className="p-6 bg-white/70 border border-[#C9A84C]/25 rounded-sm">
              <div className="w-11 h-11 rounded-full bg-[#6E0F1F] text-[#C9A84C] flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#0F0F0F] mb-1">{f.title}</h3>
              <p className="font-serif text-sm text-[#0F0F0F]/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Middle contextual CTA */}
    <LuxInlineCta
      tone="cream"
      eyebrow="Airport Transfer"
      heading={<>Need pickup or drop at Jaipur airport?</>}
      primary={{ label: "Request Transport Quote", to: "/enquire?service=Airport+Transfer", icon: "send" }}
      compact
    />

    {/* Popular Routes */}
    <section className="py-20 md:py-24" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Popular Routes"
          title="Outstation Taxi from Jaipur"
          intro="Fixed all-inclusive fares for the most-booked Rajasthan and North India routes."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {routes.map((r, i) => (
            <article key={i} className="p-6 bg-white/80 border border-[#C9A84C]/25 rounded-sm">
              <div className="flex items-center gap-2 text-[#6E0F1F] mb-3">
                <RouteIcon className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs tracking-[0.14em] uppercase font-semibold">Outstation</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-4">
                {r.from} → {r.to}
              </h3>
              <dl className="grid grid-cols-2 gap-y-2 text-sm text-[#0F0F0F]/80 mb-5">
                <div><dt className="text-[11px] uppercase tracking-[0.14em] text-[#0F0F0F]/50">Distance</dt><dd className="font-serif">{r.km}</dd></div>
                <div><dt className="text-[11px] uppercase tracking-[0.14em] text-[#0F0F0F]/50">Travel Time</dt><dd className="font-serif">{r.time}</dd></div>
                <div className="col-span-2"><dt className="text-[11px] uppercase tracking-[0.14em] text-[#0F0F0F]/50">Recommended Vehicle</dt><dd className="font-serif">{r.vehicle}</dd></div>
              </dl>
              <Link
                to={`/enquire?service=${encodeURIComponent(`${r.from} to ${r.to} Taxi`)}`}
                className="text-xs tracking-[0.18em] uppercase text-[#6E0F1F] hover:text-[#C9A84C] transition-colors font-semibold"
              >
                Quick Inquiry →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 md:py-24 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Why Choose Us"
          title="A Chauffeur Service Travellers Trust"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyChoose.map((w, i) => (
            <div key={i} className="p-6 bg-white/70 border border-[#C9A84C]/25 rounded-sm">
              <div className="w-11 h-11 rounded-full border border-[#C9A84C]/50 text-[#C9A84C] flex items-center justify-center mb-4">
                <w.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-base font-semibold text-[#0F0F0F] mb-1">{w.title}</h3>
              <p className="font-serif text-sm text-[#0F0F0F]/70 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Drivers */}
    <section className="py-20 md:py-24" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Our Chauffeurs"
          title="The People Behind the Wheel"
          intro="Our drivers are long-term members of the team — many have been with us for over a decade."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {driverPoints.map((d, i) => (
            <div key={i} className="p-6 bg-white/80 border border-[#C9A84C]/25 rounded-sm">
              <div className="w-11 h-11 rounded-full bg-[#6E0F1F] text-[#C9A84C] flex items-center justify-center mb-4">
                <d.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-base font-semibold text-[#0F0F0F] mb-1">{d.title}</h3>
              <p className="font-serif text-sm text-[#0F0F0F]/70 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Safety */}
    <section className="py-20 lux-black-bg text-[#FFF8F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Safety First</span>
            <span className="lux-rule-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#FFF8F0]">Your Safety on Every Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {safety.map((s, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full border border-[#C9A84C]/50 text-[#C9A84C] flex items-center justify-center mb-3">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="font-serif text-sm text-[#FFF8F0]/80 leading-snug">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Booking Process */}
    <section className="py-20 md:py-24 lux-cream-bg">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="How It Works"
          title="Booking Your Taxi in Six Simple Steps"
        />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <li key={i} className="relative p-6 bg-white/70 border border-[#C9A84C]/25 rounded-sm">
              <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-[#6E0F1F] text-[#C9A84C] font-display text-sm flex items-center justify-center shadow">
                {i + 1}
              </span>
              <div className="flex items-center gap-3 mb-2">
                <s.icon className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-[#0F0F0F]">{s.title}</h3>
              </div>
              <p className="font-serif text-sm text-[#0F0F0F]/70 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-20 md:py-24" style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5ECDC 100%)" }}>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Customer Reviews"
          title="What Travellers Say About Our Chauffeurs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <figure key={i} className="p-8 bg-white/80 border border-[#C9A84C]/25 rounded-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-serif italic text-[17px] text-[#0F0F0F]/80 leading-relaxed mb-5">
                “{r.quote}”
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-display font-semibold text-[#6E0F1F]">{r.name}</div>
                <div className="text-[#0F0F0F]/60">{r.country} · {r.vehicle}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    {/* Trust stats */}
    <section className="py-20 lux-cream-bg border-y" style={{ borderColor: "rgba(110,15,31,0.12)" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl text-[#C9A84C] font-semibold">{s.value}</div>
              <div className="font-serif text-sm text-[#0F0F0F]/70 mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 md:py-24 lux-cream-bg">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="FAQs"
          title="Jaipur Taxi Service — Common Questions"
          intro="Practical answers for booking a private cab or chauffeur in Jaipur and across Rajasthan."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`taxi-faq-${i}`}
                className="border border-[#C9A84C]/30 bg-white/55 backdrop-blur-sm rounded-sm px-6 md:px-8 transition-colors duration-300 hover:border-[#C9A84C]/60 data-[state=open]:border-[#C9A84C]"
              >
                <AccordionTrigger className="font-display text-left text-base md:text-lg text-[#6E0F1F] font-semibold py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-serif text-[15px] md:text-base leading-relaxed text-[#0F0F0F]/75 pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    {/* Internal Linking */}
    <section className="py-16 lux-cream-bg border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <p className="lux-eyebrow mb-4">Continue Planning</p>
        <p className="font-serif text-lg text-[#0F0F0F]/75 leading-relaxed">
          Pair our private transport with a{" "}
          <Link to="/packages" className="text-[#6E0F1F] underline decoration-[#C9A84C]/60 underline-offset-4 hover:text-[#C9A84C] transition-colors">Rajasthan tour package</Link>,
          browse our{" "}
          <Link to="/destinations" className="text-[#6E0F1F] underline decoration-[#C9A84C]/60 underline-offset-4 hover:text-[#C9A84C] transition-colors">Rajasthan destinations</Link>,
          add{" "}
          <Link to="/experiences" className="text-[#6E0F1F] underline decoration-[#C9A84C]/60 underline-offset-4 hover:text-[#C9A84C] transition-colors">cultural experiences</Link>,
          read our{" "}
          <Link to="/blog" className="text-[#6E0F1F] underline decoration-[#C9A84C]/60 underline-offset-4 hover:text-[#C9A84C] transition-colors">travel journal</Link>,
          learn more{" "}
          <Link to="/about" className="text-[#6E0F1F] underline decoration-[#C9A84C]/60 underline-offset-4 hover:text-[#C9A84C] transition-colors">about our family business</Link>,
          or{" "}
          <Link to="/contact" className="text-[#6E0F1F] underline decoration-[#C9A84C]/60 underline-offset-4 hover:text-[#C9A84C] transition-colors">contact our Jaipur team</Link>.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={CALL_URL} className="inline-flex items-center gap-2 text-sm text-[#6E0F1F] hover:text-[#C9A84C] transition-colors">
            <PhoneCall className="h-4 w-4" /> +91 98876 88843
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#6E0F1F] hover:text-[#C9A84C] transition-colors">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* Final CTA — mirrors the hero pair */}
    <LuxCtaBand
      image={luxuryCar}
      eyebrow="Ready When You Are"
      title={<>Book Your <span className="text-[#C9A84C]">Private</span> Chauffeur</>}
      subtitle="Share your dates, route and number of travellers — our Jaipur team will send a personalized quote within the hour."
      primary={{ label: "Get Instant Quote", to: "/enquire?service=Private+Transport" }}
      secondary={{ label: "WhatsApp a Travel Specialist", href: WA_URL, external: true }}
    />
  </main>
);

export default Taxi;
