# Update featured images for four day trips

## Goal

Replace only the featured image for four existing day trips, using the uploaded photos. Everything else stays exactly as it is.

## Mapping

| Day trip | Uploaded photo |
| --- | --- |
| Jaipur Full Day Sightseeing Tour | hawa-mahal-jaipur.webp |
| Pushkar Day Trip from Jaipur | pushkar-lake.webp |
| Abhaneri Chand Baori Day Trip | chand-baori.webp |
| Ranthambore Tiger Safari Day Trip | Ranthambore-tiger-safari.webp |

## Confirmed current behaviour

Each day trip has one shared featured image, defined once in `src/data/dayTours.ts`. That single value is what every place on the site shows:

- the day trip card in the Journeys listing
- the large image at the top of the day trip page
- any "related journeys" card lower on a page

So updating the one value updates all featured uses at once and keeps them consistent.

## What will change

1. Convert each uploaded photo to an optimised WebP file (up to 1920px wide, quality 80, no filters, no cropping, no AI additions) and add it to the project images.
2. Point the four day trips at their new photos in `src/data/dayTours.ts` — nothing else in that file changes.
3. Leave all other day trips, tour packages, the homepage, destinations, experiences and the gallery untouched.

Existing cover-fit behaviour, dimensions, layout, text, duration, buttons and page structure are not modified.

## Verification

Check each of the four day trip pages plus the Journeys listing on desktop, tablet and mobile:

- the correct photo appears on the card, the top image, and any lower related card
- the main subject stays visible on mobile and the photo is not stretched
- one untouched day trip still shows its original photo

Finish with a production build check.

## Technical notes

- Files: new WebP assets under `src/assets/`, plus the four `image` values in `src/data/dayTours.ts`.
- Rendering already goes through `SmartImage` with `object-cover`; no component or CSS changes needed.
