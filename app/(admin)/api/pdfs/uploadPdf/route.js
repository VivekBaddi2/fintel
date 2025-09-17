// This api route is used to handle pdf uploads and Edits from frontend
// It saves the uploaded or edited pdf to server

// app/api/pdfs/upload/route.js
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { connectToDB } from "@/lib/mongoose";
import Pdf from "@/models/pdfs";

const writeFile = promisify(fs.writeFile);

export async function POST(req) {
    try {
        const formData = await req.formData();

        const file = formData.get("file");
        const title = formData.get("title");
        const description = formData.get("description");
        const pdfId = formData.get("pdfId"); // always provided (can be "null")

        await connectToDB();

        let fileUrl;

        // ✅ Handle file upload if provided
        if (file && file.name) {
            const uploadDir = path.join(process.cwd(), "public", "uploads");
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            const filePath = path.join(uploadDir, file.name);
            await writeFile(filePath, buffer);

            const host = req.headers.get("host");
            const protocol =
                req.headers.get("x-forwarded-proto") ||
                (host.startsWith("localhost") ? "http" : "https");
            fileUrl = `${protocol}://${host}/uploads/${file.name}`;
        }

        // ✅ If pdfId is not null → update
        if (pdfId && pdfId != 'null') {
            const updateData = {
                ...(title && { title }),
                ...(description && { description }),
                ...(fileUrl && { path: fileUrl }),
            };

            const updatedPdf = await Pdf.findByIdAndUpdate(pdfId, updateData, {
                new: true,
            });

            if (!updatedPdf) {
                return new Response(JSON.stringify({ error: "PDF not found." }), {
                    status: 404,
                });
            }

            return new Response(
                JSON.stringify({
                    message: `PDF "${updatedPdf.title}" updated successfully.`,
                    pdf: updatedPdf,
                }),
                { status: 200 }
            );
        }

        // ❗ pdfId is null → create new data
        if (!fileUrl) {
            return new Response(JSON.stringify({ error: "No file provided." }), {
                status: 400,
            });
        }

        const newPdf = new Pdf({
            title,
            description,
            path: fileUrl,
        });

        await newPdf.save();

        return new Response(
            JSON.stringify({
                message: `New PDF "${file.name}" created successfully.`,
                pdf: newPdf,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error during upload/update:", error);
        return new Response(
            JSON.stringify({ error: "Failed to upload or update PDF." }),
            { status: 500 }
        );
    }
}
