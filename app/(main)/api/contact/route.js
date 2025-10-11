import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/nodemailerconfig";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Get transporter (SMTP)
    const transporter = await getTransporter();

    // Mail options to admin
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Admin Gmail
      subject: "📩 New Contact Form Submission",
      text: `You have received a new message from your contact form:

Name: ${name}
Email: ${email}
Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send contact form" },
      { status: 500 }
    );
  }
}
