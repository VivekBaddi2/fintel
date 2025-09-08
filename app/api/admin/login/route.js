import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Admin from "@/models/Admin";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
