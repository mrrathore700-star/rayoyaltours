import amberFort from "@/assets/amber-fort.jpg";
import goldenTriangle from "@/assets/golden-triangle.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import desertSafari from "@/assets/desert-safari-jaisalmer-hero.webp";
import udaipurLake from "@/assets/udaipur-lake-palace-hero.webp";
import ranthamboreTiger from "@/assets/golden-triangle-ranthambore-hero.webp";
import jaipurHeritage from "@/assets/jaipur-heritage-amber-fort-hero.webp";
import heroPalace from "@/assets/hero-palace.jpg";
import grandRajasthanHero from "@/assets/grand-rajasthan-taj-mahal-hero.webp";
import goldenTriangleRoyalHero from "@/assets/golden-triangle-royal-city-palace-hero.webp";
import rajasthanRoyalHero from "@/assets/rajasthan-royal-umaid-bhawan-hero.webp";
import goldenTriangleHero from "@/assets/golden-triangle-taj-mahal-hero.webp";


export interface TourSummary {
  image: string;
  title: string;
  duration: string;
  highlights: string[];
  price?: string;
  slug?: string;
  badge?: string;
}

export const tours: TourSummary[] = [
  {
    image: grandRajasthanHero,
    title: "Grand Rajasthan Heritage Tour with Taj Mahal",
    duration: "12 Nights / 13 Days",
    highlights: ["Delhi", "Jaisalmer", "Udaipur", "Jaipur", "Agra"],
    price: "Contact Us",
    slug: "grand-rajasthan-heritage-tour",
    badge: "Best Seller",
  },
  {
    image: goldenTriangleRoyalHero,
    title: "Golden Triangle & Royal Rajasthan Tour",
    duration: "9 Nights / 10 Days",
    highlights: ["Delhi", "Agra", "Jaipur", "Pushkar", "Jodhpur", "Udaipur"],
    price: "Contact Us",
    slug: "golden-triangle-royal-rajasthan-tour",
    badge: "Most Popular",
  },
  {
    image: rajasthanRoyalHero,
    title: "Rajasthan Royal Heritage Tour",
    duration: "6 Days / 5 Nights",
    highlights: ["Jaipur", "Jodhpur", "Jaisalmer"],
    price: "Contact Us",
    slug: "rajasthan-royal",
  },

  {
    image: goldenTriangleHero,
    title: "Golden Triangle Tour",
    duration: "6 Days / 5 Nights",
    highlights: ["Delhi", "Agra", "Jaipur"],
    price: "Contact Us",
    slug: "golden-triangle",
  },
  {
    image: ranthamboreTiger,
    title: "Golden Triangle with Ranthambore",
    duration: "7 Days / 6 Nights",
    highlights: ["Delhi", "Agra", "Ranthambore", "Jaipur"],
    price: "Contact Us",
    slug: "golden-triangle-ranthambore",
  },
  {
    image: jaipurHeritage,
    title: "Jaipur Heritage Tour",
    duration: "2 Days / 1 Night",
    highlights: ["Jaipur"],
    price: "Contact Us",
    slug: "jaipur-heritage",
  },
  {
    image: desertSafari,
    title: "Desert Safari Jaisalmer",
    duration: "3 Days / 2 Nights",
    highlights: ["Jaisalmer"],
    price: "Contact Us",
    slug: "desert-safari",
  },
  {
    image: udaipurLake,
    title: "Udaipur Lake Tour",
    duration: "3 Days / 2 Nights",
    highlights: ["Udaipur"],
    price: "Contact Us",
    slug: "udaipur-lake",
  },
];
