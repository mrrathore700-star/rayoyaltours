# Replace six destination featured images

## Scope

Update only the featured image mapping for Jaipur, Udaipur, Jodhpur, Jaisalmer, Ranthambore, and Pushkar using the six uploaded photos:

| Destination | Uploaded image | Existing shared mapping |
|---|---|---|
| Jaipur | `jaipur.webp` | `destinations.ts` → `heroImage` |
| Udaipur | `udaipur.webp` | `destinations.ts` → `heroImage` |
| Jodhpur | `jodhpur.webp` | `destinations.ts` → `heroImage` |
| Jaisalmer | `jaisalmer.webp` | `destinations.ts` → `heroImage` |
| Ranthambore | `ranthambore.webp` | `destinations.ts` → `heroImage` |
| Pushkar | `pushkar.webp` | `destinations.ts` → `heroImage` |

## Implementation

1. Preserve each uploaded photograph and add it through the project’s asset flow with destination-specific filenames.
2. Replace only the six image imports and `heroImage` values in `src/data/destinations.ts`.
3. Keep the existing `SmartImage`, media-slot behavior, `object-cover` cropping, page content, and all layout/design code unchanged.
4. Do not edit tour, day-trip, experience, homepage, gallery, navigation, footer, or destination text data.

## Verification

- Confirm each destination card on `/destinations` uses its matching image.
- Confirm each `/destinations/:slug` page uses the same image in the top hero, related destination cards, and final banner.
- Check all six routes on desktop and mobile for natural responsive cropping and no distortion.
- Confirm no other destination or site image mapping changed.
- Run the production build and inspect diagnostics before completion.

## Technical details

- The current six `heroImage` values are imported from `src/assets/` and are reused by the destination index, detail hero, “Discover More Destinations” cards, and final CTA background.
- The managed media system remains authoritative when a destination slot is populated; bundled images remain the requested fallback and will not be changed outside these six mappings.