# Persistent tour enquiry experience

## Outcome
Add one reusable, route-aware enquiry experience to every multi-day package and day-tour detail page without redesigning existing content or mobile navigation.

## Changes
- Create a shared `TourEnquiryForm` that receives the current journey title, slug, and URL, validates required fields, submits through the existing contact endpoint, preserves values on failure, and shows the requested success state with a contextual WhatsApp follow-up.
- Add the shared form as a sticky right-hand panel beside each existing itinerary/primary detail content area on larger screens, naturally bounded by its parent section.
- Reuse the same form in the existing page enquiry sections so current bottom-page enquiry paths remain functional and consistent.
- Update the existing mobile CTA bar so `REQUEST QUOTE` opens a single accessible bottom-sheet form for the current package/day tour; keep the existing WhatsApp action unchanged and provide no second mobile bar or floating form.
- Extend the existing contact endpoint validation and email contents with tour name, slug, URL, traveller count, travel date, and submission time.
- Add mobile bottom spacing and verify desktop/mobile behavior, validation, submission states, route context, WhatsApp follow-up, and build health.

## Technical details
- Use the existing React Router route data (`tourDetails` and `dayTours`) to resolve the current journey; do not hardcode tour names.
- Use Zod client-side and server-side, existing design tokens/classes, existing WhatsApp number, and the current `/api/contact` workflow.
- Keep all existing copy, imagery, itinerary data, navigation, footer, and overall styling unchanged except for the enquiry placement and required states.
