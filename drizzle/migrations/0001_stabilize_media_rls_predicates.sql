DROP POLICY IF EXISTS "Published media assets are publicly readable" ON public.media_assets;
CREATE POLICY "Published media assets are publicly readable"
ON public.media_assets
FOR SELECT
TO anon, authenticated
USING (
  featured_homepage = true
  OR featured_gallery = true
  OR featured_package = true
  OR featured_blog = true
  OR featured_destination = true
  OR featured_experience = true
  OR featured_vehicle = true
  OR EXISTS (
    SELECT 1
    FROM public.media_slots s
    WHERE s.asset_id = media_assets.id
  )
);

CREATE POLICY "Admins can view all media assets"
ON public.media_assets
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Published media slots are publicly readable" ON public.media_slots;
CREATE POLICY "Bound media slots are publicly readable"
ON public.media_slots
FOR SELECT
TO anon, authenticated
USING (asset_id IS NOT NULL);

CREATE POLICY "Admins can view all media slots"
ON public.media_slots
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all legacy gallery images"
ON public.gallery_images
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Public can read published gallery files" ON storage.objects;
CREATE POLICY "Public can read published gallery files"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (
  bucket_id = 'gallery'
  AND EXISTS (
    SELECT 1
    FROM public.media_assets a
    WHERE a.bucket = storage.objects.bucket_id
      AND (
        storage.objects.name = a.image_path
        OR storage.objects.name = a.path_hero
        OR storage.objects.name = a.path_standard
        OR storage.objects.name = a.path_thumb
      )
      AND (
        a.featured_homepage = true
        OR a.featured_gallery = true
        OR a.featured_package = true
        OR a.featured_blog = true
        OR a.featured_destination = true
        OR a.featured_experience = true
        OR a.featured_vehicle = true
        OR EXISTS (
          SELECT 1
          FROM public.media_slots s
          WHERE s.asset_id = a.id
        )
      )
  )
);