# Remove "Explore Rajasthan" from Footer

## Goal
Remove only the "Explore Rajasthan" column from the footer, leaving all destination pages, routes, navigation, and internal links untouched. Rebalance the remaining footer columns automatically.

## Current state
`src/components/Footer.tsx` contains a 6-column grid (`lg:grid-cols-6`). The fifth column is the "Explore Rajasthan" block with the heading link to `/destinations` and links to Jaipur, Udaipur, Jodhpur, Jaisalmer, Ranthambore, Pushkar, and "View All Destinations →".

## Changes
1. Delete the entire "Explore Rajasthan" `<div>` column from `src/components/Footer.tsx`.
2. Change the grid class from `lg:grid-cols-6` to `lg:grid-cols-5` so the remaining five columns rebalance evenly.
3. Leave all other footer markup, styling, typography, colors, spacing, responsiveness, contact info, social icons, copyright, and policy links unchanged.

## Out of scope
- No changes to destination pages (`/destinations/:slug`, `/destinations`).
- No changes to Header navigation, search, sitemap, breadcrumbs, SEO, or any destination content.
- No changes to homepage sections or any other page.

## Verification
- Build passes.
- Footer renders five columns on desktop with equal spacing and unchanged styling.
- No empty column or blank space remains.
