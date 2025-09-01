#!/usr/bin/env node

/**
 * Test script for Google Sheets integration
 * Run this script to test if your Google Sheets API is working correctly
 */

const { google } = require("googleapis");

const testGoogleSheets = async () => {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!privateKey || !spreadsheetId) {
    console.error("❌ Environment variables not set!");
    console.log("Please set GOOGLE_PRIVATE_KEY and GOOGLE_SPREADSHEET_ID");
    return;
  }

  console.log("🔑 Private Key:", privateKey ? "✅ Set" : "❌ Missing");
  console.log("📊 Spreadsheet ID:", spreadsheetId ? "✅ Set" : "❌ Missing");
  console.log("");

  try {
    // Initialize Google Sheets API client
    const serviceAccountKey = {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID || "talentform",
      private_key_id:
        process.env.GOOGLE_PRIVATE_KEY_ID ||
        "2cafc07b0f0c997b45c0acbb054dce8219b1036a",
      private_key: privateKey.replace(/\\n/g, "\n"),
      client_email:
        process.env.GOOGLE_CLIENT_EMAIL ||
        "talentform-devartventures@talentform.iam.gserviceaccount.com",
      client_id: process.env.GOOGLE_CLIENT_ID || "113215235269123585181",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/talentform-devartventures%40talentform.iam.gserviceaccount.com",
      universe_domain: "googleapis.com",
    };

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Test reading the spreadsheet metadata
    const response = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });

    const data = response.data;
    console.log("✅ Successfully connected to Google Sheets!");
    console.log("📋 Spreadsheet Title:", data.properties.title);
    console.log("📄 Sheets:");

    data.sheets.forEach((sheet) => {
      console.log(
        `   - ${sheet.properties.title} (${sheet.properties.gridProperties.rowCount} rows × ${sheet.properties.gridProperties.columnCount} columns)`
      );
    });

    // Test appending to Company Requests sheet
    console.log("\n🧪 Testing append functionality...");
    const testData = [
      new Date().toISOString(),
      "Test Company",
      "Test Contact",
      "test@example.com",
      "+1234567890",
      "Web Development",
      "1-2 developers",
      "3-6 months",
      "Immediate (1-2 weeks)",
      "React, Node.js",
      "$50k-100k",
      "This is a test submission",
      "Test",
      new Date().toISOString().split("T")[0],
    ];

    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: "Company Requests!A:A",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [testData],
      },
    });

    if (appendResponse.status === 200) {
      console.log(
        "✅ Successfully appended test data to Company Requests sheet!"
      );
      console.log("📝 You can now delete this test row from your spreadsheet");
    } else {
      console.error(
        "❌ Failed to append test data:",
        appendResponse.statusText
      );
    }
  } catch (error) {
    console.error("❌ Error testing Google Sheets:", error.message);

    if (error.message.includes("API key not valid")) {
      console.log("\n💡 Solution: Check your GOOGLE_PRIVATE_KEY");
    } else if (error.message.includes("Unable to parse range")) {
      console.log("\n💡 Solution: Check your spreadsheet ID and sheet names");
    } else if (error.message.includes("does not have permission")) {
      console.log("\n💡 Solution: Check spreadsheet sharing permissions");
    }
  }
};

// Load environment variables from .env.local if it exists
try {
  require("dotenv").config({ path: ".env.local" });
} catch (e) {
  // dotenv not installed, continue without it
}

testGoogleSheets();
