import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/nodemailerconfig";

export async function POST(req) {
  try {
    const { name, email, phone, pdfName } = await req.json();

    // Get transporter (SMTP)
    const transporter = await getTransporter();

    // Mail options (to admin)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Admin Gmail
      subject: "📩 New Infozone Form Submission",
      text: `You have a new form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Requested PDF: ${pdfName}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Form details sent to admin!",
    });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send form details" },
      { status: 500 }
    );
  }
}
