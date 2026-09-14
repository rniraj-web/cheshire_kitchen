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

export default mongoose.model("Enquiry", enquirySchema);
