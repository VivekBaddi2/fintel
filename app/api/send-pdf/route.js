import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req) {
  try {
    const { name, email, phone, pdfName } = await req.json();

    // PDF path
    const filePath = path.join(process.cwd(), "public", "pdfs", pdfName);
    const pdfBuffer = fs.readFileSync(filePath);

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

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
