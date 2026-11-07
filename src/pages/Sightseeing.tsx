import { Link } from "react-router-dom";
import { ArrowRight, Clock3, MapPin, TicketCheck } from "lucide-react";
import SEO from "@/components/SEO";
import amberFort from "@/assets/amber-fort.jpg";
import cityPalace from "@/assets/city-palace.jpg";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import jantarMantar from "@/assets/jantar-mantar.jpg";
import jalMahal from "@/assets/jal-mahal.jpg";
import nahargarhFort from "@/assets/nahargarh-fort.jpg";
import jaigarhFort from "@/assets/jaigarh-fort.jpg";
import pannaMeenaKund from "@/assets/panna-meena-kund.jpg";
import albertHall from "@/assets/albert-hall.jpg";
import localMarket from "@/assets/local-market.jpg";
import patrikaGate from "@/assets/patrika-gate-jaipur.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxAnchorBtn, LuxLinkBtn } from "@/components/luxury/LuxButton";
import SmartImage from "@/components/media/SmartImage";
import SightseeingEnquiryForm from "@/components/luxury/SightseeingEnquiryForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "919887688843";
const pageTitle = "Jaipur Sightseeing Guide | Top Monuments & Private Tours";
const pageDescription = "Explore Jaipur's famous forts, palaces and monuments with our detailed sightseeing guide. Book a private Jaipur tour by car with Heritage Jaipur Travels.";

interface Attraction {
  image: string;
  title: string;
  location: string;
  duration: string;
  overview: string;
  highlights: string;
  bestTime?: string;
  access?: string;
  officialLink?: { label: string; href: string };
  planning: string;
  visitorNote: string;
  illustrativeImage?: boolean;
}

