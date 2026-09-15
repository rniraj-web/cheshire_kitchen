import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="section-surface-alt">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-xl font-semibold text-ink">
            Cheshire Kitchens
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            Handcrafted kitchens and bedrooms, designed with you — celebrating{" "}
            {new Date().getFullYear() - BUSINESS.foundedYear} years serving
            Cheshire.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-ink">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/about-us"
                className="text-ink-muted no-underline hover:text-ink"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/kitchens"
                className="text-ink-muted no-underline hover:text-ink"
              >
                Kitchens
              </Link>
            </li>
            <li>
              <Link
                href="/bedrooms"
                className="text-ink-muted no-underline hover:text-ink"
              >
                Bedrooms
              </Link>
            </li>
            <li>
              <Link
                href="/inspiration"
                className="text-ink-muted no-underline hover:text-ink"
              >
                Inspiration
              </Link>
            </li>
            <li>
              <Link
                href="/project-gallery"
                className="text-ink-muted no-underline hover:text-ink"
              >
                Project Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-ink">Visit the showroom</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted tabular-nums">
            <li>{BUSINESS.addressLine1}</li>
            <li>{BUSINESS.addressLine2}</li>
            <li>
              <a
                href={BUSINESS.phoneHref}
                className="text-ink-muted no-underline hover:text-ink"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <Link href="/showroom" className="no-underline">
                Get directions →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide flex flex-col gap-2 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Cheshire Kitchens & Bedrooms. All rights
          reserved.
        </p>
        <p>Designed &amp; built by HiveByte Technologies.</p>
      </div>
    </footer>
  );
}
