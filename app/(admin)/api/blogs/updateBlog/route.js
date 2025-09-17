import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Blog from "@/models/blogs";

// PUT /api/blogs/update
export async function PUT(req) {
    try {
        const { id, title, description, content } = await req.json();

        // Validate inputs
        if (!id || !title || !description || !content) {
            return NextResponse.json(
                { error: "id, title, description, and content are required" },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectToDB();

        // Find and update blog by ID
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, description, content },
            { new: true } // Return the updated document
        );

        if (!updatedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Blog updated successfully", blog: updatedBlog },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json(
            { error: "Server error", details: error.message },
            { status: 500 }
        );
    }
}
