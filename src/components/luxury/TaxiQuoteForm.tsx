import { useState } from "react";
import { z } from "zod";
import { submitEnquiry } from "@/lib/enquiries";
import { trackLead } from "@/lib/analytics";

const WA_NUMBER = "919887688843";
const VEHICLES = ["Sedan", "SUV — Ertiga / Innova", "Toyota Innova Crysta", "Tempo Traveller", "Luxury Vehicle", "Not sure — suggest one"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone / WhatsApp number").max(25).regex(/^[+\d\s()-]+$/, "Only numbers, spaces and +"),
  pickup: z.string().trim().min(2, "Enter pickup location").max(120),
  drop: z.string().trim().min(2, "Enter drop / route").max(120),
  date: z.string().min(1, "Choose a travel date"),
  vehicle: z.string().min(1),
  tripType: z.string().min(1),
});

type Form = z.infer<typeof schema> & { website: string };

const inputCls = "w-full bg-white border border-[#C9A84C]/40 rounded-sm px-4 py-3 font-serif text-[15px] text-[#0F0F0F] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]";

const TaxiQuoteForm = () => {
  const [f, setF] = useState<Form>({ name: "", phone: "", pickup: "", drop: "", date: "", vehicle: VEHICLES[0], tripType: "One-Way", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const summary = `Taxi enquiry: ${f.pickup} → ${f.drop} (${f.tripType}) on ${f.date}, vehicle: ${f.vehicle}`;
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi! ${summary}. Name: ${f.name}`)}`;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    const r = schema.safeParse(f);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await submitEnquiry({ source: "taxi", name: f.name, phone: f.phone, message: summary, travelDate: f.date, tourName: `Taxi: ${f.pickup} to ${f.drop}`, tourSlug: "taxi", website: f.website });
      trackLead("taxi_form");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="p-8 bg-white/90 border border-[#C9A84C]/40 rounded-sm text-center" role="status">
        <h3 className="font-display text-2xl text-[#6E0F1F] font-semibold mb-2">Thank you, {f.name}!</h3>
        <p className="font-serif text-[#0F0F0F]/75 mb-6">Our Jaipur team will send your taxi quote shortly. For a faster reply, continue on WhatsApp.</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="lux-btn-whatsapp inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold tracking-[0.14em] uppercase">Continue on WhatsApp</a>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p className="text-xs text-[#6E0F1F] mt-1">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="p-6 md:p-8 bg-white/90 border border-[#C9A84C]/40 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" name="website" value={f.website} onChange={set("website")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Pickup Location*</label><input className={inputCls} value={f.pickup} onChange={set("pickup")} placeholder="e.g. Jaipur Airport" />{err("pickup")}</div>
      <div><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Drop / Route*</label><input className={inputCls} value={f.drop} onChange={set("drop")} placeholder="e.g. Udaipur or Hotel" />{err("drop")}</div>
      <div><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Travel Date*</label><input type="date" className={inputCls} value={f.date} onChange={set("date")} min={new Date().toISOString().slice(0, 10)} />{err("date")}</div>
      <div><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Trip Type</label>
        <select className={inputCls} value={f.tripType} onChange={set("tripType")}><option>One-Way</option><option>Round-Trip</option><option>Local (8 hr / 80 km)</option><option>Multi-Day Tour</option></select></div>
      <div><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Vehicle</label>
        <select className={inputCls} value={f.vehicle} onChange={set("vehicle")}>{VEHICLES.map((v) => <option key={v}>{v}</option>)}</select></div>
      <div><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Your Name*</label><input className={inputCls} value={f.name} onChange={set("name")} autoComplete="name" />{err("name")}</div>
      <div className="md:col-span-2"><label className="text-xs uppercase tracking-[0.14em] text-[#6E0F1F] font-semibold">Phone / WhatsApp*</label><input type="tel" className={inputCls} value={f.phone} onChange={set("phone")} placeholder="+44 7700 900123" autoComplete="tel" />{err("phone")}</div>
      {status === "error" && <p className="md:col-span-2 text-sm text-[#6E0F1F]">Could not send right now. Your details are kept — please try again or <a href={waLink} className="underline" target="_blank" rel="noopener noreferrer">WhatsApp us</a>.</p>}
      <button type="submit" disabled={status === "sending"} className="lux-btn-gold md:col-span-2 px-6 py-3.5 rounded-sm text-sm font-semibold tracking-[0.16em] uppercase disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Get My Taxi Quote"}
      </button>
    </form>
  );
};

export default TaxiQuoteForm;
