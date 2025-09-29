// This route will perform delete operation on pdfs
import { connectToDB } from "@/lib/mongoose";
import Pdf from "@/models/pdfs";
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import path from "path";

export async function DELETE(request) {
    try {
        // Connect to the database
        await connectToDB();

        // Parse the request body to get the ID
        const body = await request.json();
        const { id } = body;

        // Find the PDF document by its ID
        const pdf = await Pdf.findById(id);
        const pdfUrl = pdf.path;
        console.log(pdfUrl);

        // Convert the string to a URL object
        const url = new URL(pdfUrl);

        const pdfPath = url.pathname;
        console.log(pdfPath);

        // Delete the file from the filesystem. The file path is relative to the `public` directory.
        const filePath = path.join(process.cwd(), 'public', pdfPath);

        try {
            // Use the `fs.unlink` function to delete the file
            await fs.unlink(decodeURIComponent(filePath));
        } catch (fsError) {
            // Log the error but continue to delete the DB entry in case the file is already gone
            console.error(`Failed to delete file from filesystem: ${filePath}`, fsError);
        }

        // Delete the document from the database
        await Pdf.findByIdAndDelete(id);

        return NextResponse.json({ message: 'PDF deleted successfully' });
    } catch (error) {
        console.error('Error deleting PDF:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
