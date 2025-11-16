# EmailJS Setup Guide for SOLVIOX Energy & Lighting

This guide will help you set up EmailJS to enable the contact form to send emails directly from the website.

## 📧 What is EmailJS?

EmailJS allows you to send emails directly from client-side JavaScript without needing a backend server. It's perfect for contact forms on static websites.

## 🚀 Setup Steps

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended for business)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission - SOLVIOX Energy & Lighting

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

---
This message was sent from the SOLVIOX Energy & Lighting website contact form.
```

4. Set up the template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{service}}` - Selected service
   - `{{message}}` - Message content

5. Note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_def456`)

### Step 5: Update the Code

1. Open `src/utils/formSubmission.ts`
2. Replace the placeholder values:

```typescript
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
```

### Step 6: Test the Form

1. Save the changes and restart your development server
2. Fill out the contact form on your website
3. Submit the form
4. Check your email to confirm the message was received

## 🔧 Configuration Details

### Email Template Variables

Make sure your EmailJS template includes these variables:

- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{service}}` - Selected service (Solar Rooftop, Street Light, etc.)
- `{{message}}` - Customer's message
- `{{to_email}}` - Your business email (solvioxenergy@gmail.com)

### Recommended Email Template

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #0284c7; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0284c7; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Form Submission</h2>
        <p>SOLVIOX Energy & Lighting</p>
    </div>
    <div class="content">
        <div class="field">
            <span class="label">Name:</span> {{from_name}}
        </div>
        <div class="field">
            <span class="label">Email:</span> {{from_email}}
        </div>
        <div class="field">
            <span class="label">Phone:</span> {{phone}}
        </div>
        <div class="field">
            <span class="label">Service Interest:</span> {{service}}
        </div>
        <div class="field">
            <span class="label">Message:</span><br>
            {{message}}
        </div>
        <hr>
        <p><small>This message was sent from the SOLVIOX Energy & Lighting website contact form.</small></p>
    </div>
</body>
</html>
```

## 🔒 Security Notes

- EmailJS public key is safe to use in client-side code
- Set up domain restrictions in EmailJS dashboard for security
- Monitor your EmailJS usage to stay within free tier limits

## 📊 Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 1 email template
- Basic support

For higher volume, consider upgrading to a paid plan.

## 🐛 Troubleshooting

### Common Issues:

1. **Emails not sending:**
   - Check Service ID, Template ID, and Public Key
   - Verify email service is properly connected
   - Check browser console for errors

2. **Emails going to spam:**
   - Set up proper email authentication (SPF, DKIM)
   - Use a professional email address
   - Avoid spam trigger words

3. **Template variables not working:**
   - Ensure variable names match exactly (case-sensitive)
   - Check template preview in EmailJS dashboard

## 📞 Support

If you need help with EmailJS setup:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard

---

Once EmailJS is configured, the contact form will automatically send emails to `solvioxenergy@gmail.com` when customers submit inquiries.
