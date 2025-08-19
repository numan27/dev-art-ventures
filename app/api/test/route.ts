import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API is working!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    emailConfigured: {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
    },
    airtableConfigured: {
      AIRTABLE_PAT_TOKEN: !!process.env.AIRTABLE_PAT_TOKEN,
      AIRTABLE_BASE_ID: !!process.env.AIRTABLE_BASE_ID,
    },
  });
}
