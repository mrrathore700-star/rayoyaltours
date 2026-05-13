import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer, { type Transporter } from "nodemailer";

const RECIPIENT = "info@heritagejaipurtravels.com";
const REPLY_TO_SUPPORT = "support@heritagejaipurtravels.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

const clean = (v: string | undefined) =>
  (v ?? "").trim().replace(/^[\'"]|[\'"]$/g, "").replace(/^[A-Z_]+=/, "");

const parseSecure = (value: string | undefined, fallback: boolean) => {
  const normalized = clean(value).toLowerCase();
  if (["true", "1", "yes"].includes(normalized)) return true;
  if (["false", "0", "no"].includes(normalized)) return false;
  return fallback;
};

type SmtpAttempt = { host: string; port: number; secure: boolean; label: string };

function buildAttempts(): SmtpAttempt[] {
  const host = clean(process.env.SMTP_HOST) || "mail.heritagejaipurtravels.com";
  const port = Number.parseInt(clean(process.env.SMTP_PORT) || "465", 10);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("Invalid SMTP_PORT. Expected a number like 465.");
  }

  return [{ host, port, secure: parseSecure(process.env.SMTP_SECURE, port === 465), label: "smtp" }];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body ?? {});
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? ""); // honeypot

    if (website) return res.status(200).json({ success: true });

    if (!name || name.length > 100)
      return res.status(400).json({ success: false, error: "Please enter a valid name" });
    if (!EMAIL_RE.test(email) || email.length > 255)
      return res.status(400).json({ success: false, error: "Please enter a valid email" });
    if (phone && phone.length > 30)
      return res.status(400).json({ success: false, error: "Phone number is too long" });
    if (!message || message.length < 5 || message.length > 2000)
      return res.status(400).json({ success: false, error: "Please share a few words about your trip" });

    if (!clean(process.env.SMTP_HOST)) console.warn("[contact] SMTP_HOST missing — using mail.heritagejaipurtravels.com");
    if (!clean(process.env.SMTP_PORT)) console.warn("[contact] SMTP_PORT missing — using 465");
    if (!clean(process.env.SMTP_SECURE)) console.warn("[contact] SMTP_SECURE missing — using true for port 465");

    const user = clean(process.env.SMTP_USER) || "info@heritagejaipurtravels.com";
    if (!clean(process.env.SMTP_USER)) console.warn("[contact] SMTP_USER missing — using info@heritagejaipurtravels.com");
    const pass = clean(process.env.SMTP_PASS);

    if (!pass) {
      console.warn("[contact] SMTP_PASS missing — cannot send email");
      return res.status(500).json({
        success: false,
        error: "Email service not configured. Please contact us via WhatsApp.",
      });
    }

    const sentAt = new Date().toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const text =
      `New Inquiry - Heritage Jaipur Travels\n\n` +
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n` +
      `Date & Time: ${sentAt}\n\nMessage:\n${message}\n`;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;background:#FFF8F0;border:1px solid #C9A84C40;border-radius:12px;overflow:hidden">
        <div style="background:linear-gradient(135deg,#8B1A1A 0%,#C9A84C 100%);padding:20px 24px">
          <h2 style="color:#FFF8F0;margin:0;font-size:20px;letter-spacing:.5px">Heritage Jaipur Travels</h2>
          <p style="color:#FFF8F0;opacity:.9;margin:4px 0 0;font-size:13px">New Quick Inquiry</p>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333">
            <tr><td style="padding:8px 0;font-weight:bold;width:130px;color:#8B1A1A">Name</td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#8B1A1A">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:#8B1A1A">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#8B1A1A">Phone</td><td>${escapeHtml(phone || "Not provided")}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#8B1A1A">Submitted</td><td>${escapeHtml(sentAt)}</td></tr>
          </table>
          <h3 style="color:#8B1A1A;margin:20px 0 8px;border-top:1px solid #C9A84C40;padding-top:16px">Message</h3>
          <p style="white-space:pre-wrap;color:#333;line-height:1.6;margin:0">${escapeHtml(message)}</p>
        </div>
        <div style="background:#8B1A1A;color:#FFF8F0;padding:12px 24px;font-size:12px;text-align:center">
          Reply directly to this email to respond to ${escapeHtml(name)}.
        </div>
      </div>`;

    const attempts = buildAttempts();
    const errors: string[] = [];

    for (const attempt of attempts) {
      let transporter: Transporter | null = null;
      try {
        transporter = nodemailer.createTransport({
          host: attempt.host,
          port: attempt.port,
          secure: attempt.secure,
          auth: { user, pass },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
          tls: { rejectUnauthorized: false },
        });

        await transporter.verify();

        await transporter.sendMail({
          from: `Heritage Jaipur Travels <${user}>`,
          to: RECIPIENT,
          replyTo: `${name} <${email}>`,
          headers: { "Reply-To": `${name} <${email}>`, "X-Support-Contact": REPLY_TO_SUPPORT },
          subject: "New Inquiry – Heritage Jaipur Travels",
          text,
          html,
        });

        console.log(`[contact] sent via ${attempt.label} (${attempt.host}:${attempt.port})`);
        return res.status(200).json({
          success: true,
          message: "Thank you. Our Rajasthan travel specialist will contact you shortly.",
        });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn(`[contact] attempt ${attempt.label} failed: ${msg}`);
        errors.push(`${attempt.label}: ${msg}`);
      } finally {
        try { transporter?.close(); } catch { /* ignore */ }
      }
    }

    console.error("[contact] all SMTP attempts failed:", errors.join(" | "));
    return res.status(502).json({
      success: false,
      error: "Unable to send inquiry right now. Please try again later.",
    });
  } catch (err) {
    console.error("[contact] handler error:", err);
    return res.status(500).json({
      success: false,
      error: "Unable to send inquiry right now. Please try again later.",
    });
  }
}
