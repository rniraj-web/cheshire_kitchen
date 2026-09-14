import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getBlogPost, resolveImageUrl } from "@/lib/api";
import ProductImage from "@/components/ProductImage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getBlogPost(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.coverImage?.url ? [resolveImageUrl(post.coverImage.url)] : undefined,
      },
    };
  } catch {
    return { title: "Inspiration" };
  }
}

export default async function InspirationPostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <article className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide max-w-3xl">
        <h1 className="text-left">{post.title}</h1>
        <p className="mt-4 text-left text-sm text-ink-muted">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="mt-8">
          <ProductImage image={post.coverImage} ratio="16/9" fallbackLabel={post.title} />
        </div>
        <div className="mt-10 max-w-none text-left leading-relaxed text-ink [&_h2]:mt-8 [&_h2]:text-2xl [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <ReactMarkdown>{post.bodyMarkdown}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
