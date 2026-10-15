REVOKE ALL ON FUNCTION public.claim_first_admin() FROM PUBLIC, anon, authenticated;
DROP FUNCTION IF EXISTS public.claim_first_admin();