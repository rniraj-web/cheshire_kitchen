import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    sourcePage: { type: String },
  },
  { timestamps: true },
);

// Guard against Next.js dev-mode hot reload re-registering the model.
export default mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);
