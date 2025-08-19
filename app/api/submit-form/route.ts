import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Airtable from "airtable";

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Airtable configuration
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_PAT_TOKEN,
});

const base = airtable.base(process.env.AIRTABLE_BASE_ID || "");

// Helper function to format date for Airtable
const formatDateForAirtable = (date: Date) => {
  return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
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

    // Check if email configuration is set up
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing:", {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
      });

      // For development, allow form submission without email
      if (process.env.NODE_ENV === "development") {
        console.log("Development mode: Allowing form submission without email");
        return NextResponse.json(
          {
            message:
              "Form submitted successfully (development mode - email not configured)",
            formData: { formType, formData },
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          error:
            "Email service not configured. Please check environment variables.",
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
    } else if (formType === "contact") {
      emailSubject = "New Contact Form Submission";
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `;
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    // Send email to admin
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
      return NextResponse.json(
        { error: "Failed to send admin notification email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    try {
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: formData.email,
        subject: `Thank you for your ${
          formType === "company"
            ? "staff augmentation request"
            : formType === "designer"
            ? "designer application"
            : "contact form submission"
        }`,
        html: `
          <h2>Thank you for your submission!</h2>
          <p>We have received your ${
            formType === "company"
              ? "staff augmentation request"
              : formType === "designer"
              ? "designer application"
              : "contact form submission"
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
      console.log("Continuing with form submission despite user email failure");
    }

    // Add to Airtable if configured
    if (process.env.AIRTABLE_PAT_TOKEN && process.env.AIRTABLE_BASE_ID) {
      try {
        if (formType === "company") {
          await base("Company Requests").create([
            {
              fields: {
                "Company Name": formData.companyName,
                "Contact Name": formData.contactName,
                Email: formData.email,
                Phone: formData.phone,
                "Project Type": formData.projectType,
                "Team Size": formData.teamSize,
                Duration: formData.duration,
                Timeline: formData.timeline,
                Skills: formData.skills,
                Budget: parseFloat(formData.budget) || 0,
                Description: formData.description,
                Status: "New",
                "Submitted At": formatDateForAirtable(new Date()),
              },
            },
          ]);
          console.log("Company request added to Airtable successfully");
        } else if (formType === "designer") {
          await base("Designer Applications").create([
            {
              fields: {
                "Full Name": formData.fullName,
                Email: formData.email,
                Phone: formData.phone,
                Portfolio: formData.portfolio,
                Experience: formData.experience,
                Availability: formData.availability,
                Skills: formData.skills,
                "Hourly Rate": parseFloat(formData.hourlyRate) || 0,
                LinkedIn: formData.linkedin,
                GitHub: formData.github,
                Bio: formData.bio,
                Status: "New",
                "Submitted At": formatDateForAirtable(new Date()),
              },
            },
          ]);
          console.log("Designer application added to Airtable successfully");
        } else if (formType === "contact") {
          await base("Contact Submissions").create([
            {
              fields: {
                "Full Name": formData.fullName,
                Email: formData.email,
                Phone: formData.phone,
                "Project Type": formData.projectType,
                Message: formData.message,
                Status: "New",
                "Submitted At": formatDateForAirtable(new Date()),
              },
            },
          ]);
          console.log("Contact submission added to Airtable successfully");
        }
      } catch (airtableError: any) {
        console.error("Airtable error:", airtableError);
        console.error("Airtable error details:", {
          error: airtableError.error,
          message: airtableError.message,
          statusCode: airtableError.statusCode,
        });
      }
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
