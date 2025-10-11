import nodemailer from "nodemailer";

export async function getTransporter() {
  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("✅ SMTP Transporter ready");
    return transporter;
  } catch (error) {
    console.error("❌ Error creating transporter:", error);
    throw new Error("Failed to create email transporter");
  }
}
