import SectionHeading from "@/components/SectionHeading";
import cityPalace from "@/assets/city-palace.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import jantarMantar from "@/assets/jantar-mantar.jpg";
import localMarket from "@/assets/local-market.jpg";

const spots = [
  { image: cityPalace, title: "City Palace", desc: "A magnificent blend of Rajasthani and Mughal architecture, home to the royal family of Jaipur since 1727." },
  { image: amberFort, title: "Amber Fort", desc: "A majestic hilltop fort with stunning courtyards, halls of mirrors, and panoramic Aravalli views." },
  { image: hawaMahal, title: "Hawa Mahal", desc: "The iconic 'Palace of Winds' with 953 jharokha windows — Jaipur's most photographed landmark." },
  { image: jantarMantar, title: "Jantar Mantar", desc: "A UNESCO World Heritage Site featuring the world's largest stone sundial and astronomical instruments." },
  { image: localMarket, title: "Local Market Tours", desc: "Explore vibrant bazaars for traditional textiles, jewelry, pottery, and authentic Rajasthani handicrafts." },
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
                <img src={spot.image} alt={spot.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{spot.title}</h3>
              <p className="font-serif text-lg text-muted-foreground mb-4">{spot.desc}</p>
              <a
                href="https://wa.me/919461069858?text=I%20want%20to%20visit%20" 
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
