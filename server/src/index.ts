import express, { Request, Response } from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || '';
const TO_EMAIL = process.env.TOOEMAIL || '';

// Middleware
app.use(cors());
app.use(express.json());

// Request body interface
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Health check endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'Portfolio API Server is running', version: '1.0.0' });
});

// Test endpoint
app.get('/test', (_req: Request, res: Response) => {
  res.json({
    message: 'Backend is working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Send email endpoint
app.post('/api/send-email', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body as ContactFormData;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const timestamp = new Date().toISOString();

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          📬 New Contact Form Submission
        </h2>

        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>

        <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <div style="background-color: #d1ecf1; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0c5460;">
          <p style="margin: 0; color: #0c5460;">
            <strong>Reply to:</strong> <a href="mailto:${email}" style="color: #0c5460;">${email}</a>
          </p>
        </div>

        <p style="color: #6c757d; font-size: 12px; margin-top: 30px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: `Portfolio Contact Form <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact: ${name}`,
      html: htmlContent
    });

    console.log('Email sent successfully:', emailResponse);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      data: emailResponse.data
    });

  } catch (error: any) {
    console.error('Failed to send email:', error);

    return res.status(500).json({
      error: 'Failed to send email',
      details: error?.message || 'Unknown error occurred'
    });
  }
});

// Only start server if not running in serverless environment (Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`);
    console.log(`🧪 Test endpoint: http://localhost:${PORT}/test`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

// Export for Vercel serverless (CommonJS format)
module.exports = app;
