import { useMemo, useRef, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const WA_NUMBER = "919887688843";

export interface TourEnquiryJourney {
  tourName: string;
  tourSlug: string;
  tourUrl: string;
}

interface TourEnquiryFormProps extends TourEnquiryJourney {
  className?: string;
  showHeading?: boolean;
  onSuccess?: () => void;
  idPrefix?: string;
}

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .max(255, "Email must be 255 characters or fewer.")
    .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value), "Please enter a valid email address."),
  phone: z.string().trim().min(1, "Please enter your WhatsApp number.").max(30, "Phone must be 30 characters or fewer."),
  travelers: z.string().refine((value) => {
    const count = Number(value);
    return Number.isInteger(count) && count >= 1 && count <= 50;
  }, "Please choose between 1 and 50 travellers."),
  date: z.string().min(1, "Please choose your preferred travel date."),
  message: z.string().trim().max(1000, "Special requests must be 1,000 characters or fewer."),
});

type EnquiryForm = z.infer<typeof enquirySchema>;
type FieldErrors = Partial<Record<keyof EnquiryForm, string>>;

const initialForm: EnquiryForm = {
  name: "",
  email: "",
  phone: "",
  travelers: "2",
  date: "",
  message: "",
};

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

const TourEnquiryForm = ({
  tourName,
  tourSlug,
  tourUrl,
  className = "",
  showHeading = true,
  onSuccess,
  idPrefix = "tour-enquiry",
}: TourEnquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const lastSubmit = useRef(0);

  const whatsappHref = useMemo(() => {
    const message = [
      "Hello Heritage Jaipur Travels,",
      "",
      `I would like to continue my enquiry about: ${tourName}`,
      `Name: ${form.name.trim() || "Not provided"}`,
      `Travellers: ${form.travelers}`,
      `Preferred Travel Date: ${form.date || "Not provided"}`,
      `Special Requests: ${form.message.trim() || "None"}`,
    ].join("\n");
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [form, tourName]);

  const updateField = <K extends keyof EnquiryForm>(field: K, value: EnquiryForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || Date.now() - lastSubmit.current < 3000) return;

    const parsed = enquirySchema.safeParse(form);
    const nextErrors: FieldErrors = {};
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof EnquiryForm;
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      });
    }
    if (form.phone && !isValidPhoneNumber(form.phone)) {
      nextErrors.phone = "Please enter a valid WhatsApp number.";
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast({ title: "Please check the highlighted fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    lastSubmit.current = Date.now();
    const specialRequests = form.message.trim() || "None provided";
    const message = [
      `Tour: ${tourName}`,
      `Tour Slug: ${tourSlug}`,
      `Tour URL: ${tourUrl}`,
      `Number of Travellers: ${form.travelers}`,
      `Preferred Travel Date: ${form.date}`,
      "",
      `Special Requests: ${specialRequests}`,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message,
          travelers: Number(form.travelers),
          date: form.date,
          tourName,
          tourSlug,
          tourUrl,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.success) throw new Error(data?.error || "Unable to send enquiry.");
      setSent(true);
      toast({ title: "Thank you! We’ve received your enquiry." });
      onSuccess?.();
    } catch {
      toast({
        title: "Unable to send your enquiry right now.",
        description: "Please try again or continue the conversation on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className={`bg-card rounded-lg p-6 heritage-shadow text-center ${className}`}>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600/10">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground">Thank you! We’ve received your enquiry.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Our travel specialist will contact you shortly.</p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full lux-btn-wa px-5 py-3 font-display text-xs uppercase tracking-[0.16em]"
        >
          <MessageCircle className="h-4 w-4" /> Continue On WhatsApp
        </a>
      </div>
    );
  }

  const fieldError = (field: keyof EnquiryForm) =>
    errors[field] ? <p className="mt-1 text-xs text-destructive" role="alert">{errors[field]}</p> : null;

  return (
    <form onSubmit={handleSubmit} noValidate className={`bg-card rounded-lg p-6 heritage-shadow space-y-4 ${className}`}>
      {showHeading && (
        <div className="mb-2">
          <h2 className="font-display text-2xl font-semibold text-foreground">Enquire About This Journey</h2>
          <p className="mt-1 text-sm text-muted-foreground">Share your details and our specialist will respond shortly.</p>
        </div>
      )}

      <div>
        <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-sm font-semibold text-foreground">Full Name *</label>
        <input id={`${idPrefix}-name`} type="text" autoComplete="name" maxLength={100} className={inputClass} value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} />
        {fieldError("name")}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="mb-1 block text-sm font-semibold text-foreground">Email</label>
        <input id={`${idPrefix}-email`} type="email" autoComplete="email" maxLength={255} className={inputClass} value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} />
        {fieldError("email")}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className="mb-1 block text-sm font-semibold text-foreground">Phone / WhatsApp *</label>
        <div className="rounded-md border border-border bg-background px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary">
          <PhoneInput
            id={`${idPrefix}-phone`}
            international
            defaultCountry="IN"
            value={form.phone || undefined}
            onChange={(value) => updateField("phone", value ?? "")}
            placeholder="Your WhatsApp number"
            countryCallingCodeEditable={false}
            className="hjt-phone"
          />
        </div>
        {fieldError("phone")}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-travelers`} className="mb-1 block text-sm font-semibold text-foreground">Number of Travellers *</label>
        <input id={`${idPrefix}-travelers`} type="number" min={1} max={50} inputMode="numeric" className={inputClass} value={form.travelers} onChange={(event) => updateField("travelers", event.target.value)} aria-invalid={Boolean(errors.travelers)} />
        {fieldError("travelers")}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-date`} className="mb-1 block text-sm font-semibold text-foreground">Preferred Travel Date *</label>
        <input id={`${idPrefix}-date`} type="date" min={new Date().toISOString().split("T")[0]} className={inputClass} value={form.date} onChange={(event) => updateField("date", event.target.value)} aria-invalid={Boolean(errors.date)} />
        {fieldError("date")}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className="mb-1 block text-sm font-semibold text-foreground">Special Requests</label>
        <textarea id={`${idPrefix}-message`} rows={3} maxLength={1000} className={`${inputClass} resize-none`} value={form.message} onChange={(event) => updateField("message", event.target.value)} />
        {fieldError("message")}
      </div>

      <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-full lux-btn-gold py-3.5 font-display text-xs uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Enquiry</>}
      </button>
    </form>
  );
};

export default TourEnquiryForm;