
# Luxury Rajasthan Travel Journal — SEO & Premium Optimization

Scope: enhance the existing `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, and `src/data/blogPosts.ts`. No new routes, no new dependencies. Reuses the existing luxury design system (LuxHero, LuxCtaBand, LuxTrustStrip, gold/maroon/cream tokens, Playfair/Cormorant/Lato).

---

## 1. Rename to "Luxury Rajasthan Travel Journal"

- Header nav label "Blog" → "Journal" (short, keeps nav balance) in `src/components/Header.tsx` and `src/components/Footer.tsx`.
- Hero eyebrow already reads "Luxury Rajasthan Travel Journal" — keep.
- SEO `<title>` updated to: `Luxury Rajasthan Travel Journal | Stories & Guides — Heritage Jaipur Travels`.

## 2. SEO upgrades

**Blog index (`/blog`)**
- Add JSON-LD `Blog` schema listing all 8 posts (headline, url, image, datePublished, author).
- Add `BreadcrumbList` JSON-LD (Home → Journal).
- Stronger meta description targeting "luxury Rajasthan travel", "Jaipur travel guide", "Rajasthan itinerary".
- Single H1 (hero title), proper H2/H3 hierarchy in sections.

**Blog post (`/blog/:slug`)**
- Already has `BlogPosting` JSON-LD — extend with: `mainEntityOfPage`, `dateModified`, `keywords`, `articleSection` (category), `wordCount`, `inLanguage: "en"`, full publisher logo object.
- Add `BreadcrumbList` JSON-LD (Home → Journal → Post title).
- Ensure `<h1>` is the post title (currently in LuxHero — verify it renders as h1; if not, adjust LuxHero or wrap).
- Section headings as proper `<h2>` (already are).
- Optimized `alt` text on hero + related images (descriptive, keyword-aware — derive from post title + category).
- Per-post `keywords` array added to data model and emitted in JSON-LD only (not meta keywords).

**Sitemap**
- Update `public/sitemap.xml` (or generator if present) to include all 8 `/blog/{slug}` URLs.

## 3. Categories — expand filter strip

Extend filters to the 10 SEO-target categories:
All, Luxury Rajasthan, Jaipur Travel, Itineraries, Palace Stays, Wildlife & Safari, Desert, Food & Culture, Spiritual, Photography, Hidden Rajasthan.

Re-map each post's `category` field in `src/data/blogPosts.ts` to one of these. Empty categories show the existing graceful empty state.

## 4. Trust strip on Journal index

Insert `LuxTrustStrip` (already exists) between the featured article and the filter strip. No new component.

## 5. Enhanced article cards

Cards already have image, category badge, date, read time, excerpt, "Read the Story →". Additions:
- Hover: subtle gold underline animation on title (CSS only, using existing tokens).
- Image alt text upgraded per post (e.g. `"Amber Fort at sunrise, Jaipur — luxury heritage tour"`).

## 6. Internal linking inside articles

Add an optional `relatedLinks` array to each post in `blogPosts.ts`:
```ts
relatedLinks?: { label: string; to: string }[]
```
Rendered in `BlogPost.tsx` as an elegant "Related Experiences" block (gold rule + 2–3 luxury link buttons) above the bottom CTA. Examples:
- "Best Places in Jaipur" → links to `/experiences` + `/packages`
- "Camel Safari Jaisalmer" → links to the matching experience detail page
- "Ranthambore Tiger Safari" → wildlife experience page

Links use existing routes only — no new pages.

## 7. In-article CTA band (mid-article)

Add a single elegant inline CTA card mid-article (after the 2nd section) inside `BlogPost.tsx`:
- Gold rule + eyebrow "Plan Your Journey"
- Serif headline: "Create a Private {Category} Journey"
- Two `LuxLinkBtn` / `LuxAnchorBtn`: "Plan My Rajasthan Journey" → `/contact`, "WhatsApp A Specialist" → wa.me link.

Reuses existing button primitives — no new styling.

## 8. Social sharing optimization

- Per-post OG image already passes `post.image`. Add `og:type=article`, `article:published_time`, `article:author`, `article:section` via Helmet in `BlogPost.tsx` (extend `SEO.tsx` to accept optional `type` and `articleMeta` props).
- Twitter card already `summary_large_image` — keep.
- Pinterest: ensure all post images have descriptive alt text (covered in §2).

## 9. Bottom CTA

Already present (`LuxCtaBand` with "Begin Your Rajasthan Story"). Keep as-is on both index and post pages.

---

## Technical summary

**Files edited:**
- `src/pages/Blog.tsx` — JSON-LD (Blog + Breadcrumb), trust strip, expanded filters, stronger SEO title/desc
- `src/pages/BlogPost.tsx` — extended JSON-LD, breadcrumb, mid-article CTA, related links block, article OG meta
- `src/data/blogPosts.ts` — re-mapped categories, added `keywords`, `relatedLinks`, `alt` per post
- `src/components/SEO.tsx` — optional `type` + `articleMeta` props for article OG tags
- `src/components/Header.tsx`, `src/components/Footer.tsx` — nav label "Blog" → "Journal"
- `public/sitemap.xml` — add 8 post URLs

**No new:** routes, dependencies, components, design tokens, fonts, or backend changes. All visual additions reuse existing luxury primitives so the Journal stays visually identical to the rest of the site.
