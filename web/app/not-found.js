import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide flex flex-col items-start py-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-left text-3xl">We couldn&rsquo;t find that page.</h1>
      <p className="mt-3 text-left text-ink-muted">
        It may have moved, or the link may be out of date.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
