import emailjs from '@emailjs/browser';

// Form submission utility using EmailJS
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

// TODO: EmailJS Setup Required
// 1. Create an account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone
//    - {{service}} - selected service
//    - {{message}} - message content
// 4. Get your Service ID, Template ID, and Public Key
// 5. Update the constants below with your actual values

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // e.g., 'user_def456'

// Submit contact form using EmailJS
export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  try {
    // TODO: Remove this check once EmailJS is properly configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.log('EmailJS not configured yet. Form data:', data);
      alert('EmailJS is not configured yet. Please check the console for form data.');
      return;
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      service: data.service || 'Not specified',
      message: data.message,
      to_email: 'solvioxenergy@gmail.com', // SOLVIOX email
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      console.log('Email sent successfully:', response);
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};

// Email validation helper
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

// Phone validation helper
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[\d\s\-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Format form data for display or submission
export const formatFormData = (data: ContactFormData): string => {
  return `
Contact Form Submission:
------------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service || 'Not specified'}
Message: ${data.message}
Submitted: ${new Date().toLocaleString()}
  `.trim();
};
