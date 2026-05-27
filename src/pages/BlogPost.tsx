import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import royalTour from "@/assets/royal-tour.jpg";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

const SITE_URL = "https://www.heritagejaipurtravels.com";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const wordCount =
    post.intro.join(" ").split(/\s+/).length +
    post.sections.reduce(
      (acc, s) => acc + s.paragraphs.join(" ").split(/\s+/).length + (s.heading?.split(/\s+/).length || 0),
      0
    );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.keywords?.join(", "),
    wordCount,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Heritage Jaipur Travels", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Heritage Jaipur Travels",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/placeholder.svg` },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Travel Journal", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  // Split sections for mid-article CTA insertion
  const midIdx = Math.min(2, Math.max(1, Math.floor(post.sections.length / 2)));
  const sectionsBefore = post.sections.slice(0, midIdx);
  const sectionsAfter = post.sections.slice(midIdx);

  return (
    <main className="lux-cream-bg">
      <SEO
        title={post.seoTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        articleMeta={{
          publishedTime: post.date,
          modifiedTime: post.date,
          author: "Heritage Jaipur Travels",
          section: post.category,
          tags: post.keywords,
        }}
        jsonLd={[articleSchema, breadcrumbSchema]}
      />

      <LuxHero
        image={post.image}
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.date} · ${post.readTime} · By Heritage Jaipur Travels`}
      />

      <article className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10 text-[10px] tracking-[0.22em] uppercase text-[#0F0F0F]/50 text-center">
            <Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span className="mx-2 text-[#C9A84C]">/</span>
            <Link to="/blog" className="hover:text-[#C9A84C] transition-colors">Travel Journal</Link>
            <span className="mx-2 text-[#C9A84C]">/</span>
            <span className="text-[#0F0F0F]/70">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 justify-center mb-12">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">The Story</span>
            <span className="lux-rule-gold" />
          </div>

          {post.intro.map((p, i) => (
            <p
              key={i}
              className={`font-serif text-xl md:text-2xl text-[#0F0F0F]/80 leading-relaxed mb-6 ${
                i === 0
                  ? "first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-[#6E0F1F] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]"
                  : ""
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

          {sectionsBefore.map((section, idx) => (
            <section key={idx} className="mb-12">
              {section.heading && (
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-[#0F0F0F] mb-5 leading-tight tracking-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[17px] md:text-lg text-[#0F0F0F]/80 leading-[1.85] mb-5">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Mid-article CTA */}
          <aside className="my-16 px-8 md:px-12 py-12 md:py-14 border border-[#C9A84C]/30 rounded-sm text-center lux-cream-bg" style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.06), rgba(110,15,31,0.04))" }}>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="lux-rule-gold" />
              <span className="lux-eyebrow">Plan Your Journey</span>
              <span className="lux-rule-gold" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#6E0F1F] leading-tight tracking-tight mb-4">
              Create a Private {post.category} Journey
            </h3>
            <p className="font-serif italic text-base md:text-lg text-[#0F0F0F]/70 max-w-xl mx-auto mb-8">
              Speak with a Jaipur-based Rajasthan specialist and shape a journey designed entirely around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LuxLinkBtn to="/contact" variant="gold">Plan My Rajasthan Journey</LuxLinkBtn>
              <LuxAnchorBtn href="https://wa.me/919461069858" variant="outline" external>
                WhatsApp A Specialist
              </LuxAnchorBtn>
            </div>
          </aside>

          {sectionsAfter.map((section, idx) => (
            <section key={idx} className="mb-12">
              {section.heading && (
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-[#0F0F0F] mb-5 leading-tight tracking-tight">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[17px] md:text-lg text-[#0F0F0F]/80 leading-[1.85] mb-5">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Related Experiences */}
          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <section className="mt-16 pt-12 border-t border-[#C9A84C]/30">
              <div className="flex items-center gap-3 justify-center mb-8">
                <span className="lux-rule-gold" />
                <span className="lux-eyebrow">Related Experiences</span>
                <span className="lux-rule-gold" />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {post.relatedLinks.map((l) => (
                  <LuxLinkBtn key={l.to} to={l.to} variant="outline" className="text-[10px]">
                    {l.label} →
                  </LuxLinkBtn>
                ))}
              </div>
            </section>
          )}

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
                    alt={p.imageAlt || p.title}
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
        title={<>Begin Your Rajasthan <span className="text-[#C9A84C]">Story</span></>}
        subtitle="Let our Rajasthan specialists create a journey beyond ordinary travel."
        primary={{ label: "Plan My Rajasthan Journey", to: "/contact" }}
        secondary={{ label: "WhatsApp A Specialist", href: "https://wa.me/919461069858", external: true }}
      />
    </main>
  );
};

export default BlogPost;
