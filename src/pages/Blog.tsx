import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import royalTour from "@/assets/royal-tour.jpg";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import LuxTrustStrip from "@/components/luxury/LuxTrustStrip";
import { blogPosts } from "@/data/blogPosts";

const filters = [
  "All",
  "Luxury Rajasthan",
  "Jaipur Travel",
  "Itineraries",
  "Palace Stays",
  "Wildlife & Safari",
  "Desert",
  "Food & Culture",
  "Spiritual",
  "Photography",
  "Hidden Rajasthan",
];

const SITE_URL = "https://www.heritagejaipurtravels.com";

const Blog = () => {
  const [active, setActive] = useState("All");
  const featured = blogPosts[0];
  const restAll = blogPosts.slice(1);
  const filtered = useMemo(
    () => (active === "All" ? restAll : restAll.filter((p) => p.category === active)),
    [active]
  );

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Luxury Rajasthan Travel Journal",
    description:
      "Curated travel stories, palace stays, wildlife journeys and cultural discoveries across Rajasthan — written by Jaipur-based luxury travel specialists.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "TravelAgency",
      name: "Heritage Jaipur Travels",
      url: SITE_URL,
    },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDescription,
      url: `${SITE_URL}/blog/${p.slug}`,
      image: `${SITE_URL}${p.image}`,
      datePublished: p.date,
      articleSection: p.category,
      author: { "@type": "Organization", name: "Heritage Jaipur Travels" },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Travel Journal", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <main className="lux-cream-bg">
      <SEO
        title="Luxury Rajasthan Travel Journal | Stories & Guides — Heritage Jaipur Travels"
        description="Luxury Rajasthan travel inspiration — palace stays, Jaipur travel guides, tiger safaris, desert journeys, hidden experiences and itineraries from Jaipur-based specialists with 20+ years of expertise."
        path="/blog"
        image={hawaMahal}
        jsonLd={[blogSchema, breadcrumbSchema]}
      />

      <LuxHero
        image={hawaMahal}
        eyebrow="Luxury Rajasthan Travel Journal"
        title={<>Stories, Guides &amp; Experiences From <span className="text-[#C9A84C]">Rajasthan</span></>}
        subtitle="Luxury travel inspiration, hidden experiences, palace stays, cultural journeys, wildlife adventures and immersive Rajasthan stories for international travellers."
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
            <Link to={`/blog/${featured.slug}`} className="relative overflow-hidden aspect-[4/5] rounded-sm group block">
              <img
                src={featured.image}
                alt={featured.imageAlt || featured.title}
                className="w-full h-full object-cover lux-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute top-6 left-6 lux-glass px-4 py-1.5 rounded-full">
                <span className="lux-eyebrow text-[10px]">{featured.category}</span>
              </span>
            </Link>
            <div>
              <time className="lux-eyebrow text-[10px]">{featured.date} · {featured.readTime}</time>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#0F0F0F] mt-4 mb-6 leading-[1.1] tracking-tight">
                <Link to={`/blog/${featured.slug}`} className="hover:text-[#6E0F1F] transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="font-serif italic text-lg md:text-xl text-[#0F0F0F]/70 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <p className="text-xs tracking-[0.22em] uppercase text-[#0F0F0F]/50 mb-8">
                By Heritage Jaipur Travels
              </p>
              <Link
                to={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#C9A84C] hover:gap-4 transition-all"
              >
                Read the Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LuxTrustStrip />

      {/* Filter Strip */}
      <section className="pt-20 pb-12">
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
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                  <article>
                    <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-6">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
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
                </Link>
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
        secondary={{ label: "WhatsApp A Specialist", href: "https://wa.me/919461069858", external: true }}
      />
    </main>
  );
};

export default Blog;
