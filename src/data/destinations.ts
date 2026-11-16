import jaipurDestination from "@/assets/jaipur.webp.jpg";
import udaipurDestination from "@/assets/udaipur.webp.jpg";
import jodhpurDestination from "@/assets/jodhpur.webp.jpg";
import jaisalmerDestination from "@/assets/jaisalmer.webp.jpg";
import ranthamboreDestination from "@/assets/ranthambore-tiger.webp.jpg";
import pushkarDestination from "@/assets/pushkar.webp.jpg";

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
  heroImageAlt: string;
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
    metaTitle: "Jaipur Travel Guide: Forts, Food & Heritage | Heritage Jaipur Travels",
    metaDescription:
      "Plan a Jaipur trip with this guide to Amber Fort, palaces, markets, local food, the best season to visit and a practical 2–3 day itinerary.",
    heroImage: jaipurDestination,
    heroImageAlt: "Amber Fort above Maota Lake in Jaipur, Rajasthan",
    heroEyebrow: "Destination Guide",
    heroTitle: "Jaipur — The Pink City of Royal Rajasthan",
    heroSubtitle:
      "Hilltop forts, rose-hued palaces and centuries-old bazaars at the gateway to Rajasthan.",
    overview: [
      "Jaipur, Rajasthan's capital, was founded in 1727 by Maharaja Sawai Jai Singh II as a planned royal city. Its walled centre, broad market streets and orderly blocks reflect that deliberate design. In 1876, buildings in the old city were painted pink for the visit of the Prince of Wales, giving Jaipur the name by which it is known around the world.",
      "Today, the Pink City brings together Rajput and Mughal-influenced architecture, active temples, artisan workshops and busy bazaars. Beyond its best-known palaces, Jaipur is a useful base for understanding regional crafts and cuisine, with the Aravalli hills, Amber and other historic sites close enough to plan as part of a multi-day visit.",
    ],
    whyVisit: [
      { title: "UNESCO Heritage City", text: "A planned 18th-century royal capital with palaces, observatories and bazaars recognised by UNESCO." },
      { title: "Gateway to Rajasthan", text: "The natural starting point for the Golden Triangle and onward journeys to Udaipur, Jodhpur and Jaisalmer." },
      { title: "Luxury Heritage Hotels", text: "Former royal palaces — Rambagh, Samode, Taj Jai Mahal — restored into some of the finest hotels in India." },
      { title: "Artisans & Bazaars", text: "Block-printed textiles, blue pottery, silver jewellery and gemstones from centuries-old workshops." },
    ],
    topAttractions: [
      { name: "Amber Fort", text: "Built as a royal stronghold above Maota Lake, Amber combines Rajput planning with Mughal-influenced ornament. Walk through its courtyards, gateways and the Sheesh Mahal mirror-work interiors; allow time for the climb and views across the surrounding hills." },
      { name: "Hawa Mahal", text: "The honeycomb sandstone façade is one of Jaipur's best-known landmarks. Its small screened windows were designed to let royal women observe street life while remaining unseen; the interior gives a closer look at the building's courtyards and elevated city views." },
      { name: "City Palace", text: "Still connected to Jaipur's royal household, this central complex brings together courtyards, gateways, galleries and palace buildings. Exhibitions of textiles, arms and royal objects help explain the city's courtly history; visitor access to individual areas can vary." },
      { name: "Jantar Mantar", text: "An 18th-century observatory commissioned by Sawai Jai Singh II, with monumental instruments designed to measure celestial positions and time. Its scale is easier to understand with a guide who can explain how the instruments work." },
      { name: "Jaigarh Fort", text: "A fortified complex above Amber, known for its defensive walls, water-storage works and the Jaivana cannon. The elevated setting makes it a useful companion visit to Amber Fort, though the connecting routes involve walking and steps." },
      { name: "Nahargarh Fort", text: "Set along the Aravalli ridge, Nahargarh offers broad views across Jaipur and the plains. Visit for the fort's history and landscape as well as late-day light; road conditions and access should be checked locally." },
      { name: "Albert Hall Museum", text: "Housed in a striking Indo-Saracenic building in Ram Niwas Garden, the museum displays decorative arts and historical collections. Pair it with a visit to the old city rather than rushing through its galleries." },
      { name: "Jal Mahal", text: "The water palace stands in Man Sagar Lake and is best appreciated from the lakeside promenade. Public access to the palace interior is not generally available, so plan this as a scenic stop and respect local restrictions." },
      { name: "Galtaji Temple", text: "A pilgrimage complex in a narrow valley east of the city, with temples, pavilions and kunds set among the hills. Modest dress and respectful behaviour are appropriate, and visitors should follow local guidance around sacred water." },
      { name: "Patrika Gate", text: "A colourful gateway near Jawahar Circle, decorated with painted motifs that reference Rajasthan's regions, crafts and landmarks. It is a popular photography stop; be mindful of other visitors and local activity." },
      { name: "Panna Meena Ka Kund", text: "This historic stepwell near Amber is admired for its balanced flights of stairs and geometric pattern. It is a short, worthwhile stop on an Amber-area day; follow posted access rules and do not climb closed sections." },
    ],
    bestExperiences: [
      { title: "Private Heritage Walk", text: "A guided morning walk through the old city's pink bazaars, havelis and hidden temples." },
      { title: "Royal Palace Dining", text: "Candlelit dinner at Rambagh Palace or Samode Haveli with classical Rajasthani music." },
      { title: "Elephant Sanctuary Visit", text: "Ethical interaction with rescued elephants in a sanctuary near Amer." },
      { title: "Block-Printing Workshop", text: "A hands-on session with master artisans in Bagru or Sanganer." },
      { title: "Vintage Car Drive", text: "Explore the city in a restored 1930s Cadillac or classic Mercedes." },
      { title: "Jaipur Food & Craft Trail", text: "Sample local favourites such as pyaaz kachori, ghewar and dal baati churma, then browse traditional textiles, jewellery and blue pottery with time to compare craftsmanship and ask about materials." },
    ],
    bestTimeToVisit: [
      { season: "Peak Season", months: "October – March", text: "Pleasant 10–25°C days, ideal for sightseeing, palace stays and festivals." },
      { season: "Shoulder", months: "April & September", text: "Warmer but quieter — excellent value at luxury heritage hotels." },
      { season: "Monsoon", months: "July – August", text: "Lush green Aravallis and dramatic skies; book indoor experiences." },
    ],
    recommendedDuration: "2 – 3 Days",
    durationNote: "Most travellers spend 2 nights in Jaipur on the Golden Triangle, or 3 nights for a deeper heritage experience with day trips to Samode or Abhaneri.",
    itinerary: [
      { day: "Day 1", title: "Old City & Observatory", text: "After arrival and check-in, focus on the walkable old-city sights: Hawa Mahal, City Palace and Jantar Mantar, allowing time for museum rooms and breaks. Finish with dinner nearby; save Nahargarh for a separate evening when road and access conditions suit." },
      { day: "Day 2", title: "Amber & the Hill Forts", text: "Spend the morning at Amber Fort and Panna Meena Ka Kund, then choose either Jaigarh or a relaxed return to the city for lunch. Add a craft workshop only if travel time and the artisan's location fit comfortably; Bagru is a separate outing." },
      { day: "Day 3", title: "Museums, Markets & Temples", text: "Choose a manageable mix such as Albert Hall Museum and the bazaars, or an outing to Galtaji and Patrika Gate. Leave time for traffic, rest and opening schedules rather than trying to cross the city repeatedly." },
    ],
    faqs: [
      { q: "How many days do I need in Jaipur?", a: "Two days cover the highlights; three days allow time for artisan visits, hidden quarters and day trips like Samode or Abhaneri." },
      { q: "Is Jaipur safe for international travellers?", a: "Yes. Jaipur is one of India's most visitor-friendly cities, with excellent infrastructure for international travellers, reliable private transport and well-trained guides." },
      { q: "What is the best month to visit Jaipur?", a: "November to February offers the most pleasant weather. October and March are also excellent shoulder months with smaller crowds." },
      { q: "Which is the best luxury hotel in Jaipur?", a: "Rambagh Palace, Samode Haveli, Sujan Rajmahal Palace and Taj Jai Mahal Palace are among the finest heritage and palace hotels in the city." },
      { q: "How do I get from Delhi to Jaipur?", a: "Jaipur is connected to Delhi by rail, road and air. Journey times vary by service and traffic; check current schedules before travel. A private chauffeur-driven transfer can make stops along the way and be arranged around your itinerary." },
      { q: "What local food should I try in Jaipur?", a: "Look for pyaaz kachori, dal baati churma, ghewar and seasonal sweets. Choose busy, well-regarded places, and tell the restaurant about dietary needs or spice preferences." },
      { q: "Where can I shop for handicrafts in Jaipur?", a: "Johari Bazaar is known for jewellery, while Bapu Bazaar and nearby market lanes offer textiles, footwear and souvenirs. Bagru and Sanganer are associated with block printing; check materials and workmanship before buying." },
      { q: "Is Jaipur easy to explore in one day?", a: "One full day can cover a selection of highlights, but Amber, the old city and hilltop forts are spread out. Two or three days allow more realistic travel between sites and time for museums, markets or workshops." },
      { q: "What should I wear when visiting temples in Jaipur?", a: "Choose modest, comfortable clothing and shoes that are easy to remove where required. Follow photography signs and local customs, especially at active places of worship." },
    ],
    relatedTourSlugs: ["jaipur-heritage", "golden-triangle", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["best-places-jaipur", "rajasthan-travel-guide", "heritage-hotels-rajasthan"],
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    tagline: "City of Lakes",
    metaTitle: "Udaipur Travel Guide: Lakes, Palaces & Things to Do | Heritage Jaipur Travels",
    metaDescription:
      "Plan a Udaipur trip with this guide to City Palace, Lake Pichola, local markets, the best season to visit and a practical 2–3 day itinerary.",
    heroImage: udaipurDestination,
    heroImageAlt: "Udaipur's Lake Pichola and historic palace skyline, Rajasthan",
    heroEyebrow: "Destination Guide",
    heroTitle: "Udaipur — The Romantic City of Lakes",
    heroSubtitle:
      "Marble palaces mirrored in still waters, framed by the timeless Aravalli hills.",
    overview: [
      "Founded in 1553 by Maharana Udai Singh II as the new capital of Mewar, Udaipur grew around lakes in the Girwa Valley and the slopes of the Aravalli hills. Its palace district, ghats and island landmarks tell the story of a kingdom shaped by water, trade and courtly life.",
      "The City of Lakes is best explored at a measured pace: spend time in the palace complex, walk the old streets and leave room for a boat ride if services are operating. Mewar traditions, miniature painting, gardens and lakeside neighbourhoods give Udaipur a character distinct from Rajasthan's desert fort cities.",
    ],
    whyVisit: [
      { title: "Iconic Lake Palaces", text: "Taj Lake Palace and Jagmandir floating on Lake Pichola — among the most photographed hotels on earth." },
      { title: "Living Mewar Heritage", text: "Home to the world's oldest ruling dynasty, with palaces, temples and traditions still alive today." },
      { title: "Romantic Atmosphere", text: "Sunset boat rides, candlelit dinners and rooftop views make Udaipur Rajasthan's most romantic city." },
      { title: "Art & Miniature Schools", text: "A centre of classical Mewar miniature painting, silver craft and traditional folk music." },
    ],
    topAttractions: [
      { name: "City Palace", text: "A layered palace complex above Lake Pichola, shaped over generations by Mewar rulers. Its courtyards, balconies, galleries and lake-facing terraces reveal a blend of regional and later influences; allow several hours and check which areas are open." },
      { name: "Lake Pichola", text: "The city's best-known lake frames palaces, ghats and island landmarks. A boat ride offers a different view of the old city, but departures and routes depend on current lake and operator conditions." },
      { name: "Jag Mandir", text: "A historic island palace on Lake Pichola, reached by boat when services are operating. Its marble pavilions and waterfront setting make it a memorable stop; access arrangements can change with lake operations." },
      { name: "Sajjangarh (Monsoon Palace)", text: "The hilltop palace overlooks Udaipur and the surrounding Aravalli landscape. The climb is part of the experience, and clear weather gives the broadest views; confirm local access and transport arrangements before setting out." },
      { name: "Bagore Ki Haveli", text: "An 18th-century haveli beside Gangaur Ghat with courtyards and rooms displaying period objects and local crafts. Evening cultural programmes may be offered, but schedules and availability should be checked for your visit." },
      { name: "Jagdish Temple", text: "A prominent active Hindu temple near the City Palace, known for its carved stonework and central location in the old city. Dress respectfully, remove footwear where requested and ask before photographing worshippers." },
      { name: "Fateh Sagar Lake", text: "A scenic lake north of the old centre, ringed by hills and promenades. It is a pleasant change of pace from palace visits; boating and island access depend on weather and local operations." },
      { name: "Saheliyon Ki Bari", text: "A historic garden with fountains, pools, marble pavilions and shaded paths. Its garden design offers a quieter contrast to the palace district and is especially pleasant when temperatures are moderate." },
      { name: "Shilpgram", text: "A rural-arts and crafts complex on the city's outskirts, presenting traditional homes, artisan work and cultural events. Festival programming changes by date, so check the current calendar before planning around a performance." },
      { name: "Ahar Cenotaphs", text: "A historic group of royal cenotaphs and memorial architecture on Udaipur's outskirts. Their carved details and quieter setting add context to Mewar's royal history; combine the visit with nearby sites if transport allows." },
    ],
    bestExperiences: [
      { title: "Sunset Boat on Pichola", text: "Private boat cruise past Lake Palace and Jagmandir at golden hour." },
      { title: "Royal Dinner at Jagmandir", text: "Candlelit dining on an island palace in the middle of the lake." },
      { title: "Vintage Car Tour", text: "Explore Udaipur in a 1930s Rolls-Royce or Cadillac from the royal collection." },
      { title: "Miniature Painting Class", text: "A private workshop with a master of the Mewar miniature school." },
      { title: "Village Safari", text: "A day trip into the Aravalli countryside to meet tribal communities and artisans." },
      { title: "Mewar Flavours & Markets", text: "Try local dishes such as dal baati churma, gatte ki sabzi and regional sweets, then browse miniature paintings, textiles and crafts. Ask sellers about materials and whether a painting is hand-worked." },
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
      { q: "How do I reach Udaipur?", a: "Udaipur is served by Maharana Pratap Airport, rail services and road connections. Flight and train schedules change, so check dates before booking. Chauffeur-driven transfers can connect Udaipur with other Rajasthan cities." },
      { q: "What food is Udaipur known for?", a: "Visitors can try Mewari dishes including dal baati churma, gatte ki sabzi and local sweets. Lakefront and old-city restaurants offer varied menus; request spice adjustments and confirm dietary ingredients." },
      { q: "What should I buy in Udaipur?", a: "Look for miniature paintings, textiles, silverwork and locally made crafts in the old city. Compare workmanship, ask whether paintings are hand-painted, and request clear details about materials." },
      { q: "How many days are ideal for Udaipur?", a: "Two days suit the principal city sights; a third day gives room for Shilpgram or a slower lake visit. Add more time if planning an excursion beyond the city." },
      { q: "Can I take a boat ride on Lake Pichola?", a: "Boat services are commonly offered, but departure points, routes and availability depend on current conditions. Confirm on the day and allow flexibility around weather and lake operations." },
    ],
    relatedTourSlugs: ["udaipur-lake", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["udaipur-lake-city-guide", "heritage-hotels-rajasthan", "rajasthan-travel-guide"],
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    tagline: "The Blue City",
    metaTitle: "Jodhpur Travel Guide: Mehrangarh Fort & Blue City | Heritage Jaipur Travels",
    metaDescription:
      "Plan a Jodhpur trip with this guide to Mehrangarh Fort, Blue City lanes, local food, markets, the best season and a practical two-day itinerary.",
    heroImage: jodhpurDestination,
    heroImageAlt: "Mehrangarh Fort overlooking Jodhpur's blue-painted old city",
    heroEyebrow: "Destination Guide",
    heroTitle: "Jodhpur — The Magnificent Blue City",
    heroSubtitle:
      "A mighty hilltop fort presiding over a sea of indigo houses at the edge of the Thar.",
    overview: [
      "Founded in 1459 by Rao Jodha, Jodhpur became the capital of Marwar. Mehrangarh Fort still dominates the skyline above the old city, while the nearby palace and memorial sites trace later chapters of the region's royal history. The blue-painted lanes below the fort remain part of an active neighbourhood, not simply a backdrop.",
      "A Jodhpur visit can balance museum and fort time with a walk through the old quarter, a market stop and a meal of Marwari specialities. The city is also a starting point for village and desert-edge excursions; allow extra time for those outings instead of trying to fit every sight into one day.",
    ],
    whyVisit: [
      { title: "Mehrangarh Fort", text: "One of the largest and most spectacular forts in India, rising 125 m above the city." },
      { title: "The Blue Old Town", text: "A maze of indigo houses, hidden temples and old havelis — a photographer's paradise." },
      { title: "Royal Palace Hotels", text: "Stays at Umaid Bhawan Palace, RAAS and Bal Samand Lake Palace — Marwar's finest." },
      { title: "Gateway to the Thar", text: "Perfectly positioned for desert excursions, village safaris and luxury Thar lodges." },
    ],
    topAttractions: [
      { name: "Mehrangarh Fort", text: "Rising above the old city, Mehrangarh traces the history of Marwar through its gateways, palaces, courtyards and museum collections. Give yourself time for the uphill approach and views over the blue-painted neighbourhoods." },
      { name: "Jaswant Thada", text: "A pale marble memorial built in memory of Maharaja Jaswant Singh II, with delicate stone screens and a peaceful setting near the fort. It pairs naturally with Mehrangarh, though the approach includes walking." },
      { name: "Umaid Bhawan Palace", text: "A 20th-century palace complex that remains partly a royal residence and hotel, with a museum open to visitors. The architecture reflects its period; access is limited to designated public areas." },
      { name: "Blue City Lanes", text: "The old quarter below Mehrangarh is a lived-in maze of narrow streets, painted homes, small shrines and local shops. A guided walk helps with navigation and context; dress modestly and ask before photographing residents." },
      { name: "Toorji Ka Jhalra", text: "A restored stepwell in the old city, admired for its descending flights of stone steps and careful geometry. Visit respectfully and follow any posted rules around access and water." },
      { name: "Clock Tower & Sardar Market", text: "The market district around the Ghanta Ghar is a busy place to browse spices, textiles, snacks and household goods. It is most enjoyable at an unhurried pace; keep valuables secure and agree prices before purchase." },
      { name: "Mandore Gardens", text: "A green historic site north of the city, known for memorial architecture associated with Marwar rulers. Its open-air setting is a useful contrast to the fort and old-town lanes." },
      { name: "Rao Jodha Desert Rock Park", text: "A restored rocky landscape beside Mehrangarh, with marked paths through native desert plants and volcanic terrain. Choose a route suited to the heat and your mobility, and carry water." },
      { name: "Kaylana Lake", text: "A reservoir on the western edge of Jodhpur surrounded by a dry landscape and open skies. It can be a peaceful late-day outing, but facilities and access can vary by season." },
      { name: "Bishnoi Village Region", text: "Visits to nearby villages can introduce travellers to local crafts, pastoral life and conservation traditions. Arrange through responsible local hosts, respect household privacy and confirm which activities are available." },
    ],
    bestExperiences: [
      { title: "Private Fort Tour", text: "Curator-led walk through Mehrangarh's palaces and royal collections." },
      { title: "Flying Fox Zipline", text: "A thrilling zipline circuit over the fort's ramparts and lakes." },
      { title: "Blue City Walk", text: "A guided walk through hidden alleys, temples and stepwells of the old town." },
      { title: "Royal High Tea", text: "Afternoon tea at Umaid Bhawan Palace, still home to the Marwar royal family." },
      { title: "Bishnoi Village Safari", text: "Half-day cultural safari to traditional villages, potters and weavers." },
      { title: "Marwar Food & Craft Walk", text: "Try local specialities such as mirchi bada and mawa kachori, and explore market lanes for textiles, metalwork and spices. A local guide can help explain craft traditions without turning a neighbourhood visit into a rushed shopping stop." },
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
      { q: "How do I travel from Jaipur to Jodhpur?", a: "Rail, road and air connections are available, with journey times varying by service, traffic and date. Check current timetables before travel. A private road transfer can include a planned stop such as Pushkar when the route and schedule allow." },
      { q: "What local food should I try in Jodhpur?", a: "Popular local snacks include mirchi bada and mawa kachori, alongside Rajasthani thalis. Choose a busy, reputable eatery and mention any dietary needs or spice preferences." },
      { q: "Where can I shop in Jodhpur?", a: "Sardar Market and nearby old-city lanes are convenient for spices, textiles and souvenirs. Ask about materials and workmanship, compare prices, and take care around crowded market streets." },
      { q: "Is Jodhpur's Blue City walk suitable for everyone?", a: "The old quarter includes uneven surfaces, steps and narrow lanes. A slower guided route can help, but visitors with mobility needs should discuss the route and vehicle access in advance." },
      { q: "How many days should I plan in Jodhpur?", a: "Two full days work well for the fort, memorials and old city. Add another day for Mandore, a village visit or a relaxed schedule." },
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
    metaTitle: "Jaisalmer Travel Guide: Fort, Desert & Safaris | Heritage Jaipur Travels",
    metaDescription:
      "Plan a Jaisalmer trip with this guide to the living fort, havelis, Sam and Khuri dunes, desert activities and a practical 2–3 day itinerary.",
    heroImage: jaisalmerDestination,
    heroImageAlt: "Golden sandstone architecture of Jaisalmer in the Thar Desert",
    heroEyebrow: "Destination Guide",
    heroTitle: "Jaisalmer — The Golden City of the Thar",
    heroSubtitle:
      "Sandstone ramparts glowing at sunset above the silent dunes of the Thar Desert.",
    overview: [
      "Founded in the 12th century as a fort city on historic desert trade routes, Jaisalmer grew around its golden sandstone citadel. The fort is still home to residents, temples and businesses, so its lanes are both a heritage site and a living neighbourhood. Nearby merchant havelis show the detail and craft that flourished along those routes.",
      "Beyond the city, the Thar landscape opens into villages, rocky desert and dunes. A visit can combine the fort and havelis with a carefully chosen camel or jeep outing and, if it suits your plans, a night outside town. Experiences vary by season and operator; confirm what is included before setting out.",
    ],
    whyVisit: [
      { title: "Living Sonar Quila", text: "One of very few inhabited forts on earth — a UNESCO-protected golden citadel." },
      { title: "Thar Desert Safaris", text: "Camel rides, jeep safaris and silent dune nights under endless stars." },
      { title: "Desert Camp Stays", text: "A range of desert camps offer overnight stays near the dunes. Compare each camp's location, facilities, transfers and cultural programme before booking." },
      { title: "Sandstone Architecture", text: "Some of India's most beautiful havelis — Patwon, Salim Singh and Nathmal." },
    ],
    topAttractions: [
      { name: "Jaisalmer Fort (Sonar Quila)", text: "The golden sandstone fort is a living quarter, with homes, temples, shops and narrow lanes inside its walls. Explore considerately, since this is a residential place as well as a heritage landmark; follow local guidance and avoid blocking doorways." },
      { name: "Patwon Ki Haveli", text: "A group of richly carved merchant havelis that illustrates the wealth built through historic desert trade. Look closely at stone balconies, screens and façades; visitor access varies among the buildings." },
      { name: "Salim Singh Ki Haveli", text: "Known for its distinctive upper storeys and projecting balconies, this haveli offers a close view of Jaisalmer's sandstone craftsmanship. Check which sections are open and use a local guide for historical context." },
      { name: "Nathmal Ki Haveli", text: "An ornate merchant residence noted for its carved façade and paired sculptural details. It remains part of the living city, so view respectfully and ask before photographing residents or private interiors." },
      { name: "Sam Sand Dunes", text: "A popular gateway to the Thar for sunset walks, camel rides, jeep excursions and overnight camps. Conditions and visitor pressure vary; choose responsible operators and agree on the activity and route in advance." },
      { name: "Khuri Sand Dunes", text: "A quieter desert area south of Jaisalmer with village-based stays and dune experiences. Services are more limited than at Sam, so confirm transport, camp facilities and activity details before departure." },
      { name: "Gadisar Lake", text: "A historic reservoir edged by ghats, temples and small pavilions, close to the old city. Early or late light can be rewarding for photography; respect worshippers and keep the water clean." },
      { name: "Kuldhara Village", text: "A former settlement visited for its remains and desert setting. Stories about its abandonment vary, so treat dramatic legends as local lore rather than established history; follow site rules." },
      { name: "Bada Bagh", text: "A group of royal cenotaphs set against an open desert landscape, with carved memorial structures and broad skies. It is often visited near sunset; access and light depend on local conditions." },
      { name: "Desert National Park", text: "A protected desert ecosystem with dunes, rocky ground and wildlife adapted to arid conditions. Wildlife sightings are never assured; use authorised access and follow conservation guidance, especially during sensitive seasons." },
    ],
    bestExperiences: [
      { title: "Luxury Desert Camp Stay", text: "Overnight in a tented suite at Suján The Serai with private butler service." },
      { title: "Sunset Camel Safari", text: "Ride into the Sam dunes for sundowners and a traditional desert dinner." },
      { title: "Private Fort Walk", text: "Guided tour of the living fort, royal palaces and Jain temples." },
      { title: "Desert Festival Experience", text: "Catch the famous February festival of music, dance and camel races." },
      { title: "Vintage Jeep Safari", text: "Explore Kuldhara, Khaba Fort and remote desert villages in a 4×4." },
      { title: "Desert Night & Folk Culture", text: "Choose a camp that explains its facilities and cultural programme in advance. Camel and jeep outings, sunset stops and performances depend on conditions and operator practice; quieter, lower-impact experiences can be arranged." },
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
      { q: "How do I get to Jaisalmer?", a: "Jaisalmer is connected by rail and road, and air services may vary by season. Check current timetables and flight schedules. Road transfers from Jodhpur are a common option, with actual journey time depending on route and traffic." },
      { q: "Should I visit Sam or Khuri Sand Dunes?", a: "Sam has a wider range of established desert activities, while Khuri can feel quieter and more village-based. Compare the experience, distance, camp facilities and operator practices before choosing." },
      { q: "What local food should I try in Jaisalmer?", a: "Look for ker sangri, gatte ki sabzi, dal baati churma and local sweets. Ask how dishes are prepared and let restaurants know about dietary restrictions." },
      { q: "What should I buy in Jaisalmer?", a: "The old city has textiles, leather goods, jewellery and carved souvenirs. Ask about materials and provenance, compare quality, and avoid buying wildlife products or items made from protected species." },
      { q: "How many nights do I need in Jaisalmer?", a: "Two nights allow time for the fort, havelis and a desert outing. Three nights give a less hurried visit or allow an overnight camp, depending on your preferred pace." },
      { q: "Are desert camel rides and jeep safaris available year-round?", a: "Availability and comfort depend on season, weather and operator schedules. Confirm route, duration, safety arrangements and animal-welfare practices directly before booking." },
    ],
    relatedTourSlugs: ["desert-safari", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["camel-safari-jaisalmer-guide", "rajasthan-travel-guide", "best-time-visit-rajasthan"],
  },
  {
    slug: "ranthambore",
    name: "Ranthambore",
    tagline: "Wild Rajasthan",
    metaTitle: "Ranthambore Travel Guide: Safaris, Zones & Fort | Heritage Jaipur Travels",
    metaDescription:
      "Plan a Ranthambore visit with practical safari guidance, zones 1–10, jeep and canter options, the fort, seasonal access and a sample itinerary.",
    heroImage: ranthamboreDestination,
    heroImageAlt: "A Bengal tiger in the forest landscape of Ranthambore, Rajasthan",
    heroEyebrow: "Destination Guide",
    heroTitle: "Ranthambore — Where Tigers Roam Royal Ruins",
    heroSubtitle:
      "Track Bengal tigers through ancient jungle fortresses on India's most iconic wildlife safari.",
    overview: [
      "Ranthambore is a protected landscape in Sawai Madhopur where forest, grassland, lakes and historic ruins meet. The fort and temple add a deep heritage dimension to a visit, while safari routes offer an opportunity to observe wildlife in its natural habitat. Tigers are part of the ecosystem, but sightings are never assured.",
      "Plan around the forest department's current permits and operating rules rather than assuming a particular zone, vehicle or sighting. Sawai Madhopur rail connections and road transfers link the reserve with other Rajasthan stops; allow flexibility for safari timings, seasonal access and travel between your accommodation and entry point.",
    ],
    whyVisit: [
      { title: "Wildlife in a Historic Landscape", text: "A chance to explore a protected forest-and-lake landscape known for tigers and other wildlife, while remembering that animals move freely and sightings cannot be promised." },
      { title: "Ranthambore Fort", text: "A UNESCO-listed 10th-century hill fort set inside the park itself." },
      { title: "Luxury Jungle Lodges", text: "Stays at Aman-i-Khás, Suján Sher Bagh, Oberoi Vanyavilas and Six Senses Fort Barwara." },
      { title: "Easy Access", text: "Just 3.5 hours by train from Jaipur — a perfect Golden Triangle extension." },
    ],
    topAttractions: [
      { name: "Ranthambore National Park Safaris", text: "Guided vehicle safaris travel through designated areas of the reserve to observe wildlife. Permit availability, routes, zones and operating rules are set by the forest authorities and can change; sightings of tigers or any particular animal are never guaranteed." },
      { name: "Safari Zones 1–10", text: "The reserve's safari areas are numbered, and the zone assigned depends on current permits and park administration. No zone can guarantee a tiger sighting; check official booking information and avoid claims that one zone is always best." },
      { name: "Jeep and Canter Safaris", text: "Permits may be offered in smaller jeeps or larger canters, subject to the official system and availability. Select based on group size, comfort and current rules rather than an expectation of better sightings; book with valid visitor details." },
      { name: "Ranthambore Fort", text: "A historic hill fort within the protected landscape, associated with the region's strategic past and recognised among Rajasthan's hill forts. Access involves a climb and may be affected by local rules, weather or wildlife management." },
      { name: "Trinetra Ganesh Temple", text: "A revered temple within the fort complex, visited by pilgrims as well as travellers. Dress respectfully and check current access guidance; the route includes steps and can be busy on religious occasions." },
      { name: "Padam Talao", text: "One of the park's best-known lakes, set among woodland and historic structures. Water levels and wildlife activity change with the season, and all viewing must remain from the permitted safari route." },
      { name: "Rajbagh Talao and Ruins", text: "A lake and the remains of old structures create a distinctive setting within the park. Observe wildlife from the vehicle and keep to the route and instructions of the guide and forest staff." },
      { name: "Malik Talao", text: "A smaller wetland area within the reserve that supports birds and other wildlife. Quiet observation is important; animals may be present or absent depending on conditions." },
      { name: "Wildlife and Birdlife", text: "The reserve supports a range of mammals, reptiles and birds in dry forest, grassland and wetland habitats. A naturalist can help identify species, but sightings vary and should never be guaranteed." },
      { name: "Dastkar Ranthambore", text: "A women's craft cooperative producing beautiful textiles and souvenirs." },
    ],
    bestExperiences: [
      { title: "Guided Jeep Safari", text: "A smaller vehicle option for eligible groups, with permits, route and timing governed by the official park system. A knowledgeable guide can interpret tracks and habitats, but cannot promise a tiger encounter." },
      { title: "Photography Safari", text: "Specialist photography safaris with experienced wildlife photographer guides." },
      { title: "Luxury Tented Stay", text: "Overnight in a tented suite at Aman-i-Khás or Suján Sher Bagh." },
      { title: "Fort Heritage Walk", text: "Guided walk through the 10th-century hilltop fort, often in sight of langurs and deer." },
      { title: "Village Visit", text: "Cultural visit to surrounding Meena villages with traditional lunch." },
      { title: "Responsible Wildlife Photography", text: "Bring suitable camera equipment and use the vehicle's permitted viewing position. Follow guide instructions, keep noise low, never call or feed animals, and accept that a safari may focus on landscapes and other species." },
    ],
    bestTimeToVisit: [
      { season: "Warmer Months", months: "April – June", text: "Heat can be intense, and wildlife viewing conditions vary. Carry sun protection and water, and follow current park guidance." },
      { season: "Cooler Months", months: "October – March", text: "Daytime conditions are often more comfortable for travel, though early safaris can be cold. Park operations and zone access are subject to official seasonal rules." },
      { season: "Monsoon Period", months: "July – September", text: "Safari access may be restricted or operate differently during the monsoon. Confirm current dates, closures and permit availability with official forest booking channels before making plans." },
    ],
    recommendedDuration: "2 Days",
    durationNote: "Two nights allow time for more than one safari, rest between early starts and a separate visit to the fort. Add nights if your travel schedule or the current safari timetable calls for it; no number of drives guarantees a tiger sighting.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Safari", text: "Arrive at Sawai Madhopur, settle into your lodge and take an afternoon safari only if it fits the current permit and arrival schedule. Otherwise, rest and prepare for an early start." },
      { day: "Day 2", title: "Forest Safari & Rest", text: "Take a morning safari, return for breakfast and a midday break, then use a second safari slot only if booked and available. Keep the middle of the day flexible for rest and park schedules." },
      { day: "Day 3", title: "Fort & Departure", text: "If access and timing allow, visit Ranthambore Fort and Trinetra Ganesh Temple before departure. The fort involves a climb; check current visitor guidance and avoid combining it with a rushed transfer." },
    ],
    faqs: [
      { q: "What are the chances of seeing a tiger in Ranthambore?", a: "Ranthambore is known for tiger habitat, but wildlife is free-ranging and no sighting can be guaranteed, even across multiple safaris. Enjoy the forest, lakes, birds and other species as part of the experience." },
      { q: "Which is the best safari zone in Ranthambore?", a: "There is no zone that guarantees a sighting, and assignments depend on permit availability and forest-authority rules. Zones 1–10 are used in the booking system; consult current official information rather than relying on fixed zone rankings." },
      { q: "Should I choose a jeep or canter safari?", a: "Both vehicle types may be available under current permit rules. A jeep suits smaller groups, while a canter carries more visitors; availability and access depend on date and official allocation. Neither guarantees better wildlife sightings." },
      { q: "How do I get to Ranthambore?", a: "Sawai Madhopur is the nearest railhead, with road connections from Jaipur and other cities. Check current train schedules and allow flexible road-transfer time; local transport can be arranged around your safari permits." },
      { q: "Which is the best luxury lodge?", a: "Aman-i-Khás, Suján Sher Bagh, Oberoi Vanyavilas and Six Senses Fort Barwara are the top luxury options." },
      { q: "How do I book a Ranthambore safari?", a: "Safari permits are managed through Rajasthan Forest Department booking channels, and availability can be limited. Use official booking information, enter visitor details accurately and book as early as practical; rules and schedules can change." },
      { q: "When does Ranthambore National Park close?", a: "Operating areas and seasonal access may change, including during monsoon months. Confirm the dates and zones currently open through official forest channels before booking accommodation or transport." },
      { q: "What animals can I see besides tigers?", a: "The park is habitat for a variety of mammals, birds and reptiles, with species activity changing by season and location. Sightings of any particular animal are not assured." },
      { q: "What should I bring on safari?", a: "Bring valid booking identification, weather-appropriate layers, sun protection and a camera if desired. Follow vehicle and guide rules, keep noise low and do not feed or approach wildlife." },
    ],
    relatedTourSlugs: ["golden-triangle-ranthambore", "rajasthan-royal"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["ranthambore-tiger-safari-guide", "rajasthan-travel-guide", "best-time-visit-rajasthan"],
  },
  {
    slug: "pushkar",
    name: "Pushkar",
    tagline: "Sacred Soul",
    metaTitle: "Pushkar Travel Guide: Lake, Temples & Camel Fair | Heritage Jaipur Travels",
    metaDescription:
      "Plan a Pushkar trip with this guide to the sacred lake, temples, markets, Camel Fair dates, local customs and an easy one- or two-day itinerary.",
    heroImage: pushkarDestination,
    heroImageAlt: "Pushkar's sacred lake, temples and surrounding Aravalli hills",
    heroEyebrow: "Destination Guide",
    heroTitle: "Pushkar — The Sacred Soul of Rajasthan",
    heroSubtitle:
      "Holy ghats, whitewashed temples and the mystical spirit of India's most sacred lake.",
    overview: [
      "Set beside a sacred lake on the edge of the Thar, Pushkar is an important Hindu pilgrimage town with a long association with Brahma worship. Temples and ghats shape the rhythm of the old centre, where visitors share narrow streets with pilgrims and local residents.",
      "The town offers a quieter counterpoint to Rajasthan's large fort cities: walk the lake circuit, visit temples respectfully, browse craft markets and look toward the surrounding countryside. The annual Camel Fair brings a very different pace and larger crowds; its dates follow the Hindu calendar and should be confirmed for each year.",
    ],
    whyVisit: [
      { title: "Sacred Lake & Ghats", text: "One of India's most sacred pilgrimage lakes, ringed by 52 atmospheric bathing ghats." },
      { title: "Brahma Temple", text: "One of the very few temples in the world dedicated to Lord Brahma." },
      { title: "Pushkar Camel Fair", text: "The world-famous November fair — camels, music, dance and a riot of colour." },
      { title: "Bohemian Atmosphere", text: "Lakeside cafés, rooftop yoga and a quieter, slower Rajasthan." },
    ],
    topAttractions: [
      { name: "Pushkar Lake and Ghats", text: "A sacred lake ringed by bathing ghats and temples, central to the town's pilgrimage life. Walk quietly, remove footwear where requested and follow local guidance about photography and ritual areas." },
      { name: "Brahma Temple", text: "One of Pushkar's most important pilgrimage sites, dedicated to Brahma and set near the lake. Expect local customs around footwear, clothing and photography; check access guidance before visiting." },
      { name: "Savitri Temple", text: "A hilltop shrine above Pushkar reached by a climb or, when operating, a cable car. The elevated setting gives views across the lake and desert edge; check weather, access and operating conditions before starting." },
      { name: "Varaha Temple", text: "A significant temple dedicated to Vishnu's Varaha form, with a history and sculptural details that reward a respectful, unhurried visit." },
      { name: "Rangji Temple", text: "A distinctive temple complex whose architecture reflects multiple regional influences. It is an active place of worship, so observe posted visitor guidance and be considerate during ceremonies." },
      { name: "Apteshwar Mahadev Temple", text: "A revered Shiva temple near Pushkar Lake, known for its devotional atmosphere. Access can be busy during festivals; dress modestly and follow local customs." },
      { name: "Man Mahal", text: "A historic palace building beside the lake, associated with the region's royal heritage. Its use and visitor access may vary, so confirm locally before planning an interior visit." },
      { name: "Gau Ghat", text: "One of the lakefront ghats used for religious rites and reflection. Visit quietly, keep clear of ceremonies and ask before taking photographs." },
      { name: "Pushkar Bazaar", text: "The old-town lanes offer textiles, embroidered goods, jewellery and souvenirs alongside everyday shops. Browse respectfully, compare materials and prices, and keep in mind the town's religious character." },
      { name: "Pushkar Fair Grounds", text: "The fairground becomes a focal point during the annual Pushkar Camel Fair, with livestock events and cultural activities whose programme changes each year. Confirm official dates and arrangements before travelling." },
    ],
    bestExperiences: [
      { title: "Sunrise on Savitri Hill", text: "Cable car or sunrise hike to the hilltop temple for breathtaking views." },
      { title: "Ghat Aarti at Sunset", text: "Witness evening prayers at the sacred lake — one of Rajasthan's most moving experiences." },
      { title: "Camel Fair (November)", text: "Attend the iconic fair with private viewing and luxury tented camp stay." },
      { title: "Hot-Air Balloon Ride", text: "Sunrise balloon flight over the lake, temples and desert (seasonal)." },
      { title: "Cooking Class", text: "Learn classic vegetarian Rajasthani recipes from a local family." },
      { title: "Countryside & Craft Visit", text: "Explore the rural landscape around Pushkar with a local guide, and look for regional textiles, embroidery and handmade goods. Confirm routes, access and community-hosted activities in advance." },
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
      { q: "When is the Pushkar Camel Fair?", a: "The fair is held around Kartik Purnima, with dates that vary each year according to the Hindu calendar. Check the confirmed annual dates and programme before booking; accommodation can be in high demand." },
      { q: "How long should I stay in Pushkar?", a: "One night is sufficient outside the fair. During the November fair, two or three nights are recommended." },
      { q: "Are there local customs to know about in Pushkar?", a: "Pushkar is an important pilgrimage town, and many businesses serve vegetarian food. Ask about local expectations at your accommodation, dress modestly near temples and ghats, and follow signs or guidance around alcohol, footwear and photography." },
      { q: "How do I get to Pushkar?", a: "Pushkar is reached by road from Ajmer, which has rail connections. Jaipur and Jodhpur are also linked by road and rail, but journey times vary with route and traffic; confirm schedules and allow time for the final local transfer." },
      { q: "What should I wear at Pushkar's temples and ghats?", a: "Choose modest clothing, remove footwear where asked and follow signs or local instructions. The ghats are sacred spaces; avoid interrupting rituals and ask before taking photographs." },
      { q: "What can I buy in Pushkar?", a: "Markets offer textiles, embroidered goods, jewellery, leather items and souvenirs. Compare quality, ask about materials, and shop considerately in the town's religious centre." },
      { q: "What food is available in Pushkar?", a: "The town has many vegetarian cafés and restaurants, with regional Rajasthani dishes as well as international options. Menus and dietary suitability vary; ask about ingredients and preparation." },
      { q: "How many days should I spend in Pushkar?", a: "One or two days are enough for the lake, temples and market at an easy pace. During the fair, allow extra time for crowds, event schedules and accommodation logistics." },
      { q: "Can visitors attend rituals at Pushkar Lake?", a: "Visitors can observe public religious life respectfully, but should not intrude on ceremonies. Follow priest and local guidance, avoid photographing people without permission and keep the ghats clean." },
    ],
    relatedTourSlugs: ["rajasthan-royal", "jaipur-heritage"],
    relatedExperienceSlugs: [],
    relatedBlogSlugs: ["rajasthan-travel-guide", "best-time-visit-rajasthan", "heritage-hotels-rajasthan"],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
