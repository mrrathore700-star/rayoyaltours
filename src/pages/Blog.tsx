import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import hawaMahal from "@/assets/hawa-mahal.jpg";
import goldenTriangle from "@/assets/golden-triangle.jpg";
import desertSafari from "@/assets/desert-safari.jpg";
import royalTour from "@/assets/royal-tour.jpg";

const posts = [
  { image: hawaMahal, title: "Best Places to Visit in Jaipur", excerpt: "Discover the top 15 must-visit attractions in the Pink City — from grand forts to hidden bazaars and local food spots.", date: "March 5, 2026", slug: "best-places-jaipur" },
  { image: goldenTriangle, title: "Ultimate Rajasthan Travel Guide", excerpt: "Everything you need to know before visiting Rajasthan — best time to visit, what to pack, cultural tips, and more.", date: "February 20, 2026", slug: "rajasthan-travel-guide" },
  { image: desertSafari, title: "Golden Triangle Itinerary: Delhi-Agra-Jaipur", excerpt: "The perfect 5-day itinerary covering India's most iconic destinations with insider tips from local experts.", date: "February 10, 2026", slug: "golden-triangle-itinerary" },
  { image: royalTour, title: "Top Heritage Hotels in Rajasthan", excerpt: "Stay like royalty in converted palaces and forts. Our curated list of the finest heritage hotels across Rajasthan.", date: "January 28, 2026", slug: "heritage-hotels-rajasthan" },
];

const Blog = () => (
  <main className="pt-24 pb-20">
    <section className="container mx-auto px-4">
      <SectionHeading
        title="Travel Blog"
        subtitle="Expert tips, travel guides, and inspiration for your Rajasthan adventure"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {posts.map((post, i) => (
          <article key={i} className="heritage-card group">
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="text-sm font-semibold text-primary">Read More →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default Blog;
