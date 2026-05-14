
# Project 70K MVP Setup

## STEP 1 — Create Paystack Account
https://paystack.com

Copy your PUBLIC KEY into index.html

Replace:
YOUR_PAYSTACK_PUBLIC_KEY

---

## STEP 2 — Create Google Sheet

Create a sheet named:

Donations

Columns:
Timestamp | Name | Email | Phone | Category | Amount | Reference

---

## STEP 3 — Google Apps Script

1. Open Extensions > Apps Script
2. Paste apps_script.gs code
3. Deploy as Web App
4. Set access to Anyone

Copy deployment URL.

Replace:
YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL

inside index.html

---

## STEP 4 — Deploy Website

Upload index.html to:
- Vercel
- Netlify
- GitHub Pages

---

## STEP 5 — Test

Make a small payment.
Verify Google Sheets updates correctly.
