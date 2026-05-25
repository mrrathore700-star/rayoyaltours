import SEO from "@/components/SEO";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import goldenTriangle from "@/assets/golden-triangle.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import jaisalmerFort from "@/assets/jaisalmer-fort.jpg";
import ranthamboreTiger from "@/assets/ranthambore-tiger.jpg";
import udaipurLake from "@/assets/udaipur-lake.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";

const posts = [
  { image: hawaMahal, title: "The Best Places to Visit in Jaipur", excerpt: "The fifteen attractions that define the Pink City — from grand forts to hidden bazaars and quiet courtyards.", date: "March 5, 2026", slug: "best-places-jaipur" },
  { image: goldenTriangle, title: "The Ultimate Rajasthan Travel Guide", excerpt: "Best time to visit, what to pack, cultural etiquette, and the unspoken rituals of slow Rajasthan travel.", date: "February 20, 2026", slug: "rajasthan-travel-guide" },
  { image: desertSafari, title: "Golden Triangle Itinerary: Delhi · Agra · Jaipur", excerpt: "A five-day private itinerary covering India's most iconic cities — with insider notes from local specialists.", date: "February 10, 2026", slug: "golden-triangle-itinerary" },
  { image: royalTour, title: "The Finest Heritage Hotels in Rajasthan", excerpt: "Stay like royalty in converted palaces and forts — our curated edit of Rajasthan's most evocative hotels.", date: "January 28, 2026", slug: "heritage-hotels-rajasthan" },
  { image: desertSafari, title: "Best Time to Visit Rajasthan", excerpt: "A month-by-month guide from Jaipur specialists — covering weather, festivals, crowds and insider tips for every season.", date: "April 15, 2026", slug: "best-time-visit-rajasthan" },
  { image: jaisalmerFort, title: "Camel Safari Jaisalmer — The Complete Guide", excerpt: "Everything you need to know about a camel safari in Jaisalmer — where to go, what to expect, how long, and how to avoid the tourist traps.", date: "April 20, 2026", slug: "camel-safari-jaisalmer-guide" },
  { image: ranthamboreTiger, title: "Ranthambore Tiger Safari — Everything You Need to Know", excerpt: "Best zones, best months, jeep vs canter, permit booking — the complete planning guide for Ranthambore from local specialists.", date: "April 25, 2026", slug: "ranthambore-tiger-safari-guide" },
  { image: udaipurLake, title: "Udaipur Travel Guide — The City of Lakes", excerpt: "What to see, where to stay, what to eat, and how to experience Udaipur beyond the standard tourist trail.", date: "May 1, 2026", slug: "udaipur-lake-city-guide" },
];

const Blog = () => (
  <main className="lux-cream-bg">
    <SEO
      title="Rajasthan Travel Journal | Tips, Guides & Itineraries"
      description="Editorial guides, tips and itineraries for Jaipur, Rajasthan and the Golden Triangle — written by local specialists at Heritage Jaipur Travels."
      path="/blog"
    />

    <LuxHero
      image={hawaMahal}
      eyebrow="The Journal"
      title={<>Notes From <span className="text-[#C9A84C]">Rajasthan</span></>}
      subtitle="Editorial guides, itineraries and quiet observations — written by those who call Rajasthan home."
    />

    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <time className="lux-eyebrow text-[10px]">{post.date}</time>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0F0F0F] mt-3 mb-3 leading-tight group-hover:text-[#6E0F1F] transition-colors">
                {post.title}
              </h3>
              <p className="font-serif text-[17px] text-[#0F0F0F]/70 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs tracking-[0.22em] uppercase text-[#C9A84C]">Read the Story →</span>
            </article>
          ))}
        </div>
      </div>
    </section>

    <LuxCtaBand
      image={royalTour}
      eyebrow="Travel With Us"
      title={<>Turn the Page into a <span className="text-[#C9A84C]">Journey</span></>}
      primary={{ label: "Plan My Journey", to: "/contact" }}
      secondary={{ label: "WhatsApp Specialist", href: "https://wa.me/919461069858", external: true }}
    />
  </main>
);

export default Blog;
