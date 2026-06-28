
# Luxury Gallery Rebuild — Cloud-Managed

## Goal
Replace the current hardcoded `src/pages/Gallery.tsx` with a world-class luxury gallery whose images are stored in Lovable Cloud (database + storage bucket), so you can add/remove/replace/reorder images from a built-in admin screen — no code editing.

## Architecture

**Backend (Lovable Cloud)**
- New storage bucket `gallery` (public read).
- New table `public.gallery_images`:
  - `id uuid pk`, `image_path text` (storage path), `title text`, `location text`, `description text`, `alt_text text`, `category text`, `sort_order int`, `created_at timestamptz`.
  - RLS: public `SELECT`; `INSERT/UPDATE/DELETE` restricted to authenticated admins via `user_roles` + `has_role(auth.uid(),'admin')` (follows existing role pattern).
- `app_role` enum + `user_roles` table + `has_role` security-definer function (if not already present).
- Proper `GRANT`s on every new public table.

**Frontend**
- `src/pages/Gallery.tsx` — rebuilt:
  - `LuxHero` preserved (same branding, fonts, colors).
  - Filter chip bar (All, Jaipur, Amber Fort, Hawa Mahal, City Palace, Jodhpur, Udaipur, Jaisalmer, Pushkar, Ranthambore, Luxury Hotels, Vehicles, Airport Pickup, Guest Experiences, Culture, Food, Festivals, Nature). Chips only render for categories that contain images.
  - CSS columns masonry: 1 col mobile / 2 tablet / 3 lg / 4 xl. Ivory bg, 16–20px radii, soft shadows, hover zoom, fade-in on scroll via existing `useReveal`.
  - `<img loading="lazy" decoding="async" width height>` with intrinsic dimensions to prevent CLS; Supabase public URLs (already WebP/JPG/PNG as uploaded).
  - Click → fullscreen lightbox (new `LuxLightbox.tsx`): dark blurred overlay, prev/next, ←/→/Esc keyboard, swipe (touch), close button, ARIA `role="dialog"`, focus trap, alt text + title/location caption.
- `src/components/gallery/GalleryAdmin.tsx` — drawer/page at `/gallery/admin`:
  - Sign-in gate (uses existing Supabase auth; only `admin` role can mutate).
  - Multi-file uploader (drag & drop), inline edit of title/location/description/alt/category, reorder via up/down arrows (writes `sort_order`), delete with confirm, replace via re-upload.
  - Link entry shown in Gallery page footer only when the signed-in user is an admin.
- Seed: the 3 uploaded images (`elephant-jaipur`, `hawa-mahal-jaipur`, `manna-peena-kund-jaipur`) inserted via a one-time admin upload after deploy — categorised as Culture, Hawa Mahal, Jaipur respectively, with SEO alt text.

**Preserved**: logo, navbar, footer, colors, fonts, SEO meta, LuxHero, LuxCtaBand.

## Files
- New migration: tables, bucket, RLS, grants.
- New: `src/components/gallery/LuxLightbox.tsx`, `src/components/gallery/GalleryGrid.tsx`, `src/components/gallery/GalleryAdmin.tsx`, `src/hooks/useGalleryImages.ts`, `src/data/galleryCategories.ts`.
- Rewrite: `src/pages/Gallery.tsx`.
- Update: `src/App.tsx` (add `/gallery/admin` route).

## After completion — how you manage images
1. **Where stored**: Lovable Cloud → Storage bucket `gallery` (binary files) + DB table `gallery_images` (metadata + order).
2. **Upload**: Sign in as admin → visit `/gallery/admin` → drag images into the uploader → fill title/location/category → Save.
3. **Replace**: In `/gallery/admin`, click an image row → "Replace file" → pick new file.
4. **Delete**: Row menu → Delete (removes DB row + storage file).
5. **Reorder**: Use ↑ / ↓ arrows on each row; order persists via `sort_order`.
6. **Add 100+**: Multi-select in the uploader handles bulk; the masonry expands automatically.
7. **No code edits needed** for any of the above.

## Open question
Only 3 images are attached. I'll seed those automatically; you can bulk-upload the rest via `/gallery/admin` after deploy. Confirm this is fine, or upload the full set now and I'll seed all of them.
