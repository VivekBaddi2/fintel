// app/api/get-pdfs/route.js
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const pdfDir = path.join(process.cwd(), "public", "pdfs");
  const files = fs.readdirSync(pdfDir).filter(file => file.endsWith(".pdf"));
  return NextResponse.json(files);
}
