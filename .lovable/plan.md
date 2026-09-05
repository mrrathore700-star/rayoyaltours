# Replace the homepage hero photo with the Amber Fort image

## What changes

The large photo behind the homepage headline becomes your Amber Fort picture with the two decorated elephants. Everything else on the hero — headline, subtitle, both buttons, the gradient, the height, the slow zoom animation — stays exactly as it is today. No other section, image, or menu on the site is touched.

## How the photo is framed

The picture fills the area without stretching, and it shifts slightly depending on screen width so the fort and the elephants stay in view:

- Wide screens: framed at 62% across
- Tablets: 60%
- Phones: 65%

## Technical notes

1. Convert the uploaded JPG to an optimized WebP named `amber-fort-jaipur-elephant-experience.webp` (~1920px wide, quality 80, aspect ratio preserved) and add it to the project's images folder.
2. In `src/pages/Index.tsx`, swap the hero's `image={heroPalace}` for the new WebP import. `heroPalace` stays imported for the final call-to-action band at the bottom, which is unchanged.
3. In `src/components/luxury/LuxHero.tsx`, allow an optional class for the background image position and pass a new utility class (defined in `src/index.css`) that sets:
   - `object-position: 65% center` (base / mobile)
   - `object-position: 60% center` at `md`
   - `object-position: 62% center` at `lg`
   Only the homepage hero receives this class; other heroes keep current behaviour.
4. Give the hero image real alt text: "Amber Fort Jaipur with traditional elephant experience, Rajasthan" (replacing the current decorative empty alt on the homepage hero only).
5. Verify with a headless browser at desktop, tablet and mobile widths that the fort and both elephants remain visible and the headline stays readable over the sky.
