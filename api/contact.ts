import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "info@heritagejaipurtravels.com";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    // Body parse
    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    const name = body?.name?.trim() || "";
    const email = body?.email?.trim() || "";
    const phone = body?.phone?.trim() || "";
    const message = body?.message?.trim() || "";

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP
    await transporter.verify();

    // Email content
    const html = `
      <div style="font-family:Arial,sans-serif;padding:20px;background:#fff8f0">
        <h2 style="color:#8B1A1A">
          New Inquiry – Heritage Jaipur Travels
        </h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <div style="margin-top:20px">
          <strong>Message:</strong>
          <p>${message}</p>
        </div>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Heritage Jaipur Travels" <${process.env.SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: "New Inquiry – Heritage Jaipur Travels",
      html,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    console.log("EMAIL SENT:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Thank you. Our Rajasthan travel specialist will contact you shortly.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Unable to send inquiry right now. Please try again later.",
    });
  }
}
