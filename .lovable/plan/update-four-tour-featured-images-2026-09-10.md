# Update Four Tour Featured Images

## Scope
Replace the shared featured image mapping for exactly these four existing tours:

- Golden Triangle with Ranthambore → uploaded `ranthambore.webp.jpg`
- Jaipur Heritage Tour → uploaded `amer_fort.webp.jpg`
- Desert Safari Jaisalmer → uploaded `Desert_camp.jpg`
- Udaipur Lake Tour → uploaded `lake-place-udaipur.webp.jpg`

Because the tour image mapping is shared, each new photo will appear in all existing featured uses for that tour: its package card, top page image, and lower page banner.

## Implementation
- Optimize the four uploaded high-resolution photos as quality WebP assets without altering their content.
- Update only the four matching image imports and mappings in the tour data.
- Preserve the existing `cover` rendering, dimensions, overlays, animation, and responsive layout.
- Keep every other tour image and all homepage, gallery, destination, and experience imagery unchanged.
- Do not change titles, descriptions, itineraries, buttons, pricing, layout, or page structure.

## Verification
- Check all four tour pages and their package cards at desktop and mobile sizes.
- Confirm each route uses its exact assigned photo and preserves the main subject without stretching.
- Confirm an unaffected package still uses its existing image.
- Check the final website build for errors.
