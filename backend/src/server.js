import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import bcrypt from "bcryptjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { connectDB } from "./config/db.js";
import AdminUser from "./models/AdminUser.js";
import publicRoutes from "./routes/public.js";
import adminRoutes from "./routes/admin.js";

async function ensureSeedAdmin() {
  const { SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD } = process.env;
  if (!SEED_ADMIN_EMAIL || !SEED_ADMIN_PASSWORD) return;
  if ((await AdminUser.countDocuments()) > 0) return;

  const passwordHash = await bcrypt.hash(SEED_ADMIN_PASSWORD, 10);
  await AdminUser.create({ email: SEED_ADMIN_EMAIL.toLowerCase(), passwordHash });
  console.log(`Seeded admin user from SEED_ADMIN_EMAIL: ${SEED_ADMIN_EMAIL}`);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") ?? "*" }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api", publicRoutes);
app.use("/api/admin", adminRoutes);

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(ensureSeedAdmin)
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  });
