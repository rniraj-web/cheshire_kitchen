import { Router } from "express";
import rateLimit from "express-rate-limit";
import Range from "../models/Range.js";
import GalleryProject from "../models/GalleryProject.js";
import BlogPost from "../models/BlogPost.js";
import Enquiry from "../models/Enquiry.js";

const router = Router();

router.get("/ranges", async (req, res) => {
  const filter = {};
  if (req.query.type) filter.type = req.query.type;
  const ranges = await Range.find(filter).sort({ order: 1 });
  res.json(ranges);
});

router.get("/gallery", async (req, res) => {
  const projects = await GalleryProject.find().sort({ order: 1 });
  res.json(projects);
});

router.get("/blog", async (req, res) => {
  const posts = await BlogPost.find().sort({ publishedAt: -1 });
  res.json(posts);
});

router.get("/blog/:slug", async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

const enquiryLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });

router.post("/enquiries", enquiryLimiter, async (req, res) => {
  const { name, email, phone, message, sourcePage } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email and message are required." });
  }

  const enquiry = await Enquiry.create({ name, email, phone, message, sourcePage });
  res.status(201).json({ id: enquiry._id });
});

export default router;
