import amberFort from "@/assets/amber-fort.jpg";
import pushkarLake from "@/assets/pushkar-lake.jpg";
import pannaMeenaKund from "@/assets/panna-meena-kund.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";

export interface DayTourPlace {
  name: string;
  description?: string;
  bullets?: string[];
  hoursLabel?: string; // e.g. "Opening Hours", "Access", "Market Hours", "Safari Timings"
  hours?: string | string[];
  hoursNote?: string;
}

export interface DayTourFAQ {
  q: string;
  a: string;
}

export interface DayTour {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  image: string;
  overview: string;
  places: DayTourPlace[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  faqs: DayTourFAQ[];
  metaTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  badge?: string;
}

const commonInclusions = [
  "Private Air-Conditioned Vehicle",
  "Professional Driver",
  "Fuel Charges",
  "Toll Tax",
  "Parking Charges",
  "Hotel Pickup & Drop",
  "Travel Assistance",
];

const commonExclusions = [
  "Monument Entry Fees",
  "Meals",
  "Personal Expenses",
  "Guide Services",
  "Travel Insurance",
];

const commonFAQs: DayTourFAQ[] = [
  { q: "Is hotel pickup included?", a: "Yes, hotel pickup and drop are included." },
  { q: "Is this a private tour?", a: "Yes, all tours are operated privately." },
  { q: "Can the itinerary be customized?", a: "Yes, tours can be customized according to traveler preferences." },
  { q: "Are monument tickets included?", a: "No, monument entry fees are excluded unless specified." },
];

export const dayTours: Record<string, DayTour> = {
  "jaipur-full-day-sightseeing": {
    slug: "jaipur-full-day-sightseeing",
    title: "Jaipur Full Day Sightseeing Tour",
    tagline: "A private journey through the Pink City's most iconic landmarks.",
    duration: "Full Day",
    image: amberFort,
    overview:
      "Discover Jaipur's royal heritage through magnificent forts, palaces, observatories and vibrant local markets. Explore the city's most iconic landmarks with a private vehicle and experienced driver.",
    places: [
      {
        name: "Amber Fort",
        bullets: ["UNESCO World Heritage Site", "Rajput Architecture", "Sheesh Mahal", "Palace Complex"],
        hoursLabel: "Opening Hours",
        hours: "8:00 AM – 5:30 PM",
      },
      {
        name: "Jal Mahal",
        bullets: ["Palace in the middle of Man Sagar Lake", "Popular photography stop"],
        hoursLabel: "Access",
        hours: "Open All Day",
      },
      {
        name: "Hawa Mahal",
        bullets: ["Palace of Winds", "Jaipur's most iconic landmark"],
        hoursLabel: "Opening Hours",
        hours: "9:00 AM – 5:00 PM",
      },
      {
        name: "City Palace",
        bullets: ["Royal residence and museum complex"],
        hoursLabel: "Opening Hours",
        hours: "9:30 AM – 5:00 PM",
      },
      {
        name: "Jantar Mantar",
        bullets: ["UNESCO World Heritage Site", "Historic astronomical observatory"],
        hoursLabel: "Opening Hours",
        hours: "9:00 AM – 4:30 PM",
      },
      {
        name: "Johari Bazaar & Bapu Bazaar",
        bullets: ["Jewelry", "Handicrafts", "Textiles"],
        hoursLabel: "Market Hours",
        hours: "10:00 AM – 9:00 PM",
      },
    ],
    highlights: ["Amber Fort", "Jal Mahal", "Hawa Mahal", "City Palace", "Jantar Mantar", "Local Market Experience"],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    faqs: commonFAQs,
    metaTitle: "Jaipur Full Day Sightseeing Tour | Private Pink City Tour",
    metaDescription:
      "Private Jaipur full day sightseeing tour covering Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal and local bazaars with chauffeur-driven vehicle.",
    seoKeywords: ["Jaipur day tour", "Jaipur sightseeing", "Pink City tour", "Amber Fort tour"],
    badge: "Most Popular",
  },

  "pushkar-day-trip-from-jaipur": {
    slug: "pushkar-day-trip-from-jaipur",
    title: "Pushkar Day Trip from Jaipur",
    tagline: "A sacred journey to the holy town of Pushkar.",
    duration: "Full Day",
    image: pushkarLake,
    overview:
      "Explore Pushkar, one of India's most sacred towns, known for its spiritual atmosphere, holy lake, ancient temples and colorful local markets.",
    places: [
      {
        name: "Brahma Temple",
        description: "One of the world's few temples dedicated to Lord Brahma.",
        hoursLabel: "Opening Hours",
        hours: "6:00 AM – 8:30 PM",
      },
      {
        name: "Pushkar Lake",
        description: "Sacred lake surrounded by historic ghats and temples.",
        hoursLabel: "Access",
        hours: "Open All Day",
      },
      {
        name: "Savitri Temple",
        description: "Hilltop temple offering panoramic views.",
        hoursLabel: "Opening Hours",
        hours: "5:00 AM – 8:00 PM",
      },
      {
        name: "Pushkar Market",
        description: "Traditional handicrafts, jewelry and textiles.",
        hoursLabel: "Market Hours",
        hours: "10:00 AM – 9:00 PM",
      },
    ],
    highlights: ["Brahma Temple", "Pushkar Lake", "Sacred Ghats", "Savitri Temple", "Local Markets", "Spiritual Experience"],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    faqs: commonFAQs,
    metaTitle: "Pushkar Day Trip from Jaipur | Private Tour to Holy Pushkar",
    metaDescription:
      "Private day trip to Pushkar from Jaipur. Visit Brahma Temple, sacred Pushkar Lake, Savitri Temple and Pushkar bazaar with chauffeur-driven vehicle.",
    seoKeywords: ["Pushkar day trip", "Jaipur to Pushkar tour", "Brahma Temple tour"],
  },

  "abhaneri-chand-baori-day-trip": {
    slug: "abhaneri-chand-baori-day-trip",
    title: "Abhaneri Chand Baori Day Trip",
    tagline: "Discover one of India's most spectacular ancient stepwells.",
    duration: "Full Day",
    image: pannaMeenaKund,
    overview:
      "Visit one of India's most impressive stepwells and explore the rich architectural heritage of rural Rajasthan.",
    places: [
      {
        name: "Chand Baori",
        description: "One of the largest and deepest stepwells in India.",
        hoursLabel: "Opening Hours",
        hours: "8:00 AM – 6:00 PM",
      },
      {
        name: "Harshat Mata Temple",
        description: "Historic temple known for ancient architecture.",
        hoursLabel: "Opening Hours",
        hours: "8:00 AM – 6:00 PM",
      },
      {
        name: "Rural Rajasthan",
        description: "Traditional village life and local culture.",
        hoursLabel: "Access",
        hours: "Throughout the Day",
      },
    ],
    highlights: ["Chand Baori", "Harshat Mata Temple", "Heritage Architecture", "Village Experience", "Photography Opportunities"],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    faqs: commonFAQs,
    metaTitle: "Abhaneri Chand Baori Day Trip | Private Stepwell Tour",
    metaDescription:
      "Private day trip to Abhaneri Chand Baori, one of India's largest stepwells, with visit to Harshat Mata Temple and rural Rajasthan villages.",
    seoKeywords: ["Chand Baori tour", "Abhaneri day trip", "Stepwell tour Rajasthan"],
  },

  "ranthambore-tiger-safari-day-trip": {
    slug: "ranthambore-tiger-safari-day-trip",
    title: "Ranthambore Tiger Safari Day Trip",
    tagline: "An unforgettable wildlife adventure in India's iconic tiger reserve.",
    duration: "Full Day",
    image: ranthamboreTiger,
    overview:
      "Experience an exciting wildlife adventure at Ranthambore National Park, one of India's most famous tiger reserves.",
    places: [
      {
        name: "Ranthambore National Park",
        description: "Tiger reserve and wildlife sanctuary.",
        hoursLabel: "Safari Timings",
        hours: ["Morning Safari: Approx. 6:00 AM – 10:00 AM", "Afternoon Safari: Approx. 2:30 PM – 6:30 PM"],
        hoursNote: "Safari timings vary by season and forest regulations.",
      },
      {
        name: "Ranthambore Fort",
        description: "UNESCO-listed hill fort inside the national park.",
        hoursLabel: "Opening Hours",
        hours: "Sunrise to Sunset",
      },
      {
        name: "Wildlife Experience",
        bullets: ["Bengal Tiger", "Leopard", "Sloth Bear", "Sambar Deer", "Crocodiles", "Exotic Birds"],
        hoursLabel: "Possible Sightings",
        hours: "Subject to wildlife activity",
      },
    ],
    highlights: ["Tiger Safari", "Ranthambore National Park", "Wildlife Photography", "Ranthambore Fort", "Nature & Adventure"],
    inclusions: commonInclusions,
    exclusions: [
      ...commonExclusions,
      "Safari Permit",
      "Safari Vehicle Charges",
      "Forest Entry Fee",
    ],
    faqs: commonFAQs,
    metaTitle: "Ranthambore Tiger Safari Day Trip | Private Wildlife Tour",
    metaDescription:
      "Private day trip to Ranthambore National Park for tiger safari. Spot Bengal tigers, leopards and exotic wildlife with comfortable chauffeur-driven transfer.",
    seoKeywords: ["Ranthambore day trip", "Ranthambore tiger safari", "Wildlife tour Rajasthan"],
  },
};

export const dayToursList: DayTour[] = Object.values(dayTours);
