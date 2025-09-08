import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ success: true, message: "MongoDB connected!" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
