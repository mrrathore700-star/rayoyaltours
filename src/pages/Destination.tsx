import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import LuxHero from "@/components/luxury/LuxHero";
import LuxSectionHeading from "@/components/luxury/LuxSectionHeading";
import { LuxLinkBtn, LuxAnchorBtn } from "@/components/luxury/LuxButton";
import LuxInlineCta from "@/components/luxury/LuxInlineCta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDestination, destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { blogPosts } from "@/data/blogPosts";

const Destination = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = slug ? getDestination(slug) : undefined;
  if (!dest) return <Navigate to="/" replace />;

  const relatedTours = tours.filter((t) => dest.relatedTourSlugs.includes(t.slug));
  const relatedPosts = blogPosts.filter((p) => dest.relatedBlogSlugs.includes(p.slug));
  const otherDestinations = destinations.filter((d) => d.slug !== dest.slug).slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dest.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${dest.name}, Rajasthan, India`,
    description: dest.metaDescription,
    image: typeof dest.heroImage === "string" ? dest.heroImage : undefined,
    touristType: ["Families", "Couples", "Solo Travelers", "Heritage Travelers"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.heritagejaipurtravels.com/" },
      { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.heritagejaipurtravels.com/#destinations" },
      { "@type": "ListItem", position: 3, name: dest.name, item: `https://www.heritagejaipurtravels.com/destinations/${dest.slug}` },
    ],
  };

  return (
    <>
      <SEO
        title={dest.metaTitle}
        description={dest.metaDescription}
        path={`/destinations/${dest.slug}`}
        image={typeof dest.heroImage === "string" ? dest.heroImage : undefined}
        jsonLd={[faqSchema, placeSchema, breadcrumbSchema]}
      />

      <LuxHero
        image={dest.heroImage}
        eyebrow={dest.heroEyebrow}
        title={dest.heroTitle}
        subtitle={dest.heroSubtitle}
        height="regular"
        actions={
          <>
            <LuxAnchorBtn href="https://wa.me/919461069858" variant="gold" external>
              WhatsApp Us
            </LuxAnchorBtn>
            <LuxLinkBtn to={`/contact?destination=${encodeURIComponent(dest.name)}`} variant="outline">
              Plan {dest.name} Tour
            </LuxLinkBtn>
          </>
        }
      />

      {/* Overview */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <LuxSectionHeading
            eyebrow={`${dest.name} · ${dest.tagline}`}
            title={`Welcome to ${dest.name}`}
          />
          <div className="space-y-5 font-serif text-lg md:text-xl leading-relaxed text-[#0F0F0F]/75 text-center">
            {dest.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
        <div className="container mx-auto px-6">
          <LuxSectionHeading eyebrow="Why Visit" title={`Why Travel to ${dest.name}`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {dest.whyVisit.map((item) => (
              <div
                key={item.title}
                className="border border-[#C9A84C]/20 hover:border-[#C9A84C]/70 bg-white p-7 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(110,15,31,0.10)]"
              >
                <h3 className="font-display text-xl text-[#6E0F1F] mb-3">{item.title}</h3>
                <div className="h-px w-10 bg-[#C9A84C] mb-4" />
                <p className="text-[15px] leading-relaxed text-[#0F0F0F]/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Top Attractions"
            title={`Must-See Places in ${dest.name}`}
            intro="The main attractions to include in your trip."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {dest.topAttractions.map((a, i) => (
              <article
                key={a.name}
                className="bg-white border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 rounded-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(110,15,31,0.10)]"
              >
                <div className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-2xl text-[#6E0F1F] mb-3">{a.name}</h3>
                <p className="text-[15px] leading-relaxed text-[#0F0F0F]/70">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LuxInlineCta
        tone="white"
        eyebrow={`Visiting ${dest.name}?`}
        heading={<>Get a personalized {dest.name} itinerary.</>}
        primary={{ label: "Request Itinerary", to: `/contact?destination=${encodeURIComponent(dest.name)}`, icon: "send" }}
        secondary={{ label: "Contact Team", href: "https://wa.me/919461069858", external: true, icon: "wa" }}
        compact
      />

      {/* Best Experiences */}
      <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Things To Do"
            title={`Top Experiences in ${dest.name}`}
            intro="Private experiences recommended by our Jaipur-based team."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {dest.bestExperiences.map((e) => (
              <div
                key={e.title}
                className="flex gap-5 border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 p-6 rounded-sm bg-white transition-colors duration-500"
              >
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#6E0F1F]/5 border border-[#C9A84C]/40">
                  <MapPin className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#6E0F1F] mb-2">{e.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#0F0F0F]/70">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <LuxLinkBtn to="/experiences" variant="outline">
              Explore All Experiences <ArrowRight className="h-4 w-4" />
            </LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* Best Time + Duration */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="lux-rule-gold" />
                <span className="lux-eyebrow">Best Time to Visit</span>
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F0F0F] mb-8 leading-tight">
                When to Travel to {dest.name}
              </h2>
              <div className="space-y-5">
                {dest.bestTimeToVisit.map((s) => (
                  <div key={s.season} className="border-l-2 border-[#C9A84C] pl-5 py-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display text-[#6E0F1F] text-lg">{s.season}</span>
                      <span className="text-xs tracking-[0.25em] uppercase text-[#0F0F0F]/50">{s.months}</span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-[#0F0F0F]/70">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="lux-rule-gold" />
                <span className="lux-eyebrow">Recommended Duration</span>
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-[#0F0F0F] mb-8 leading-tight">
                How Many Days in {dest.name}?
              </h2>
              <div className="bg-white border border-[#C9A84C]/30 rounded-sm p-8 md:p-10 text-center shadow-[0_2px_30px_rgba(110,15,31,0.05)]">
                <Clock className="h-8 w-8 text-[#C9A84C] mx-auto mb-4" />
                <div className="font-display text-4xl md:text-5xl text-[#6E0F1F] mb-3">
                  {dest.recommendedDuration}
                </div>
                <p className="font-serif italic text-[#0F0F0F]/70 leading-relaxed">
                  {dest.durationNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Sample Itinerary"
            title={`A Suggested ${dest.name} Itinerary`}
            intro="A flexible starting point — we'll customize it around your dates, interests and pace."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {dest.itinerary.map((d) => (
              <div
                key={d.day}
                className="relative pl-12 md:pl-16 pb-6 border-l-2 border-[#C9A84C]/40 last:border-transparent"
              >
                <div className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-[#6E0F1F] text-[#FFF8F0] flex items-center justify-center">
                  <Calendar className="h-3.5 w-3.5" />
                </div>
                <div className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-2">{d.day}</div>
                <h3 className="font-serif text-2xl text-[#6E0F1F] mb-2">{d.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#0F0F0F]/70">{d.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <LuxLinkBtn to={`/contact?destination=${encodeURIComponent(dest.name)}`} variant="gold">
              Request a Custom Itinerary
            </LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="Travel Information"
            title={`${dest.name} Travel Questions`}
            intro={`Practical answers to help you plan your trip to ${dest.name}.`}
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {dest.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-[#C9A84C]/30 bg-white/55 backdrop-blur-sm rounded-sm px-6 md:px-8 transition-colors duration-300 hover:border-[#C9A84C]/60 data-[state=open]:border-[#C9A84C]"
                >
                  <AccordionTrigger className="font-display text-left text-base md:text-lg text-[#6E0F1F] font-semibold py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-serif text-[15px] md:text-base leading-relaxed text-[#0F0F0F]/75 pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
          <div className="container mx-auto px-6">
            <LuxSectionHeading
              eyebrow="Tour Packages"
              title={`Tours Featuring ${dest.name}`}
              intro="Multi-day Rajasthan tours from our team that include this destination."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((t) => (
                <Link
                  key={t.slug}
                  to={`/packages/${t.slug}`}
                  className="group block bg-white border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 rounded-sm overflow-hidden shadow-[0_2px_30px_rgba(110,15,31,0.05)] hover:shadow-[0_18px_40px_rgba(110,15,31,0.15)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <div className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-2">{t.duration}</div>
                    <h3 className="font-serif text-xl text-[#6E0F1F] mb-3 group-hover:text-[#C9A84C] transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-sm text-[#0F0F0F]/65 mb-4">{t.highlights.join(" · ")}</p>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#6E0F1F]">
                      View Tour <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Experiences (link to Experiences hub) */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading
            eyebrow="More Experiences"
            title={`Experiences to Add to Your ${dest.name} Trip`}
            intro={`Browse experiences our team can add to your time in ${dest.name} — heritage, culture, wildlife, desert, food and wellness.`}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { id: "heritage", label: "Heritage" },
              { id: "cultural", label: "Cultural" },
              { id: "wildlife", label: "Wildlife" },
              { id: "desert", label: "Desert" },
              { id: "food", label: "Food" },
              { id: "wellness", label: "Wellness" },
            ].map((c) => (
              <Link
                key={c.id}
                to={`/experiences/category/${c.id}`}
                className="block text-center py-5 px-3 bg-white border border-[#C9A84C]/20 hover:border-[#C9A84C]/70 rounded-sm font-display text-sm tracking-wide text-[#6E0F1F] hover:text-[#C9A84C] transition-all"
              >
                {c.label}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <LuxLinkBtn to="/experiences" variant="outline">
              Browse All Experiences <ArrowRight className="h-4 w-4" />
            </LuxLinkBtn>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t" style={{ borderColor: "rgba(110,15,31,0.10)" }}>
          <div className="container mx-auto px-6">
            <LuxSectionHeading
              eyebrow="Travel Blog"
              title={`Read More About ${dest.name}`}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C]/60 rounded-sm overflow-hidden shadow-[0_2px_30px_rgba(110,15,31,0.05)] hover:shadow-[0_18px_40px_rgba(110,15,31,0.15)] transition-all duration-500"
                >
                  <Link to={`/blog/${post.slug}`} className="block aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </Link>
                  <div className="p-7">
                    <div className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-2">{post.readTime}</div>
                    <h3 className="font-serif text-xl text-[#6E0F1F] mb-3 group-hover:text-[#C9A84C] transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-[#0F0F0F]/65 line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other destinations */}
      <section className="lux-cream-bg py-20 md:py-28">
        <div className="container mx-auto px-6">
          <LuxSectionHeading eyebrow="Explore Rajasthan" title="Discover More Destinations" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {otherDestinations.map((d) => (
              <Link
                key={d.slug}
                to={`/destinations/${d.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm block bg-[#1a0709]"
              >
                <img
                  src={d.heroImage}
                  alt={`${d.name} — ${d.tagline}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0709]/90 via-[#1a0709]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FFF8F0]">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-[#C9A84C] mb-1">{d.tagline}</div>
                  <div className="font-display text-2xl">{d.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 lux-black-bg overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={dest.heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0709] via-[#1a0709]/80 to-[#1a0709]/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-5 justify-center">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Plan Your Journey</span>
            <span className="lux-rule-gold" />
          </div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-[#FFF8F0] mb-6 leading-tight">
            Ready to Experience {dest.name}?
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-[#FFF8F0]/80 mb-10">
            Speak with our luxury Rajasthan specialists and we will design a personalised {dest.name} journey for you — itineraries, palace stays, private guides and chauffeur-driven transfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LuxLinkBtn to={`/contact?destination=${encodeURIComponent(dest.name)}`} variant="gold">
              Plan Your {dest.name} Journey
            </LuxLinkBtn>
            <LuxAnchorBtn href="https://wa.me/919461069858" variant="outline" external>
              WhatsApp Us
            </LuxAnchorBtn>
            <LuxAnchorBtn href="tel:+919461069858" variant="outline">
              <Phone className="h-4 w-4" /> +91 94610 69858
            </LuxAnchorBtn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
