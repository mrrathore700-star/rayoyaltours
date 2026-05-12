// Secure SMTP-based contact form endpoint for Heritage Jaipur Travels.
// Sends inquiry emails directly to info@heritagejaipurtravels.com via SMTP.
// Uses env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.

import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? ""); // honeypot

    if (website) return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

    // Validation
    if (!name || name.length > 100) return bad("Please enter a valid name");
    if (!EMAIL_RE.test(email) || email.length > 255) return bad("Please enter a valid email");
    if (phone && phone.length > 30) return bad("Phone number is too long");
    if (!message || message.length < 5 || message.length > 2000)
      return bad("Please share a few words about your trip");

    const host = Deno.env.get("SMTP_HOST");
    const port = Number(Deno.env.get("SMTP_PORT") ?? "465");
    const user = Deno.env.get("SMTP_USER");
    const pass = Deno.env.get("SMTP_PASS");
    if (!host || !user || !pass) {
      console.error("Missing SMTP env vars");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const client = new SMTPClient({
      connection: {
        hostname: host,
        port,
        tls: port === 465, // implicit TLS for 465, STARTTLS otherwise
        auth: { username: user, password: pass },
      },
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
      await client.send({
        from: `Heritage Jaipur Travels <${user}>`,
        to: RECIPIENT,
        replyTo: `${name} <${email}>`,
        subject: "New Inquiry - Heritage Jaipur Travels",
        content: text,
        html,
      });
    } catch (sendErr) {
      console.error("SMTP send failed", { host, port, user, err: String(sendErr) });
      try { await client.close(); } catch (_) { /* ignore */ }
      return new Response(
        JSON.stringify({ error: "Failed to send inquiry", detail: String(sendErr) }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    try { await client.close(); } catch (_) { /* ignore */ }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("contact error", err);
    return new Response(
      JSON.stringify({ error: "Failed to send inquiry", detail: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

function bad(msg: string) {
  return new Response(JSON.stringify({ error: msg }), {
    status: 400,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
