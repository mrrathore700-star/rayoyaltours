import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const templateData = { name: form.name, email: form.email, phone: form.phone, message: form.message };
      const [adminRes, userRes] = await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "inquiry-notification",
            idempotencyKey: `inquiry-admin-${id}`,
            templateData,
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "inquiry-confirmation",
            recipientEmail: form.email,
            idempotencyKey: `inquiry-user-${id}`,
            templateData: { name: form.name, message: form.message },
          },
        }),
      ]);
      if (adminRes.error) throw adminRes.error;
      if (userRes.error) console.warn("User confirmation failed", userRes.error);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast.error("Could not send your inquiry. Please try WhatsApp or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-24 pb-20">
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
            {/* Map */}
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

          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 md:p-8 heritage-shadow space-y-5">
            <h3 className="font-display text-2xl font-bold text-foreground">Quick Inquiry</h3>
            {[
              { name: "name" as const, label: "Your Name *", type: "text", placeholder: "John Smith" },
              { name: "email" as const, label: "Email Address *", type: "email", placeholder: "john@example.com" },
              { name: "phone" as const, label: "Phone / WhatsApp", type: "tel", placeholder: "+1 234 567 8900" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  maxLength={field.name === "name" ? 100 : field.name === "email" ? 255 : 20}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Your Message *</label>
              <textarea
                placeholder="Tell us about your dream Rajasthan trip..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md heritage-gradient text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
