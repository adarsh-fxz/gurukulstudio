import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'gurukulstudio11@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password-here', // Use Gmail App Password
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Validate required fields
    if (!formData.email || !formData.name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Create email content based on form type
    let subject = '';
    let htmlContent = '';

    if (formType === 'enroll') {
      subject = `New Enrollment Application - ${formData.childName}`;
      htmlContent = `
        <h2>New Enrollment Application</h2>
        <h3>Child Information:</h3>
        <p><strong>Name:</strong> ${formData.childName}</p>
        <p><strong>Age:</strong> ${formData.childAge}</p>
        
        <h3>Parent/Guardian Information:</h3>
        <p><strong>Name:</strong> ${formData.parentName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address || 'Not provided'}</p>
        
        <h3>Selected Programs:</h3>
        <ul>
          ${formData.programs?.map((program: string) => `<li>${program}</li>`).join('') || 'No programs selected'}
        </ul>
        
        <h3>Additional Message:</h3>
        <p>${formData.message || 'No additional message'}</p>
        
        <hr>
        <p><em>This enrollment application was submitted from the Gurukul Studio website.</em></p>
      `;
    } else if (formType === 'contact') {
      subject = `New Contact Form Submission - ${formData.subject || 'General Inquiry'}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
        
        <h3>Message:</h3>
        <p>${formData.message}</p>
        
        <hr>
        <p><em>This contact form was submitted from the Gurukul Studio website.</em></p>
      `;
    } else {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Send email to studio (you can change this email address)
    const studioEmail = process.env.STUDIO_EMAIL || 'gurukulstudio11@gmail.com';
    const mailOptions = {
      from: process.env.EMAIL_USER || 'gurukulstudio11@gmail.com',
      to: studioEmail, // Send to the studio's email
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationSubject = formType === 'enroll' 
      ? 'Enrollment Application Received - Gurukul Studio'
      : 'Message Received - Gurukul Studio';

    const confirmationHtml = `
      <h2>Thank you for contacting Gurukul Studio!</h2>
      <p>We have received your ${formType === 'enroll' ? 'enrollment application' : 'message'} and will get back to you within 24 hours.</p>
      
      <h3>What happens next?</h3>
      <ol>
        <li>We'll review your ${formType === 'enroll' ? 'application' : 'inquiry'} within 24 hours</li>
        <li>Our team will contact you to discuss details and answer any questions</li>
        <li>We'll schedule a consultation or provide the information you requested</li>
      </ol>
      
      <p><strong>Contact Information:</strong></p>
      <p>Phone: 9702024403 / 01-4547265</p>
      <p>Email: gurukulstudio11@gmail.com</p>
      
      <p>Best regards,<br>The Gurukul Studio Team</p>
    `;

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'gurukulstudio11@gmail.com',
      to: formData.email,
      subject: confirmationSubject,
      html: confirmationHtml,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: `${formType === 'enroll' ? 'Enrollment application' : 'Message'} submitted successfully!` 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 