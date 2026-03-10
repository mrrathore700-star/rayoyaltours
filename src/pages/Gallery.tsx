import SectionHeading from "@/components/SectionHeading";
import heroPalace from "@/assets/hero-palace.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import cityPalace from "@/assets/city-palace.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import localMarket from "@/assets/local-market.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import rajasthaniFood from "@/assets/rajasthani-food.jpg";
import villageTour from "@/assets/village-tour.jpg";

const images = [
  { src: heroPalace, alt: "Rajasthan palace at sunset", cat: "Palaces" },
  { src: amberFort, alt: "Amber Fort Jaipur", cat: "Forts" },
  { src: cityPalace, alt: "Jaipur City Palace", cat: "Palaces" },
  { src: hawaMahal, alt: "Hawa Mahal Palace of Winds", cat: "Palaces" },
  { src: desertSafari, alt: "Camel desert safari", cat: "Desert" },
  { src: udaipurLake, alt: "Udaipur Lake Palace", cat: "Palaces" },
  { src: localMarket, alt: "Colorful Jaipur market", cat: "Markets" },
  { src: culturalDance, alt: "Rajasthani folk dance", cat: "Culture" },
  { src: jaisalmerFort, alt: "Jaisalmer golden fort", cat: "Forts" },
  { src: royalTour, alt: "Royal palace interior", cat: "Palaces" },
  { src: rajasthaniFood, alt: "Traditional Rajasthani cuisine", cat: "Culture" },
  { src: villageTour, alt: "Rajasthan village life", cat: "Culture" },
];

const Gallery = () => (
  <main className="pt-24 pb-20">
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Photo Gallery"
        subtitle="A visual journey through the colors, forts, and culture of Rajasthan"
      />
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden rounded-lg heritage-shadow group cursor-pointer">
            <div className="relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity p-4 text-sand text-sm font-semibold">
                  {img.alt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Gallery;
