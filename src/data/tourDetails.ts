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
    tagline: "Discover the Heart of India – Culture, History & Living Heritage",
    duration: "6 Days / 5 Nights",
    price: "Contact Us",
    overview:
      "Explore India's most iconic route connecting Delhi, Agra, and Jaipur — famously known as the Golden Triangle. This journey is designed for international travelers arriving on evening or late-night flights, ensuring a smooth start, relaxed pace, and immersive cultural experience. From Mughal masterpieces to royal palaces, this tour gives a complete Indian experience with Fatehpur Sikri as a bonus heritage stop.",
    arrivalOptions: [
      "Delhi International Airport (late night flights covered)",
      "Delhi Railway Station",
      "Warm meet & greet assistance at arrival",
      "Private transfer to hotel with fast check-in",
    ],
    departureOptions: [
      "Drive back to Delhi (5–6 hours)",
      "Fly from Jaipur (recommended for international convenience)",
      "Transfer to airport for departure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi (Evening / Night Arrival)",
        activities: [
          "Arrive at Delhi International Airport",
          "Warm meet & greet assistance",
          "Private transfer to hotel",
          "Fast check-in (pre-arranged for late arrivals)",
          "Rest after long international flight",
        ],
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "Delhi – Where Empires Meet",
        activities: [
          "Relaxed morning start after international travel",
          "Qutub Minar – 73-meter UNESCO-listed tower from the 12th century",
          "Humayun's Tomb – The architectural inspiration for the Taj Mahal",
          "India Gate – War memorial & central landmark",
          "Drive past Rashtrapati Bhavan & Parliament",
          "A rare blend of ancient Mughal heritage + British colonial elegance + modern India",
        ],
        overnight: "Delhi",
      },
      {
        day: 3,
        title: "Delhi → Agra (City of Love)",
        activities: [
          "Drive to Agra via expressway",
          "Agra Fort – UNESCO World Heritage Site & royal residence of Mughal emperors",
          "Agra Fort offers views of the Taj Mahal from inside",
          "Taj Mahal – One of the Seven Wonders of the World",
          "Built by Emperor Shah Jahan for his wife Mumtaz Mahal",
          "Sunset visit (or sunrise next morning for best experience)",
          "World-famous marble craftsmanship & Mughal architecture",
        ],
        overnight: "Agra",
      },
      {
        day: 4,
        title: "Taj Sunrise → Fatehpur Sikri → Jaipur",
        activities: [
          "Sunrise visit to Taj Mahal – Soft light, fewer crowds, unforgettable photos",
          "Stop at Fatehpur Sikri – UNESCO-listed abandoned Mughal capital",
          "Buland Darwaza – One of the largest gateways in the world",
          "Jama Masjid – A grand mosque with spiritual significance",
          "Royal palaces, courtyards & audience halls",
          "Perfectly preserved 'ghost city' of the Mughal Empire",
          "Architectural fusion of Persian, Islamic & Indian styles",
          "Continue drive to Jaipur",
        ],
        overnight: "Jaipur",
      },
      {
        day: 5,
        title: "Jaipur – The Royal Pink City",
        activities: [
          "Amber Fort – Magnificent hilltop fort overlooking Maota Lake",
          "Famous for mirror work, royal halls & courtyards",
          "Optional Jeep ride / Elephant ride at Amber Fort",
          "Hawa Mahal – Iconic pink sandstone façade with 953 windows",
          "Built for royal women to observe street life",
          "City Palace Jaipur – Residence of Jaipur's royal family",
          "Museums, courtyards & royal collections",
          "Jal Mahal – Stunning water palace (photo stop)",
          "Famous for colorful markets, gemstones, textiles & handicrafts",
        ],
        overnight: "Jaipur",
      },
      {
        day: 6,
        title: "Jaipur → Delhi (Departure)",
        activities: [
          "Breakfast at hotel",
          "Option: Drive back to Delhi (5–6 hours)",
          "Option: Fly from Jaipur (recommended for international convenience)",
          "Transfer to airport for departure",
        ],
        overnight: "",
      },
    ],
    highlights: [
      "Taj Mahal at sunrise – unforgettable experience",
      "Fatehpur Sikri – hidden UNESCO heritage gem",
      "Amber Fort with optional Jeep ride",
      "Hawa Mahal – iconic Palace of Winds",
      "Qutub Minar & Humayun's Tomb in Delhi",
      "City Palace Jaipur – royal heritage",
      "Jal Mahal – stunning water palace photo stop",
      "Agra Fort – Mughal masterpiece with Taj views",
    ],
    accommodationOptions: ["Standard (4★)", "Deluxe (5★)", "Heritage Haveli stays"],
    inclusions: [
      "5 Nights accommodation (4★ / 5★ options)",
      "Daily breakfast",
      "Private AC vehicle & driver",
      "All sightseeing as per itinerary",
      "Airport pickup (late night included)",
      "Toll, parking & driver allowance",
    ],
    exclusions: [
      "International / domestic flights",
      "Monument entrance fees",
      "Lunch & dinner",
      "Travel insurance",
      "Personal expenses",
    ],
    idealFor: [
      "International tourists arriving on evening/night flights",
      "First-time India visitors",
      "Couples & honeymooners",
      "Culture & history enthusiasts",
      "Photography lovers",
    ],
    whyChoose: [
      "Designed for evening/night flight arrivals",
      "Comfortable pace (no rushed travel)",
      "Covers India's top UNESCO sites",
      "Authentic cultural experience",
      "Safe, private & customizable",
    ],
    seoKeywords: [
      "Golden triangle tour India",
      "Delhi Agra Jaipur tour",
      "Golden triangle package 6 days",
      "India tour for international travelers",
      "Taj Mahal sunrise tour",
      "Fatehpur Sikri tour",
    ],
    metaTitle: "Golden Triangle Tour – 6 Days | Delhi Agra Jaipur | Heritage Jaipur Travels",
    metaDescription: "Explore India's Golden Triangle – Delhi, Agra & Jaipur with Fatehpur Sikri. 6 Days / 5 Nights tailor-made tour for international travelers. Book now!",
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
  "golden-triangle-ranthambore": {
    slug: "golden-triangle-ranthambore",
    title: "Golden Triangle with Ranthambore",
    tagline: "A Perfect Introduction to India – Culture + Heritage + Wildlife",
    duration: "7 Days / 6 Nights",
    price: "Contact Us",
    overview:
      "This thoughtfully designed journey connects India's most iconic cities — Delhi, Agra, Ranthambore National Park, and Jaipur — offering a balanced mix of history, architecture, and nature. From Mughal masterpieces to royal palaces and thrilling tiger landscapes, this tour gives a complete Indian experience in one itinerary.",
    arrivalOptions: ["Delhi Airport (even late night flights covered)", "Delhi Railway Station"],
    departureOptions: ["Delhi Airport / Railway Station", "Jaipur Airport (recommended for international travelers)"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi – Relaxed Welcome",
        activities: [
          "Airport pickup (even late night flights covered)",
          "Private transfer & smooth hotel check-in",
          "Rest & recovery from international travel",
        ],
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "Delhi – The Cultural Mosaic of India",
        activities: [
          "Visit Qutub Minar – 12th-century UNESCO-listed victory tower",
          "Explore Humayun's Tomb – Inspiration behind the Taj Mahal",
          "Photo stop at India Gate – War memorial & iconic landmark",
          "Experience Delhi's bustling markets & street food",
        ],
        overnight: "Delhi",
      },
      {
        day: 3,
        title: "Delhi → Agra – City of Eternal Love",
        activities: [
          "Drive to Agra via expressway",
          "Visit Agra Fort – Massive red sandstone fortress",
          "Sunset or next day sunrise at Taj Mahal",
          "Experience Mughal-era marble inlay craftsmanship",
        ],
        overnight: "Agra",
      },
      {
        day: 4,
        title: "Taj Sunrise → Fatehpur Sikri → Ranthambore",
        activities: [
          "Sunrise visit to Taj Mahal – Best lighting, fewer crowds",
          "Visit Fatehpur Sikri – UNESCO-listed abandoned Mughal capital",
          "See Buland Darwaza (Grand Victory Gate) & Jama Masjid",
          "Drive to Ranthambore National Park",
          "Check-in at jungle resort",
        ],
        overnight: "Ranthambore",
      },
      {
        day: 5,
        title: "Ranthambore – Tiger Territory 🐅",
        activities: [
          "Morning Safari (Jeep or Canter – subject to availability)",
          "Afternoon Safari option available",
          "Wildlife spotting: Bengal Tigers, Leopards, Crocodiles, Deer & exotic birds",
          "Explore Ranthambore Fort ruins within the park",
          "Evening at leisure at jungle resort",
        ],
        overnight: "Ranthambore",
      },
      {
        day: 6,
        title: "Ranthambore → Jaipur – Royal Rajasthan",
        activities: [
          "Drive to Jaipur – The Pink City",
          "Visit Amber Fort – Hilltop fortress with stunning courtyards",
          "Photo stop at Hawa Mahal – Iconic Palace of Winds",
          "Explore City Palace – Still home to Jaipur's royal family",
          "Evening at vibrant markets (jewelry, textiles, handicrafts)",
        ],
        overnight: "Jaipur",
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Breakfast at hotel",
          "Option: Drive to Delhi OR fly from Jaipur",
          "Drop at Airport / Railway Station",
          "Tour ends with unforgettable memories of India 🐅",
        ],
        overnight: "",
      },
    ],
    highlights: [
      "Taj Mahal sunrise experience",
      "Ranthambore Tiger Safari",
      "Fatehpur Sikri – Hidden UNESCO gem",
      "Amber Fort & City Palace Jaipur",
      "Delhi's Mughal heritage sites",
      "Flexible Delhi or Jaipur departure",
    ],
    accommodationOptions: [
      "Standard (3★ Hotels & Jungle Lodge)",
      "Deluxe (4★ Hotels & Resort)",
      "Luxury (5★ Heritage Hotels & Premium Resort)",
    ],
    inclusions: [
      "Airport pickup & drop (Delhi/Jaipur)",
      "Private air-conditioned vehicle with driver",
      "6 Nights hotel/resort accommodation",
      "Daily breakfast",
      "All sightseeing as per itinerary",
      "English-speaking driver",
      "All tolls, parking & driver allowance",
    ],
    exclusions: [
      "International / domestic flights",
      "Entry fees to monuments",
      "Safari booking fees (optional, subject to availability)",
      "Lunch & dinner",
      "Personal expenses (shopping, tips, etc.)",
      "Travel insurance",
      "Guide (available on request)",
    ],
    idealFor: [
      "International tourists 🌍",
      "Wildlife & nature lovers 🐅",
      "First-time India visitors",
      "Couples & families",
      "Photography enthusiasts 📸",
    ],
    whyChoose: [
      "Covers India's top highlights + hidden heritage (Fatehpur Sikri)",
      "Designed for international travel comfort",
      "Flexible pace (no rush after long flights)",
      "Wildlife + culture in one itinerary",
      "Authentic experiences beyond typical tours",
      "24/7 on-trip support",
    ],
    seoKeywords: [
      "Golden triangle with Ranthambore tour",
      "Delhi Agra Jaipur Ranthambore package",
      "India tiger safari tour",
      "Golden triangle wildlife tour India",
      "Ranthambore tiger safari package",
    ],
    metaTitle: "Golden Triangle with Ranthambore – 7 Days | Heritage Jaipur Travels",
    metaDescription:
      "Discover India's best – Taj Mahal, Ranthambore Tiger Safari, Amber Fort & more in 7 days. Culture + Wildlife tour with Delhi/Jaipur pickup. Book now!",
  },
};
