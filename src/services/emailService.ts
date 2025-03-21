import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_emailjs_public_key';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_emailjs_service_id';
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'your_contact_template_id';
const NEWSLETTER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID || 'your_newsletter_template_id';

// Initialize EmailJS with public key
emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY,
});

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface NewsletterData {
  email: string;
}

export const emailService = {
  /**
   * Send a contact form submission
   * @param formData Contact form data including name, email, and message
   * @returns Promise that resolves with the result of the email send operation
   */
  sendContactForm: async (formData: ContactFormData) => {
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      
      return {
        success: true,
        response
      };
    } catch (error) {
      console.error('Error sending contact form:', error);
      return {
        success: false,
        error
      };
    }
  },

  /**
   * Subscribe a user to the newsletter
   * @param data Newsletter subscription data including email
   * @returns Promise that resolves with the result of the subscription operation
   */
  subscribeToNewsletter: async (data: NewsletterData) => {
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        NEWSLETTER_TEMPLATE_ID,
        {
          subscriber_email: data.email,
          subscription_date: new Date().toISOString(),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      
      return {
        success: true,
        response
      };
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return {
        success: false,
        error
      };
    }
  }
};

export default emailService; 