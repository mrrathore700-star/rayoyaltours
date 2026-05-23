## Sitewide Copy Refinement — Grammar, Tone, Hindi Terms

Apply the full list of textual replacements across body copy, button labels, form fields, WhatsApp message strings, tour/experience data, and CTA subtitles. SEO-critical surfaces remain untouched.

### Files to update (text-only edits)

Page components:
- `src/pages/Index.tsx`
- `src/pages/About.tsx`
- `src/pages/Packages.tsx`
- `src/pages/Sightseeing.tsx`
- `src/pages/Taxi.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Blog.tsx`
- `src/pages/Gallery.tsx`
- `src/pages/Experiences.tsx`
- `src/pages/ExperienceCategory.tsx`
- `src/pages/ExperienceDetail.tsx`
- `src/pages/TourDetail.tsx`

Data files (tour/experience content):
- `src/data/tours.ts`
- `src/data/tourDetails.ts`
- `src/data/experiences.ts`
- `src/data/experienceDetails.ts`

Shared components:
- `src/components/TourCard.tsx` (button labels only)
- `src/components/Footer.tsx` (if affected by phrasing)
- `src/components/WhatsAppButton.tsx` (message text)

### Change categories applied

1. **Hindi term replacements** (11 items) — camel-walla → camel handler, nimbu pani → fresh lime water, razais → traditional quilts, thaal → thali, safa → traditional Rajasthani turban, kulhar → clay cup, mithai house → sweet shop, chakki → stone grinder, mahout → mahout (elephant keeper) on first use, opium-water tradition → sacred herbal welcome ritual, aarti → aarti (traditional welcome ritual) on first use.

2. **Grammar fixes** (11 items) — including "+" in prose replaced with ", ", "No. of Travelers" → "Number of Travellers", article and tense corrections.

3. **Luxury-tone vocabulary** (50 items) — compose→craft, Inquiry→Enquiry, travelers→travellers (body only), Atelier→Service for transport, sanitized→maintained, polite→courteous, Book→Enquire, driver→chauffeur (luxury contexts), pickup/drop→arrival/departure, and the full list provided.

4. **Emoji removal** — strip emojis from itinerary activities, taglines, idealFor, whyChoose, highlights, body text in `tours.ts`, `tourDetails.ts`, `experiences.ts`, `experienceDetails.ts`. Keep emojis in WhatsApp wa.me URL strings and any social meta tags.

5. **Capitalization fixes** (4 items).

6. **Three specific meta descriptions** updated in `Packages.tsx` and `About.tsx` only — no other SEO meta strings touched.

7. **Specific sentence rewrites** (18 items) across About, Packages, Contact, ExperienceDetail, Sightseeing, TourDetail, experienceMeta, tourDetails.

### SEO protection rules followed

Will NOT modify: `<title>` tags, SEO `title` props, keywords arrays, URL slugs/routes, JSON-LD blocks, canonical tags, og:title/og:url/og:image, twitter:* tags, alt text, H1 headings, `sitemap.xml`, `robots.txt`. American "travelers" preserved inside keyword arrays and meta descriptions; British "travellers" used only in visible body copy.

The 3 explicitly approved meta-description edits:
- About page: "A Jaipur-born travel atelier" → "A Jaipur-born travel house"
- Packages page: "Browse our curated Rajasthan tour packages" → "Explore our curated private Rajasthan journeys"
- Packages page: "Private journeys by Jaipur locals" → "Private journeys designed by Jaipur specialists"

### Approach

Read each target file, apply replacements with `code--line_replace` (surgical edits, batched per file in parallel), then verify by re-grepping for the original strings to confirm zero remaining instances outside SEO-protected props.

### Deliverable

After implementation, a summary listing: total replacements made, files updated, and any items that could not be applied (with reason).
