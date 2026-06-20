import amberFort from "@/assets/amber-fort.jpg";
import goldenTriangle from "@/assets/golden-triangle.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import heroPalace from "@/assets/hero-palace.jpg";


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
    image: heroPalace,
    title: "Grand Rajasthan Heritage Tour with Taj Mahal",
    duration: "12 Nights / 13 Days",
    highlights: ["Delhi", "Jaisalmer", "Udaipur", "Jaipur", "Agra"],
    price: "Contact Us",
    slug: "grand-rajasthan-heritage-tour",
    badge: "Best Seller",
  },
  {
    image: goldenTriangle,
    title: "Golden Triangle & Royal Rajasthan Tour",
    duration: "9 Nights / 10 Days",
    highlights: ["Delhi", "Agra", "Jaipur", "Pushkar", "Jodhpur", "Udaipur"],
    price: "Contact Us",
    slug: "golden-triangle-royal-rajasthan-tour",
    badge: "Most Popular",
  },
  {
    image: royalTour,
    title: "Rajasthan Royal Heritage Tour",
    duration: "6 Days / 5 Nights",
    highlights: ["Jaipur", "Jodhpur", "Jaisalmer"],
    price: "Contact Us",
    slug: "rajasthan-royal",
  },

  {
    image: goldenTriangle,
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
    image: amberFort,
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
