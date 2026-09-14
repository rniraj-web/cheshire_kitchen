import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, required: true },
    coverImage: {
      url: { type: String, required: true },
      alt: { type: String, required: true },
    },
    bodyMarkdown: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export default mongoose.model("BlogPost", blogPostSchema);
