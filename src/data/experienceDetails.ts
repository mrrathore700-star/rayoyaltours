// Rich storytelling details + galleries for premium experience pages.
// Applied onto base experiences in src/data/experiences.ts at module load.

import desertSafari from "@/assets/desert-safari.jpg";
import culturalDance from "@/assets/cultural-dance.jpg";
import villageTour from "@/assets/village-tour.jpg";
import rajasthaniFood from "@/assets/rajasthani-food.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import localMarket from "@/assets/local-market.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import luxuryCar from "@/assets/luxury-car.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import amberFort from "@/assets/amber-fort.jpg";
import cityPalace from "@/assets/city-palace.jpg";
import jaigarh from "@/assets/jaigarh-fort.jpg";
import nahargarh from "@/assets/nahargarh-fort.jpg";
import jalMahal from "@/assets/jal-mahal.jpg";
import pannaMeena from "@/assets/panna-meena-kund.jpg";
import jantarMantar from "@/assets/jantar-mantar.jpg";
import albertHall from "@/assets/albert-hall.jpg";
import heroPalace from "@/assets/hero-palace.jpg";
import goldenTriangle from "@/assets/golden-triangle.jpg";
import fleet from "@/assets/fleet-vehicles.jpg";

import type { Experience } from "./experiences";

type Details = NonNullable<Experience["details"]>;
type ExtraMeta = {
  experienceType?: string;
  groupType?: string;
  gallery?: string[];
  details?: Details;
};

const story = (
  experienceType: string,
  groupType: string,
  gallery: string[],
  details: Details,
): ExtraMeta => ({ experienceType, groupType, gallery, details });

