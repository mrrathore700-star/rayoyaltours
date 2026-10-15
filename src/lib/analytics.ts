// GA4 event helpers. Never send personal data (name, email, phone, message).
type Gtag = (...args: unknown[]) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/** Fire only after the backend confirms a successful submission. */
export function trackLead(formName: string, extra: Record<string, unknown> = {}) {
  trackEvent("generate_lead", { form_name: formName, page_path: window.location.pathname, ...extra });
}

let installed = false;
/** One delegated listener for WhatsApp / phone / email clicks site-wide (no duplicates). */
export function installClickTracking() {
  if (installed || typeof document === "undefined") return;
  installed = true;
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const base = { page_path: window.location.pathname, link_text: (a.textContent || "").trim().slice(0, 60) };
      if (/wa\.me|whatsapp\.com/i.test(href)) trackEvent("whatsapp_click", base);
      else if (href.startsWith("tel:")) trackEvent("phone_click", base);
      else if (href.startsWith("mailto:")) trackEvent("email_click", base);
    },
    { capture: true },
  );
}
