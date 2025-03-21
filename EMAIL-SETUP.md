# Email Service Setup Guide

This application uses [EmailJS](https://www.emailjs.com/) to handle contact form submissions and newsletter subscriptions. EmailJS allows sending emails directly from client-side JavaScript without requiring a backend server.

## Setup Instructions

### 1. Create an EmailJS Account

- Sign up for a free account at [EmailJS](https://www.emailjs.com/)
- You can send up to 200 emails per month on the free plan

### 2. Create an Email Service

1. Go to the EmailJS dashboard
2. Navigate to "Email Services" and click "Create New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the steps to connect your email account
5. Note down the Service ID for the next steps

### 3. Create Email Templates

#### Contact Form Template
1. Go to "Email Templates" and click "Create New Template"
2. Name it something like "Contact Form"
3. Design your email template using the following variables:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email of the person contacting you
   - `{{message}}` - The message content
4. Save the template and note its Template ID

#### Newsletter Template
1. Create another template named "Newsletter Subscription"
2. Design this template using:
   - `{{subscriber_email}}` - The email of the subscriber
   - `{{subscription_date}}` - The date they subscribed
3. Save the template and note its Template ID

### 4. Get Your Public Key

1. Go to your EmailJS dashboard
2. Navigate to "Account" > "API Keys"
3. Copy your "Public Key" (not your Private Key)

### 5. Configure Environment Variables

1. Copy the `.env.example` file to a new file named `.env`
2. Fill in your EmailJS credentials:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
   VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id
   ```

## Managing Subscribers

For a small subscriber list, you can:
1. Create a spreadsheet to track newsletter subscribers
2. Configure EmailJS to forward all subscription emails to your inbox
3. Manually add subscribers to your spreadsheet

For a larger list, consider using an email marketing service like:
- [Mailchimp](https://mailchimp.com/)
- [Sendinblue](https://www.sendinblue.com/)
- [ConvertKit](https://convertkit.com/)

## Security Considerations

- EmailJS public keys are meant to be used in client-side code, but still follow best practices and use environment variables
- Never expose private keys or sensitive data in client-side code
- Consider implementing server-side validation for extra security in the future

## Sending Newsletters

To send newsletters to your subscribers:
1. Export your subscriber list from your spreadsheet/database
2. Use an email marketing service to create and send the newsletter
3. For a more integrated solution, consider implementing a backend API for newsletter management

## Troubleshooting

If emails are not sending:
- Verify your EmailJS credentials are correct
- Check if you've reached the monthly email limit on your plan
- Test your templates directly in the EmailJS dashboard
- Check the browser console for any errors 