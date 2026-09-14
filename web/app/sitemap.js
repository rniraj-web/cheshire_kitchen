import { getBlogPosts, safe } from "@/lib/api";
import { SITE_URL } from "@/lib/config";

const STATIC_ROUTES = [
  "",
  "/about-us",
  "/kitchens",
  "/bedrooms",
  "/inspiration",
  "/project-gallery",
  "/showroom",
];

export default async function sitemap() {
  const posts = await safe(getBlogPosts(), []);

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/inspiration/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  }));

  return [...staticEntries, ...postEntries];
}
