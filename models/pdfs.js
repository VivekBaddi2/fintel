import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    path: { type: String, required: true }
}, { timestamps: true });

// Prevent recompiling model during hot reload
export default mongoose.models.Pdf || mongoose.model("Pdf", PdfSchema);
