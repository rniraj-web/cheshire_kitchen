import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import AdminUser from "../models/AdminUser.js";
import Range from "../models/Range.js";
import GalleryProject from "../models/GalleryProject.js";
import BlogPost from "../models/BlogPost.js";
import Enquiry from "../models/Enquiry.js";
import { requireAdmin } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  const user = email && (await AdminUser.findOne({ email: email.toLowerCase() }));
  const valid = user && (await bcrypt.compare(password || "", user.passwordHash));

  if (!valid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ sub: user._id.toString(), email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });
  res.json({ token });
});

router.use(requireAdmin);

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No image provided" });
  res.status(201).json({ url: `/uploads/${req.file.filename}` });
});

function registerCrud(path, Model) {
  router.get(path, async (req, res) => {
    res.json(await Model.find().sort({ order: 1, createdAt: -1 }));
  });

  router.post(path, async (req, res) => {
    res.status(201).json(await Model.create(req.body));
  });

  router.put(`${path}/:id`, async (req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json(doc);
  });

  router.delete(`${path}/:id`, async (req, res) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.status(204).end();
  });
}

registerCrud("/ranges", Range);
registerCrud("/gallery", GalleryProject);
registerCrud("/blog", BlogPost);

router.get("/enquiries", async (req, res) => {
  res.json(await Enquiry.find().sort({ createdAt: -1 }));
});

export default router;
