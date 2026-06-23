import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import LuxHero from "@/components/luxury/LuxHero";
import LuxCtaBand from "@/components/luxury/LuxCtaBand";

import heroPalace from "@/assets/hero-palace.jpg";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

const Contact = () => {
  const { t, i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [website, setWebsite] = useState("");
  const lastSubmitRef = useRef(0);

  const defaultCountry = (() => {
    const lng = i18n.language?.split("-")[0];
    const map: Record<string, "IN" | "US" | "GB" | "FR" | "DE" | "ES" | "IT"> = {
      en: "GB", fr: "FR", de: "DE", es: "ES", it: "IT",
    };
    return map[lng ?? "en"] ?? "IN";
  })();

  const validate = () => {
    if (!form.name.trim()) return t("contact.errorName");
    if (!isValidEmail(form.email.trim())) return t("contact.errorEmail");
    if (phone && !isValidPhoneNumber(phone)) return t("contact.errorPhone");
    if (form.message.trim().length < 5) return t("contact.errorMessage");
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: phone ?? "",
          message: form.message.trim(),
          website,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Send failed");
      }

      setSent(true);
      toast.success(t("contact.thankYou"));
      setForm({ name: "", email: "", message: "" });
      setPhone(undefined);
      formRef.current?.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(t("contact.errorSend"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="lux-cream-bg">
      <SEO
        title="Contact Heritage Jaipur Travels | Plan Your Private Rajasthan Journey"
        description="Speak with a Rajasthan travel specialist at Heritage Jaipur Travels — private journeys, transfers and handpicked experiences. Call +91 98876 88843 or WhatsApp now."
        path="/contact"
      />

      <LuxHero
        image={heroPalace}
        eyebrow="Contact Us"
        title={<>Contact Our <span className="text-[#C9A84C]">Jaipur</span> Travel Team</>}
        subtitle="Share your travel dates, destinations, number of travelers and any special requirements — we'll get back to you with a plan and a personalized quote."
      />

      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: "Visit Us", value: "G 31 Ground Floor, Ganpati Plaza, MI Road, Jaipur, Rajasthan - 302001" },
                { icon: Phone, label: "Call Us", value: "+91 98876 88843", href: "tel:+919887688843" },
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
              href="https://wa.me/919887688843"
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
              <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "#8B1A1A" }}>{t("contact.sendTitle")}</h3>
              <p className="text-sm mt-1" style={{ color: "#8B1A1A99" }}>{t("contact.sendSubtitle")}</p>
            </div>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>{t("contact.fullName")} *</label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>{t("contact.email")} *</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>{t("contact.phone")}</label>
              <div className="hjt-phone-wrapper rounded-xl bg-white px-3 py-2.5 transition-all duration-200">
                <PhoneInput
                  international
                  defaultCountry={defaultCountry}
                  value={phone}
                  onChange={setPhone}
                  placeholder={t("contact.phonePlaceholder")}
                  countryCallingCodeEditable={false}
                  className="hjt-phone"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "#8B1A1A" }}>{t("contact.message")} *</label>
              <textarea
                required
                placeholder={t("contact.messagePlaceholder")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                maxLength={1500}
                className="hjt-input w-full px-4 py-3 rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground resize-none transition-all duration-200 focus:outline-none"
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
                <><Loader2 className="h-4 w-4 animate-spin" /> {t("contact.sending")}</>
              ) : sent ? (
                <><CheckCircle2 className="h-4 w-4" /> {t("contact.sent")}</>
              ) : (
                t("contact.send")
              )}
            </button>

            {sent && (
              <p className="text-xs text-center font-medium" style={{ color: "#8B1A1A" }}>
                {t("contact.thankYou")}
              </p>
            )}
          </form>
        </div>
      </section>

      <LuxCtaBand
        image={heroPalace}
        eyebrow="Or WhatsApp"
        title={<>Message Us Directly On <span className="text-[#C9A84C]">WhatsApp</span></>}
        subtitle="Our Jaipur team usually replies within a few hours."
        primary={{ label: "WhatsApp Our Jaipur Team", href: "https://wa.me/919887688843", external: true }}
        secondary={{ label: "Call +91 98876 88843", href: "tel:+919887688843" }}
      />
    </main>
  );
};

export default Contact;
