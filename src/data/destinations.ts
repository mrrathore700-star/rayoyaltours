import hawaMahal from "@/assets/hawa-mahal.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import jodhpurFort from "@/assets/jodhpur-fort.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import pushkarLake from "@/assets/pushkar-lake.jpg";

export interface DestinationFAQ {
  q: string;
  a: string;
}

export interface DestinationItineraryDay {
  day: string;
  title: string;
  text: string;
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string[];
  whyVisit: { title: string; text: string }[];
  topAttractions: { name: string; text: string }[];
  bestExperiences: { title: string; text: string }[];
  bestTimeToVisit: { season: string; months: string; text: string }[];
  recommendedDuration: string;
  durationNote: string;
  itinerary: DestinationItineraryDay[];
  faqs: DestinationFAQ[];
  relatedTourSlugs: string[];
  relatedExperienceSlugs: string[];
  relatedBlogSlugs: string[];
}

export const destinations: Destination[] = [
  {
    slug: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City",
    metaTitle: "Jaipur Travel Guide — Luxury Tours, Palaces & Heritage | Heritage Jaipur Travels",
    metaDescription:
      "Plan a luxury Jaipur journey with our complete travel guide — top attractions, royal palaces, heritage stays, best time to visit and sample itineraries for international travelers.",
    heroImage: hawaMahal,
    heroEyebrow: "Destination Guide",
    heroTitle: "Jaipur — The Pink City of Royal Rajasthan",
    heroSubtitle:
      "Hilltop forts, rose-hued palaces and centuries-old bazaars at the gateway to Rajasthan.",
    overview: [
      "Jaipur, the capital of Rajasthan, is one of India's most iconic destinations and a UNESCO World Heritage city. Founded in 1727 by Maharaja Sawai Jai Singh II, the old walled city was painted pink in 1876 to welcome the Prince of Wales — a colour that still defines its romance today.",
      "For international travellers, Jaipur is the perfect introduction to Rajasthan: walkable heritage quarters, world-class palace hotels, refined Rajput and Mughal architecture, vibrant artisan bazaars and gracious traditions of royal hospitality.",
    ],
    whyVisit: [
      { title: "UNESCO Heritage City", text: "A planned 18th-century royal capital with palaces, observatories and bazaars recognised by UNESCO." },
      { title: "Gateway to Rajasthan", text: "The natural starting point for the Golden Triangle and onward journeys to Udaipur, Jodhpur and Jaisalmer." },
      { title: "Luxury Heritage Hotels", text: "Former royal palaces — Rambagh, Samode, Taj Jai Mahal — restored into some of the finest hotels in India." },
      { title: "Artisans & Bazaars", text: "Block-printed textiles, blue pottery, silver jewellery and gemstones from centuries-old workshops." },
    ],
    topAttractions: [
      { name: "Amber Fort", text: "A magnificent hilltop fort-palace with mirrored halls, mural courtyards and sweeping views of Maota Lake." },
      { name: "City Palace", text: "The royal residence in the heart of the old city, blending Rajput, Mughal and European design." },
      { name: "Hawa Mahal", text: "The five-storey 'Palace of Winds' with 953 honeycomb windows — Jaipur's most photographed icon." },
      { name: "Jantar Mantar", text: "An 18th-century astronomical observatory and UNESCO site with the world's largest stone sundial." },
      { name: "Nahargarh Fort", text: "A clifftop fortress offering Jaipur's finest sunset views over the Pink City." },
      { name: "Jal Mahal & Panna Meena", text: "The serene water palace and the geometric stepwell, both perfect photo stops." },
    ],
    bestExperiences: [
      { title: "Private Heritage Walk", text: "A guided morning walk through the old city's pink bazaars, havelis and hidden temples." },
      { title: "Royal Palace Dining", text: "Candlelit dinner at Rambagh Palace or Samode Haveli with classical Rajasthani music." },
      { title: "Elephant Sanctuary Visit", text: "Ethical interaction with rescued elephants in a sanctuary near Amer." },
      { title: "Block-Printing Workshop", text: "A hands-on session with master artisans in Bagru or Sanganer." },
      { title: "Vintage Car Drive", text: "Explore the city in a restored 1930s Cadillac or classic Mercedes." },
    ],
    bestTimeToVisit: [
      { season: "Peak Season", months: "October – March", text: "Pleasant 10–25°C days, ideal for sightseeing, palace stays and festivals." },
      { season: "Shoulder", months: "April & September", text: "Warmer but quieter — excellent value at luxury heritage hotels." },
      { season: "Monsoon", months: "July – August", text: "Lush green Aravallis and dramatic skies; book indoor experiences." },
    ],
    recommendedDuration: "2 – 3 Days",
    durationNote: "Most travellers spend 2 nights in Jaipur on the Golden Triangle, or 3 nights for a deeper heritage experience with day trips to Samode or Abhaneri.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Old City", text: "Arrive in Jaipur, check in to your heritage hotel, afternoon walking tour of Hawa Mahal, City Palace and Jantar Mantar, sunset at Nahargarh Fort, royal dinner." },
      { day: "Day 2", title: "Amber Fort & Artisans", text: "Morning at Amber Fort and Panna Meena Stepwell, lunch at 1135 AD, afternoon block-printing workshop in Bagru, evening at Chokhi Dhani cultural village." },
      { day: "Day 3", title: "Hidden Jaipur", text: "Optional day — visit Galta Ji 'Monkey Temple', Jaigarh Fort, gem and textile ateliers, and a vintage car drive through the Pink City." },
    ],
    faqs: [
      { q: "How many days do I need in Jaipur?", a: "Two days cover the highlights; three days allow time for artisan visits, hidden quarters and day trips like Samode or Abhaneri." },
      { q: "Is Jaipur safe for international travellers?", a: "Yes. Jaipur is one of India's most visitor-friendly cities, with excellent infrastructure for international travellers, reliable private transport and well-trained guides." },
      { q: "What is the best month to visit Jaipur?", a: "November to February offers the most pleasant weather. October and March are also excellent shoulder months with smaller crowds." },
      { q: "Which is the best luxury hotel in Jaipur?", a: "Rambagh Palace, Samode Haveli, Sujan Rajmahal Palace and Taj Jai Mahal Palace are among the finest heritage and palace hotels in the city." },
      { q: "How do I get from Delhi to Jaipur?", a: "Jaipur is a 4–5 hour drive or a 4-hour train ride from Delhi. We arrange chauffeur-driven luxury transfers as part of every itinerary." },
    ],
    relatedTourSlugs: ["jaipur-heritage", "golden-triangle", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["best-places-jaipur", "rajasthan-travel-guide", "heritage-hotels-rajasthan"],
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    tagline: "City of Lakes",
    metaTitle: "Udaipur Travel Guide — Lakes, Palaces & Luxury Tours | Heritage Jaipur Travels",
    metaDescription:
      "A complete luxury travel guide to Udaipur — top attractions, lake palaces, sunset boat rides, best time to visit and sample itineraries for international travellers.",
    heroImage: udaipurLake,
    heroEyebrow: "Destination Guide",
    heroTitle: "Udaipur — The Romantic City of Lakes",
    heroSubtitle:
      "Marble palaces mirrored in still waters, framed by the timeless Aravalli hills.",
    overview: [
      "Often called the 'Venice of the East', Udaipur is Rajasthan's most romantic city — a constellation of shimmering lakes, white marble palaces and emerald hills founded by Maharana Udai Singh II in 1559.",
      "It is the quietest and most refined of the great Rajasthani cities — ideal for honeymooners, slow travellers and culture lovers seeking heritage, serenity and world-class lakeside hotels.",
    ],
    whyVisit: [
      { title: "Iconic Lake Palaces", text: "Taj Lake Palace and Jagmandir floating on Lake Pichola — among the most photographed hotels on earth." },
      { title: "Living Mewar Heritage", text: "Home to the world's oldest ruling dynasty, with palaces, temples and traditions still alive today." },
      { title: "Romantic Atmosphere", text: "Sunset boat rides, candlelit dinners and rooftop views make Udaipur Rajasthan's most romantic city." },
      { title: "Art & Miniature Schools", text: "A centre of classical Mewar miniature painting, silver craft and traditional folk music." },
    ],
    topAttractions: [
      { name: "City Palace", text: "The largest royal complex in Rajasthan, rising 11 floors above Lake Pichola." },
      { name: "Lake Pichola", text: "The iconic lake cradling Jagmandir and the Taj Lake Palace — best seen at sunset." },
      { name: "Jag Mandir Island", text: "A 17th-century pleasure palace on its own private island in Lake Pichola." },
      { name: "Saheliyon ki Bari", text: "The 'Garden of the Maids' with marble pavilions, lotus pools and elephant fountains." },
      { name: "Bagore ki Haveli", text: "A restored 18th-century haveli with daily classical Rajasthani folk performances." },
      { name: "Monsoon Palace", text: "A hilltop palace offering Udaipur's finest panoramic sunset views." },
    ],
    bestExperiences: [
      { title: "Sunset Boat on Pichola", text: "Private boat cruise past Lake Palace and Jagmandir at golden hour." },
      { title: "Royal Dinner at Jagmandir", text: "Candlelit dining on an island palace in the middle of the lake." },
      { title: "Vintage Car Tour", text: "Explore Udaipur in a 1930s Rolls-Royce or Cadillac from the royal collection." },
      { title: "Miniature Painting Class", text: "A private workshop with a master of the Mewar miniature school." },
      { title: "Village Safari", text: "A day trip into the Aravalli countryside to meet tribal communities and artisans." },
    ],
    bestTimeToVisit: [
      { season: "Peak Season", months: "October – March", text: "Cool, sunny days perfect for boat rides, sightseeing and outdoor dining." },
      { season: "Monsoon", months: "July – September", text: "Lakes refill and the hills turn lush green — Udaipur at its most dramatic." },
      { season: "Summer", months: "April – June", text: "Hot but quiet, with the best rates at lake-view palace suites." },
    ],
    recommendedDuration: "2 – 3 Days",
    durationNote: "Two nights cover Udaipur's highlights; three nights allow time for Kumbhalgarh, Ranakpur and Eklingji temple day trips.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Lake Pichola", text: "Arrive in Udaipur, check in to a lakefront palace hotel, afternoon City Palace tour, sunset boat ride on Lake Pichola, dinner with lake views." },
      { day: "Day 2", title: "Heritage & Culture", text: "Morning at Saheliyon ki Bari and Jagdish Temple, lunch at Ambrai, afternoon at Bagore ki Haveli, evening classical dance performance." },
      { day: "Day 3", title: "Day Trip", text: "Optional excursion to the spectacular Kumbhalgarh Fort and the marble Jain temples of Ranakpur." },
    ],
    faqs: [
      { q: "How many days are enough in Udaipur?", a: "Two days cover the city. Add a third day for Kumbhalgarh and Ranakpur, or a fourth for a slower, more romantic stay." },
      { q: "Is Udaipur good for honeymoons?", a: "Absolutely — its lake palaces, candlelit dining and serene atmosphere make Udaipur India's most romantic honeymoon destination." },
      { q: "Can I stay at the Taj Lake Palace?", a: "Yes. We arrange stays at Taj Lake Palace, Oberoi Udaivilas, Leela Palace and other premium properties as part of your itinerary." },
      { q: "Is Udaipur worth visiting in monsoon?", a: "Yes — the lakes refill, the hills turn green and rates are lower. Sightseeing is comfortable between showers." },
      { q: "How do I reach Udaipur?", a: "Udaipur has its own airport (UDR) with daily flights from Delhi, Mumbai and Jaipur. We arrange all private transfers and intercity drives." },
    ],
    relatedTourSlugs: ["udaipur-lake", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["udaipur-lake-city-guide", "heritage-hotels-rajasthan", "rajasthan-travel-guide"],
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    tagline: "The Blue City",
    metaTitle: "Jodhpur Travel Guide — Mehrangarh Fort & Blue City Tours | Heritage Jaipur Travels",
    metaDescription:
      "Discover Jodhpur with our luxury travel guide — Mehrangarh Fort, the indigo old town, palace stays, best time to visit and sample itineraries for international travellers.",
    heroImage: jodhpurFort,
    heroEyebrow: "Destination Guide",
    heroTitle: "Jodhpur — The Magnificent Blue City",
    heroSubtitle:
      "A mighty hilltop fort presiding over a sea of indigo houses at the edge of the Thar.",
    overview: [
      "Jodhpur — the 'Sun City' and second-largest city in Rajasthan — was founded in 1459 by Rao Jodha and grew into the proud capital of the Marwar kingdom. Its old town below Mehrangarh Fort is painted in countless shades of indigo, creating one of the most dramatic urban landscapes in India.",
      "For international travellers, Jodhpur offers a powerful sense of place: towering ramparts, royal palaces still inhabited by the Marwar dynasty, atmospheric blue lanes and a thriving culinary scene.",
    ],
    whyVisit: [
      { title: "Mehrangarh Fort", text: "One of the largest and most spectacular forts in India, rising 125 m above the city." },
      { title: "The Blue Old Town", text: "A maze of indigo houses, hidden temples and old havelis — a photographer's paradise." },
      { title: "Royal Palace Hotels", text: "Stays at Umaid Bhawan Palace, RAAS and Bal Samand Lake Palace — Marwar's finest." },
      { title: "Gateway to the Thar", text: "Perfectly positioned for desert excursions, village safaris and luxury Thar lodges." },
    ],
    topAttractions: [
      { name: "Mehrangarh Fort", text: "A vast hilltop fortress with palaces, museums and breathtaking views over the Blue City." },
      { name: "Jaswant Thada", text: "An elegant white marble cenotaph honouring Maharaja Jaswant Singh II." },
      { name: "Umaid Bhawan Palace", text: "One of the world's largest private residences and a Taj heritage hotel." },
      { name: "Old Blue City", text: "Wander the indigo lanes and stepwells around the famous Toorji Ka Jhalra." },
      { name: "Sardar Market & Clock Tower", text: "The vibrant heart of old Jodhpur, full of spices, textiles and silver." },
      { name: "Mandore Gardens", text: "Royal cenotaphs set in lush gardens — the original capital of Marwar." },
    ],
    bestExperiences: [
      { title: "Private Fort Tour", text: "Curator-led walk through Mehrangarh's palaces and royal collections." },
      { title: "Flying Fox Zipline", text: "A thrilling zipline circuit over the fort's ramparts and lakes." },
      { title: "Blue City Walk", text: "A guided walk through hidden alleys, temples and stepwells of the old town." },
      { title: "Royal High Tea", text: "Afternoon tea at Umaid Bhawan Palace, still home to the Marwar royal family." },
      { title: "Bishnoi Village Safari", text: "Half-day cultural safari to traditional villages, potters and weavers." },
    ],
    bestTimeToVisit: [
      { season: "Peak Season", months: "October – March", text: "Cool, dry weather — the best months for fort visits and desert excursions." },
      { season: "Shoulder", months: "September & April", text: "Warmer but still comfortable, with fewer crowds at the fort." },
      { season: "Summer", months: "May – June", text: "Very hot; best avoided unless on a quick stopover." },
    ],
    recommendedDuration: "2 Days",
    durationNote: "Two nights are ideal — one for the city and fort, one for the Blue City and a Bishnoi village safari.",
    itinerary: [
      { day: "Day 1", title: "Mehrangarh & Old City", text: "Arrive in Jodhpur, check in to a heritage hotel, afternoon at Mehrangarh Fort and Jaswant Thada, sunset views from the ramparts, dinner at Indique." },
      { day: "Day 2", title: "Blue City & Villages", text: "Morning walking tour of the Blue City and Toorji Ka Jhalra, afternoon Bishnoi village safari, evening at Umaid Bhawan Palace for high tea." },
    ],
    faqs: [
      { q: "Is Jodhpur worth visiting?", a: "Absolutely. Mehrangarh is among the most impressive forts in India, and the Blue City's atmosphere is unlike anywhere else in Rajasthan." },
      { q: "How many days should I spend in Jodhpur?", a: "Two nights cover the highlights comfortably. Add an extra night for a Bishnoi village safari or a side trip to the Thar." },
      { q: "Can I stay at Umaid Bhawan Palace?", a: "Yes. We arrange rooms and suites at Umaid Bhawan Palace, RAAS and Bal Samand Lake Palace as part of luxury itineraries." },
      { q: "How do I travel from Jaipur to Jodhpur?", a: "It's a 5–6 hour chauffeur-driven drive, or a 5-hour train. We can also arrange a stop at Pushkar en route." },
      { q: "Is Jodhpur good for photography?", a: "Yes — the Blue City lanes, Mehrangarh Fort and Jaswant Thada make Jodhpur one of the most photogenic cities in India." },
    ],
    relatedTourSlugs: ["rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["heritage-hotels-rajasthan", "rajasthan-travel-guide", "best-time-visit-rajasthan"],
  },
  {
    slug: "jaisalmer",
    name: "Jaisalmer",
    tagline: "The Golden City",
    metaTitle: "Jaisalmer Travel Guide — Desert Safaris & Golden Fort | Heritage Jaipur Travels",
    metaDescription:
      "Plan a luxury Jaisalmer journey — golden sandstone fort, Thar desert safaris, luxury desert camps, best time to visit and complete itineraries for international travellers.",
    heroImage: jaisalmerFort,
    heroEyebrow: "Destination Guide",
    heroTitle: "Jaisalmer — The Golden City of the Thar",
    heroSubtitle:
      "Sandstone ramparts glowing at sunset above the silent dunes of the Thar Desert.",
    overview: [
      "Rising from the heart of the Thar Desert, Jaisalmer is one of the world's last living forts — a 12th-century citadel where families still live, cook and trade inside its honey-coloured walls.",
      "For international travellers, Jaisalmer is the most exotic stop in Rajasthan: golden havelis, camel caravans, luxury desert camps under starlit skies and the slow magic of the great Thar.",
    ],
    whyVisit: [
      { title: "Living Sonar Quila", text: "One of very few inhabited forts on earth — a UNESCO-protected golden citadel." },
      { title: "Thar Desert Safaris", text: "Camel rides, jeep safaris and silent dune nights under endless stars." },
      { title: "Luxury Desert Camps", text: "World-class tented suites at Suján The Serai and Mihir Garh in the dunes." },
      { title: "Sandstone Architecture", text: "Some of India's most beautiful havelis — Patwon, Salim Singh and Nathmal." },
    ],
    topAttractions: [
      { name: "Jaisalmer Fort (Sonar Quila)", text: "The world-famous golden fort — palaces, Jain temples and bazaars within its walls." },
      { name: "Patwon Ki Haveli", text: "A cluster of five intricately carved sandstone mansions — Rajasthan's finest haveli complex." },
      { name: "Sam Sand Dunes", text: "The classic Thar dunes for sunset camel rides and overnight desert camps." },
      { name: "Gadisar Lake", text: "A serene 14th-century reservoir surrounded by ghats, temples and pavilions." },
      { name: "Kuldhara Village", text: "An atmospheric abandoned village with centuries of legend." },
      { name: "Bada Bagh", text: "Royal cenotaphs on a hill — Jaisalmer's most magical sunset spot." },
    ],
    bestExperiences: [
      { title: "Luxury Desert Camp Stay", text: "Overnight in a tented suite at Suján The Serai with private butler service." },
      { title: "Sunset Camel Safari", text: "Ride into the Sam dunes for sundowners and a traditional desert dinner." },
      { title: "Private Fort Walk", text: "Guided tour of the living fort, royal palaces and Jain temples." },
      { title: "Desert Festival Experience", text: "Catch the famous February festival of music, dance and camel races." },
      { title: "Vintage Jeep Safari", text: "Explore Kuldhara, Khaba Fort and remote desert villages in a 4×4." },
    ],
    bestTimeToVisit: [
      { season: "Peak Season", months: "October – March", text: "Cool desert days and crisp nights — ideal for safaris and desert camps." },
      { season: "Festival", months: "February", text: "The Jaisalmer Desert Festival — colour, music and camel races." },
      { season: "Summer", months: "April – June", text: "Too hot for desert travel — best avoided." },
    ],
    recommendedDuration: "2 – 3 Days",
    durationNote: "Two nights cover Jaisalmer's highlights and one night in the desert; three nights allow a slower stay at a luxury desert camp.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Fort", text: "Arrive in Jaisalmer, check in, afternoon tour of Sonar Quila and Jain temples, sunset at Bada Bagh, dinner inside the fort." },
      { day: "Day 2", title: "Havelis & Desert Camp", text: "Morning at Patwon Ki Haveli and Gadisar Lake, drive to Sam dunes, sunset camel safari, overnight at a luxury desert camp." },
      { day: "Day 3", title: "Hidden Thar", text: "Optional jeep safari to Kuldhara village and Khaba Fort, return to Jaisalmer or onward drive to Jodhpur." },
    ],
    faqs: [
      { q: "Is Jaisalmer worth the long drive?", a: "Yes — it is the most exotic destination in Rajasthan and the only true desert experience. Most travellers find it the highlight of their trip." },
      { q: "How many nights do I need in Jaisalmer?", a: "Two nights, including one in a luxury desert camp, is ideal for international travellers." },
      { q: "Are luxury desert camps comfortable?", a: "Yes. Camps like Suján The Serai offer tented suites with king beds, en-suite bathrooms, butler service and gourmet dining." },
      { q: "When is the best time for a desert safari?", a: "October to March, with November to February being the most comfortable months." },
      { q: "How do I get to Jaisalmer?", a: "Jaisalmer is a 5-hour drive from Jodhpur or an overnight train. We arrange chauffeur-driven transfers and luxury rail bookings." },
    ],
    relatedTourSlugs: ["desert-safari", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["camel-safari-jaisalmer-guide", "rajasthan-travel-guide", "best-time-visit-rajasthan"],
  },
  {
    slug: "ranthambore",
    name: "Ranthambore",
    tagline: "Wild Rajasthan",
    metaTitle: "Ranthambore Travel Guide — Luxury Tiger Safaris | Heritage Jaipur Travels",
    metaDescription:
      "A complete luxury travel guide to Ranthambore National Park — tiger safaris, luxury jungle lodges, best time to visit and sample itineraries for international travellers.",
    heroImage: ranthamboreTiger,
    heroEyebrow: "Destination Guide",
    heroTitle: "Ranthambore — Where Tigers Roam Royal Ruins",
    heroSubtitle:
      "Track Bengal tigers through ancient jungle fortresses on India's most iconic wildlife safari.",
    overview: [
      "Ranthambore National Park is one of the largest and most famous tiger reserves in India. Set around a 10th-century hilltop fort, its mix of jungle, lakes and crumbling pavilions makes for spectacular wildlife photography.",
      "For international travellers it is the perfect luxury wildlife stop between Jaipur and Agra — high tiger-sighting probabilities, world-class jungle lodges and easy access by car or train.",
    ],
    whyVisit: [
      { title: "High Tiger Sightings", text: "One of the best places in the world to see wild Bengal tigers in their natural habitat." },
      { title: "Ranthambore Fort", text: "A UNESCO-listed 10th-century hill fort set inside the park itself." },
      { title: "Luxury Jungle Lodges", text: "Stays at Aman-i-Khás, Suján Sher Bagh, Oberoi Vanyavilas and Six Senses Fort Barwara." },
      { title: "Easy Access", text: "Just 3.5 hours by train from Jaipur — a perfect Golden Triangle extension." },
    ],
    topAttractions: [
      { name: "Tiger Safari (Zones 1–10)", text: "Morning and afternoon jeep or canter safaris with experienced naturalists." },
      { name: "Ranthambore Fort", text: "A spectacular UNESCO World Heritage hill fort inside the park." },
      { name: "Padam Talao", text: "The largest lake in the reserve — the iconic Jogi Mahal sits on its bank." },
      { name: "Rajbagh Ruins", text: "Atmospheric jungle ruins where tigers are frequently photographed." },
      { name: "Trinetra Ganesh Temple", text: "An ancient temple inside the fort, drawing pilgrims and photographers." },
      { name: "Dastkar Ranthambore", text: "A women's craft cooperative producing beautiful textiles and souvenirs." },
    ],
    bestExperiences: [
      { title: "Private Jeep Safari", text: "Dedicated 6-seater jeep with expert naturalist for the best tiger-tracking experience." },
      { title: "Photography Safari", text: "Specialist photography safaris with experienced wildlife photographer guides." },
      { title: "Luxury Tented Stay", text: "Overnight in a tented suite at Aman-i-Khás or Suján Sher Bagh." },
      { title: "Fort Heritage Walk", text: "Guided walk through the 10th-century hilltop fort, often in sight of langurs and deer." },
      { title: "Village Visit", text: "Cultural visit to surrounding Meena villages with traditional lunch." },
    ],
    bestTimeToVisit: [
      { season: "Best for Tigers", months: "April – June", text: "Hot but the best tiger-sighting season as animals gather at waterholes." },
      { season: "Comfort Season", months: "October – March", text: "Cool, comfortable weather with excellent jungle scenery." },
      { season: "Closed", months: "July – September", text: "Park largely closed for the monsoon breeding season." },
    ],
    recommendedDuration: "2 Days",
    durationNote: "Two nights with four safaris (two morning, two afternoon) gives the best chance of a tiger sighting.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Afternoon Safari", text: "Arrive Ranthambore by train or road, check in to a luxury jungle lodge, afternoon jeep safari, dinner under the stars." },
      { day: "Day 2", title: "Two Safaris & Fort", text: "Early morning safari, late breakfast at the lodge, visit Ranthambore Fort, afternoon safari, farewell dinner." },
      { day: "Day 3", title: "Departure", text: "Optional early safari, then transfer to Jaipur, Agra or onward destination." },
    ],
    faqs: [
      { q: "What are the chances of seeing a tiger?", a: "Sightings are never guaranteed, but with two full days and four safaris most international travellers see at least one tiger." },
      { q: "Which is the best zone in Ranthambore?", a: "Zones 1–6 are core zones with the highest tiger activity. We pre-book the best zones available for your dates." },
      { q: "Should I choose jeep or canter?", a: "Always a jeep for international travellers — quieter, smaller groups and better photography." },
      { q: "How do I get to Ranthambore?", a: "It is 3.5 hours by train from Jaipur (Sawai Madhopur station) or a 4-hour drive. We handle all logistics." },
      { q: "Which is the best luxury lodge?", a: "Aman-i-Khás, Suján Sher Bagh, Oberoi Vanyavilas and Six Senses Fort Barwara are the top luxury options." },
    ],
    relatedTourSlugs: ["golden-triangle-ranthambore", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["ranthambore-tiger-safari-guide", "rajasthan-travel-guide", "best-time-visit-rajasthan"],
  },
  {
    slug: "pushkar",
    name: "Pushkar",
    tagline: "Sacred Soul",
    metaTitle: "Pushkar Travel Guide — Sacred Lake, Camel Fair & Tours | Heritage Jaipur Travels",
    metaDescription:
      "Discover Pushkar with our luxury travel guide — sacred ghats, Brahma temple, the famous camel fair, best time to visit and sample itineraries for international travellers.",
    heroImage: pushkarLake,
    heroEyebrow: "Destination Guide",
    heroTitle: "Pushkar — The Sacred Soul of Rajasthan",
    heroSubtitle:
      "Holy ghats, whitewashed temples and the mystical spirit of India's most sacred lake.",
    overview: [
      "Pushkar is one of the oldest cities in India and one of Hinduism's holiest pilgrimage sites — a tranquil desert town built around a sacred lake said to have been created by Lord Brahma himself.",
      "For international travellers, Pushkar offers a more intimate, spiritual side of Rajasthan: 500 temples, 52 ghats, bohemian cafés overlooking the lake and — every November — the legendary Pushkar Camel Fair.",
    ],
    whyVisit: [
      { title: "Sacred Lake & Ghats", text: "One of India's most sacred pilgrimage lakes, ringed by 52 atmospheric bathing ghats." },
      { title: "Brahma Temple", text: "One of the very few temples in the world dedicated to Lord Brahma." },
      { title: "Pushkar Camel Fair", text: "The world-famous November fair — camels, music, dance and a riot of colour." },
      { title: "Bohemian Atmosphere", text: "Lakeside cafés, rooftop yoga and a quieter, slower Rajasthan." },
    ],
    topAttractions: [
      { name: "Pushkar Lake", text: "The sacred lake at the heart of the town, with 52 ghats and constant temple bells." },
      { name: "Brahma Temple", text: "The famous 14th-century temple with its iconic red spire and silver tortoise." },
      { name: "Savitri Temple", text: "A hilltop temple offering panoramic sunrise views over Pushkar and the desert." },
      { name: "Varaha Ghat", text: "The largest and most atmospheric of the town's many bathing ghats." },
      { name: "Pushkar Bazaar", text: "Narrow lanes packed with Rajasthani crafts, silver jewellery and bohemian fashion." },
      { name: "Mela Ground", text: "Empty for most of the year but the legendary stage of November's camel fair." },
    ],
    bestExperiences: [
      { title: "Sunrise on Savitri Hill", text: "Cable car or sunrise hike to the hilltop temple for breathtaking views." },
      { title: "Ghat Aarti at Sunset", text: "Witness evening prayers at the sacred lake — one of Rajasthan's most moving experiences." },
      { title: "Camel Fair (November)", text: "Attend the iconic fair with private viewing and luxury tented camp stay." },
      { title: "Hot-Air Balloon Ride", text: "Sunrise balloon flight over the lake, temples and desert (seasonal)." },
      { title: "Cooking Class", text: "Learn classic vegetarian Rajasthani recipes from a local family." },
    ],
    bestTimeToVisit: [
      { season: "Peak Season", months: "October – March", text: "Pleasant weather, perfect for ghat walks and temple visits." },
      { season: "Camel Fair", months: "November (Kartik Purnima)", text: "The most spectacular week of the year — book months in advance." },
      { season: "Summer", months: "April – June", text: "Hot and dusty; best avoided unless on a quick stopover." },
    ],
    recommendedDuration: "1 – 2 Days",
    durationNote: "One night is enough for most travellers; add a second night during the Pushkar Camel Fair in November.",
    itinerary: [
      { day: "Day 1", title: "Sacred Pushkar", text: "Arrive from Jaipur or Jodhpur, check in to a lakeside boutique hotel, afternoon ghat walk and Brahma Temple, sunset aarti, rooftop dinner." },
      { day: "Day 2", title: "Sunrise & Bazaar", text: "Sunrise at Savitri Temple, breakfast at a lakeside café, morning bazaar walk, optional cooking class, onward drive." },
    ],
    faqs: [
      { q: "Is Pushkar worth visiting?", a: "Yes — Pushkar offers a quieter, more spiritual side of Rajasthan that complements the great fort cities beautifully." },
      { q: "When is the Pushkar Camel Fair?", a: "The fair takes place annually in November around Kartik Purnima. Dates change each year — we book luxury tented camps months in advance." },
      { q: "How long should I stay in Pushkar?", a: "One night is sufficient outside the fair. During the November fair, two or three nights are recommended." },
      { q: "Is alcohol available in Pushkar?", a: "Pushkar is a sacred town where alcohol and meat are prohibited. Luxury hotels just outside town serve both." },
      { q: "How do I get to Pushkar?", a: "Pushkar is a 2.5-hour drive from Jaipur and 4 hours from Jodhpur. It pairs beautifully with both cities." },
    ],
    relatedTourSlugs: ["rajasthan-royal", "jaipur-heritage"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["rajasthan-travel-guide", "best-time-visit-rajasthan", "heritage-hotels-rajasthan"],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
