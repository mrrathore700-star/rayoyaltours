-- Phase 1 Media Foundation: generic media library + slot map.
-- Coexists with gallery_images; does not modify or replace it.

CREATE TABLE IF NOT EXISTS public.media_assets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  bucket TEXT NOT NULL DEFAULT 'gallery',
  image_path TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT '',
  alt_text TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'general',
  tags TEXT[] NOT NULL DEFAULT '{}',
  width INTEGER,
  height INTEGER,
  mime_type TEXT,
  focal_x NUMERIC(4,3),
  focal_y NUMERIC(4,3),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (bucket, image_path)
);

GRANT SELECT ON public.media_assets TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.media_assets TO authenticated;
GRANT ALL ON public.media_assets TO service_role;

ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Media assets are publicly readable"
  ON public.media_assets FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert media assets"
  ON public.media_assets FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update media assets"
  ON public.media_assets FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete media assets"
  ON public.media_assets FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_media_assets_updated_at
  BEFORE UPDATE ON public.media_assets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Slot map: named placements (e.g. home.hero) -> asset.
CREATE TABLE IF NOT EXISTS public.media_slots (
  slot_key TEXT NOT NULL PRIMARY KEY,
  asset_id UUID REFERENCES public.media_assets(id) ON DELETE SET NULL,
  alt_override TEXT,
  notes TEXT,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.media_slots TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.media_slots TO authenticated;
GRANT ALL ON public.media_slots TO service_role;

ALTER TABLE public.media_slots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Media slots are publicly readable"
  ON public.media_slots FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert media slots"
  ON public.media_slots FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update media slots"
  ON public.media_slots FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete media slots"
  ON public.media_slots FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_media_slots_updated_at
  BEFORE UPDATE ON public.media_slots
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_media_assets_category ON public.media_assets(category);
CREATE INDEX IF NOT EXISTS idx_media_assets_tags ON public.media_assets USING GIN(tags);