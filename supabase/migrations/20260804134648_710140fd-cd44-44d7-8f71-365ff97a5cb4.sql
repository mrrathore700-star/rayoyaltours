ALTER TABLE public.media_assets
  ADD COLUMN IF NOT EXISTS path_hero text,
  ADD COLUMN IF NOT EXISTS path_standard text,
  ADD COLUMN IF NOT EXISTS path_thumb text,
  ADD COLUMN IF NOT EXISTS bytes_original integer,
  ADD COLUMN IF NOT EXISTS bytes_optimized integer;