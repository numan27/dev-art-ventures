# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration for the talent form on the staff-augmentation page.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console
3. A Google Spreadsheet

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Create two sheets with the following names:
   - `Company Requests`
   - `Designer Applications`

## Step 2: Set up Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 3: Create Service Account Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - **Service account name**: `talentform-devartventures`
   - **Service account ID**: Will auto-generate
   - **Description**: "Service account for talent form Google Sheets integration"
4. Click "Create and Continue"
5. Skip the optional steps (grant access, etc.) and click "Done"
6. Click on the created service account
7. Go to the "Keys" tab
8. Click "Add Key" > "Create new key"
9. Choose "JSON" format
10. Download the JSON file (this contains your credentials)

## Step 4: Configure Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Google Sheets Configuration
# Copy the private_key from your service account JSON file
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqqgnfKFA6a3aT\nrVXnECZ9RSa7HtLLuaIrLt+IO0+m/Wjkqjq3ThHdKRGjWNcrMij4LqWbs95vcAZ4\ntR7mcScA7s5CG6eoirz6oGAU91V4ZmXpOGSmUsBcDg4IrgUzGV8vaESfWqhQ9j7O\nbi1iifnpzcS9r8U+qovEzpIJDNc0kQUNcaqNMHaPIHPFQipuLyBo6mRSHGFzTAWb\nK8j9XJO9mmhztcJqGjsct84Mig79JQF9nz5BWiMs2OweEsoDcCsqwl/HDaSk1e/2\nfFcgnaIqWW54z8Molf+seRXbnqzCiGmcrFljtIBGFCHeZPZwpWlZ1dY1ZuNLhWem\nqLv++ytdAgMBAAECggEAD6Phn7fcEl6C0WnTM4fBXz2VHRToEI+EkxyKk7uLwyv6\nDuqi0uWusWvwF94uaeEA7C2qM6i6O9AyZ6GBoXDBOE6qTFiodsOwKe/EnmdER/Jq\naIMohi2TP1xyYM1B4Lr0hC20DD6Mqk7G1rg2JI+sfYbD/vY6x1Ft2a1sqLOqjUCO\ntDNE6xhx0+Bl1DZ2+pMUaDrBoK9RN3v8JcU/Wa0yi6BYZvx+ILBprlvj0lfbGVvG\n8O8IIxBQ8k5YSDDSv3qbCDoBSOJYzlnDu0epmKKIiV7lCVDvhTco+OfkEsHThRW0\npMIb47vSC8UzDAzTFacXc6rO2iZ3sNDFl7DvpEDeAQKBgQDZr9/vh2ZgD29JWjqu\nPTVbrePD9O0rakpxXSIdV57c3vGgTjHH0rhkwTCifDdH+mWuNpo29wNfmOXoRAfN\n46keUD00DIUNgVrzZgd1JcWRN3v8JcU/Wa0yi6BYZvx+ILBprlvj0lfbGVvG\n8O8IIxBQ8k5YSDDSv3qbCDoBSOJYzlnDu0epmKKIiV7lCVDvhTco+OfkEsHThRW0\npMIb47vSC8UzDAzTFacXc6rO2iZ3sNDFl7DvpEDeAQKBgQDIs4AfLG8Wvahlz1qNHIN8z4VlezyZZnjb\nWYNxNo3hdWzZ6BlJOZYUISa/NBlCOkqxcj3X42zXwVTa0xc4d4Z+4Uu8BAh5yJTm\nA6cOd3ihoEPIWuZ4Y4ziLmySrNLluJk+DNpN7tSlApdqbVCIofw31JK5rJswsS6M\nyySaGNCHnQKBgF3vPrqlus+I2YTVoqy9TOEa0EYm0pEBdM4mWio/PRYiPjHmjCSm\nEVuo4cu7vj8ZFfdvKGy/en0uBUeM07FMpBWomkBzhpalUxHk3SL4AaAm40vxbGV3\n301P/LBK+6v9FGcWv9piH5iaPBhiWMwNjJZm5DIWuEKpVJEMs8RJBqoBAoGBAK6R\n0yNKVuYE2XCUx0JuRsBNEM6QPsl/JChG19mlhgtRQ/jVtQjIGg4wN6+f9Uhxw35M\nzBX4LzgLZW9gpJXtAQNjm6hSKb0kBr969dfTew26hLrEtiqJDIW/s5hw0pAV3NTo\nAQpAbp2If4OGycHOg79cGrN9uw7DTqYQHCoc42TRAoGBAIK1eI0YMPlX6Loyap5m\n8mXROc/3vCXH+/gxoe8qXpEn8FElyzk2a73IVsxtOm9whAWZ1ijv+hABaFJWhWBl\nwNLO/0CKhWxMt6MGUmlvaHDbzAi/rNaoXaH9Vw0N9HkzuMHa1VpZiRHoyaSOFrPS\nYt0iFXIRlGHpReF91lM9b7UN\n-----END PRIVATE KEY-----\n"

# Google Spreadsheet ID (found in the URL of your spreadsheet)
# Format: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here

# Email Configuration (optional - for notifications)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
ADMIN_EMAIL=admin@yourcompany.com

# Environment
NODE_ENV=production
```

## Step 5: Set up Spreadsheet Headers

### Company Requests Sheet

Add these headers in the first row:

```
Timestamp | Company Name | Contact Name | Email | Phone | Project Type | Team Size | Duration | Timeline | Skills | Budget | Description | Status | Submitted Date
```

### Designer Applications Sheet

Add these headers in the first row:

```
Timestamp | Full Name | Email | Phone | Portfolio | Experience | Availability | Skills | Hourly Rate | LinkedIn | GitHub | Bio | Status | Submitted Date
```

## Step 6: Configure Spreadsheet Permissions

1. In your Google Spreadsheet, click "Share" in the top right
2. Set the permission to "Anyone with the link can view"
3. Make sure the Google account associated with your API key has access

## Step 7: Test the Integration

1. Start your development server
2. Go to the staff-augmentation page
3. Fill out and submit the talent form
4. Check your Google Spreadsheet to see if the data was added

## Troubleshooting

### Common Issues

1. **"Google Sheets API error: API key not valid"**

   - Check that your API key is correct
   - Ensure the Google Sheets API is enabled in your project

2. **"Google Sheets API error: Unable to parse range"**

   - Check that your sheet names match exactly: "Company Requests" and "Designer Applications"
   - Ensure the sheets exist in your spreadsheet

3. **"Google Sheets API error: The caller does not have permission"**
   - Check that your spreadsheet is shared with the correct permissions
   - Ensure your API key has access to the spreadsheet

### Development Mode

In development mode, the form will submit successfully even without Google Sheets configuration. Check the console for relevant messages.

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your API key secure and don't share it publicly
- Consider restricting your API key to only the Google Sheets API and specific IP addresses if needed

## API Endpoint

The form now submits to `/api/sheets` instead of `/api/submit-form`. This new endpoint:

- Saves data to Google Sheets
- Sends email notifications (if configured)
- Provides better error handling
- Includes timestamps for all submissions
