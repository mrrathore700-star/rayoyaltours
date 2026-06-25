import { useMemo, useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Loader2, MessageCircle, Send, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const WA_NUMBER = "919887688843";
const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

/**
 * Smart inquiry form.
 * Reads context from URL search params and pre-fills the message + context display.
 * Recognised params: tour, destination, experience, service, vehicle, route,
 * duration, type, category.
 */
const CONTEXT_LABELS: Record<string, string> = {
  tour: "Tour",
  destination: "Destination",
  experience: "Experience",
  service: "Service",
  vehicle: "Vehicle Type",
  route: "Route",
  duration: "Duration",
  type: "Tour Type",
  category: "Category",
};

const Enquire = () => {
  const [params] = useSearchParams();

  const context = useMemo(() => {
    const entries: { key: string; label: string; value: string }[] = [];
    Object.keys(CONTEXT_LABELS).forEach((k) => {
      const v = params.get(k);
      if (v) entries.push({ key: k, label: CONTEXT_LABELS[k], value: v });
    });
    return entries;
  }, [params]);

  const heading = useMemo(() => {
    const tour = params.get("tour");
    const dest = params.get("destination");
    const exp = params.get("experience");
    const svc = params.get("service");
    if (tour) return `Enquire about ${tour}`;
    if (dest) return `Plan your ${dest} tour`;
    if (exp) return `Enquire about ${exp}`;
    if (svc) return `Request a ${svc} quote`;
    return "Request a personalized quote";
  }, [params]);

  const defaultMessage = useMemo(() => {
    if (!context.length) return "";
    const lines = context.map((c) => `${c.label}: ${c.value}`);
    return `I'm interested in the following:\n${lines.join("\n")}\n\nPlease share details, availability and pricing.`;
  }, [context]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    dates: "",
    travelers: "",
    message: defaultMessage,
  });
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const lastSubmit = useRef(0);

  const waMessage = useMemo(() => {
    const lines = ["Hello Heritage Jaipur Travels,"];
    if (context.length) {
      const first = context[0];
      lines.push(`I am interested in ${first.value}.`);
      context.slice(1).forEach((c) => lines.push(`${c.label}: ${c.value}`));
    } else {
      lines.push("I would like help planning my Rajasthan trip.");
    }
    lines.push("", "Travel Dates: ", "Number of Travelers: ", "", "Please share details.");
    return lines.join("\n");
  }, [context]);
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || website) return;
    if (Date.now() - lastSubmit.current < 3000) return;

    if (!form.name.trim()) return toast.error("Please enter your name.");
    if (!isValidEmail(form.email.trim())) return toast.error("Please enter a valid email.");
    if (phone && !isValidPhoneNumber(phone)) return toast.error("Please enter a valid phone number.");
    if (form.message.trim().length < 5) return toast.error("Please add a short message.");

    setSubmitting(true);
    lastSubmit.current = Date.now();

    const parts: string[] = [];
    if (context.length) {
      parts.push("Inquiry Context:");
      context.forEach((c) => parts.push(`- ${c.label}: ${c.value}`));
      parts.push("");
    }
    if (form.dates) parts.push(`Travel Dates: ${form.dates}`);
    if (form.travelers) parts.push(`Number of Travelers: ${form.travelers}`);
    if (form.dates || form.travelers) parts.push("");
    parts.push("Message:", form.message.trim());
    const composed = parts.join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: phone ?? "",
          message: composed,
          website,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) throw new Error(data?.error || "Send failed");
      setSent(true);
      toast.success("Inquiry sent — we'll be in touch shortly.");
    } catch (err) {
      console.error("Enquire submit error", err);
      toast.error("Unable to send right now. Please WhatsApp us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request A Quote | Heritage Jaipur Travels</title>
        <meta name="description" content="Share a few details and our Jaipur-based Rajasthan travel team will send you a personalized quote and itinerary." />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <main className="lux-cream-bg min-h-[80vh] py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#6E0F1F] mb-6 text-xs tracking-[0.18em] uppercase transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>

          <div className="inline-flex items-center gap-3 mb-4">
            <span className="lux-rule-gold" />
            <span className="lux-eyebrow">Request A Quote</span>
          </div>
          <h1 className="font-display font-semibold text-3xl md:text-4xl text-[#0F0F0F] leading-tight mb-3">
            {heading}
          </h1>
          <p className="font-serif text-[#0F0F0F]/70 text-base md:text-lg mb-8">
            Share a few details — our Jaipur team will reply with availability, pricing and a tailored itinerary.
          </p>

          {sent ? (
            <div
              className="rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(180deg, #FFFDF8 0%, #FFF8F0 100%)",
                border: "1px solid rgba(201,168,76,0.45)",
                boxShadow: "0 25px 60px -25px rgba(139,26,26,0.35)",
              }}
            >
              <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "rgba(34,197,94,0.12)" }}>
                <CheckCircle2 className="h-7 w-7 text-green-600" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#6E0F1F] mb-3">Thank you.</h2>
              <p className="font-serif text-[#0F0F0F]/75 text-base md:text-lg mb-8 leading-relaxed">
                Our Rajasthan travel team will contact you shortly.<br />
                You can also contact us instantly on WhatsApp.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display tracking-[0.18em] uppercase text-xs text-white"
                style={{ background: "hsl(142,70%,38%)" }}
              >
                <MessageCircle className="h-4 w-4" /> Chat On WhatsApp
              </a>
              <div className="mt-6">
                <Link to="/" className="text-xs tracking-[0.18em] uppercase text-[#C9A84C] hover:text-[#6E0F1F] transition-colors">
                  Back to homepage →
                </Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-7 md:p-9 space-y-5"
              style={{
                background: "linear-gradient(180deg, #FFFDF8 0%, #FFF8F0 100%)",
                border: "1px solid rgba(201,168,76,0.35)",
                boxShadow: "0 25px 60px -25px rgba(139,26,26,0.35)",
              }}
            >
              {context.length > 0 && (
                <div className="rounded-md border border-[#C9A84C]/40 bg-white/70 p-4">
                  <p className="font-display text-[11px] tracking-[0.22em] uppercase text-[#7A5C1E] mb-2">Your Inquiry</p>
                  <ul className="space-y-1">
                    {context.map((c) => (
                      <li key={c.key} className="text-sm text-[#0F0F0F]/80">
                        <span className="font-semibold text-[#6E0F1F]">{c.label}:</span> {c.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>Email *</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>WhatsApp Number</label>
                <div className="hjt-phone-wrapper rounded-xl bg-white px-3 py-2.5">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Your WhatsApp number"
                    countryCallingCodeEditable={false}
                    className="hjt-phone"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>Travel Dates</label>
                  <input
                    type="text"
                    placeholder="e.g. 12–20 Nov 2026"
                    maxLength={80}
                    value={form.dates}
                    onChange={(e) => setForm({ ...form, dates: e.target.value })}
                    className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>Number of Travelers</label>
                  <input
                    type="text"
                    placeholder="e.g. 2 adults"
                    maxLength={60}
                    value={form.travelers}
                    onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                    className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>Message *</label>
                <textarea
                  required
                  rows={4}
                  maxLength={1500}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground resize-none focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #8B1A1A 0%, #C9A84C 100%)",
                    color: "#FFF8F0",
                    boxShadow: "0 10px 25px -10px rgba(139,26,26,0.55)",
                  }}
                >
                  {submitting ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<><Send className="h-4 w-4" /> Send Inquiry</>)}
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 text-white"
                  style={{ background: "hsl(142,70%,38%)" }}
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Instead
                </a>
              </div>

              <p className="text-xs text-[#0F0F0F]/55 text-center">
                We'll never share your details. You'll usually hear back within a few hours.
              </p>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Enquire;
