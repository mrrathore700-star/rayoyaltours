CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text NOT NULL DEFAULT 'website',
  name text NOT NULL,
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  travelers integer,
  travel_date text,
  tour_name text,
  tour_slug text,
  page_url text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT enquiries_name_len CHECK (char_length(name) BETWEEN 1 AND 200),
  CONSTRAINT enquiries_email_len CHECK (char_length(email) <= 320),
  CONSTRAINT enquiries_phone_len CHECK (char_length(phone) <= 40),
  CONSTRAINT enquiries_message_len CHECK (char_length(message) <= 5000),
  CONSTRAINT enquiries_contact CHECK (char_length(email) > 0 OR char_length(phone) > 0)
);
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an enquiry" ON public.enquiries FOR INSERT TO anon, authenticated WITH CHECK (status = 'new');
CREATE POLICY "Admins can view enquiries" ON public.enquiries FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update enquiries" ON public.enquiries FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete enquiries" ON public.enquiries FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));