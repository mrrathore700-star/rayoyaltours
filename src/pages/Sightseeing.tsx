import SectionHeading from "@/components/SectionHeading";
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

const spots = [
  {
    image: amberFort,
    title: "Amber Fort (Amer Fort)",
    desc: "A majestic 16th-century hilltop fort built by Raja Man Singh I, famous for its Sheesh Mahal (Hall of Mirrors), Diwan-e-Aam, Ganesh Pol gate and elephant rides up to the entrance. UNESCO World Heritage Site with stunning Maota Lake views.",
  },
  {
    image: jaigarhFort,
    title: "Jaigarh Fort",
    desc: "The 'Victory Fort' overlooking Amber, home to Jaivana — the world's largest wheeled cannon ever built. Known for its massive ramparts, secret underground passages connecting to Amber Fort, and the legendary lost treasure of the Kachwaha kings.",
  },
  {
    image: nahargarhFort",
    title: "Nahargarh Fort",
    desc: "Perched on the Aravalli hills, Nahargarh offers Jaipur's most breathtaking sunset and night views — the entire Pink City glittering below. Famous for Madhavendra Bhawan (12 identical queen suites connected by corridors), the Wax Museum, Padao open-air rooftop restaurant for romantic candlelight dinners under the stars, and weekend night camping experiences with bonfires and folk music.",
  },
  {
    image: jalMahal,
    title: "Jal Mahal",
    desc: "The 'Water Palace' that appears to float in the middle of Man Sagar Lake. Four of its five storeys remain submerged year-round. Best viewed at sunrise and sunset when migratory birds gather. A perfect photo stop on the way to Amber Fort.",
  },
  {
    image: hawaMahal,
    title: "Hawa Mahal",
    desc: "The iconic 'Palace of Winds' with 953 small jharokha windows designed so royal ladies could observe street festivals unseen. Jaipur's most photographed five-storey honeycomb façade in pink sandstone — best captured at sunrise from the rooftop café opposite.",
  },
  {
    image: cityPalace,
    title: "City Palace",
    desc: "A magnificent blend of Rajasthani and Mughal architecture, home to the royal family of Jaipur since 1727. Highlights include Mubarak Mahal, Chandra Mahal, the famous Peacock Gate at Pritam Niwas Chowk, and a museum of royal costumes and weapons.",
  },
  {
    image: jantarMantar,
    title: "Jantar Mantar",
    desc: "A UNESCO World Heritage Site built by Maharaja Sawai Jai Singh II, featuring 19 astronomical instruments including the Samrat Yantra — the world's largest stone sundial that tells time accurate to 2 seconds.",
  },
  {
    image: pannaMeenaKund,
    title: "Panna Meena Ka Kund",
    desc: "A stunning 16th-century symmetrical stepwell near Amber Fort, famous for its criss-cross zigzag staircases on all four sides. A hidden gem and Instagram favourite — peaceful, free to visit, and an architectural marvel of ancient water harvesting.",
  },
  {
    image: albertHall,
    title: "Albert Hall Museum",
    desc: "Rajasthan's oldest museum located in Ram Niwas Garden, built in spectacular Indo-Saracenic style. Houses Egyptian mummies, Persian carpets, miniature paintings and royal artefacts. Beautifully illuminated at night and surrounded by hundreds of pigeons at dusk — a magical sight.",
  },
  {
    image: localMarket,
    title: "Local Market Tours",
    desc: "Explore Jaipur's vibrant bazaars — Johari Bazaar for gold, silver and Kundan-Meena jewellery; Bapu Bazaar for Jaipuri juttis, mojaris and textiles; Tripolia Bazaar for lac bangles and brassware; Chandpole for marble idols; Nehru Bazaar for block-print fabrics, Bandhej sarees and Rajasthani handicrafts. A shopper's paradise full of colour, aroma and culture.",
  },
];

const Sightseeing = () => (
  <main className="pt-24 pb-20">
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Jaipur Sightseeing"
        subtitle="Discover the Pink City's iconic landmarks and hidden gems with our expert local guides"
      />
      <div className="space-y-16">
        {spots.map((spot, i) => (
          <div key={i} className={`flex flex-col ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg heritage-shadow">
                <img src={spot.image} alt={spot.title} className="w-full aspect-[4/3] object-cover" loading="lazy" width={1024} height={768} />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{spot.title}</h3>
              <p className="font-serif text-lg text-muted-foreground mb-4">{spot.desc}</p>
              <a
                href={`https://wa.me/919461069858?text=${encodeURIComponent(`I want to visit ${spot.title} in Jaipur. Please share details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md heritage-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book This Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Sightseeing;
