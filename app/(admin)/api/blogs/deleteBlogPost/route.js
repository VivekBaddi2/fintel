import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Blog from "@/models/blogs";

// DELETE /api/blogs/[id] - Delete a blog post by ID
export async function DELETE(req) {
    try {
        await connectToDB();
        const body = await req.json();
        const { id } = body;
        await Blog.findByIdAndDelete(id);

        return NextResponse.json({ message: "Blog deleted successfully" });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