export const experienceMeta: Record<string, ExtraMeta> = {
  // ---------- DESERT & ADVENTURE ----------
  "camel-safari-jaisalmer": story(
    "Desert Adventure", "Private or small group",
    [desertSafari, jaisalmerFort, villageTour, royalTour],
    {
      subtitle: "Glide across the golden Thar — slow, soulful and timeless.",
      overview:
        "Trade the rush of the modern world for the gentle sway of a single-hump camel as it carries you deep into the Thar Desert. The dunes glow amber, then crimson, then violet as the sun sinks behind the horizon. Your camel handler hums an old folk song he learnt from his grandfather. A Rajasthani family welcomes you with masala chai, and as night falls, more stars than you've ever seen take over a sky untouched by city lights.\n\nThis is desert travel as it was meant to be — patient, intimate and deeply human.",
      unique: [
        { title: "Authentic single-hump camels", text: "Cared for by traditional Manganiyar camel handlers who've grown up with them." },
        { title: "Sam & Khuri dunes", text: "We choose the quieter, more cinematic dunes — never the tourist crowds." },
        { title: "Real village stop", text: "Chai with a Rajasthani family inside their mud-and-mirror home." },
        { title: "Optional desert overnight", text: "Sleep on a charpai under a billion stars, bonfire crackling beside you." },
      ],
      willExperience: [
        "Welcome with cool fresh lime water at the dune edge",
        "Meet your camel and learn his name",
        "Slow ride deep into the untouched dunes",
        "Sunset photo session at the perfect viewpoint",
        "Folk music by Manganiyar musicians",
        "Hot masala chai and Rajasthani snacks",
        "Optional dinner under the stars",
      ],
      willFeel:
        "An unhurried calm you'd forgotten existed — and a quiet awe at how vast, beautiful and silent the world can still be.",
      perfectMoments: [
        "Silhouette of camels against a burning sky",
        "Bare feet sinking into cool evening sand",
        "First star appearing above the dunes",
        "Children racing barefoot in a desert village",
        "Steam rising from chai in the cold night air",
      ],
      flow: [
        "Pickup from your Jaisalmer hotel",
        "Drive to Sam or Khuri dunes (45 min)",
        "Meet your camel handler and camel",
        "1–1.5 hour ride deep into the dunes",
        "Sunset at a private viewpoint",
        "Chai, music and snacks at a desert camp",
        "Optional dinner & overnight under the stars",
      ],
      idealFor: [
        "Couples & honeymooners",
        "Families with children 6+",
        "Solo travellers seeking soul",
        "Photographers & content creators",
        "First-time visitors to India",
      ],
      whyLove:
        "Because nothing prepares you for how silent, vast and human the Thar feels — and how a single sunset can reset your entire sense of time.",
      planExperience: [
        "Half-day, full-day or overnight options",
        "Private camels for couples & families",
        "Combine with desert camp & cultural night",
        "Best months: October to March",
      ],
    }),

  "luxury-desert-camping-jaisalmer": story(
    "Luxury Stay", "Private tents",
    [jaisalmerFort, desertSafari, culturalDance, royalTour],
    {
      subtitle: "Sleep among kings — under a billion desert stars.",
      overview:
        "Step inside your own private Swiss tent: king-size bed, hand-block-printed linens, en-suite bathroom and a private deck looking out over endless dunes. As the sun lowers, take a sundowner camel ride, then return to a candle-lit Rajasthani thali under the open sky. Kalbelia dancers swirl around the bonfire, the Manganiyar singers strum into the night, and finally — silence, stars and the softest desert breeze.\n\nThis is the Thar Desert reimagined as a five-star sanctuary.",
      unique: [
        { title: "Private Swiss luxury tents", text: "King beds, attached bathrooms and private decks." },
        { title: "Personal butler service", text: "Dedicated steward for your tent throughout the stay." },
        { title: "Cultural programme", text: "Live Kalbelia dance, Manganiyar music and bonfire." },
        { title: "Sunrise camel ride included", text: "A peaceful ride before the desert wakes." },
      ],
      willExperience: [
        "Welcome drinks and rose-petal greeting",
        "Check-in to your private luxury tent",
        "Sundowner camel safari into the dunes",
        "Candle-lit Rajasthani royal thali dinner",
        "Live folk music and fire dance around the bonfire",
        "Stargazing with desert blankets",
        "Sunrise camel ride and gourmet breakfast",
      ],
      willFeel:
        "A delicious mix of indulgence and wonder — the kind of night you'll talk about for years.",
      perfectMoments: [
        "Candle-lit dinner with no walls, only stars",
        "Folk dancers spinning by firelight",
        "Sunrise gold spilling over the dunes",
        "Soft tent lanterns glowing into the night",
      ],
      flow: [
        "Afternoon transfer from Jaisalmer",
        "Tent check-in and welcome refreshments",
        "Sundowner camel ride",
        "Cultural performance and royal dinner",
        "Stargazing with optional astronomy guide",
        "Sunrise camel ride and breakfast",
        "Late-morning departure",
      ],
      idealFor: [
        "Honeymooners & anniversary couples",
        "Luxury travellers",
        "First-time desert visitors",
        "Photographers & filmmakers",
      ],
      whyLove:
        "Because it wraps the wildness of the Thar in absolute comfort — adventure without a single compromise.",
      planExperience: [
        "1, 2 or 3 night stays",
        "Private cultural programme on request",
        "Combine with Jaisalmer Fort tour",
        "Best months: October to March",
      ],
    }),

  "jeep-safari-thar": story(
    "Adventure / 4x4", "Private jeep",
    [desertSafari, villageTour, jaisalmerFort, royalTour],
    {
      subtitle: "Off-road into the wild, untamed Thar.",
      overview:
        "Strap in for a exhilarating 4x4 ride across the wild Thar — bouncing over giant dunes, racing into golden valleys and stopping at hidden Bishnoi and Manganiyar villages most tourists never see. Your chauffeur knows every track, every shortcut, every story. End at a panoramic dune for the ultimate desert sunset.\n\nThis is the desert at full throttle.",
      unique: [
        { title: "Open-top 4x4 jeep", text: "Wind in your hair, sand under your wheels." },
        { title: "Real desert villages", text: "Stops with Bishnoi and Manganiyar communities." },
        { title: "Big-dune bashing", text: "Adrenaline rush over remote mega-dunes." },
        { title: "Local expert drivers", text: "Know the desert by feel, not by GPS." },
      ],
      willExperience: [
        "Briefing and safety check",
        "Off-road run through scrubland and dunes",
        "Stop at a Bishnoi or Manganiyar village",
        "Dune bashing on big sand walls",
        "Sunset at a panoramic dune-top",
        "Chai and Rajasthani snacks",
      ],
      willFeel:
        "Pure, grinning adrenaline — and surprise at how alive the desert truly is.",
      perfectMoments: [
        "Jeep airborne over a dune crest",
        "Dust trailing into a golden sunset",
        "A Manganiyar child waving from a doorway",
      ],
      flow: [
        "Pickup from your Jaisalmer hotel",
        "Drive to the dune fields",
        "Off-road jeep adventure",
        "Village interactions",
        "Dune-bashing and sunset",
        "Return transfer",
      ],
      idealFor: ["Adventure seekers", "Couples with energy", "Small groups of friends", "Families with teens"],
      whyLove: "Because nothing else lets you feel the scale and silence of the Thar at this speed.",
      planExperience: ["Morning or sunset slots", "Private jeep with driver", "Combine with luxury camping", "Best: October to March"],
    }),

  "sandboarding-jaisalmer": story(
    "Adventure", "Group friendly",
    [desertSafari, jaisalmerFort, villageTour, royalTour],
    {
      subtitle: "Surf the dunes — the Thar's wildest thrill.",
      overview:
        "Strap on a polished wooden board and stand at the edge of a 30-metre dune. Your instructor demonstrates, gives you a thumbs up — and suddenly you're sliding down a wall of golden sand, arms wide, laughing into the wind. Suitable for first-timers and adrenaline-lovers, with safety briefing and friendly support throughout.\n\nIt's the desert version of snowboarding — and it's pure joy.",
      unique: [
        { title: "Wooden boards & gear", text: "All equipment provided and inspected." },
        { title: "Beginner-friendly instructor", text: "Step-by-step coaching for first-timers." },
        { title: "Multiple runs", text: "Try as many descents as you like." },
        { title: "Combo option", text: "Add quad-biking and parasailing for the full thrill." },
      ],
      willExperience: [
        "Safety briefing and gear-up",
        "Practice on smaller dunes",
        "Multiple runs on big dunes",
        "Photo and video moments",
        "Cool drinks and rest in the shade",
      ],
      willFeel: "Childlike, weightless joy.",
      perfectMoments: ["Mid-slide grin caught on camera", "First successful run cheered by your group", "Sand spraying behind your board"],
      flow: ["Pickup from Jaisalmer", "Transfer to dune field", "Briefing and warm-up", "Multiple runs", "Refreshments and return"],
      idealFor: ["Adventure travellers", "Friends & couples", "Active families", "Bucket-list seekers"],
      whyLove: "Because it's pure, simple, surprising fun — and the photos are unforgettable.",
      planExperience: ["1–2 hour sessions", "Combo with camel safari", "Group discounts available", "Best: October to March"],
    }),

  "desert-photography-tour": story(
    "Photography", "Private",
    [desertSafari, jaisalmerFort, hawaMahal, royalTour],
    {
      subtitle: "Chase the Thar's most cinematic light.",
      overview:
        "Built for photographers and Instagram lovers — your local guide knows the very best light, angles and characters in the Thar at both sunrise and sunset. Capture camels in silhouette, draped Rajasthani women collecting water, ancient havelis glowing gold and the moonrise over an empty desert. Bring your camera; we'll handle every lighting moment.",
      unique: [
        { title: "Local photographer guide", text: "Knows the desert by frame, not just by road." },
        { title: "Sunrise & sunset sessions", text: "Two golden hours, fully optimised." },
        { title: "Models & camels available", text: "Authentic local subjects, ethically arranged." },
        { title: "Drone-friendly locations", text: "Permitted spots for aerial work." },
      ],
      willExperience: [
        "Pre-shoot location planning",
        "Golden hour camel & dune compositions",
        "Village character portraits",
        "Haveli architecture frames",
        "Astrophotography option",
        "On-location editing tips",
      ],
      willFeel: "Inspired and re-energised — like the desert is photographing back.",
      perfectMoments: ["Camel silhouette against a burning sky", "Veiled woman walking a dune ridge", "Haveli walls glowing at first light"],
      flow: ["Pickup at sunrise/sunset", "Pre-planned shooting route", "Multi-location coverage", "Return with ready-to-edit images"],
      idealFor: ["Pro & hobby photographers", "Content creators", "Travel writers", "Filmmakers"],
      whyLove: "Because every frame feels like a magazine cover — even from your phone.",
      planExperience: ["Half or full day", "Custom shot list welcome", "Drone arrangements possible", "Best: November to February"],
    }),

  "desert-stargazing": story(
    "Romantic / Wellness", "Private or small group",
    [jaisalmerFort, desertSafari, royalTour, villageTour],
    {
      subtitle: "Lie back and meet the Milky Way.",
      overview:
        "Far from the lights of any city, the Thar Desert reveals the Milky Way in spectacular detail. Lie back on traditional Rajasthani traditional quilts, sip warm chai and learn the stories of the constellations from a local astronomy guide with a high-powered telescope. A magical, romantic and humbling experience — perfect after a sunset camel ride.",
      unique: [
        { title: "Telescope + astronomy guide", text: "Spot Saturn's rings, lunar craters and deep-sky objects." },
        { title: "Bonfire & desert blankets", text: "Cosy and warm even on cool desert nights." },
        { title: "New-moon scheduling", text: "We time it for darkest skies." },
        { title: "Constellation storytelling", text: "Hindu and global mythology around the stars." },
      ],
      willExperience: [
        "Sunset transfer to a remote dune",
        "Bonfire setup and welcome chai",
        "Night-sky orientation talk",
        "Telescope viewing of planets and moon",
        "Star storytelling under blankets",
        "Light Rajasthani dinner option",
      ],
      willFeel: "Tiny, peaceful and quietly in love with the universe.",
      perfectMoments: ["Milky Way arching over a silent dune", "Saturn through the telescope", "Bonfire glow against the dark"],
      flow: ["Sunset pickup", "Drive to dark-sky site", "Welcome and bonfire", "Telescope session", "Storytelling and return"],
      idealFor: ["Couples & honeymooners", "Families with curious kids", "Wellness travellers", "Photographers"],
      whyLove: "Because nothing recalibrates the soul like a sky completely full of stars.",
      planExperience: ["3-hour evening sessions", "Best on new-moon nights", "Add private dinner", "Best: October to March"],
    }),

  // ---------- WILDLIFE & NATURE ----------
  "ethical-elephant-experience-jaipur": story(
    "Wildlife / Ethical", "Small group",
    [royalTour, amberFort, villageTour, hawaMahal],
    {
      subtitle: "Care for elephants the right way — never ride.",
      overview:
        "At a partner ethical elephant sanctuary outside Jaipur, you spend a morning caring for rescued elephants the right way: feeding them sugarcane and bananas, bathing them in a shaded pool and walking alongside them through the countryside. No riding, no chains — just a meaningful, hands-on encounter that supports the animals' welfare.\n\nA gentle, deeply moving experience that changes how you see these magnificent beings.",
      unique: [
        { title: "Strictly no riding", text: "Aligned with global animal-welfare standards." },
        { title: "Hands-on care", text: "Feed, bathe and walk alongside the elephants." },
        { title: "Mahout interaction", text: "Learn the bond between elephant and caretaker." },
        { title: "Supports rescued animals", text: "Your visit funds care, food and medical needs." },
      ],
      willExperience: [
        "Welcome and ethical briefing",
        "Meet your elephant and her mahout",
        "Hand-feeding session with bananas and sugarcane",
        "Bathing the elephant in a shaded pool",
        "Walk together through the countryside",
        "Vegetarian Indian breakfast",
      ],
      willFeel: "Gentle joy, gratitude and a quiet sadness for what these animals have endured.",
      perfectMoments: ["Elephant trunk reaching for a banana", "Splashing water by her side", "Walking together at a slow, peaceful pace"],
      flow: ["Hotel pickup at dawn", "Drive to sanctuary (45 min)", "Briefing and meet elephants", "Care, bath and walk", "Breakfast and return"],
      idealFor: ["Animal lovers", "Families with children 8+", "Ethical travellers", "Photographers"],
      whyLove: "Because it transforms a touristy cliché into a genuinely meaningful encounter.",
      planExperience: ["Morning sessions only", "Half-day duration", "Combine with Amber Fort", "Best: October to March"],
    }),

  "leopard-safari-jawai": story(
    "Wildlife / Safari", "Private 4x4",
    [ranthamboreTiger, villageTour, royalTour, jaisalmerFort],
    {
      subtitle: "Leopards, granite hills and a peaceful coexistence.",
      overview:
        "Jawai is one of the world's most unique wildlife stories — wild leopards living harmoniously among granite hills and Rabari shepherd communities. With expert naturalists, head out at dawn or dusk in open 4x4 jeeps and search for leopards on rocky outcrops, plus crocodiles, antelope and over 200 bird species. A truly off-beat Rajasthan safari — and one of the highest leopard sighting rates in India.",
      unique: [
        { title: "World's only human-leopard coexistence", text: "Rabari shepherds and leopards share the land peacefully." },
        { title: "Open 4x4 with naturalist", text: "Expert guide and great photo angles." },
        { title: "Rare landscape", text: "Granite hills, lakes and ancient temples." },
        { title: "High sighting rate", text: "Among India's most reliable leopard locations." },
      ],
      willExperience: [
        "Pre-dawn pickup with hot chai",
        "Open jeep into the granite hills",
        "Tracking leopards on the rocks",
        "Bird and crocodile sightings",
        "Visit to a Rabari shepherd settlement",
        "Hot Indian breakfast back at lodge",
      ],
      willFeel: "Goosebumps the moment a leopard's eyes meet yours from a distant rock.",
      perfectMoments: ["Leopard silhouette on a sunrise boulder", "Rabari shepherd with his goats below", "Painted stork on a still lake"],
      flow: ["Pre-dawn pickup", "Open jeep safari (3 hours)", "Naturalist commentary", "Rabari village visit", "Breakfast and return"],
      idealFor: ["Wildlife enthusiasts", "Photographers", "Off-the-path luxury travellers", "Couples"],
      whyLove: "Because nowhere else on earth do leopards and people share land like this.",
      planExperience: ["Sunrise or sunset slot", "Premium lodge stays available", "Combine with Udaipur", "Best: October to April"],
    }),

  "tiger-safari-ranthambore": story(
    "Wildlife / Safari", "Shared canter or private gypsy",
    [ranthamboreTiger, royalTour, villageTour, amberFort],
    {
      subtitle: "Track the wild Bengal tiger in royal hunting grounds.",
      overview:
        "Ranthambore National Park is one of the very best places on earth to see a wild Bengal tiger. Set in 1,300 sq km of forest around a 10th-century fort, the park is home to tigers, leopards, sloth bears, crocodiles and over 300 bird species. Choose between shared canter or private gypsy safaris with permits, expert naturalist and best-zone allocation handled by us.\n\nWhen those amber eyes appear through the bamboo, time stops.",
      unique: [
        { title: "Gypsy or canter options", text: "We secure the best zones and timings." },
        { title: "Expert naturalist", text: "Knows individual tigers, names and territories." },
        { title: "All permits included", text: "We handle the complex booking process." },
        { title: "Hotel pickups", text: "From every tier of Ranthambore stay." },
      ],
      willExperience: [
        "Pre-dawn pickup with chai",
        "Entry to your assigned safari zone",
        "3-hour tiger tracking with naturalist",
        "Sightings of deer, langur, crocs & birds",
        "Possible tiger encounter",
        "Return for hot breakfast",
      ],
      willFeel: "Heart-pounding awe at being so close to such a powerful, beautiful creature.",
      perfectMoments: ["Tiger crossing the safari track", "Reflection of antlers in a forest pool", "Old fort walls rising from the jungle"],
      flow: ["Pre-dawn pickup", "Entry to park zone", "3-hour safari with naturalist", "Tiger and wildlife encounters", "Return to hotel"],
      idealFor: ["Wildlife travellers", "Families", "Photographers", "First-time India visitors"],
      whyLove: "Because seeing a wild tiger in its forest home is a top-five life moment for almost every guest.",
      planExperience: ["Morning or afternoon safaris", "Multiple safaris boost odds", "Premium gypsy on request", "Best: April to June for sightings"],
    }),

  "bird-watching-bharatpur": story(
    "Wildlife / Birding", "Private with naturalist",
    [udaipurLake, jalMahal, ranthamboreTiger, villageTour],
    {
      subtitle: "A UNESCO bird paradise of 370+ species.",
      overview:
        "Keoladeo National Park in Bharatpur is a UNESCO World Heritage Site and one of the world's richest bird reserves. With over 370 species — including painted storks, Sarus cranes, kingfishers and the rare Siberian crane in winter — this is heaven for birders. Explore by cycle-rickshaw with an expert naturalist who knows every nest, call and migration story.",
      unique: [
        { title: "UNESCO bird sanctuary", text: "Globally protected wetland reserve." },
        { title: "Cycle-rickshaw access", text: "Quiet, eco-friendly and detail-rich." },
        { title: "Expert birding naturalist", text: "Decades of local field experience." },
        { title: "Binoculars provided", text: "Quality optics for everyone." },
      ],
      willExperience: [
        "Sunrise entry to the park",
        "Cycle-rickshaw exploration",
        "Naturalist-led bird identification",
        "Photography opportunities",
        "Tea break in the wetlands",
      ],
      willFeel: "Calm, fascinated and quietly thrilled with every new species ticked.",
      perfectMoments: ["Painted storks lifting off a misty wetland", "A kingfisher dive at dawn", "Sarus cranes courting in the reeds"],
      flow: ["Sunrise pickup", "Park entry by rickshaw", "Birding circuit with naturalist", "Tea and return"],
      idealFor: ["Birders & ecologists", "Wildlife photographers", "Slow travellers", "Families"],
      whyLove: "Because the variety, density and beauty of birdlife here is genuinely world-class.",
      planExperience: ["3–5 hour visits", "Best at sunrise", "Combine with Agra/Taj", "Best: October to March"],
    }),

  "marwari-horse-riding": story(
    "Adventure / Equestrian", "Private rides",
    [royalTour, villageTour, amberFort, hawaMahal],
    {
      subtitle: "Ride India's royal warhorse through living countryside.",
      overview:
        "The Marwari is Rajasthan's legendary warhorse — known for its inward-curving ears, courage and grace. Ride one through countryside, mustard fields and even up to a fort, with experienced trainers and expert guides. Custom rides for beginners through to advanced riders, including multi-day equestrian tours.",
      unique: [
        { title: "Pure Marwari & Kathiawari horses", text: "Bred and trained in Rajasthan." },
        { title: "All experience levels", text: "From beginners to advanced riders." },
        { title: "Helmet & safety gear", text: "Quality equipment provided." },
        { title: "Village & fort routes", text: "Living-postcard countryside scenery." },
      ],
      willExperience: [
        "Briefing, gear-up and horse-matching",
        "Warm-up ride in the paddock",
        "Open-country trail through villages and fields",
        "Optional canter for confident riders",
        "Tea/snack stop at a heritage point",
      ],
      willFeel: "A surge of confidence and connection — horse and landscape in perfect rhythm.",
      perfectMoments: ["Galloping across a mustard field", "Marwari ears curling inward in salute", "Riding through a heritage village gateway"],
      flow: ["Stable pickup", "Briefing and gear", "Open-country ride", "Snack stop", "Return"],
      idealFor: ["Riders of all levels", "Couples", "Solo adventurers", "Multi-day equestrian travellers"],
      whyLove: "Because the Marwari is unlike any horse you've ridden — proud, brave and noble.",
      planExperience: ["1 hour to multi-day tours", "Custom-built routes", "Combine with palace stays", "Best: October to March"],
    }),

  // ---------- ROYAL & HERITAGE ----------
  "palace-hotel-stays-rajasthan": story(
    "Heritage / Luxury Stay", "Private suites",
    [royalTour, heroPalace, cityPalace, udaipurLake, amberFort],
    {
      subtitle: "Sleep where Maharajas once dreamed.",
      overview:
        "Stay in Rajasthan's most spectacular heritage hotels — Taj Lake Palace floating on Lake Pichola, Umaid Bhawan in Jodhpur, Rambagh Palace in Jaipur, Samode Haveli and many lesser-known royal havelis. We curate stays based on your taste and budget, often securing the best rooms and royal welcomes through our personal relationships with the families.",
      unique: [
        { title: "Personal royal relationships", text: "Better rooms, upgrades and welcomes." },
        { title: "Curated palace selection", text: "We match the palace to your story." },
        { title: "Concierge throughout", text: "From arrival garlands to departure transfers." },
        { title: "Multi-palace journeys", text: "Chain together the most magical stays." },
      ],
      willExperience: [
        "Royal welcome with garlands and music",
        "Stay in heritage suites with original details",
        "Private dining in palace courtyards",
        "Curated tours of the palace history",
        "Spa, pool and royal services",
      ],
      willFeel: "Like a guest of the royal family — because you essentially are.",
      perfectMoments: ["Tea on a private palace balcony", "Sunset on Lake Pichola from your terrace", "Candle-lit dinner in a royal courtyard"],
      flow: ["Curated palace selection", "Royal welcome on arrival", "In-palace experiences", "Concierge throughout", "Multi-palace continuation"],
      idealFor: ["Honeymooners", "Anniversary couples", "Luxury travellers", "Special occasions"],
      whyLove: "Because the architecture, history and service combine into something Europe simply can't match.",
      planExperience: ["1 to multiple nights per palace", "Multi-palace journeys", "Special occasions arranged", "Best: October to March"],
    }),

  "royal-dining-experience": story(
    "Culinary / Royal", "Private",
    [rajasthaniFood, royalTour, cityPalace, hawaMahal],
    {
      subtitle: "A 7-course royal feast in a candle-lit haveli.",
      overview:
        "Step into a candle-lit haveli courtyard for a private royal dining experience. A Rajasthani master chef serves you a slow 7-course traditional thali — laal maas, gatte ki sabzi, ker-sangri, baati, churma — paired with classical sitar or sarangi music. Royal service in silver thalis, dressed in traditional Rajasthani turban for the gentlemen.",
      unique: [
        { title: "Private heritage venue", text: "Candle-lit havelis or palace courtyards." },
        { title: "Master chef menu", text: "7-course slow-cooked Rajasthani thali." },
        { title: "Live classical music", text: "Sitar, sarangi or vocal accompaniment." },
        { title: "Royal welcome", text: "Garlanding, turban-tying and aarti." },
      ],
      willExperience: [
        "Welcome with traditional turban, tilak and garlands",
        "Aperitif on the haveli terrace",
        "7-course royal Rajasthani thali",
        "Live classical music throughout",
        "Storytelling about each dish",
        "Sweet and digestif finale",
      ],
      willFeel: "Pampered and transported — every sense looked after by old-world service.",
      perfectMoments: ["Candle-lit silver thali arrival", "Safa being tied to live sarangi", "Ghevar served warm under the stars"],
      flow: ["Hotel pickup", "Welcome rituals", "7-course dinner with music", "Storytelling", "Return transfer"],
      idealFor: ["Couples", "Anniversary celebrations", "Foodies", "Luxury travellers"],
      whyLove: "Because nothing compares to royal hospitality done with absolute heart.",
      planExperience: ["Veg or non-veg menu", "Private musicians on request", "Multi-city availability", "All year"],
    }),

  "vintage-car-ride-udaipur": story(
    "Heritage / Luxury", "Private chauffeur",
    [luxuryCar, udaipurLake, royalTour, cityPalace],
    {
      subtitle: "Cruise the City of Lakes in royal style.",
      overview:
        "Tour the City of Lakes the way the Maharanas of Mewar did — in a meticulously restored vintage Rolls Royce, Cadillac or Mercedes from the royal Udaipur garage. Drive past Lake Pichola, City Palace and Sajjangarh, with a chauffeur in royal livery. Ideal for couples, weddings, anniversaries and once-in-a-lifetime moments.",
      unique: [
        { title: "Authentic royal vintage cars", text: "From the Mewar royal collection." },
        { title: "Liveried chauffeur", text: "Traditional uniform and white gloves." },
        { title: "Iconic Udaipur route", text: "Lakes, palaces and viewpoints." },
        { title: "Photo stops included", text: "Stunning frames at every turn." },
      ],
      willExperience: [
        "Vehicle reveal at the royal garage",
        "Drive past City Palace and Lake Pichola",
        "Stop at Sajjangarh / Monsoon Palace viewpoint",
        "Photo session in the heritage car",
        "Optional sundowner stop",
      ],
      willFeel: "Effortlessly glamorous — a black-and-white movie made just for you.",
      perfectMoments: ["Pulling up to the City Palace gate in a Rolls Royce", "Lake Pichola sparkling beside the car", "Sunset glow on chrome and leather"],
      flow: ["Pickup at the royal garage", "City Palace and lake circuit", "Photo stops", "Sundowner option", "Return"],
      idealFor: ["Couples & honeymooners", "Anniversaries & proposals", "Weddings & pre-wedding shoots", "Luxury travellers"],
      whyLove: "Because Udaipur from the back seat of a vintage Rolls is the definition of romance.",
      planExperience: ["1–4 hour bookings", "Combine with palace dinner", "Pre-wedding shoot friendly", "All year"],
    }),

  "fort-storytelling-tours": story(
    "Heritage / Cultural", "Private storyteller",
    [amberFort, jaigarh, nahargarh, jaisalmerFort, cityPalace],
    {
      subtitle: "Walk the forts with a real storyteller — not an audio guide.",
      overview:
        "Skip the rushed crowds and discover Rajasthan's forts the way they should be — through the legends, battles and royal romances that built them. Our expert storyteller-historians walk you through Amber, Mehrangarh, Chittorgarh and Kumbhalgarh, bringing every wall and window alive with tales of kings, queens, ghosts and gold.",
      unique: [
        { title: "Heritage storyteller guides", text: "Historians who narrate, not just inform." },
        { title: "Skip-the-line entry", text: "We handle all access." },
        { title: "Hidden corners revealed", text: "Mirror palaces, secret passages and royal balconies." },
        { title: "Custom-paced", text: "We adapt to your interest and energy." },
      ],
      willExperience: [
        "Pickup and skip-the-line entry",
        "Walking tour with storyteller-historian",
        "Hidden chambers and viewpoints",
        "Photo stops at iconic frames",
        "Tea/snack break with stories",
      ],
      willFeel: "Time-traveled — like the fort's queens and warriors are walking beside you.",
      perfectMoments: ["Mirror palace lit by a single candle", "Sunset from a fort rampart", "A 700-year-old story told inside its setting"],
      flow: ["Hotel pickup", "Skip-the-line entry", "Storytelling walk", "Photo stops", "Return"],
      idealFor: ["History lovers", "Families with curious kids", "First-time visitors", "Photographers"],
      whyLove: "Because the same fort feels twice as alive when narrated by someone who loves it.",
      planExperience: ["2–3 hours per fort", "Multi-fort packages", "Custom interest themes", "Best: October to March"],
    }),

  // ---------- FOOD & CULTURAL ----------
  "rajasthani-cooking-class": story(
    "Culinary / Hands-on", "Small group or private",
    [rajasthaniFood, localMarket, villageTour, royalTour],
    {
      subtitle: "Cook a traditional feast in a real Jaipur home.",
      overview:
        "Step into a real Jaipur home and learn to cook 5–6 authentic Rajasthani dishes from the matriarch — dal baati churma, gatte ki sabzi, ker-sangri, pyaaz kachori and masala chai. You'll start at the local spice market, return to grind, knead, fry and finally enjoy your own feast over warm stories and chai. A favourite for foodies and culture lovers.",
      unique: [
        { title: "Cook in a real family home", text: "Not a hotel kitchen — a real Jaipur household." },
        { title: "Spice market visit included", text: "Source your ingredients like a local." },
        { title: "5–6 traditional dishes", text: "Plus chai, raita, papad and chutneys." },
        { title: "Recipes to take home", text: "Cook Rajasthan from your own kitchen." },
      ],
      willExperience: [
        "Spice market tour and shopping",
        "Welcome chai with the family",
        "Hands-on cooking of 5–6 dishes",
        "Cultural conversation with the matriarch",
        "Eat your feast together",
        "Take home printed recipes",
      ],
      willFeel: "Welcomed, nourished and surprisingly proud of what you've cooked.",
      perfectMoments: ["Kneading dough beside grandma", "Spices being hand-ground in a stone grinder", "Sitting down to eat your own feast"],
      flow: ["Hotel pickup", "Spice market visit", "Cook with the family", "Eat together", "Return with recipes"],
      idealFor: ["Foodies", "Couples", "Families", "Solo cultural travellers"],
      whyLove: "Because it's the most intimate, delicious window into real Rajasthani life.",
      planExperience: ["Vegetarian focus", "Non-veg available on request", "4–5 hour duration", "All year"],
    }),

  "street-food-tour-jaipur": story(
    "Culinary / Walking", "Small group",
    [localMarket, rajasthaniFood, hawaMahal, jalMahal],
    {
      subtitle: "Eat your way through Pink City after dark.",
      overview:
        "Walk the bustling lanes of Jaipur's old city and discover 8–10 legendary street food stops most tourists miss — from 100-year-old kachori shops to secret lassi makers, sizzling pakora carts and the city's best mawa kachori. Hygienic, expert-curated and unforgettable. We taste, talk and laugh our way through old Jaipur after dark.",
      unique: [
        { title: "8–10 legendary food stops", text: "Hand-picked across the old city." },
        { title: "Hygiene-vetted vendors", text: "Safe, tasty and unforgettable." },
        { title: "Local foodie guide", text: "Stories and history behind every bite." },
        { title: "Veg & non-veg options", text: "Customised to your taste." },
      ],
      willExperience: [
        "Meet your guide in the old city",
        "Walk the lit-up Pink City lanes",
        "Taste 8–10 famous street foods",
        "Lassi at a 100-year-old shop",
        "Sweet finale at a legendary sweet shop",
      ],
      willFeel: "Stuffed, smiling and instantly in love with Jaipur.",
      perfectMoments: ["Sizzling kachoris fresh out of oil", "Cold lassi in a clay clay cup", "Pink City lanes lit at night"],
      flow: ["Meet at old city", "Walking food tour", "8–10 stops", "Sweet finale", "Drop-off"],
      idealFor: ["Foodies", "Couples", "Solo travellers", "Friends"],
      whyLove: "Because street food in Jaipur is a love language — and you're about to learn it.",
      planExperience: ["Evening or morning slots", "3-hour walks", "Combine with cooking class", "All year"],
    }),

  "traditional-rajasthani-thali": story(
    "Culinary", "Family-friendly",
    [rajasthaniFood, royalTour, villageTour, cityPalace],
    {
      subtitle: "An unlimited royal thali — Rajasthan in every bite.",
      overview:
        "Sit cross-legged in a heritage setting and tuck into a never-ending royal Rajasthani thali — dal baati churma, gatte ki sabzi, ker-sangri, bajre ki roti, kadhi, missi roti, papad, chutneys, ghevar, malpua and more. Served in traditional silver thalis with folk music in the background. Pure Rajasthan in every bite.",
      unique: [
        { title: "Unlimited authentic thali", text: "Eat as much as you can manage." },
        { title: "Heritage venue", text: "Beautiful ambience, royal touches." },
        { title: "Live folk music", text: "Soft accompaniment to your meal." },
        { title: "Veg or non-veg options", text: "All preferences welcomed." },
      ],
      willExperience: ["Welcome and seating", "Silver thali setup", "Multi-course traditional meal", "Live folk music", "Sweet finale"],
      willFeel: "Wonderfully full and immersed in heritage.",
      perfectMoments: ["Silver thali arriving with 12 dishes", "Ghevar served warm", "Folk musician's smile mid-song"],
      flow: ["Hotel pickup", "Heritage venue dinner", "Live music", "Return"],
      idealFor: ["Families", "Couples", "Cultural travellers", "First-time India visitors"],
      whyLove: "Because one thali tells you everything about Rajasthani hospitality.",
      planExperience: ["1.5–2 hour meals", "Lunch or dinner", "Multi-city availability", "All year"],
    }),

  "village-lunch-rajasthan": story(
    "Cultural / Culinary", "Small group",
    [villageTour, rajasthaniFood, royalTour, ranthamboreTiger],
    {
      subtitle: "Lunch on a charpai in a real Rajasthani village.",
      overview:
        "Drive into a tranquil Bishnoi or Bhil village outside Jodhpur or Udaipur, where a local family welcomes you with chai, sacred herbal welcome ritual (optional) and a freshly cooked lunch on charpais under a neem tree. Learn how village life truly works — from churning butter to weaving — between bites. Slow, authentic and deeply human.",
      unique: [
        { title: "Real village family hosts", text: "Genuine welcome, no staged performances." },
        { title: "Freshly cooked traditional meal", text: "From the family's own kitchen and farm." },
        { title: "Cultural exchange", text: "Weaving, butter-churning and stories." },
        { title: "Optional sacred herbal welcome ritual", text: "Sacred Bishnoi welcome ritual (alcohol-free)." },
      ],
      willExperience: ["Welcome with chai and milk", "Village walk and craft demos", "Freshly cooked lunch on charpais", "Cultural exchange", "Photo opportunities"],
      willFeel: "Humbled, grateful and completely outside the tourist bubble.",
      perfectMoments: ["Charpai lunch under a neem tree", "Grandmother churning butter", "Children waving as you leave"],
      flow: ["Hotel pickup", "Drive to village (1 hr)", "Welcome and walk", "Lunch with family", "Return"],
      idealFor: ["Cultural travellers", "Families", "Slow-travel lovers", "First-time visitors"],
      whyLove: "Because nothing else makes you understand rural Rajasthan this deeply, this fast.",
      planExperience: ["Half-day duration", "Bishnoi or Bhil village option", "Photography welcome", "Best: October to March"],
    }),

  "spice-market-tour-jaipur": story(
    "Culinary / Cultural", "Private or small group",
    [localMarket, rajasthaniFood, hawaMahal, royalTour],
    {
      subtitle: "Smell, touch and taste your way through Pink City.",
      overview:
        "Johari Bazaar, Bapu Bazaar and the wholesale spice mandis of Jaipur burst with colour and aroma. With a local food expert, you'll learn to tell the real saffron from the fake, smell rare Rajasthani spices like kachri and ker, and watch turmeric and chilli being hand-ground. Take home a curated spice kit at the end.",
      unique: [
        { title: "Wholesale spice market access", text: "Beyond the tourist bazaars." },
        { title: "Spice identification & buying tips", text: "Real vs fake saffron, true vs blended masalas." },
        { title: "Curated spice kit", text: "Take home your own Rajasthani pantry." },
        { title: "Food storytelling", text: "Why every spice matters in Rajasthani cuisine." },
      ],
      willExperience: ["Old city pickup", "Walk through wholesale spice mandis", "Spice identification and sampling", "Hand-grinding demonstration", "Curated take-home spice kit"],
      willFeel: "Sensorially overloaded — in the best, most aromatic way.",
      perfectMoments: ["Mountains of red chilli powder being weighed", "First sniff of pure saffron", "Turmeric being hand-ground"],
      flow: ["Pickup at old city", "Spice market walk", "Identification and stories", "Take-home kit", "Drop-off"],
      idealFor: ["Foodies", "Home cooks", "Cultural travellers", "Photographers"],
      whyLove: "Because spices are the soul of Rajasthani cooking — and now they're in your kitchen too.",
      planExperience: ["2–3 hour walks", "Combine with cooking class", "Take-home kit included", "All year"],
    }),
};
