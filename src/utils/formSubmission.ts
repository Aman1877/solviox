import emailjs from "@emailjs/browser";

// ─── EmailJS credentials from environment variables ───────────────────────────
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
// Owner-notification template (sent to solvioxenergy@gmail.com)
const OWNER_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_OWNER_TEMPLATE_ID as string;
// Thank-you template (sent back to the customer)
const THANKYOU_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_THANKYOU_TEMPLATE_ID as string;

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

// ─── Main submit function ─────────────────────────────────────────────────────
/**
 * Sends TWO emails on contact form submission:
 *  1. Owner notification  → solvioxenergy@gmail.com  (OWNER_TEMPLATE_ID)
 *  2. Customer thank-you  → user's email              (THANKYOU_TEMPLATE_ID)
 */
export const submitContactForm = async (
  data: ContactFormData,
): Promise<void> => {
  // Guard: ensure credentials are configured
  if (
    !SERVICE_ID ||
    SERVICE_ID === "YOUR_SERVICE_ID" ||
    !PUBLIC_KEY ||
    PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
    !OWNER_TEMPLATE_ID ||
    OWNER_TEMPLATE_ID === "YOUR_OWNER_TEMPLATE_ID" ||
    !THANKYOU_TEMPLATE_ID ||
    THANKYOU_TEMPLATE_ID === "YOUR_THANKYOU_TEMPLATE_ID"
  ) {
    console.warn("[EmailJS] Credentials not configured. Form data:", data);
    throw new Error(
      "EmailJS is not configured yet. Please add your credentials to the .env file.",
    );
  }

  // Template variables — names must match exactly what's in your EmailJS templates
  const templateParams = {
    full_name: data.name,
    email: data.email,
    phone_number: data.phone,
    service: data.service || "Not specified",
    project_details: data.message,
    to_email: "solvioxenergy@gmail.com",
    reply_to: data.email,
  };

  // 1️⃣  Send owner-notification email
  const ownerResponse = await emailjs.send(
    SERVICE_ID,
    OWNER_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY,
  );

  if (ownerResponse.status !== 200) {
    throw new Error("Failed to send owner notification email.");
  }

  // 2️⃣  Send customer thank-you email
  const thankYouResponse = await emailjs.send(
    SERVICE_ID,
    THANKYOU_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY,
  );

  if (thankYouResponse.status !== 200) {
    throw new Error("Failed to send thank-you email to customer.");
  }

  console.log("[EmailJS] Both emails sent successfully.");
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[\d\s\-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
};

export const formatFormData = (data: ContactFormData): string => {
  return `
Contact Form Submission:
------------------------
Name:     ${data.name}
Email:    ${data.email}
Phone:    ${data.phone}
Service:  ${data.service || "Not specified"}
Message:  ${data.message}
Submitted: ${new Date().toLocaleString()}
  `.trim();
};
