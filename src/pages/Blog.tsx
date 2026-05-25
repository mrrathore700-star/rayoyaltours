import { useMemo, useState } from "react";
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

type Post = {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  readTime: string;
};

const posts: Post[] = [
  { image: hawaMahal, title: "The Best Places to Visit in Jaipur", excerpt: "The fifteen attractions that define the Pink City — from grand forts to hidden bazaars and quiet courtyards.", date: "March 5, 2026", slug: "best-places-jaipur", category: "Heritage", readTime: "8 min read" },
  { image: goldenTriangle, title: "The Ultimate Rajasthan Travel Guide", excerpt: "Best time to visit, what to pack, cultural etiquette, and the unspoken rituals of slow Rajasthan travel.", date: "February 20, 2026", slug: "rajasthan-travel-guide", category: "Luxury Travel", readTime: "12 min read" },
  { image: desertSafari, title: "Golden Triangle Itinerary: Delhi · Agra · Jaipur", excerpt: "A five-day private itinerary covering India's most iconic cities — with insider notes from local specialists.", date: "February 10, 2026", slug: "golden-triangle-itinerary", category: "Heritage", readTime: "10 min read" },
  { image: royalTour, title: "The Finest Heritage Hotels in Rajasthan", excerpt: "Stay like royalty in converted palaces and forts — our curated edit of Rajasthan's most evocative hotels.", date: "January 28, 2026", slug: "heritage-hotels-rajasthan", category: "Luxury Travel", readTime: "7 min read" },
  { image: desertSafari, title: "Best Time to Visit Rajasthan", excerpt: "A month-by-month guide from Jaipur specialists — covering weather, festivals, crowds and insider tips for every season.", date: "April 15, 2026", slug: "best-time-visit-rajasthan", category: "Luxury Travel", readTime: "9 min read" },
  { image: jaisalmerFort, title: "Camel Safari Jaisalmer — The Complete Guide", excerpt: "Everything you need to know about a camel safari in Jaisalmer — where to go, what to expect, how long, and how to avoid the tourist traps.", date: "April 20, 2026", slug: "camel-safari-jaisalmer-guide", category: "Desert", readTime: "8 min read" },
  { image: ranthamboreTiger, title: "Ranthambore Tiger Safari — Everything You Need to Know", excerpt: "Best zones, best months, jeep vs canter, permit booking — the complete planning guide for Ranthambore from local specialists.", date: "April 25, 2026", slug: "ranthambore-tiger-safari-guide", category: "Wildlife", readTime: "9 min read" },
  { image: udaipurLake, title: "Udaipur Travel Guide — The City of Lakes", excerpt: "What to see, where to stay, what to eat, and how to experience Udaipur beyond the standard tourist trail.", date: "May 1, 2026", slug: "udaipur-lake-city-guide", category: "Heritage", readTime: "11 min read" },
];

const filters = ["All", "Luxury Travel", "Heritage", "Wildlife", "Desert", "Food & Culture", "Spiritual", "Photography"];

const Blog = () => {
  const [active, setActive] = useState("All");
  const featured = posts[0];
  const restAll = posts.slice(1);
  const filtered = useMemo(
    () => (active === "All" ? restAll : restAll.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="lux-cream-bg">
      <SEO
        title="Travel Journal | Stories & Guides from Rajasthan"
        description="Curated travel stories, palace stays, wildlife journeys and cultural discoveries across Rajasthan — written by local specialists at Heritage Jaipur Travels."
        path="/blog"
      />

      <LuxHero
        image={hawaMahal}
        eyebrow="Luxury Rajasthan Travel Journal"
        title={<>Stories, Guides &amp; Experiences From <span className="text-[#C9A84C]">Rajasthan</span></>}
        subtitle="Explore curated travel stories, hidden experiences, palace stays, wildlife journeys, and cultural discoveries across Rajasthan."
      />

      {/* Featured Article */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 justify-center mb-12">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Featured Story</span>
            <span className="lux-rule-gold" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative overflow-hidden aspect-[4/5] rounded-sm group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover lux-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute top-6 left-6 lux-glass px-4 py-1.5 rounded-full">
                <span className="lux-eyebrow text-[10px]">{featured.category}</span>
              </span>
            </div>
            <div>
              <time className="lux-eyebrow text-[10px]">{featured.date} · {featured.readTime}</time>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#0F0F0F] mt-4 mb-6 leading-[1.1] tracking-tight">
                {featured.title}
              </h2>
              <p className="font-serif italic text-lg md:text-xl text-[#0F0F0F]/70 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <p className="text-xs tracking-[0.22em] uppercase text-[#0F0F0F]/50 mb-8">
                By Heritage Jaipur Travels
              </p>
              <span className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#C9A84C] cursor-pointer hover:gap-4 transition-all">
                Read the Story →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Strip */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">The Journal</span>
            <span className="lux-rule-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-5 py-2.5 rounded-full font-display tracking-[0.18em] uppercase text-[11px] transition-all duration-300 ${
                    isActive ? "lux-btn-gold" : "lux-btn-outline"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journal Grid */}
      <section className="pb-24 md:pb-32 pt-8">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <p className="text-center font-serif italic text-lg text-[#0F0F0F]/60 py-16">
              No stories in this category yet — new journal entries arrive each month.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {filtered.map((post) => (
                <article key={post.slug} className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 lux-glass px-3.5 py-1 rounded-full">
                      <span className="lux-eyebrow text-[9px]">{post.category}</span>
                    </span>
                  </div>
                  <time className="lux-eyebrow text-[10px]">{post.date} · {post.readTime}</time>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0F0F0F] mt-3 mb-3 leading-tight group-hover:text-[#6E0F1F] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-serif text-[17px] text-[#0F0F0F]/70 leading-relaxed mb-3">{post.excerpt}</p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#0F0F0F]/45 mb-4">
                    By Heritage Jaipur Travels
                  </p>
                  <span className="text-xs tracking-[0.22em] uppercase text-[#C9A84C]">Read the Story →</span>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <LuxCtaBand
        image={royalTour}
        eyebrow="Begin Your Story"
        title={<>Begin Your Rajasthan <span className="text-[#C9A84C]">Story</span></>}
        subtitle="Let our Jaipur-based specialists craft a private journey shaped entirely around you."
        primary={{ label: "Plan My Rajasthan Journey", to: "/contact" }}
        secondary={{ label: "Speak With A Specialist", href: "https://wa.me/919461069858", external: true }}
      />
    </main>
  );
};

export default Blog;
