import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Google Sheets API configuration
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const COMPANY_REQUESTS_SHEET_NAME = "Company Requests";
const DESIGNER_APPLICATIONS_SHEET_NAME = "Designer Applications";

// Initialize Google Sheets API client
const getGoogleSheetsClient = () => {
  const serviceAccountKey = {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID || "talentform",
    private_key_id:
      process.env.GOOGLE_PRIVATE_KEY_ID ||
      "2cafc07b0f0c997b45c0acbb054dce8219b1036a",
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    client_email:
      process.env.GOOGLE_CLIENT_EMAIL ||
      "talentform-devartventures@talentform.iam.gserviceaccount.com",
    client_id: process.env.GOOGLE_CLIENT_ID || "113215235269123585181",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      process.env.GOOGLE_CLIENT_X509_CERT_URL ||
      "https://www.googleapis.com/robot/v1/metadata/x509/talentform-devartventures%40talentform.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  };

  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
};

// Helper function to append data to Google Sheets
async function appendToGoogleSheet(sheetName: string, values: any[]) {
  if (!SPREADSHEET_ID) {
    throw new Error("Google Spreadsheet ID configuration missing");
  }

  try {
    const sheets = getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:A`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Google Sheets API error:", error);
    throw new Error(`Google Sheets API error: ${error.message}`);
  }
}

// Helper function to format date for Google Sheets
const formatDateForSheets = (date: Date) => {
  return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
};

// Helper function to format timestamp for Google Sheets
const formatTimestampForSheets = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  };
  return date.toLocaleString('en-US', options);
};
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    if (!formType || !formData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Google Sheets configuration is set up
    if (!SPREADSHEET_ID) {
      console.error("Google Sheets configuration missing:", {
        SPREADSHEET_ID: !!SPREADSHEET_ID,
      });

      // For development, allow form submission without Google Sheets
      if (process.env.NODE_ENV === "development") {
        console.log(
          "Development mode: Allowing form submission without Google Sheets"
        );
        return NextResponse.json(
          {
            message:
              "Form submitted successfully (development mode - Google Sheets not configured)",
            formData: { formType, formData },
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          error:
            "Google Spreadsheet ID not configured. Please check environment variables.",
        },
        { status: 500 }
      );
    }

    // Prepare email content
    let emailSubject = "";
    let emailHtml = "";

    if (formType === "company") {
      emailSubject = "New Staff Augmentation Request";
      emailHtml = `
        <h2>New Staff Augmentation Request</h2>
        <p><strong>Company Name:</strong> ${formData.companyName}</p>
        <p><strong>Contact Name:</strong> ${formData.contactName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Team Size Needed:</strong> ${formData.teamSize}</p>
        <p><strong>Project Duration:</strong> ${formData.duration}</p>
        <p><strong>Timeline to Start:</strong> ${formData.timeline}</p>
        <p><strong>Required Skills:</strong> ${formData.skills}</p>
        <p><strong>Budget Range:</strong> ${formData.budget}</p>
        <p><strong>Project Description:</strong></p>
        <p>${formData.description}</p>
      `;
    } else if (formType === "designer") {
      emailSubject = "New Designer Application";
      emailHtml = `
        <h2>New Designer Application</h2>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Portfolio URL:</strong> ${formData.portfolio}</p>
        <p><strong>Years of Experience:</strong> ${formData.experience}</p>
        <p><strong>Availability:</strong> ${formData.availability}</p>
        <p><strong>Skills & Technologies:</strong> ${formData.skills}</p>
        <p><strong>Hourly Rate:</strong> ${formData.hourlyRate}</p>
        <p><strong>LinkedIn Profile:</strong> ${formData.linkedin}</p>
        <p><strong>GitHub Profile:</strong> ${formData.github}</p>
        <p><strong>Bio & Experience Summary:</strong></p>
        <p>${formData.bio}</p>
      `;
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    // Send email to admin if email is configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
          subject: emailSubject,
          html: emailHtml,
        };

        await transporter.sendMail(adminMailOptions);
        console.log("Admin email sent successfully");
      } catch (emailError) {
        console.error("Failed to send admin email:", emailError);
        // Don't fail the entire request if admin email fails
      }

      // Send confirmation email to user
      try {
        const userMailOptions = {
          from: process.env.EMAIL_USER,
          to: formData.email,
          subject: `Thank you for your ${
            formType === "company"
              ? "staff augmentation request"
              : "designer application"
          }`,
          html: `
            <h2>Thank you for your submission!</h2>
            <p>We have received your ${
              formType === "company"
                ? "staff augmentation request"
                : "designer application"
            } and will review it shortly.</p>
            <p>Our team will get back to you within 24-48 hours.</p>
            <br>
            <p>Best regards,</p>
            <p>DevArt Ventures Team</p>
          `,
        };

        await transporter.sendMail(userMailOptions);
        console.log("User confirmation email sent successfully");
      } catch (emailError) {
        console.error("Failed to send user confirmation email:", emailError);
        // Don't fail the entire request if user email fails
      }
    }

    // Add to Google Sheets
    try {
      if (formType === "company") {
        const companyValues = [
          formatTimestampForSheets(new Date()), // Timestamp
          formData.companyName,
          formData.contactName,
          formData.email,
          formData.phone,
          formData.projectType,
          formData.teamSize,
          formData.duration,
          formData.timeline,
          formData.skills,
          formData.budget,
          formData.description,
          "New", // Status
          formatDateForSheets(new Date()),
        ];

        await appendToGoogleSheet(COMPANY_REQUESTS_SHEET_NAME, companyValues);
        console.log("Company request added to Google Sheets successfully");
      } else if (formType === "designer") {
        const designerValues = [
          formatTimestampForSheets(new Date()), // Timestamp
          formData.fullName,
          formData.email,
          formData.phone,
          formData.portfolio,
          formData.experience,
          formData.availability,
          formData.skills,
          formData.hourlyRate,
          formData.linkedin,
          formData.github,
          formData.bio,
          "New", // Status
          formatDateForSheets(new Date()),
        ];

        await appendToGoogleSheet(
          DESIGNER_APPLICATIONS_SHEET_NAME,
          designerValues
        );
        console.log("Designer application added to Google Sheets successfully");
      }
    } catch (sheetsError: any) {
      console.error("Google Sheets error:", sheetsError);
      return NextResponse.json(
        { error: `Failed to save to Google Sheets: ${sheetsError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
