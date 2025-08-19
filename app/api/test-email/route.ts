import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    // Check if email config exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({
        error: "Email configuration missing",
        config: {
          EMAIL_USER: !!process.env.EMAIL_USER,
          EMAIL_PASS: !!process.env.EMAIL_PASS,
          ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
        },
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test email configuration
    await transporter.verify();

    return NextResponse.json({
      message: "Email configuration is valid!",
      config: {
        EMAIL_USER: process.env.EMAIL_USER,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS ? "***SET***" : "NOT SET",
      },
    });
  } catch (error: any) {
    console.error("Email test error:", error);

    return NextResponse.json({
      error: "Email configuration failed",
      details: error.message,
      code: error.code,
      config: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS ? "***SET***" : "NOT SET",
      },
    });
  }
}
