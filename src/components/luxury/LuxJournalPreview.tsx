import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import LuxSectionHeading from "./LuxSectionHeading";
import { LuxLinkBtn } from "./LuxButton";
import { blogPosts } from "@/data/blogPosts";

const FEATURED_SLUGS = [
  "rajasthan-travel-guide",
  "best-time-visit-rajasthan",
  "golden-triangle-itinerary",
];

const LuxJournalPreview = () => {
  const posts = FEATURED_SLUGS
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  return (
    <section className="lux-cream-bg py-24 md:py-32">
      <div className="container mx-auto px-6">
        <LuxSectionHeading
          eyebrow="Travel Journal"
          title="Stories, Guides & Inspiration"
          intro="Expert Rajasthan travel insights, destination guides, and luxury journey inspiration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C]/60 rounded-sm overflow-hidden shadow-[0_2px_30px_rgba(110,15,31,0.05)] hover:shadow-[0_20px_50px_rgba(110,15,31,0.15)] transition-all duration-500 hover:-translate-y-1"
            >
              <Link to={`/blog/${post.slug}`} className="relative aspect-[4/3] overflow-hidden block">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0709]/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] bg-[#1a0709]/70 backdrop-blur-sm px-3 py-1.5 border border-[#C9A84C]/40">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-col flex-1 p-7 md:p-8">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#0F0F0F]/50 mb-4">
                  <Clock className="h-3.5 w-3.5 text-[#C9A84C]" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-[26px] leading-snug text-[#6E0F1F] mb-4 transition-colors duration-300 group-hover:text-[#C9A84C]">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <div className="h-px w-12 bg-[#C9A84C]/60 mb-4" />

                <p className="text-[15px] text-[#0F0F0F]/70 leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#6E0F1F] hover:text-[#C9A84C] transition-colors duration-300 self-start"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <LuxLinkBtn to="/blog" variant="outline">
            View All Articles <ArrowRight className="h-4 w-4" />
          </LuxLinkBtn>
        </div>
      </div>
    </section>
  );
};

export default LuxJournalPreview;
