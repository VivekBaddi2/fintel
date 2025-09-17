import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Admin from "@/models/Admin";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    // Check if admin exists
    const exists = await Admin.findOne({ username });
    if (exists) return NextResponse.json({ error: "Admin already exists" }, { status: 400 });

    const admin = await Admin.create({ username, password });
    return NextResponse.json(admin, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create admin" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const admins = await Admin.find().select("-password"); // don't return passwords
    return NextResponse.json(admins);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch admins" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectToDB();
    const { id, username, password } = await req.json();
    const admin = await Admin.findByIdAndUpdate(id, { username, password }, { new: true });
    return NextResponse.json(admin);
  } catch (err) {
    return NextResponse.json({ error: "Failed to update admin" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectToDB();
    const { id } = await req.json();
    await Admin.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete admin" }, { status: 500 });
  }
}

