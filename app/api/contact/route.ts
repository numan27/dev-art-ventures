import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      reason,
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      wantsNDA,
      callASAP,
    } = data;

    if (!reason || !firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email,
      text: `
Reason: ${reason}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "-"}
Service: ${service || "-"}
Wants NDA: ${wantsNDA ? "Yes" : "No"}
Call ASAP: ${callASAP ? "Yes" : "No"}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
