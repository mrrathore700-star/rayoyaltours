export interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
  overnight: string;
}

export interface TourDetail {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  price: string;
  overview: string;
  arrivalOptions: string[];
  departureOptions: string[];
  itinerary: DayItinerary[];
  highlights: string[];
  accommodationOptions: string[];
  inclusions: string[];
  exclusions: string[];
  idealFor: string[];
  whyChoose: string[];
  seoKeywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const tourDetails: Record<string, TourDetail> = {
  "rajasthan-royal": {
    slug: "rajasthan-royal",
    title: "Rajasthan Royal Heritage Tour",
    tagline: "Experience the royal soul of Rajasthan – from majestic forts to golden desert nights.",
    duration: "6 Days / 5 Nights",
    price: "From ₹29,999",
    overview:
      "This carefully crafted Rajasthan tour offers a complete cultural, historical, and desert experience. Designed especially for international travelers, the package includes door-to-door service, ensuring a smooth journey from arrival to departure. Guests can choose flexible pickup and drop options from both Jaipur and Delhi, making travel planning effortless and comfortable.",
    arrivalOptions: [
      "Indira Gandhi International Airport (Delhi)",
      "Delhi Railway Station",
      "Jaipur International Airport (Jaipur)",
      "Jaipur Railway Station",
    ],
    departureOptions: [
      "Delhi Airport / Railway Station",
      "Jaipur Airport / Railway Station",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur – Welcome to the Pink City",
        activities: [
          "Pickup from Delhi or Jaipur Airport / Railway Station",
          "Transfer to hotel in Jaipur",
          "Check-in and relaxation after journey",
          "Optional evening visit to local bazaars (handicrafts & textiles)",
        ],
        overnight: "Jaipur",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing – Royal Heritage Exploration",
        activities: [
          "Visit Amber Fort (elephant ride / jeep optional)",
          "Explore City Palace",
          "Visit Jantar Mantar (UNESCO site)",
          "Photo stop at Hawa Mahal (Palace of Winds)",
          "Evening free for shopping or leisure",
        ],
        overnight: "Jaipur",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur – Journey to the Blue City",
        activities: [
          "Breakfast at hotel",
          "Drive to Jodhpur (scenic countryside route)",
          "Check-in at hotel",
          "Evening at leisure or local market visit",
        ],
        overnight: "Jodhpur",
      },
      {
        day: 4,
        title: "Jodhpur Sightseeing & Transfer to Jaisalmer",
        activities: [
          "Visit Mehrangarh Fort (one of India's largest forts)",
          "Jaswant Thada (royal cenotaph)",
          "Explore Clock Tower market",
          "Drive to Jaisalmer",
          "Hotel check-in",
        ],
        overnight: "Jaisalmer",
      },
      {
        day: 5,
        title: "Jaisalmer Sightseeing & Desert Safari Experience",
        activities: [
          "Visit Jaisalmer Fort (living fort)",
          "Explore Patwon Ki Haveli",
          "Visit Gadisar Lake",
          "Transfer to Sam Sand Dunes",
          "Camel Safari in golden dunes 🐪",
          "Sunset photography",
          "Traditional Rajasthani folk dance & music",
          "Dinner at desert camp",
        ],
        overnight: "Desert Camp",
      },
      {
        day: 6,
        title: "Departure – End of Royal Journey",
        activities: [
          "Breakfast at camp/hotel",
          "Drive back to Jaipur or Delhi",
          "Drop at Airport / Railway Station",
          "Tour ends with unforgettable memories of Rajasthan",
        ],
        overnight: "",
      },
    ],
    highlights: [
      "Explore Jaipur's royal palaces & forts",
      "Discover the Blue City of Jodhpur",
      "Experience Jaisalmer's golden desert",
      "Camel safari & cultural night in desert",
      "Flexible pickup & drop (Delhi & Jaipur)",
      "Private guided travel experience",
    ],
    accommodationOptions: [
      "Standard (3★ Hotels)",
      "Deluxe (4★ Hotels)",
      "Luxury (Heritage & Boutique Hotels)",
    ],
    inclusions: [
      "Airport / Railway Station pickup & drop",
      "Private air-conditioned vehicle with driver",
      "Hotel accommodation",
      "Daily breakfast",
      "Desert camp stay with dinner",
      "Camel safari experience",
      "All sightseeing as per itinerary",
    ],
    exclusions: [
      "International / domestic flights",
      "Entry fees to monuments",
      "Personal expenses (shopping, tips, etc.)",
      "Travel insurance",
    ],
    idealFor: [
      "International tourists 🌍",
      "Couples & honeymooners 💑",
      "Families & small groups",
      "Cultural & heritage travelers",
    ],
    whyChoose: [
      "Complete arrival-to-departure assistance",
      "Flexible Delhi & Jaipur pickup/drop",
      "Local Rajasthan travel experts",
      "Safe & comfortable travel experience",
      "Fully customizable itinerary",
    ],
    seoKeywords: [
      "Rajasthan tour package from Delhi airport",
      "Rajasthan tour with Jaipur pickup and drop",
      "India desert safari tour package",
      "Golden triangle with Jaisalmer extension",
      "Rajasthan itinerary for foreign tourists",
    ],
    metaTitle: "Rajasthan Royal Heritage Tour – 6 Days | Heritage Jaipur Travels",
    metaDescription:
      "Experience royal Rajasthan in 6 days – Jaipur, Jodhpur & Jaisalmer with Delhi/Jaipur pickup & drop. Camel safari, forts, desert camp. Book now!",
  },
  "jaipur-heritage": {
    slug: "jaipur-heritage",
    title: "Jaipur Heritage Tour",
    tagline: "Experience Royalty in Just 48 Hours – The Perfect Pink City Getaway",
    duration: "2 Days / 1 Night",
    price: "Contact Us",
    overview:
      "Short on time but want to experience the essence of Rajasthan? This carefully curated journey through Jaipur offers a perfect mix of royal heritage, culture, architecture, and local life—all in just 2 days. Ideal for weekend travelers, business visitors, and international tourists on a tight schedule.",
    arrivalOptions: ["Jaipur Airport", "Jaipur Railway Station", "Hotel Pickup"],
    departureOptions: ["Jaipur Airport / Railway Station"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Pink City Exploration",
        activities: [
          "Pickup from Airport / Railway Station",
          "Hotel check-in & refresh",
          "Visit Hawa Mahal – Iconic Palace of Winds",
          "Explore City Palace Jaipur – Royal residence & museum",
          "Visit Jantar Mantar – UNESCO astronomical observatory",
          "Walk through local bazaars (Johari Bazaar & Bapu Bazaar)",
          "Optional: Street food tasting / rooftop dinner",
        ],
        overnight: "Jaipur",
      },
      {
        day: 2,
        title: "Forts, Views & Departure",
        activities: [
          "Breakfast at hotel",
          "Visit Amber Fort – Majestic hilltop fort",
          "Optional: Elephant ride / Jeep ride",
          "Photo stop at Jal Mahal – Water Palace (outside view)",
          "Visit Nahargarh Fort – Best panoramic city view",
          "Drop at Airport / Railway Station",
          "Tour ends with royal memories 👑",
        ],
        overnight: "",
      },
    ],
    highlights: ["Hawa Mahal", "City Palace", "Amber Fort", "Jantar Mantar", "Jal Mahal", "Nahargarh Fort"],
    accommodationOptions: ["3★ Comfort Hotel", "4★ Deluxe Stay", "Heritage Haveli Experience (Recommended for foreigners)"],
    inclusions: [
      "1 Night hotel accommodation",
      "Daily breakfast",
      "Private AC vehicle (Sedan/SUV)",
      "All sightseeing as per itinerary",
      "Pickup & drop service",
      "Driver allowance, toll & parking",
      "English-speaking driver",
    ],
    exclusions: [
      "Entry tickets to monuments",
      "Lunch & dinner",
      "Personal expenses",
      "Guide (available on request)",
    ],
    idealFor: ["Weekend travelers ✨", "Business visitors", "International tourists", "First-time visitors to Jaipur"],
    whyChoose: [
      "Perfect for short trips & weekend getaways",
      "Covers top highlights + local experience",
      "Flexible & customizable",
      "Ideal for first-time visitors",
      "Instant confirmation available",
      "Custom upgrades (luxury stay / guide / cultural dinner)",
    ],
    seoKeywords: ["Jaipur heritage tour", "Jaipur 2 day tour package", "Jaipur sightseeing tour", "Pink City tour", "Jaipur weekend tour"],
    metaTitle: "Jaipur Heritage Tour – 2 Days | Heritage Jaipur Travels",
    metaDescription: "Experience Jaipur in 48 hours – Amber Fort, Hawa Mahal, City Palace & more. Private AC vehicle, heritage stays & expert guides. Book now!",
  },
  "golden-triangle": {
    slug: "golden-triangle",
    title: "Golden Triangle Tour",
    tagline: "The classic Indian journey through Delhi, Agra & Jaipur.",
    duration: "5 Days / 4 Nights",
    price: "From ₹24,999",
    overview:
      "The Golden Triangle tour covers India's three most iconic cities – Delhi, Agra, and Jaipur. Experience the Taj Mahal, Red Fort, City Palace, and much more on this unforgettable journey.",
    arrivalOptions: ["Delhi Airport", "Delhi Railway Station"],
    departureOptions: ["Delhi Airport / Railway Station", "Jaipur Airport / Railway Station"],
    itinerary: [
      { day: 1, title: "Arrival in Delhi", activities: ["Pickup from Delhi Airport/Station", "Visit India Gate & Qutub Minar", "Check-in at hotel"], overnight: "Delhi" },
      { day: 2, title: "Delhi to Agra", activities: ["Drive to Agra", "Visit Taj Mahal at sunset", "Explore Agra Fort"], overnight: "Agra" },
      { day: 3, title: "Agra to Jaipur via Fatehpur Sikri", activities: ["Visit Fatehpur Sikri", "Drive to Jaipur", "Evening at leisure"], overnight: "Jaipur" },
      { day: 4, title: "Jaipur Sightseeing", activities: ["Visit Amber Fort", "City Palace & Jantar Mantar", "Photo stop at Hawa Mahal", "Evening bazaar"], overnight: "Jaipur" },
      { day: 5, title: "Departure", activities: ["Breakfast at hotel", "Drop at Jaipur or Delhi Airport/Station"], overnight: "" },
    ],
    highlights: ["Taj Mahal", "Amber Fort", "Red Fort Delhi", "Fatehpur Sikri", "City Palace"],
    accommodationOptions: ["Standard (3★)", "Deluxe (4★)", "Luxury (5★)"],
    inclusions: ["Airport pickup & drop", "Private AC vehicle", "Hotel accommodation", "Daily breakfast", "Sightseeing as per itinerary"],
    exclusions: ["Flights", "Entry fees", "Personal expenses", "Travel insurance"],
    idealFor: ["International tourists", "First-time India visitors", "Couples"],
    whyChoose: ["Most popular India tour", "Experienced guides", "Flexible schedule"],
    seoKeywords: ["Golden triangle tour India", "Delhi Agra Jaipur tour", "Golden triangle package"],
    metaTitle: "Golden Triangle Tour – 5 Days | Heritage Jaipur Travels",
    metaDescription: "Experience Delhi, Agra & Jaipur in 5 days. Visit Taj Mahal, Amber Fort & more. Private tour with pickup & drop. Book now!",
  },
  "desert-safari": {
    slug: "desert-safari",
    title: "Desert Safari Jaisalmer",
    tagline: "Ride through golden sand dunes under a canopy of stars.",
    duration: "3 Days / 2 Nights",
    price: "From ₹14,999",
    overview:
      "Experience the magic of Rajasthan's Thar Desert with our Jaisalmer desert safari tour. Enjoy camel rides, cultural performances, and a night under the stars at a desert camp.",
    arrivalOptions: ["Jaisalmer Airport", "Jaisalmer Railway Station", "Jodhpur Airport"],
    departureOptions: ["Jaisalmer Airport / Railway Station"],
    itinerary: [
      { day: 1, title: "Arrival & Jaisalmer Fort", activities: ["Pickup from Airport/Station", "Visit Jaisalmer Fort", "Explore Patwon Ki Haveli", "Gadisar Lake"], overnight: "Jaisalmer" },
      { day: 2, title: "Desert Safari & Cultural Night", activities: ["Transfer to Sam Sand Dunes", "Camel safari", "Sunset photography", "Folk dance & music", "Dinner at desert camp"], overnight: "Desert Camp" },
      { day: 3, title: "Departure", activities: ["Sunrise in the desert", "Breakfast at camp", "Drop at Airport/Station"], overnight: "" },
    ],
    highlights: ["Camel Safari", "Desert Camping", "Jaisalmer Fort", "Sand Dunes", "Folk Music & Dance"],
    accommodationOptions: ["Standard Camp", "Luxury Swiss Tent", "AC Desert Camp"],
    inclusions: ["Airport/Station pickup & drop", "Private AC vehicle", "Hotel + desert camp stay", "Meals at camp", "Camel safari"],
    exclusions: ["Flights", "Entry fees", "Personal expenses", "Travel insurance"],
    idealFor: ["Adventure seekers", "Photographers", "Couples", "International tourists"],
    whyChoose: ["Authentic desert experience", "Comfortable camps", "Expert local guides"],
    seoKeywords: ["Jaisalmer desert safari", "Rajasthan desert camp", "camel safari India"],
    metaTitle: "Desert Safari Jaisalmer – 3 Days | Heritage Jaipur Travels",
    metaDescription: "Experience Jaisalmer desert safari with camel rides, cultural night & desert camping. 3-day tour with pickup & drop. Book now!",
  },
  "udaipur-lake": {
    slug: "udaipur-lake",
    title: "Udaipur Lake Tour",
    tagline: "The Venice of the East – romance, royalty, and reflections on still waters.",
    duration: "3 Days / 2 Nights",
    price: "From ₹17,999",
    overview:
      "Explore the romantic city of Udaipur with our Lake Tour. Visit the stunning City Palace, enjoy a boat ride on Lake Pichola, and experience the magic of sunset over the Aravalli hills.",
    arrivalOptions: ["Udaipur Airport", "Udaipur Railway Station"],
    departureOptions: ["Udaipur Airport / Railway Station"],
    itinerary: [
      { day: 1, title: "Arrival & City Palace", activities: ["Pickup from Airport/Station", "Visit City Palace", "Explore Saheliyon Ki Bari", "Evening at leisure"], overnight: "Udaipur" },
      { day: 2, title: "Lake Pichola & Sightseeing", activities: ["Boat ride on Lake Pichola", "Visit Jagdish Temple", "Explore Bagore Ki Haveli", "Sunset from Monsoon Palace"], overnight: "Udaipur" },
      { day: 3, title: "Departure", activities: ["Breakfast at hotel", "Visit local markets", "Drop at Airport/Station"], overnight: "" },
    ],
    highlights: ["Lake Pichola", "City Palace", "Boat Ride", "Sunset Views", "Monsoon Palace"],
    accommodationOptions: ["Standard (3★)", "Deluxe Lakeside (4★)", "Heritage Hotels"],
    inclusions: ["Airport/Station pickup & drop", "Private AC vehicle", "Hotel accommodation", "Breakfast", "Boat ride", "Sightseeing"],
    exclusions: ["Flights", "Entry fees", "Personal expenses", "Travel insurance"],
    idealFor: ["Couples & honeymooners", "Photography lovers", "Culture enthusiasts"],
    whyChoose: ["Romantic lakeside experience", "Heritage hotel options", "Customizable itinerary"],
    seoKeywords: ["Udaipur lake tour", "Udaipur sightseeing", "Udaipur honeymoon package"],
    metaTitle: "Udaipur Lake Tour – 3 Days | Heritage Jaipur Travels",
    metaDescription: "Discover Udaipur's lakes, palaces & sunsets in our 3-day tour. Boat ride on Lake Pichola, City Palace & more. Book now!",
  },
};
