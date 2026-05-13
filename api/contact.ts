import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const RECIPIENT = "info@heritagejaipurtravels.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );

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

    const host = process.env.SMTP_HOST?.trim();
    const port = Number.parseInt(process.env.SMTP_PORT?.trim() || "465", 10);
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();

    if (!host || !user || !pass || !Number.isInteger(port)) {
      console.error("SMTP env vars missing or invalid");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
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
      console.error("SMTP send failed:", sendErr);
      return res.status(502).json({
        success: false,
        error: "Unable to send inquiry. Please try again later.",
      });
    } finally {
      transporter.close();
    }

    return res.status(200).json({
      success: true,
      message: "Thank you. Our travel specialist will contact you shortly.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({
      success: false,
      error: "Unable to send inquiry. Please try again later.",
    });
  }
}
