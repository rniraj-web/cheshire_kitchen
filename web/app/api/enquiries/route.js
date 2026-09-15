import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Enquiry from "@/models/Enquiry";

// Minimal best-effort rate limiting (in-memory, per server instance) — a
// small business contact form doesn't need more than this.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests, please try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const { name, email, phone, message, sourcePage } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Name, email and message are required." }, { status: 400 });
  }

  await connectDB();
  const enquiry = await Enquiry.create({ name, email, phone, message, sourcePage });

  return NextResponse.json({ id: enquiry._id }, { status: 201 });
}
