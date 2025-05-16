"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.subject || !data.message) {
      return { success: false, error: "All fields are required" };
    }

    // Send the email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "oluwasemilogoadeogun@gmail.com",
      subject: `Portfolio Contact: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `,
      replyTo: data.email,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: "Failed to send email" };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error("Error in sendEmail:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
