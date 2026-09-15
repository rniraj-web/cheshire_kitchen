import ranges from "@/data/ranges";
import galleryProjects from "@/data/gallery";
import blogPosts from "@/data/blog";

// Wraps a data read so a bad edit to a data file degrades to an empty state
// instead of crashing page rendering.
export async function safe(promise, fallback) {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
    return fallback;
  }
}

// Content below is static (see web/data/*.js) — no database, no admin panel.
// Kept as async functions so existing `await getRanges(...)` call sites in
// the page components don't need to change.

export async function getRanges(type) {
  return type ? ranges.filter((r) => r.type === type) : ranges;
}

export async function getGalleryProjects() {
  return galleryProjects;
}

export async function getBlogPosts() {
  return blogPosts;
}

export async function getBlogPost(slug) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`No blog post found for slug "${slug}"`);
  return post;
}

// The one piece of real dynamic data: contact form submissions, handled by
// a Next.js API route (app/api/enquiries/route.js) backed by MongoDB.
export async function submitEnquiry(data) {
  const res = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || "Something went wrong sending your enquiry.");
  }

  return res.json();
}

// Images now live under public/images/, already absolute paths — nothing to
// resolve. Kept as a passthrough so ProductImage etc. don't need to change.
export function resolveImageUrl(url) {
  return url;
}
