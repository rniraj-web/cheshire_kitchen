import "dotenv/config";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { connectDB } from "../src/config/db.js";
import AdminUser from "../src/models/AdminUser.js";

const [, , email, password] = process.argv;

if (!email || !password) {
  console.error("Usage: npm run seed:admin -- <email> <password>");
  process.exit(1);
}

await connectDB();

const passwordHash = await bcrypt.hash(password, 10);
await AdminUser.findOneAndUpdate(
  { email: email.toLowerCase() },
  { email: email.toLowerCase(), passwordHash },
  { upsert: true, new: true },
);

console.log(`Admin user ready: ${email}`);
await mongoose.disconnect();
process.exit(0);