const attractions: Attraction[] = [
  {
    image: amberFort,
    title: "Amber Fort",
    location: "Amer, north of Jaipur",
    duration: "Allow 2–3 hours",
    overview: "Set above Maota Lake, Amber Fort is a hilltop palace complex of courtyards, gateways and richly decorated rooms. The fort grew under Raja Man Singh I and later Kachwaha rulers, combining Rajput forms with Mughal-influenced details.",
    highlights: "Look for Ganesh Pol, Diwan-e-Aam, Diwan-e-Khas, mirrored decoration in Sheesh Mahal, the palace courtyards and views toward Maota Lake. Each space gives a different sense of how the palace handled public, ceremonial and private life.",
    bestTime: "Arrive earlier in the day for cooler walking and softer light around Maota Lake. The fort is outdoors and can feel hot in warmer months.",
    access: "Expect slopes, steps and uneven historic surfaces. Families with small children and visitors with limited mobility should confirm the route and available assistance; step-free access is not assumed.",
    officialLink: { label: "Rajasthan monument ticket portal", href: "https://obms-tourist.rajasthan.gov.in/place-details/Amber-Fort" },
    planning: "Begin earlier in the day if Amber is a priority, then pair it with nearby Panna Meena ka Kund and Jaigarh Fort if time and mobility allow.",
    visitorNote: "Fort entry, opening hours, ticket categories and camera rules can change. Check the official ticketing source before setting out; a vehicle or guide does not automatically include monument admission.",
  },
  {
    image: jaigarhFort,
    title: "Jaigarh Fort",
    location: "The ridge above Amber Fort",
    duration: "Allow 1½–2 hours",
    overview: "Jaigarh is a fortified hilltop complex associated with the defence of the Amber region. Its strong walls, gateways and elevated position explain its strategic role as well as its connection to the palace below.",
    highlights: "Explore the fort walls, watchtowers, water-storage features and museum displays. The Jaivana cannon is a major landmark within the complex; it is best understood as a historic artillery piece rather than a record-breaking claim without context.",
    bestTime: "Morning is usually more comfortable for walking the exposed ramparts; visibility and photography depend on weather and haze.",
    access: "The hilltop fort includes uneven historic routes and open ramparts. Keep children close near walls and confirm accessibility needs before booking a visit.",
    officialLink: { label: "Jaigarh visitor information", href: "https://www.jaigarh.co/visit" },
    planning: "Its uphill setting makes this a natural extension of an Amber Fort day. Allow time for the terrain, weather and the drive between sites, and check what areas are open before visiting.",
    visitorNote: "The visitor page lists daily hours and ticket information. Hours, last entry, rates and concessions may change, so confirm them before travel.",
  },
  {
    image: nahargarhFort,
    title: "Nahargarh Fort",
    location: "Aravalli hills overlooking Jaipur",
    duration: "Allow 1½–2 hours",
    overview: "Built during the reign of Sawai Jai Singh II, Nahargarh formed part of the defensive landscape around Jaipur. The fort looks over the city from the Aravalli ridge and offers a striking contrast between its quiet historic courtyards and the urban view below.",
    highlights: "Madhavendra Bhawan is known for its connected palace suites and painted interiors. Ramparts and viewpoints open out over Jaipur; visibility depends on weather, haze and the time of day.",
    bestTime: "Late afternoon offers softer light and a chance to see the city as it changes toward evening. The view is weather-dependent.",
    access: "Expect an uphill road and walking on uneven fort surfaces. Rajasthan Tourism notes that public transport is not available to the fort; arrange a return vehicle, and check family or mobility needs before visiting.",
    officialLink: { label: "Rajasthan Tourism fort guide", href: "https://www.tourism.rajasthan.gov.in/nahargarh-fort.html" },
    planning: "Many visitors make this a separate afternoon or sunset-facing drive. Arrange a return vehicle in advance and allow extra time on the hill road.",
    visitorNote: "Check current fort hours, entry arrangements and road conditions before leaving. Sunset views are weather-dependent, and the drive back can take longer in busy periods.",
  },
  {
    image: jalMahal,
    title: "Jal Mahal",
    location: "Man Sagar Lake, on the Amber route",
    duration: "Allow 15–30 minutes for a viewpoint stop",
    overview: "Jal Mahal, or the Water Palace, sits in Man Sagar Lake against the Aravalli hills. From the public lakeside promenade, visitors can appreciate its pale façade and the changing reflections across the water.",
    highlights: "The palace is often described as having five levels; when lake water is high, the lower storeys may be submerged. The best-known experience for visitors is the exterior view from shore, not palace entry.",
    bestTime: "Soft morning or late-afternoon light can flatter the water and façade; reflections vary with weather and lake conditions.",
    access: "The public viewpoint is a short outdoor stop. Surfaces and crowds can vary; keep children with an adult near the lakeside and follow posted directions.",
    planning: "It fits naturally as a brief pause while travelling between central Jaipur and Amber. Keep to public viewpoints and follow posted directions around the promenade.",
    visitorNote: "Do not assume interior palace access, boat access or unrestricted lakeside access. Current access rules and any restrictions should be checked locally; this guide describes the public-facing photo stop only.",
  },
  {
    image: hawaMahal,
    title: "Hawa Mahal",
    location: "Badi Chaupar, Jaipur old city",
    duration: "Allow 45–90 minutes inside; add time for exterior photos",
    overview: "Commissioned by Maharaja Sawai Pratap Singh and designed by Lal Chand Ustad, Hawa Mahal was completed in 1799. Its distinctive five-storey façade is pierced by many small windows, creating a screened edge to the historic city streets.",
    bestTime: "The façade is often photographed in morning light from across the road. Plan the interior visit during confirmed opening hours and allow extra time for old-city traffic.",
    access: "The interior has narrow passages and stairs that may be difficult for visitors with limited mobility. Families should keep children close near stairways and crowded viewpoints.",
    officialLink: { label: "Rajasthan monument ticket portal", href: "https://obms-tourist.rajasthan.gov.in/place-details/Hawa-mahal" },
    highlights: "Inside, ramps, narrow passages and small viewing openings frame the bazaar and street life below. The famous façade is also photographed from across the road, where its full profile is easier to see.",
    planning: "Visit the interior when it is open, then cross to a suitable public viewpoint for the façade. Take care around traffic and use designated crossings in the busy old city.",
    visitorNote: "The official Rajasthan booking portal lists Hawa Mahal, but hours and ticket rates can change. Verify current entry details and photography rules before visiting.",
  },
  {
    image: cityPalace,
    title: "City Palace",
    location: "The heart of Jaipur's walled city",
    duration: "Allow 2–3 hours",
    overview: "Founded as part of Sawai Jai Singh II's new capital, City Palace remains connected to Jaipur's royal family. The complex brings together courtyards, ceremonial gateways, museum spaces and continuing royal residence.",
    highlights: "Mubarak Mahal, the courtyards, Diwan-i-Khas and the decorated Peacock Gate at Pritam Niwas Chowk are among its best-known features. Museum collections include textiles, arms and objects connected with court life; access to Chandra Mahal depends on the tour selected.",
    bestTime: "A morning visit leaves room to explore the palace galleries at an unhurried pace; check the official visit page for current entry times.",
    access: "The palace is a large historic complex with walking between courtyards and galleries. Ask about current routes, seating and access support if travelling with seniors or young children.",
    officialLink: { label: "City Palace visit information", href: "https://citypalace.org/visit" },
    planning: "Choose the museum visit that matches your interests and allow time to move through the palace at an unhurried pace. Some areas and tour types have separate access arrangements.",
    visitorNote: "The official City Palace visitor page lists Museum Tour hours as 9:30 a.m.–6:30 p.m.; access to parts of Chandra Mahal is a separate Royal Tour. Confirm the latest hours, ticket categories and photography rules on the official visit page before travel.",
  },
  {
    image: jantarMantar,
    title: "Jantar Mantar",
    location: "Beside City Palace in the old city",
    duration: "Allow 60–90 minutes",
    overview: "Built by Sawai Jai Singh II, Jaipur's Jantar Mantar is an astronomical observatory and a UNESCO World Heritage Site. Its large masonry instruments were designed to observe celestial positions and measure time.",
    highlights: "The Samrat Yantra is the observatory's best-known instrument. Other structures demonstrate different ways of tracking the sun, stars and celestial positions; a guide can make their scale and purpose easier to understand.",
    bestTime: "Visit earlier in the day to explore the outdoor instruments more comfortably. A guided explanation can help make the observatory easier to follow.",
    access: "The site is largely outdoors with open paths between instruments. Expect sun exposure and some uneven ground; bring water and check route suitability for your group.",
    officialLink: { label: "Rajasthan Tourism observatory guide", href: "https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/jantar-mantar.html" },
    planning: "Pair it with City Palace for a compact old-city heritage visit. A guided explanation is especially useful if you want to understand how the instruments work rather than simply photograph them.",
    visitorNote: "Check current visiting hours, entry tickets and any conservation-related restrictions through the official Rajasthan ticketing source. Instrument access and visitor routes may be adjusted.",
  },
  {
    image: pannaMeenaKund,
    title: "Panna Meena Ka Kund",
    location: "Amer, near Amber Fort",
    duration: "Allow 20–40 minutes",
    overview: "This historic stepwell is known for its repeated stairways and geometric layout. Like stepwells across Rajasthan, it reflects the practical importance of collecting and reaching water in a dry climate, while its patterned architecture makes it visually distinctive.",
    highlights: "The opposing stair flights and strong symmetry are the main details to notice. The changing light across the steps can make a simple viewpoint photograph especially effective.",
    bestTime: "Morning light is often gentler for photographs and the open stepwell can feel cooler before midday.",
    access: "The geometry includes steep steps and edges. Do not climb or descend unless it is expressly permitted; supervise children and follow staff instructions.",
    planning: "It can be combined with Amber Fort, but access conditions may differ from the fort itself. Keep to the areas open to visitors and follow the directions of local staff.",
    visitorNote: "Do not assume that descending or climbing the steps is permitted, or that entry is free. Visitor restrictions and access arrangements can change; confirm them locally and avoid restricted areas.",
  },
  {
    image: albertHall,
    title: "Albert Hall Museum",
    location: "Ram Niwas Garden, Jaipur",
    duration: "Allow 1½–2 hours inside",
    overview: "Albert Hall, also known as the Central Museum, is a prominent Indo-Saracenic building in Ram Niwas Garden. Its galleries bring together objects and artworks from Rajasthan and beyond, making it a useful stop for visitors who want context beyond the palaces.",
    highlights: "Collections span decorative arts, paintings, sculpture, textiles and historical objects; particular displays can change. An Egyptian mummy has been among the museum's notable exhibits, but current display should be confirmed. The illuminated exterior is a separate outdoor viewing opportunity and does not mean the galleries are open.",
    bestTime: "Choose museum hours for the galleries; the façade is often photographed after dark when illumination is operating. Confirm both separately.",
    access: "Plan for walking between museum galleries and check current lift, seating and step-free arrangements with the museum if travelling with seniors or visitors with mobility needs.",
    officialLink: { label: "Rajasthan museum information", href: "https://www.jkk.artandculture.rajasthan.gov.in/content/ArtandCulture/en/ArchaeologyandMuseum/CentralMuseumAlbertHall%2cJaipur.html" },
    planning: "Visit the galleries during confirmed museum hours, or plan a separate exterior photo stop if you are only passing the gardens. Check photography rules for indoor collections.",
    visitorNote: "Museum hours, gallery availability, photography permissions and entry rates are subject to change. Confirm current details through the Rajasthan Department of Archaeology and Museums before visiting.",
  },
  {
    image: localMarket,
    title: "The Bazaars",
    location: "Jaipur's historic walled city",
    duration: "Allow 1–2 hours, or longer for shopping",
    overview: "Jaipur's bazaars are part of the city's living heritage, not a single monument. Streets around the old city are known for jewellery, textiles, footwear, crafts and everyday market activity.",
    highlights: "Johari Bazaar is associated with jewellery, while Bapu Bazaar is known for textiles, footwear and souvenirs. Browse at a relaxed pace, compare quality and ask before photographing shopkeepers or their work.",
    bestTime: "Late afternoon and early evening can suit a market stroll, but individual shops keep different hours and some close on particular days.",
    access: "Market lanes may be crowded and uneven. Families should agree on a meeting point; visitors who need step-free access should plan the walking route in advance.",
    planning: "Combine a market walk with Hawa Mahal and the nearby old-city monuments. Opening patterns vary by shop and day; leave enough time for traffic and walking between lanes.",
    visitorNote: "Shop selection and prices vary. Ask for a receipt, clarify materials and return terms before buying, and keep personal belongings secure in crowded lanes.",
  },
  {
    image: patrikaGate,
    title: "Patrika Gate",
    location: "Jawahar Circle, south Jaipur",
    duration: "Allow 20–40 minutes",
    overview: "Patrika Gate is a colourful gateway at Jawahar Circle, with painted architectural details that draw on Rajasthan's visual traditions. It offers a contemporary Jaipur photo stop rather than an ancient fort or UNESCO monument.",
    highlights: "Look closely at the painted columns, arches and decorative panels, which draw on regional art and cultural themes. The central perspective is popular for photographs; be considerate of other visitors and avoid blocking the passage.",
    bestTime: "Morning or late afternoon offers softer natural light for the painted details. Crowds and event activity can affect photography.",
    access: "This is a public-facing outdoor photo stop with open paved approaches; surfaces and crowd levels may vary. Keep the gateway clear for other visitors.",
    planning: "Its location in south Jaipur makes it easier to pair with an airport-side arrival or departure than with the Amber-area forts. Allow for the cross-city drive when placing it in a full-day route.",
    visitorNote: "Opening hours, any event-related restrictions and visitor rules were not independently confirmed for this guide. Check local notices before travel; do not assume that specific entry charges or unrestricted access apply.",
    illustrativeImage: true,
  },
];

