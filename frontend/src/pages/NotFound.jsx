import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-wide flex flex-col items-start py-24">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-3xl">We couldn't find that page.</h1>
      <p className="mt-3 text-ink-400">
        It may have moved, or the link may be out of date.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
