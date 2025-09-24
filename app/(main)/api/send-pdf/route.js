import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/nodemailerconfig";
import path from "path";
import fs from "fs";

export async function POST(req) {
  try {
    const { name, email, phone, pdfName } = await req.json();

    // PDF path
    const filePath = path.join(process.cwd(), "public", "uploads", pdfName);
    const pdfBuffer = fs.readFileSync(filePath);

    // Get transporter with OAuth2
    const transporter = await getTransporter();

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Your requested PDF: ${pdfName}`,
      text: `Hi ${name},\n\nHere is the PDF you requested.`,
      attachments: [
        {
          filename: pdfName,
          content: pdfBuffer,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "PDF sent to email!" });
  } catch (error) {
    console.error("Gmail Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
