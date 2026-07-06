import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LuxSectionHeading from "./LuxSectionHeading";

interface LuxEnquiryFormProps {
  subject: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "cream" | "white";
  contextLine?: string;
}

const LuxEnquiryForm = ({
  subject,
  eyebrow = "Enquire",
  title = "Send Us Your Enquiry",
  intro = "Share your details and our Jaipur team will respond personally within a few hours.",
  tone = "white",
  contextLine,
}: LuxEnquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const bg = tone === "cream" ? "lux-cream-bg" : "bg-white";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please add your name and phone", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const lines = [
      `Hello Heritage Jaipur Travels,`,
      ``,
      contextLine ?? `I'd like to enquire about: ${subject}`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Travellers: ${form.travelers}`,
      `Preferred Date: ${form.date}`,
      `Message: ${form.message}`,
    ];
    const url = `https://wa.me/919887688843?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Opening WhatsApp", description: "Your enquiry is ready to send." });
    setSubmitting(false);
  };

  const inputCls =
    "w-full rounded-sm border border-[#C9A84C]/30 bg-white px-4 py-3 text-[15px] font-serif text-[#0F0F0F] focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition";

  return (
    <section className={`${bg} py-20 md:py-28 border-t`} style={{ borderColor: "rgba(110,15,31,0.10)" }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <LuxSectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm border border-[#C9A84C]/25 rounded-sm p-6 md:p-10 space-y-5 shadow-[0_2px_30px_rgba(110,15,31,0.06)]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6E0F1F] font-display mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                maxLength={100}
                className={inputCls}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6E0F1F] font-display mb-2">
                Email
              </label>
              <input
                type="email"
                maxLength={255}
                className={inputCls}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6E0F1F] font-display mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                maxLength={20}
                className={inputCls}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6E0F1F] font-display mb-2">
                Travellers
              </label>
              <input
                type="number"
                min={1}
                max={50}
                className={inputCls}
                value={form.travelers}
                onChange={(e) => setForm({ ...form, travelers: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6E0F1F] font-display mb-2">
              Preferred Travel Date
            </label>
            <input
              type="date"
              className={inputCls}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-[11px] tracking-[0.22em] uppercase text-[#6E0F1F] font-display mb-2">
              Tell Us About Your Trip
            </label>
            <textarea
              rows={4}
              maxLength={1000}
              className={`${inputCls} resize-none`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Destinations you'd like to see, style of hotels, pace of travel…"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full lux-btn-gold font-display tracking-[0.18em] uppercase text-xs md:text-sm disabled:opacity-60"
          >
            <Send className="h-4 w-4" /> Send Enquiry
          </button>
          <p className="text-center font-serif italic text-[13px] text-[#0F0F0F]/60">
            Your enquiry opens WhatsApp with your details pre-filled. We reply within a few hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default LuxEnquiryForm;
