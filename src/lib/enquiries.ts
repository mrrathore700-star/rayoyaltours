import { supabase } from "@/integrations/supabase/client";

export interface EnquiryInput {
  source: string;
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  travelers?: number | null;
  travelDate?: string | null;
  tourName?: string | null;
  tourSlug?: string | null;
  /** Honeypot field — if filled, silently pretend success. */
  website?: string;
}

/**
 * Saves the enquiry to the database (source of truth). Email notification via
 * /api/contact is a best-effort backup and never decides success.
 */
export async function submitEnquiry(input: EnquiryInput): Promise<void> {
  if (input.website) return;
  const row = {
    source: input.source,
    name: input.name.trim().slice(0, 200),
    email: (input.email ?? "").trim().slice(0, 320),
    phone: (input.phone ?? "").trim().slice(0, 40),
    message: (input.message ?? "").trim().slice(0, 5000),
    travelers: input.travelers ?? null,
    travel_date: input.travelDate ?? null,
    tour_name: input.tourName ?? null,
    tour_slug: input.tourSlug ?? null,
    page_url: typeof window !== "undefined" ? window.location.href : null,
  };

  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    const { error } = await supabase.from("enquiries").insert(row);
    if (!error) {
      lastError = null;
      break;
    }
    lastError = error;
    await new Promise((r) => setTimeout(r, 800));
  }
  if (lastError) throw lastError;

  // Backup email notification — fire and forget.
  fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: row.name,
      email: row.email,
      phone: row.phone,
      message: row.message,
      travelers: row.travelers ?? undefined,
      date: row.travel_date ?? undefined,
      tourName: row.tour_name ?? undefined,
      tourSlug: row.tour_slug ?? undefined,
      tourUrl: row.page_url ?? undefined,
    }),
    keepalive: true,
  }).catch(() => {});
}
