// Secure SMTP-based contact form endpoint for Heritage Jaipur Travels.
// Sends inquiry emails directly to info@heritagejaipurtravels.com via SMTP.
// Runtime secrets used: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.

// @deno-types="npm:@types/nodemailer@6.4.17"
import nodemailer from "npm:nodemailer@6.9.16";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const RECIPIENT = "info@heritagejaipurtravels.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

const json = (payload: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const getSecret = (name: string) => {
  const raw = Deno.env.get(name)?.trim();
  if (!raw) return "";

  // Be tolerant of values accidentally saved as "SMTP_HOST=mail.example.com".
  const prefix = `${name}=`;
  const normalized = raw.startsWith(prefix) ? raw.slice(prefix.length).trim() : raw;

  return normalized.replace(/^['"]|['"]$/g, "");
};

const resolveSmtpConfig = () => {
  const host = getSecret("SMTP_HOST");
  const portValue = getSecret("SMTP_PORT");
  const user = getSecret("SMTP_USER");
  const pass = getSecret("SMTP_PASS");
  const port = Number.parseInt(portValue || "465", 10);

  if (!host || !user || !pass) {
    return { error: "Missing SMTP_HOST, SMTP_USER, or SMTP_PASS" } as const;
  }

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    return { error: `Invalid SMTP_PORT value: ${portValue || "empty"}` } as const;
  }

  return { host, port, user, pass } as const;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return json({ success: false, error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? ""); // honeypot

    if (website) return json({ success: true, ok: true });

    // Validation
    if (!name || name.length > 100) return bad("Please enter a valid name");
    if (!EMAIL_RE.test(email) || email.length > 255) return bad("Please enter a valid email");
    if (phone && phone.length > 30) return bad("Phone number is too long");
    if (!message || message.length < 5 || message.length > 2000)
      return bad("Please share a few words about your trip");

    const smtpConfig = resolveSmtpConfig();
    if ("error" in smtpConfig) {
      console.error("Contact SMTP configuration error:", smtpConfig.error);
      return json({ success: false, error: "Email service not configured" }, 500);
    }

    const { host, port, user, pass } = smtpConfig;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

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
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#FFF8F0;border:1px solid #C9A84C40;border-radius:12px">
        <h2 style="color:#8B1A1A;margin:0 0 16px">New Inquiry – Heritage Jaipur Travels</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333">
          <tr><td style="padding:6px 0;font-weight:bold;width:120px">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;font-weight:bold">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:6px 0;font-weight:bold">Phone</td><td>${escapeHtml(phone || "Not provided")}</td></tr>
          <tr><td style="padding:6px 0;font-weight:bold">Date &amp; Time</td><td>${escapeHtml(sentAt)}</td></tr>
        </table>
        <h3 style="color:#8B1A1A;margin:20px 0 8px">Message</h3>
        <p style="white-space:pre-wrap;color:#333;line-height:1.5">${escapeHtml(message)}</p>
      </div>`;

    try {
      await transporter.sendMail({
        from: `Heritage Jaipur Travels <${user}>`,
        to: RECIPIENT,
        replyTo: `${name} <${email}>`,
        subject: "New Inquiry - Heritage Jaipur Travels",
        text,
        html,
      });
    } catch (sendErr) {
      console.error("Contact SMTP send failed:", { host, port, user, error: String(sendErr) });
      transporter.close();
      return json({ success: false, error: "Unable to send inquiry. Please try again later." }, 502);
    }

    transporter.close();

    return json({ success: true, ok: true });
  } catch (err) {
    console.error("Contact function error:", err);
    return json({ success: false, error: "Unable to send inquiry. Please try again later." }, 500);
  }
});

function bad(msg: string) {
  return json({ success: false, error: msg }, 400);
}
