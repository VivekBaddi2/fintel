import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Blog from "@/models/blogs";

// GET /api/blogs/[id] - Retrieve a single blog post by ID
export async function PUT(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;
    const { title, description, content } = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description, content },
      { new: true }
    );

    return NextResponse.json(updatedBlog);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] - Delete a blog post by ID
export async function DELETE(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
