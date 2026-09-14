import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { _id: false },
);

const rangeSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["kitchen", "bedroom"], required: true },
    brand: { type: String, required: true },
    origin: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [imageSchema], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("Range", rangeSchema);
