// This api receives pdf id from frontend and fetches data related to that pdf id from mongodb db and responds with the data

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import Pdf from "@/models/pdfs";

export async function POST(req) {
    try {
        const { pdfId } = await req.json();

        if (!pdfId) {
            return NextResponse.json({ error: "Missing pdfId" }, { status: 400 });
        }

        await connectToDB(); // ✅ Connect once (cached)

        // Use Mongoose model instead of db.collection
        const pdfData = await Pdf.findById(pdfId);

        if (!pdfData) {
            return NextResponse.json({ error: "PDF not found" }, { status: 404 });
        }

        return NextResponse.json(pdfData, { status: 200 });
    } catch (error) {
        console.error("Error fetching PDF data:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
