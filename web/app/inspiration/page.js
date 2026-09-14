import Link from "next/link";
import { getBlogPosts, safe } from "@/lib/api";
import ProductImage from "@/components/ProductImage";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";

export const metadata = {
  title: "Inspiration",
  description: "Ideas, guides and inspiration for planning your next kitchen or bedroom.",
};

export default async function InspirationPage() {
  const posts = await safe(getBlogPosts(), []);

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <Reveal fade={false}>
          <SectionHeading
            eyebrow="Inspiration"
            title="Ideas for your next project"
            description="Guides and inspiration from our design team."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post, idx) => (
              <Reveal key={post.slug} delay={(idx % 3) * 0.1}>
                <SpotlightCard className="card block h-full">
                  <Link href={`/inspiration/${post.slug}`} className="block h-full no-underline">
                    <ProductImage image={post.coverImage} ratio="4/3" fallbackLabel={post.title} className="card-flat" />
                    <div className="p-5">
                      <h3 className="text-lg font-medium text-ink">{post.title}</h3>
                      <p className="mt-2 text-left text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
                    </div>
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))
          ) : (
            <p className="text-sm text-ink-muted">New articles are on their way — check back soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
