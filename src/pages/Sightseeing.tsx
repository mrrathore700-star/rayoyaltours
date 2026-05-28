import SEO from "@/components/SEO";
import cityPalace from "@/assets/city-palace.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import jantarMantar from "@/assets/jantar-mantar.jpg";
import jalMahal from "@/assets/jal-mahal.jpg";
import nahargarhFort from "@/assets/nahargarh-fort.jpg";
import jaigarhFort from "@/assets/jaigarh-fort.jpg";
import pannaMeenaKund from "@/assets/panna-meena-kund.jpg";
import albertHall from "@/assets/albert-hall.jpg";
import localMarket from "@/assets/local-market.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxAnchorBtn, LuxLinkBtn } from "@/components/luxury/LuxButton";

const spots = [
  { image: amberFort, title: "Amber Fort", desc: "A 16th-century hilltop fort by Raja Man Singh I — famed for its Sheesh Mahal, Ganesh Pol, and the soft Maota Lake mornings before the crowds arrive." },
  { image: jaigarhFort, title: "Jaigarh Fort", desc: "The Victory Fort above Amber — home to the largest wheeled cannon ever built, with secret passages and the legendary lost treasure of the Kachwahas." },
  { image: nahargarhFort, title: "Nahargarh Fort", desc: "Perched on the Aravalli hills with Jaipur's most breathtaking sunset views — twelve identical queen suites, an open-air rooftop, and night-camping under desert stars." },
  { image: jalMahal, title: "Jal Mahal", desc: "The Water Palace that floats in Man Sagar Lake — four storeys submerged, best photographed at sunrise when migratory birds gather on still water." },
  { image: hawaMahal, title: "Hawa Mahal", desc: "The Palace of Winds — 953 honeycomb windows in pink sandstone, designed so royal ladies could observe street festivals unseen." },
  { image: cityPalace, title: "City Palace", desc: "Royal residence since 1727 — Mubarak Mahal, Chandra Mahal, and the famed Peacock Gate at Pritam Niwas Chowk." },
  { image: jantarMantar, title: "Jantar Mantar", desc: "A UNESCO World Heritage Site of nineteen astronomical instruments — including the world's largest stone sundial, accurate to two seconds." },
  { image: pannaMeenaKund, title: "Panna Meena Ka Kund", desc: "A symmetrical 16th-century stepwell — interlocking stairways, peaceful, free to visit, and a quiet marvel of ancient water harvesting." },
  { image: albertHall, title: "Albert Hall Museum", desc: "Rajasthan's oldest museum in Indo-Saracenic style — Egyptian mummies, Persian carpets, royal artefacts, breathtaking at dusk under evening illumination." },
  { image: localMarket, title: "The Bazaars", desc: "Johari for jewellery, Bapu for juttis, Tripolia for lac bangles, Nehru for block-print — a sensory journey through Jaipur's living craft." },
];

const Sightseeing = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Jaipur Sightseeing | Private Tours of the Pink City"
      description="Explore Jaipur's forts, palaces, stepwells and bazaars with private local specialists — quiet mornings at Amber, sunsets at Nahargarh, hidden lanes beyond the guidebook."
      path="/sightseeing"
    />

    <LuxHero
      image={amberFort}
      eyebrow="Pink City"
      title={<>Jaipur, <span className="text-[#C9A84C]">Slowly</span> Discovered</>}
      subtitle="Forts before the crowds, palaces behind closed doors, bazaars known only to locals."
      actions={
        <>
          <LuxLinkBtn to="/contact" variant="gold">Design My Day</LuxLinkBtn>
          <LuxAnchorBtn href="https://wa.me/919887688843" external variant="outline">WhatsApp Specialist</LuxAnchorBtn>
        </>
      }
    />

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-24 md:space-y-32">
          {spots.map((spot, i) => (
            <div key={i} className={`flex flex-col ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-sm group">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-5">
                  <span className="lux-rule-gold" />
                  <span className="lux-eyebrow">Chapter {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#0F0F0F] mb-5 leading-tight">{spot.title}</h3>
                <p className="font-serif text-lg text-[#0F0F0F]/75 mb-7 leading-relaxed">{spot.desc}</p>
                <a
                  href={`https://wa.me/919887688843?text=${encodeURIComponent(`I would like to arrange a private visit to ${spot.title}. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#C9A84C] hover:text-[#6E0F1F] transition-colors"
                >
                  <span className="lux-rule-gold" /> Plan This Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LuxCtaBand
      image={cityPalace}
      eyebrow="Begin"
      title={<>Craft Your Private <span className="text-[#C9A84C]">Jaipur</span> Day</>}
      subtitle="Tell us what moves you — we'll arrange the rest, from chauffeur to chai."
      primary={{ label: "Plan My Day", to: "/contact" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919887688843", external: true }}
    />
  </main>
);

export default Sightseeing;
