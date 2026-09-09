# Update four package hero images

## Goal

Change only the primary hero image mapping for the four named tour packages. Preserve all package content, layout, CTA behavior, responsive hero dimensions, and every other site image.

## Confirmed current behavior

- Package image mappings are defined in `src/data/tours.ts`.
- `src/pages/TourDetail.tsx` uses that mapping for each package hero through `SmartImage` with the existing cover treatment.
- `Golden Triangle with Ranthambore` currently uses its own `ranthamboreTiger` asset and will remain untouched.

## Requested mapping

| Package | Uploaded hero image |
| --- | --- |
| Grand Rajasthan Heritage Tour with Taj Mahal | `taj-mahal-heritage.webp.jpg` |
| Golden Triangle & Royal Rajasthan Tour | `city_place.jpg` (the uploaded file corresponding to “city place.jpg”) |
| Rajasthan Royal Heritage Tour | `umaid-place-jodhpur.webp.jpg` |
| Golden Triangle Tour | `taj-mahal-heritage-jaipur-travels.webp.jpg` |

## Implementation

1. Externalize the four uploaded files through the project asset flow, preserving their provided filenames and image quality.
2. Replace only the four corresponding `image` values/imports in `src/data/tours.ts`.
3. Leave the Ranthambore, Jaipur, Desert Safari, and Udaipur mappings unchanged.
4. Do not modify `TourDetail.tsx`, package copy, itinerary, pricing, buttons, layout, homepage, destinations, experiences, or gallery.
5. Verify each requested package route individually at desktop, tablet, and mobile widths, checking the rendered hero image and cover cropping. Confirm the Ranthambore route still renders its original image.

## Technical details

- Use the existing `SmartImage` and `object-cover` behavior; no new filters, zoom, or layout changes.
- Add only the asset pointer files and the minimal tour-data mapping changes required.
- Validate with the project build and route-level visual checks.