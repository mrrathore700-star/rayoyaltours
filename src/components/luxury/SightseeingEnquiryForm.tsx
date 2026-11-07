import { useMemo, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { submitEnquiry } from "@/lib/enquiries";
import { trackLead } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919887688843";
const attractionNames = [
  "Amber Fort",
  "Jaigarh Fort",
  "Nahargarh Fort",
  "Jal Mahal",
  "Hawa Mahal",
  "City Palace",
  "Jantar Mantar",
  "Panna Meena Ka Kund",
  "Albert Hall Museum",
  "The Bazaars",
  "Patrika Gate",
];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().max(255, "Email must be 255 characters or fewer.").refine(
    (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
    "Please enter a valid email address.",
  ),
  travelers: z.string().refine((value) => {
    if (!value) return true;
    const count = Number(value);
    return Number.isInteger(count) && count >= 1 && count <= 50;
  }, "Choose between 1 and 50 guests."),
  date: z.string(),
  vehicle: z.string(),
  requirements: z.string().trim().max(1000, "Please keep your message under 1,000 characters."),
});

type FormValues = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormValues | "phone", string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  travelers: "2",
  date: "",
  vehicle: "",
  requirements: "",
};

const fieldClass = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const SightseeingEnquiryForm = () => {
  const { toast } = useToast();
  const [values, setValues] = useState(initialValues);
  const [phone, setPhone] = useState("");
  const [selectedAttractions, setSelectedAttractions] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const lastSubmit = useRef(0);

  const whatsappHref = useMemo(() => {
    const details = [
      "Hello Heritage Jaipur Travels,",
      "I have submitted a private Jaipur sightseeing enquiry.",
      `Name: ${values.name.trim() || "Not provided"}`,
      `WhatsApp: ${phone || "Not provided"}`,
      `Email: ${values.email || "Not provided"}`,
      `Travel date: ${values.date || "Flexible"}`,
      `Guests: ${values.travelers || "Not specified"}`,
      `Vehicle preference: ${values.vehicle || "Please advise"}`,
      `Places of interest: ${selectedAttractions.length ? selectedAttractions.join(", ") : "Please suggest an itinerary"}`,
      `Additional requirements: ${values.requirements.trim() || "None"}`,
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details)}`;
  }, [phone, selectedAttractions, values]);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const toggleAttraction = (name: string, checked: boolean) => {
    setSelectedAttractions((current) => checked
      ? [...current, name]
      : current.filter((item) => item !== name));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting || website || Date.now() - lastSubmit.current < 3000) return;

    const result = schema.safeParse(values);
    const nextErrors: FormErrors = {};
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        nextErrors[key] = nextErrors[key] ?? issue.message;
      });
    }
    if (!phone.trim()) nextErrors.phone = "Please enter your WhatsApp number.";
    else if (!isValidPhoneNumber(phone)) nextErrors.phone = "Please enter a valid WhatsApp number.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      toast({ title: "Please check the highlighted fields", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    lastSubmit.current = Date.now();
    const message = [
      "Private Jaipur sightseeing enquiry",
      `Interested places: ${selectedAttractions.length ? selectedAttractions.join(", ") : "Open to recommendations"}`,
      `Preferred vehicle: ${values.vehicle || "No preference"}`,
      `Additional requirements: ${values.requirements.trim() || "None"}`,
    ].join("\n");

    try {
      await submitEnquiry({
        source: "sightseeing_enquiry",
        name: values.name,
        email: values.email,
        phone,
        message,
        travelers: values.travelers ? Number(values.travelers) : null,
        travelDate: values.date || null,
        tourName: "Private Jaipur Sightseeing Tour",
        tourSlug: "jaipur-sightseeing",
        website,
      });
      trackLead("sightseeing_enquiry", { tour_slug: "jaipur-sightseeing" });
      setSent(true);
      toast({ title: "Thank you! We’ve received your enquiry." });
    } catch {
      toast({
        title: "Unable to send your enquiry right now.",
        description: "Your details are still here. Please try again or message us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-md border border-border bg-card p-6 text-center shadow-sm md:p-8" role="status">
        <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-primary" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-foreground">Your sightseeing enquiry is with our Jaipur team.</h3>
        <p className="mt-2 text-sm text-muted-foreground">Continue on WhatsApp if you would like to add any details.</p>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center rounded-full lux-btn-wa px-5 py-3 font-display text-xs uppercase">
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  const errorText = (key: keyof FormErrors) => errors[key]
    ? <p className="mt-1 text-xs text-destructive" role="alert">{errors[key]}</p>
    : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-md border border-border bg-card p-5 shadow-sm md:p-8">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="sightseeing-website">Website</label>
        <input id="sightseeing-website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sightseeing-name" className="text-sm font-medium text-foreground">Full name <span aria-hidden="true">*</span></label>
          <Input id="sightseeing-name" autoComplete="name" maxLength={100} value={values.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "sightseeing-name-error" : undefined} />
          {errors.name && <p id="sightseeing-name-error" className="mt-1 text-xs text-destructive" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="sightseeing-email" className="text-sm font-medium text-foreground">Email</label>
          <Input id="sightseeing-email" type="email" autoComplete="email" maxLength={255} value={values.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="sightseeing-phone" className="text-sm font-medium text-foreground">Phone / WhatsApp <span aria-hidden="true">*</span></label>
          <div className="mt-1 rounded-md border border-input bg-background px-3 py-2.5 focus-within:ring-2 focus-within:ring-ring">
            <PhoneInput id="sightseeing-phone" international defaultCountry="IN" value={phone || undefined} onChange={(value) => { setPhone(value ?? ""); setErrors((current) => ({ ...current, phone: undefined })); }} placeholder="Your WhatsApp number" countryCallingCodeEditable={false} className="hjt-phone" aria-invalid={Boolean(errors.phone)} />
          </div>
          {errorText("phone")}
        </div>
        <div>
          <label htmlFor="sightseeing-date" className="text-sm font-medium text-foreground">Travel date</label>
          <Input id="sightseeing-date" type="date" min={new Date().toISOString().slice(0, 10)} value={values.date} onChange={(event) => update("date", event.target.value)} />
        </div>
        <div>
          <label htmlFor="sightseeing-guests" className="text-sm font-medium text-foreground">Number of guests</label>
          <Input id="sightseeing-guests" type="number" min={1} max={50} inputMode="numeric" value={values.travelers} onChange={(event) => update("travelers", event.target.value)} aria-invalid={Boolean(errors.travelers)} />
          {errorText("travelers")}
        </div>
        <div>
          <label htmlFor="sightseeing-vehicle" className="text-sm font-medium text-foreground">Preferred vehicle</label>
          <select id="sightseeing-vehicle" className={fieldClass} value={values.vehicle} onChange={(event) => update("vehicle", event.target.value)}>
            <option value="">No preference — please advise</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
            <option value="Force Urbania">Force Urbania</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-foreground">Places you are interested in</legend>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
          {attractionNames.map((name) => {
            const id = `sightseeing-stop-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            return (
              <label key={name} htmlFor={id} className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                <Checkbox id={id} checked={selectedAttractions.includes(name)} onCheckedChange={(checked) => toggleAttraction(name, checked === true)} />
                <span>{name}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="sightseeing-requirements" className="text-sm font-medium text-foreground">Additional requirements</label>
        <textarea id="sightseeing-requirements" rows={3} maxLength={1000} className={`${fieldClass} resize-y`} value={values.requirements} onChange={(event) => update("requirements", event.target.value)} aria-invalid={Boolean(errors.requirements)} />
        {errorText("requirements")}
      </div>

      <Button type="submit" disabled={submitting} className="w-full rounded-full lux-btn-gold py-6 font-display text-xs uppercase disabled:cursor-not-allowed">
        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send sightseeing enquiry</>}
      </Button>
      <p className="text-xs text-muted-foreground">Fields marked * are required. Your enquiry will be saved before a confirmation appears.</p>
    </form>
  );
};

export default SightseeingEnquiryForm;