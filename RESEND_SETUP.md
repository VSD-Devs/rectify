# Resend Email Integration Setup Guide

This guide will help you set up the Resend email service for your contact form enquiries.

## Prerequisites

- A Resend account (sign up at https://resend.com)
- A verified domain (or use Resend's test domain for development)

## Setup Steps

### 1. Get Your Resend API Key

1. Go to https://resend.com/api-keys
2. Create a new API key
3. Copy the API key (it will only be shown once)

### 2. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual Resend API key
3. Replace `your-email@yourdomain.com` with the email address where you want to receive enquiries

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
ENQUIRY_EMAIL=info@yourdomain.com
```

### 3. Update the 'From' Email Address

For production use, you'll need to verify your domain with Resend and update the 'from' email address in the API route:

1. Open `app/api/send-enquiry/route.ts`
2. Find this line:
   ```typescript
   from: 'Rectify Enquiries <onboarding@resend.dev>',
   ```
3. Change it to your verified domain:
   ```typescript
   from: 'Rectify Enquiries <enquiries@yourdomain.com>',
   ```

**Note:** For testing purposes, you can use `onboarding@resend.dev`, which is a verified domain provided by Resend.

### 4. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the contact page: `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check your configured email address for the enquiry notification

## Features Implemented

✅ **Email Sending**: Form submissions are sent via Resend API  
✅ **Beautiful Email Template**: Professional HTML email design with gradient header  
✅ **Toast Notifications**: User feedback with success/error messages  
✅ **Loading States**: Submit button shows loading spinner during submission  
✅ **Form Validation**: Required fields are validated before submission  
✅ **Form Reset**: Form automatically clears after successful submission  
✅ **Error Handling**: Graceful error handling with user-friendly messages

## Troubleshooting

### "Failed to send email" error

- **Check your API key**: Ensure `RESEND_API_KEY` is correctly set in `.env.local`
- **Restart the dev server**: After changing environment variables, restart with `npm run dev`
- **Check rate limits**: Free tier has sending limits

### Email not received

- **Check spam folder**: Test emails might end up in spam
- **Verify email address**: Ensure `ENQUIRY_EMAIL` is correct in `.env.local`
- **Check Resend logs**: Log in to your Resend dashboard to see delivery status

### Environment variables not loading

- **File name**: Ensure the file is named `.env.local` (not `.env.local.txt`)
- **Restart server**: Always restart the development server after changing `.env.local`
- **Check spelling**: Verify environment variable names match exactly

## Production Deployment

When deploying to Vercel (or another hosting platform):

1. Add your environment variables to the deployment platform:
   - `RESEND_API_KEY`
   - `ENQUIRY_EMAIL`

2. Verify your domain with Resend and update the 'from' email address

3. Test the form after deployment to ensure everything works correctly

## Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## Support

If you encounter any issues with the email integration, check:
1. Resend dashboard for error logs
2. Browser console for client-side errors
3. Server logs for API route errors



