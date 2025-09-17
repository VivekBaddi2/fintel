// This api receives blog id from frontend and fetches data related to that blog id from mongodb db and responds with the data

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Blog from "@/models/blogs";

export async function POST(req) {
    try {
        const { blogId } = await req.json();

        if (!blogId) {
            return NextResponse.json({ error: "Missing blog Id" }, { status: 400 });
        }

        await connectToDB(); // ✅ Connect once (cached)

        // Use Mongoose model instead of db.collection
        const blogData = await Blog.findById(blogId);

        if (!blogData) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(blogData, { status: 200 });
    } catch (error) {
        console.error("Error fetching PDF data:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