const faqs = [
  {
    q: "What are the top places to visit in Jaipur?",
    a: "Many first-time visitors choose Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal's public viewpoint, Nahargarh Fort, Jaigarh Fort, Panna Meena ka Kund, Albert Hall Museum, Patrika Gate and the old-city bazaars. Choose according to your pace, interests and current access conditions.",
  },
  {
    q: "How many days are enough to explore Jaipur?",
    a: "Two full days give most visitors more room to see the main forts, old-city palaces and markets without rushing. With one day, focus on a smaller route; add another day for museums, workshops or a slower visit.",
  },
  {
    q: "Can I visit all major Jaipur monuments in one day?",
    a: "You can cover several major highlights in a long day by private car, but visiting every site inside at a comfortable pace is difficult. Opening times, traffic, queues and walking distances affect how much fits.",
  },
  {
    q: "What is the best time to visit Jaipur?",
    a: "Cooler months are generally more comfortable for walking between outdoor sights. Start early for hilltop forts and check the local forecast, seasonal closures and current monument hours before your visit.",
  },
  {
    q: "Can I book a private car for Jaipur sightseeing?",
    a: "Yes. Share your travel date, group size and preferred stops in the enquiry form. The team can confirm an appropriate vehicle and route for your plans.",
  },
  {
    q: "Are monument entrance tickets included in a sightseeing car booking?",
    a: "Do not assume that tickets are included. The vehicle quotation and monument admission are separate unless your written confirmation specifically says otherwise; ask the team to clarify inclusions before booking.",
  },
  {
    q: "Can I customise my Jaipur sightseeing itinerary?",
    a: "Yes. List the places you care about and any pace, mobility or shopping preferences in the enquiry. The route can be discussed around the time available and current visitor access.",
  },
  {
    q: "Can I arrange an English-speaking tour guide?",
    a: "A guide can be requested when planning. Guide availability, language and charges should be confirmed for your travel date; a driver and a licensed monument guide are not automatically the same service.",
  },
  {
    q: "Is hotel pickup and drop available?",
    a: "Pickup and drop can be requested with your hotel or meeting location. Share the address and timing so the team can confirm the arrangement in your quote.",
  },
  {
    q: "Which Jaipur monuments are best for photography?",
    a: "Hawa Mahal's façade, Amber Fort's courtyards, Jal Mahal from the public lakeside viewpoint, the painted Patrika Gate and Nahargarh's city outlook are popular subjects. Follow posted photography rules and respect other visitors.",
  },
];

const attractionsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Jaipur sightseeing places and visitor guide",
  numberOfItems: attractions.length,
  itemListElement: attractions.map((attraction, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: attraction.title,
  })),
};

const Sightseeing = () => (
  <main className="lux-cream-bg">
    <SEO
      title={pageTitle}
      description={pageDescription}
      path="/sightseeing"
      jsonLd={attractionsSchema}
    />

    <LuxHero
      image={amberFort}
      imageAlt="Amber Fort overlooking the historic Jaipur region"
      eyebrow="Jaipur Sightseeing Guide"
      title={<>Jaipur Sightseeing – Explore the Best Places to Visit in Jaipur</>}
      subtitle="Discover Jaipur’s historic forts, royal palaces and cultural attractions with a private sightseeing plan shaped around your day."
      actions={
        <>
          <LuxAnchorBtn href="#sightseeing-enquiry" variant="gold">Get Jaipur Sightseeing Quote</LuxAnchorBtn>
          <LuxAnchorBtn href={`https://wa.me/${WHATSAPP_NUMBER}`} external variant="outline">WhatsApp a Travel Specialist</LuxAnchorBtn>
        </>
      }
    />

    <section className="border-b border-border/60 py-12 md:py-16" aria-labelledby="jaipur-sightseeing-intro">
      <div className="container mx-auto max-w-5xl px-6">
        <p className="lux-eyebrow mb-3">Plan your time in the Pink City</p>
        <h2 id="jaipur-sightseeing-intro" className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
          Discover Jaipur’s Historic Forts, Royal Palaces and Cultural Attractions
        </h2>
        <p className="mt-4 max-w-4xl font-serif text-base leading-relaxed text-foreground/75 md:text-lg">
          Explore the beautiful Pink City with Heritage Jaipur Travels. This Jaipur monument guide brings together historic forts, royal palaces, traditional markets and cultural attractions to help you plan a private Jaipur city tour. Whether you are looking for Jaipur sightseeing by car, Jaipur local sightseeing or a full-day route, choose the stops that suit your interests and ask us to shape the day around them.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <Link to="/day-tours/jaipur-full-day-sightseeing" className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline">Jaipur Full Day Sightseeing Tour <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link to="/destinations/jaipur" className="inline-flex items-center gap-2 text-primary underline-offset-4 hover:underline">Jaipur destination guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20" aria-label="Jaipur sightseeing places">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="space-y-20 md:space-y-24">
          {attractions.map((attraction, index) => {
            const message = `Hello Heritage Jaipur Travels, I am interested in visiting ${attraction.title} as part of my private Jaipur sightseeing tour. Please share the details and quotation.`;
            return (
              <article key={attraction.title} className={`flex flex-col items-center gap-8 md:gap-12 ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <div className="w-full md:w-1/2">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-sm md:aspect-square">
                    <SmartImage
                      fallback={attraction.image}
                      alt={`${attraction.illustrativeImage ? "Illustrative view of " : ""}${attraction.title}${attraction.title === "Amber Fort" ? ", Jaipur" : " in Jaipur"}`}
                      width={1408}
                      height={1008}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  {attraction.illustrativeImage && <p className="mt-2 text-xs text-muted-foreground">Illustrative image</p>}
                </div>
                <div className="w-full md:w-1/2">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="lux-rule-gold" aria-hidden="true" />
                    <span className="lux-eyebrow">Stop {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mb-4 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">{attraction.title}</h2>
                  <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" />{attraction.location}</span>
                    <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />{attraction.duration}</span>
                  </div>
                  <p className="font-serif text-base leading-relaxed text-foreground/80">{attraction.overview}</p>
                  <div className="mt-5 space-y-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">What to see</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{attraction.highlights}</p>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">Plan your visit</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{attraction.planning}</p>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">Best time and access</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{attraction.bestTime} {attraction.access}</p>
                    </div>
                    <p className="flex gap-2 rounded-sm border-l-2 border-primary/60 bg-background/60 px-3 py-2 text-sm leading-relaxed text-muted-foreground">
                      <TicketCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{attraction.visitorNote}</span>
                    </p>
                    {attraction.officialLink && (
                      <a href={attraction.officialLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline">
                        Check {attraction.officialLink.label}
                      </a>
                    )}
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-3 font-display text-xs uppercase text-primary underline-offset-4 hover:underline"
                  >
                    <span className="lux-rule-gold" aria-hidden="true" /> Add To My Trip
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="border-y border-border/60 bg-background/50 py-16 md:py-20" aria-labelledby="jaipur-route-title">
      <div className="container mx-auto max-w-5xl px-6">
        <LuxSectionHeading
          eyebrow="Make the day work for you"
          title={<span id="jaipur-route-title">A practical Jaipur sightseeing route</span>}
          intro="Jaipur’s sights sit across different parts of the city. Group nearby places together, leave room for traffic and walking, and check each attraction’s current entry arrangements before you set off."
        />
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">Amber and the hill forts</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Give Amber Fort the longer visit, then consider Panna Meena ka Kund and Jaigarh Fort. Nahargarh is on a separate hill drive; add it only when time, road conditions and your pace allow.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">The old-city heritage circuit</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">City Palace, Jantar Mantar, Hawa Mahal and the bazaars are close enough to plan together, but queueing and walking can take longer than the map suggests. Add breaks and confirm museum hours.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">South Jaipur and photo stops</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Albert Hall Museum, Patrika Gate and the airport side of the city fit more naturally around a south-city route. Check museum opening details separately from outdoor photo stops.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">Tickets, guide and vehicle</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Ask what your transport quote includes. Monument admission and specialist guides should be confirmed explicitly; they are not assumed to be included in a car booking.</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <LuxLinkBtn to="/day-tours/jaipur-full-day-sightseeing" variant="gold">View the Jaipur Full Day Tour</LuxLinkBtn>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20" aria-labelledby="jaipur-faq-title">
      <div className="container mx-auto max-w-4xl px-6">
        <LuxSectionHeading
          eyebrow="Before you go"
          title={<span id="jaipur-faq-title">Jaipur sightseeing FAQs</span>}
          intro="A few practical answers to help you plan a comfortable visit to Jaipur’s monuments and markets."
        />
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`faq-${index + 1}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline md:text-lg">{q}</AccordionTrigger>
              <AccordionContent className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="border-t border-border/60 py-16 md:py-20" aria-labelledby="jaipur-sightseeing-enquiry-title">
      <div className="container mx-auto max-w-5xl px-6">
        <LuxSectionHeading
          eyebrow="Tell us what you have in mind"
          title={<span id="jaipur-sightseeing-enquiry-title">Plan Your Private Jaipur Sightseeing Tour</span>}
          intro="Share your date, group size and preferred places. The Jaipur team will use these details to follow up about your route and vehicle."
          align="left"
        />
        <div id="sightseeing-enquiry" className="scroll-mt-32">
          <SightseeingEnquiryForm />
        </div>
        <nav aria-label="Related Jaipur travel pages" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm">
          <Link className="text-primary underline-offset-4 hover:underline" to="/taxi">Jaipur sightseeing car and taxi</Link>
          <Link className="text-primary underline-offset-4 hover:underline" to="/packages/jaipur-heritage">Jaipur Heritage Tour</Link>
          <Link className="text-primary underline-offset-4 hover:underline" to="/packages/rajasthan-royal">Rajasthan Royal Heritage Tour</Link>
          <Link className="text-primary underline-offset-4 hover:underline" to="/experiences/bazaar-shopping-jaipur">Bazaar shopping with a local</Link>
          <Link className="text-primary underline-offset-4 hover:underline" to="/experiences/block-printing-jaipur">Jaipur block-printing workshop</Link>
          <Link className="text-primary underline-offset-4 hover:underline" to="/contact">Contact Heritage Jaipur Travels</Link>
        </nav>
      </div>
    </section>

    <LuxCtaBand
      image={cityPalace}
      eyebrow="Your Jaipur day, your pace"
      title={<>Plan a Private <span>Jaipur</span> Sightseeing Tour</>}
      subtitle="Choose the places you want to see and ask our local team to help with a practical route."
      primary={{ label: "Get Jaipur Sightseeing Quote", href: "#sightseeing-enquiry" }}
      secondary={{ label: "WhatsApp a Travel Specialist", href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true }}
    />
  </main>
);

export default Sightseeing;