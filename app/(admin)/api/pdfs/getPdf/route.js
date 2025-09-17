// This api is used to fetch the pdfs from the upload directory 

import { connectToDB } from "@/lib/mongoose";
import Pdf from "@/models/pdfs";

export async function GET() {
    try {
        // Connect to the database
        await connectToDB();

        // Fetch all PDF documents from the database
        const pdfs = await Pdf.find({});

        // Return the fetched data as a JSON response
        return new Response(JSON.stringify(pdfs), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error("Error fetching PDF data:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch PDF data." }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}