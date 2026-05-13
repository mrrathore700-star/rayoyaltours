import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "info@heritagejaipurtravels.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type InquiryBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
};

const cleanEnv = (value: string | undefined) => (value ?? "").trim().replace(/^['"]|['"]$/g, "");
const cleanText = (value: unknown) => String(value ?? "").trim();

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char] ?? char;
  });

const parseBody = (req: VercelRequest): InquiryBody => {
  if (!req.body) return {};
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  return req.body as InquiryBody;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).json({ success: true });
  }

  if (req.method !== "POST") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const body = parseBody(req);
    const name = cleanText(body.name);
    const email = cleanText(body.email).toLowerCase();
    const phone = cleanText(body.phone);
    const message = cleanText(body.message);
    const website = cleanText(body.website);

    if (website) {
      console.warn("[contact] Honeypot submission ignored");
      return res.status(200).json({ success: true });
    }

    if (!name || name.length > 100) {
      return res.status(500).json({ success: false, error: "Invalid inquiry name." });
    }

    if (!EMAIL_PATTERN.test(email) || email.length > 255) {
      return res.status(500).json({ success: false, error: "Invalid inquiry email." });
    }

    if (phone.length > 30) {
      return res.status(500).json({ success: false, error: "Invalid inquiry phone." });
    }

    if (!message || message.length < 5 || message.length > 2000) {
      return res.status(500).json({ success: false, error: "Invalid inquiry message." });
    }

    const smtpHost = cleanEnv(process.env.SMTP_HOST) || "mail.heritagejaipurtravels.com";
    const smtpPortValue = cleanEnv(process.env.SMTP_PORT) || "465";
    const smtpPort = Number.parseInt(smtpPortValue, 10);
    const smtpUser = cleanEnv(process.env.SMTP_USER) || RECIPIENT_EMAIL;
    const smtpPass = cleanEnv(process.env.SMTP_PASS);

    if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
      console.error("[contact] Invalid SMTP_PORT value", { smtpPortValue });
      return res.status(500).json({ success: false, error: "Email service configuration error." });
    }

    if (!smtpPass) {
      console.error("[contact] SMTP_PASS environment variable is missing");
      return res.status(500).json({ success: false, error: "Email service is not configured." });
    }

    const secure = smtpPort === 465;
    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const text = [
      "New Inquiry - Heritage Jaipur Travels",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#fff8f0;border:1px solid rgba(201,168,76,.35);border-radius:12px;overflow:hidden">
        <div style="background:#8b1a1a;color:#fff8f0;padding:20px 24px">
          <h2 style="margin:0;font-size:21px">Heritage Jaipur Travels</h2>
          <p style="margin:5px 0 0;font-size:13px;opacity:.9">New Quick Inquiry</p>
        </div>
        <div style="padding:24px;color:#2f241d;font-size:14px;line-height:1.6">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
          <hr style="border:0;border-top:1px solid rgba(201,168,76,.35);margin:20px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      </div>`;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      console.log("[contact] Verifying SMTP connection", { host: smtpHost, port: smtpPort, secure });
      await transporter.verify();

      const info = await transporter.sendMail({
        from: `Heritage Jaipur Travels <${smtpUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: "New Inquiry - Heritage Jaipur Travels",
        text,
        html,
      });

      console.log("[contact] Inquiry email sent", { messageId: info.messageId, host: smtpHost, port: smtpPort });
      return res.status(200).json({
        success: true,
        message: "Thank you. Our Rajasthan travel specialist will contact you shortly.",
      });
    } finally {
      transporter.close();
    }
  } catch (error) {
    console.error("[contact] Inquiry email failed", error);
    return res.status(500).json({
      success: false,
      error: "Unable to send inquiry right now. Please try again later.",
    });
  }
}
