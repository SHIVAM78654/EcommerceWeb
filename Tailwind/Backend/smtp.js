// test-smtp.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Loads environment variables from .env

async function testEmail() {
    try {
        // Create transporter using your SMTP env config
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports like 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // Your app password here
            },
        });

        await transporter.verify(); // Verify connection configuration
        console.log('Server is ready to take our messages');

        // Send a test email
        const info = await transporter.sendMail({
            from: `"Test Sender" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Send to yourself for testing
            subject: 'Test Email from Nodemailer',
            text: 'Hello! This is a test email to verify SMTP transporter settings.',
        });

        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Error sending test email:', error);
    }
}

testEmail();