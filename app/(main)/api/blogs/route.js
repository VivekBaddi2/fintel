import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Blog from "@/models/blogs";

// GET /api/blogs - Retrieve all blog posts
export async function GET() {
  try {
    await connectToDB();

    const blogs = await Blog.find().sort({ createdAt: -1 }); // newest first

    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
