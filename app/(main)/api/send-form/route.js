import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/nodemailerconfig";

export async function POST(req) {
  try {
    const { name, email, phone, pdfName } = await req.json();

    // Get transporter with OAuth2
    const transporter = await getTransporter();

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
