import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Blog from "@/models/blogs";

// POST /api/blogs - Create a new blog post
export async function POST(req) {
    try {
        await connectToDB();

        const { title, description, content } = await req.json();

        if (!title || !description || !content) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const newBlog = await Blog.create({ title, description, content });

        return NextResponse.json(newBlog);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
