import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

/**
 * EmailJS configuration
 * ---------------------
 * Create a free account at https://www.emailjs.com/ and replace the values below.
 *
 *   1. SERVICE_ID  – EmailJS → Email Services → your service (e.g. Gmail/SMTP that
 *                    sends FROM info@heritagejaipurtravels.com)
 *   2. TEMPLATE_ID – EmailJS → Email Templates → your template
 *                    Template "To Email" must be: info@heritagejaipurtravels.com
 *                    Use these template variables:
 *                      {{from_name}} {{from_email}} {{phone}} {{message}} {{sent_at}}
 *                    Subject: New Inquiry – Heritage Jaipur Travels
 *   3. PUBLIC_KEY  – EmailJS → Account → API Keys → Public Key
 *
 * These are public-safe keys (EmailJS is designed for client-side use).
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  // Honeypot: bots tend to fill every field. Real users won't see this.
  const [website, setWebsite] = useState("");
  const lastSubmitRef = useRef(0);

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!isValidEmail(form.email.trim())) return "Please enter a valid email address";
    if (form.message.trim().length < 5) return "Please share a few words about your trip";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    // Spam guard: honeypot + minimum 3s between submits
    if (website) return;
    if (Date.now() - lastSubmitRef.current < 3000) return;

    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }

    setSubmitting(true);
    lastSubmitRef.current = Date.now();
    try {
      const sentAt = new Date().toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
          sent_at: sentAt,
          to_email: "info@heritagejaipurtravels.com",
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setSent(true);
      toast.success("Inquiry sent successfully. Our team will contact you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Could not send your inquiry. Please try WhatsApp or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-24 pb-20" style={{ backgroundColor: "#FFF8F0" }}>
      <SEO
        title="Contact Heritage Jaipur Travels | Plan Your Rajasthan Trip"
        description="Get in touch with Heritage Jaipur Travels for Jaipur sightseeing, Rajasthan tour packages, taxi bookings and Golden Triangle trips. Call +91 94610 69858 or WhatsApp now."
        path="/contact"
      />
      <section className="container mx-auto px-4">
        <SectionHeading
          title="Contact Us"
          subtitle="Ready to plan your dream Rajasthan trip? We'd love to hear from you."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "Visit Us", value: "G 31 Ground Floor, Behind Airtel, Ganpati Plaza, MI Road, Jaipur, Rajasthan - 302001" },
                { icon: Phone, label: "Call Us", value: "+91 94610 69858", href: "tel:+919461069858" },
                { icon: Mail, label: "Email Us", value: "info@heritagejaipurtravels.com", href: "mailto:info@heritagejaipurtravels.com" },
                { icon: Instagram, label: "Follow Us", value: "@heritagejaipurtravels", href: "https://www.instagram.com/heritagejaipurtravels?igsh=MWR0d2licnJseGRqdQ%3D%3D" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full heritage-gradient flex items-center justify-center text-primary-foreground shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-primary hover:underline font-medium">{item.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919461069858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <div className="mt-8 rounded-lg overflow-hidden heritage-shadow">
              <iframe
                title="Heritage Jaipur Travels Location"
                src="https://www.google.com/maps?q=Ganpati+Plaza,+MI+Road,+Jaipur,+Rajasthan+302001&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Premium luxury inquiry form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative rounded-2xl p-7 md:p-9 space-y-5 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(180deg, #FFFDF8 0%, #FFF8F0 100%)",
              border: "1px solid rgba(201,168,76,0.35)",
              boxShadow: "0 25px 60px -25px rgba(139,26,26,0.35), 0 8px 20px -10px rgba(201,168,76,0.25)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #C9A84C 0%, #8B1A1A 50%, #C9A84C 100%)" }} />

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "#8B1A1A" }}>Quick Inquiry</h3>
              <p className="text-sm mt-1" style={{ color: "#8B1A1A99" }}>Begin your royal Rajasthan journey</p>
            </div>

            {/* Honeypot — hidden from users */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            {[
              { name: "name" as const, label: "Full Name *", type: "text", placeholder: "John Smith", maxLength: 100 },
              { name: "email" as const, label: "Email Address *", type: "email", placeholder: "john@example.com", maxLength: 255 },
              { name: "phone" as const, label: "Phone / WhatsApp", type: "tel", placeholder: "+1 234 567 8900", maxLength: 30 },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>{field.label}</label>
                <input
                  type={field.type}
                  required={field.label.includes("*")}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  maxLength={field.maxLength}
                  className="w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none"
                  style={{ border: "1px solid rgba(201,168,76,0.4)", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.03)" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.18)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.boxShadow = "inset 0 1px 2px rgba(0,0,0,0.03)"; }}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>Travel Plans / Message *</label>
              <textarea
                required
                placeholder="Tell us about your dream Rajasthan trip..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                maxLength={1500}
                className="w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground resize-none transition-all duration-200 focus:outline-none"
                style={{ border: "1px solid rgba(201,168,76,0.4)" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.18)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #8B1A1A 0%, #C9A84C 100%)",
                color: "#FFF8F0",
                boxShadow: "0 10px 25px -10px rgba(139,26,26,0.55)",
              }}
            >
              {submitting ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending Inquiry...</>
              ) : sent ? (
                <><CheckCircle2 className="h-4 w-4" /> Sent — Send Another</>
              ) : (
                "Send Inquiry"
              )}
            </button>

            {sent && (
              <p className="text-xs text-center font-medium" style={{ color: "#8B1A1A" }}>
                Inquiry sent successfully. Our team will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
