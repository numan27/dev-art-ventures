# Airtable Integration Setup

## 🚀 **Step-by-Step Setup:**

### **Step 1: Create Airtable Account**

1. Go to [airtable.com](https://airtable.com)
2. Sign up for free account
3. Create a new base called "Talent Applications"

### **Step 2: Create Tables**

#### **Company Requests Table:**

Create these fields:

- Company Name (Single line text)
- Contact Name (Single line text)
- Email (Email)
- Phone (Phone number)
- Project Type (Single select: Web Development, Mobile Development, UI/UX Design, DevOps & Infrastructure, QA & Testing, Full-Stack Development)
- Team Size (Single select: 1-2 developers, 3-5 developers, 6-10 developers, 10+ developers)
- Duration (Single select: 1-3 months, 3-6 months, 6-12 months, 12+ months)
- Timeline (Single select: Immediate, Soon, Flexible)
- Skills (Long text)
- Budget (Single line text)
- Description (Long text)
- Status (Single select: New, In Review, Contacted, Hired, Rejected)
- Submitted At (Date)

#### **Designer Applications Table:**

Create these fields:

- Full Name (Single line text)
- Email (Email)
- Phone (Phone number)
- Portfolio (URL)
- Experience (Single select: 0-1 years, 1-3 years, 3-5 years, 5+ years)
- Availability (Single select: Full-time, Part-time, Contract-based, Project-based)
- Skills (Long text)
- Hourly Rate (Number)
- LinkedIn (URL)
- GitHub (URL)
- Bio (Long text)
- Status (Single select: New, In Review, Interviewed, Hired, Rejected)
- Submitted At (Date)

### **Step 3: Get Personal Access Token**

1. Go to your Airtable account settings
2. Click **Developer hub** section
3. Click **Create new token**
4. Give it a name (e.g., "Talent Form Integration")
5. Set permissions: **data.records:read** and **data.records:write**
6. Copy your **Personal Access Token**

### **Step 4: Get Base ID**

1. In your base, click **Help** → **API Documentation**
2. Copy the **Base ID** from the URL
3. It looks like: `appXXXXXXXXXXXXXX`

### **Step 5: Update Environment Variables**

Add these to your `.env.local`:

```bash
AIRTABLE_PAT_TOKEN=your_personal_access_token_here
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

## ✅ **What Happens Now:**

1. **Form Submission** → Email sent ✅
2. **Data stored in Airtable** ✅
3. **Beautiful interface** to manage applications ✅
4. **Easy filtering and sorting** ✅
5. **Status tracking** for each application ✅

## 🎯 **Benefits of Airtable:**

- **Better UI** than Google Sheets
- **Easy filtering** by status, skills, experience
- **Kanban view** for application workflow
- **Mobile app** for managing on the go
- **Free tier**: 1,200 API requests/month (more than enough!)

## 🔧 **Testing:**

After setup, test the form:

1. Submit a test application
2. Check your Airtable base
3. You should see a new record with status "New"

The integration is now much simpler and more powerful than Google Sheets!
