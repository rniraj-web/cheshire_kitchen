import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { _id: false },
);

const galleryProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ["kitchen", "bedroom"], required: true },
    coverImage: { type: imageSchema, required: true },
    images: { type: [imageSchema], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("GalleryProject", galleryProjectSchema);
