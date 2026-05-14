import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "info@heritagejaipurtravels.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FAILURE_BODY = {
  success: false as const,
  error: "Unable to send inquiry. Please try again later.",
};

const cleanEnv = (value: string | undefined) =>
  (value ?? "").trim().replace(/^['"]|['"]$/g, "");
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

const parseBody = (req: VercelRequest): Record<string, unknown> => {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body || "{}");
    } catch (error) {
      console.error("[contact] Failed to parse JSON body", error);
      return {};
    }
  }
  return req.body as Record<string, unknown>;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const body = parseBody(req);
    const name = cleanText(body.name);
    const email = cleanText(body.email).toLowerCase();
    const phone = cleanText(body.phone);
    const message = cleanText(body.message);
    const website = cleanText((body as { website?: unknown }).website);

    // Honeypot — silently accept and discard
    if (website) {
      console.warn("[contact] Honeypot tripped, ignoring submission");
      return res.status(200).json({ success: true });
    }

    if (!name || name.length > 100) {
      console.error("[contact] Invalid name", { length: name.length });
      return res.status(400).json(FAILURE_BODY);
    }
    if (!EMAIL_PATTERN.test(email) || email.length > 255) {
      console.error("[contact] Invalid email");
      return res.status(400).json(FAILURE_BODY);
    }
    if (phone.length > 30) {
      console.error("[contact] Invalid phone length");
      return res.status(400).json(FAILURE_BODY);
    }
    if (!message || message.length < 5 || message.length > 2000) {
      console.error("[contact] Invalid message length", { length: message.length });
      return res.status(400).json(FAILURE_BODY);
    }

    const smtpHost = cleanEnv(process.env.SMTP_HOST);
    const smtpPortValue = cleanEnv(process.env.SMTP_PORT);
    const smtpUser = cleanEnv(process.env.SMTP_USER);
    const smtpPass = cleanEnv(process.env.SMTP_PASS);

    if (!smtpHost || !smtpPortValue || !smtpUser || !smtpPass) {
      console.error("[contact] Missing SMTP env vars", {
        hasHost: !!smtpHost,
        hasPort: !!smtpPortValue,
        hasUser: !!smtpUser,
        hasPass: !!smtpPass,
      });
      return res.status(500).json(FAILURE_BODY);
    }

    const smtpPort = Number.parseInt(smtpPortValue, 10);
    if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
      console.error("[contact] Invalid SMTP_PORT value", { smtpPortValue });
      return res.status(500).json(FAILURE_BODY);
    }

    const secure = smtpPort === 465;
    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const text = [
      "New Inquiry – Heritage Jaipur Travels",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Time: ${submittedAt}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#fff8f0;border:1px solid rgba(201,168,76,.35);border-radius:12px;overflow:hidden">
        <div style="background:#8b1a1a;color:#fff8f0;padding:20px 24px">
          <h2 style="margin:0;font-size:21px">Heritage Jaipur Travels</h2>
          <p style="margin:5px 0 0;font-size:13px;opacity:.9">New Inquiry</p>
        </div>
        <div style="padding:24px;color:#2f241d;font-size:14px;line-height:1.6">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Time:</strong> ${escapeHtml(submittedAt)}</p>
          <hr style="border:0;border-top:1px solid rgba(201,168,76,.35);margin:20px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      </div>`;

    const transporter = nodemailer.createTransport({
host: "mail.heritagejaipurtravels.com",
port: 465,
secure: true,
auth: {
user: "[info@heritagejaipurtravels.com](mailto:info@heritagejaipurtravels.com)",
pass: process.env.SMTP_PASS,
},
connectionTimeout: 15000,
greetingTimeout: 15000,
socketTimeout: 20000,
});

await transporter.verify();


    try {
      console.log("[contact] Sending inquiry", { host: smtpHost, port: smtpPort, secure });
      const info = await transporter.sendMail({
        from: `Heritage Jaipur Travels <${smtpUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: "New Inquiry – Heritage Jaipur Travels",
        text,
        html,
      });
      console.log("[contact] Inquiry sent", { messageId: info.messageId });
      return res.status(200).json({ success: true });
    } finally {
      transporter.close();
    }
  } catch (error) {
    console.error("[contact] Inquiry email failed", error);
    return res.status(500).json(FAILURE_BODY);
  }
}
