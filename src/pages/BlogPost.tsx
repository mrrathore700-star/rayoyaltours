import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import royalTour from "@/assets/royal-tour.jpg";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="lux-cream-bg">
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Heritage Jaipur Travels" },
          publisher: { "@type": "Organization", name: "Heritage Jaipur Travels" },
        }}
      />

      <LuxHero
        image={post.image}
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.date} · ${post.readTime} · By Heritage Jaipur Travels`}
      />

      <article className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-12">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">The Story</span>
            <span className="lux-rule-gold" />
          </div>

          {post.intro.map((p, i) => (
            <p
              key={i}
              className={`font-serif text-xl md:text-2xl text-[#0F0F0F]/80 leading-relaxed mb-6 ${
                i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-[#6E0F1F] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]" : ""
              }`}
            >
              {p}
            </p>
          ))}

          <div className="my-14 flex items-center justify-center">
            <span className="lux-rule-gold" />
            <span className="mx-4 text-[#C9A84C] text-2xl">✦</span>
            <span className="lux-rule-gold" />
          </div>

          {post.sections.map((section, idx) => (
            <section key={idx} className="mb-12">
              {section.heading && (
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-[#0F0F0F] mb-5 leading-tight tracking-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[17px] md:text-lg text-[#0F0F0F]/80 leading-[1.85] mb-5"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-16 pt-10 border-t border-[#C9A84C]/30 text-center">
            <p className="lux-eyebrow text-[10px] mb-3">Heritage Jaipur Travels</p>
            <p className="font-serif italic text-lg text-[#0F0F0F]/70">
              Jaipur-based private travel specialists with 20+ years of experience.
            </p>
          </div>
        </div>
      </article>

      {/* Related Stories */}
      <section className="pb-24 md:pb-32 bg-[#FFF8F0]/60">
        <div className="container mx-auto px-6 pt-20">
          <div className="flex items-center gap-3 justify-center mb-12">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Continue Reading</span>
            <span className="lux-rule-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-5 left-5 lux-glass px-3.5 py-1 rounded-full">
                    <span className="lux-eyebrow text-[9px]">{p.category}</span>
                  </span>
                </div>
                <time className="lux-eyebrow text-[10px]">{p.date} · {p.readTime}</time>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-[#0F0F0F] mt-3 mb-2 leading-tight group-hover:text-[#6E0F1F] transition-colors">
                  {p.title}
                </h3>
                <span className="text-xs tracking-[0.22em] uppercase text-[#C9A84C]">Read the Story →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LuxCtaBand
        image={royalTour}
        eyebrow="Begin Your Story"
        title={<>{post.cta.label.split(" ").slice(0, -1).join(" ")} <span className="text-[#C9A84C]">{post.cta.label.split(" ").slice(-1)}</span></>}
        subtitle="Let our Jaipur-based specialists craft a private journey shaped entirely around you."
        primary={{ label: "Plan My Rajasthan Journey", to: "/contact" }}
        secondary={{ label: "Speak With A Specialist", href: "https://wa.me/919461069858", external: true }}
      />
    </main>
  );
};

export default BlogPost;
