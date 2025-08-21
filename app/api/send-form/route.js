import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, pdfName } = await req.json();

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Admin Gmail
      subject: "📩 New Infozone Form Submission",
      text: `You got a new form submission:\n\n
Name: ${name}
Email: ${email}
Phone: ${phone}
Requested PDF: ${pdfName}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Form details sent to admin!" });
  } catch (error) {
    console.error("Error sending form:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
