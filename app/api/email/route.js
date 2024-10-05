import { google } from "googleapis";
import { NextResponse } from "next/server";

// Load your Google Cloud service account key
// Note: In production, use environment variables or a more secure method
const serviceAccountKey = require("../../../path-to-your-service-account-key.json");

// Configure a JWT auth client
const jwtClient = new google.auth.JWT(
  serviceAccountKey.client_email,
  null,
  serviceAccountKey.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

export async function POST(request) {
  try {
    const { emails } = await request.json();

    // Authorize the client
    await jwtClient.authorize();

    // Get the Google Sheets instance
    const sheets = google.sheets({ version: "v4", auth: jwtClient });

    // Specify the spreadsheet ID and range
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Sheet1!A:A"; // Assumes you want to add emails to column A

    // Prepare the values to be inserted
    const values = emails.map((email) => [email]);

    // Append the values to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values,
      },
    });

    return NextResponse.json({
      message: "Emails added successfully",
      response: response.data,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to add emails to Google Sheet" },
      { status: 500 }
    );
  }
}
