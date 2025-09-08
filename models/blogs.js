import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },        // Blog title
  description: { type: String, required: true },  // Short description or summary
  content: { type: String, required: true },      // Full content (HTML or markdown)
}, { timestamps: true });                          // Adds createdAt & updatedAt automatically

// Prevent recompiling model during hot reload
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
