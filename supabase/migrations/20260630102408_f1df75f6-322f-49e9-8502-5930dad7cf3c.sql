
-- Phase 2: extend media_assets to be the single source of truth.
-- Adds feature-placement flags + display fields used by Gallery and Homepage.
ALTER TABLE public.media_assets
  ADD COLUMN IF NOT EXISTS location          text    NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS sort_order        integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS featured_homepage   boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_gallery    boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_package    boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_blog       boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_destination boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_experience boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_vehicle    boolean NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS media_assets_featured_homepage_idx ON public.media_assets (featured_homepage, sort_order) WHERE featured_homepage;
CREATE INDEX IF NOT EXISTS media_assets_featured_gallery_idx  ON public.media_assets (featured_gallery,  sort_order) WHERE featured_gallery;
CREATE INDEX IF NOT EXISTS media_assets_sort_order_idx        ON public.media_assets (sort_order);
