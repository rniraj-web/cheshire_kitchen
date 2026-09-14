import Link from "next/link";
import { getBlogPosts, getRanges, safe } from "@/lib/api";
import { BUSINESS, YEARS_TRADING } from "@/lib/config";
import ProductImage from "@/components/ProductImage";
import SectionHeading from "@/components/SectionHeading";
import FreeMeasureBanner from "@/components/FreeMeasureBanner";
import Reveal from "@/components/motion/Reveal";

export default async function HomePage() {
  const [kitchenRanges, bedroomRanges, posts] = await Promise.all([
    safe(getRanges("kitchen"), []),
    safe(getRanges("bedroom"), []),
    safe(getBlogPosts(), []),
  ]);

  const heroImage = kitchenRanges[0]?.images?.[0];

  return (
    <>
      {/* Hero */}
      <section className="section-surface pt-14 pb-16 md:pt-20">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow mb-5">Celebrating {YEARS_TRADING} years, 1976–2026</p>
            <h1 className="text-left">Kitchens and bedrooms built around how you live.</h1>
            <p className="mt-6 max-w-md text-left text-base leading-relaxed text-ink-muted">
              For half a century, Cheshire Kitchens & Bedrooms has designed, built and fitted
              handcrafted kitchens and bedrooms across Cheshire — from first sketch to final fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/showroom" className="btn-primary">
                Enquire today
              </Link>
              <a href={BUSINESS.phoneHref} className="btn-outline">
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ProductImage image={heroImage} ratio="4/3" fallbackLabel="Signature kitchen installation" />
          </Reveal>
        </div>
      </section>

      {/* 50 years */}
      <section className="section-surface-alt py-16 md:py-20">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="Fifty years of designing kitchens for Cheshire homes"
              description="Founded by Shirley Sharp in 1976, the business has grown into a family-run team of designers and fitters who still measure, design and build every project themselves — nothing dropshipped, nothing outsourced."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/about-us" className="btn-outline">
              Read our story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Siemens partnership */}
      <section className="section-surface py-16 md:py-20">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal className="order-2 md:order-1">
            <PlaceholderBadge />
          </Reveal>
          <Reveal delay={0.1} className="order-1 md:order-2">
            <SectionHeading
              eyebrow="Official partner"
              title="Proud Siemens appliance partner"
              description="We're proud to partner with Siemens, fitting their kitchen appliances as standard across our ranges — precision engineering to match the cabinetry it sits in."
            />
          </Reveal>
        </div>
      </section>

      {/* Ranges showcase */}
      <section className="section-surface-alt py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Our ranges"
              title="Kitchens and bedrooms, from four countries of craftsmanship"
              description="Rational, Ewe, Snaidero and Callerton for kitchens; Daval for bedrooms — each range shown in full in our showroom."
            />
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.1}>
              <RangeTeaser href="/kitchens" label="Kitchens" image={kitchenRanges[0]?.images?.[0]} />
            </Reveal>
            <Reveal delay={0.2}>
              <RangeTeaser href="/bedrooms" label="Bedrooms" image={bedroomRanges[0]?.images?.[0]} />
            </Reveal>
          </div>
        </div>
      </section>

      <FreeMeasureBanner />

      {/* Inspiration teaser */}
      <section className="section-surface py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="Inspiration" title="Ideas for your next project" />
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {posts.length > 0 ? (
              posts.slice(0, 3).map((post, idx) => (
                <Reveal key={post.slug} delay={idx * 0.1}>
                  <Link href={`/inspiration/${post.slug}`} className="block no-underline">
                    <ProductImage image={post.coverImage} ratio="4/3" fallbackLabel={post.title} />
                    <h3 className="mt-4 text-lg font-medium text-ink">{post.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                  </Link>
                </Reveal>
              ))
            ) : (
              <p className="text-sm text-ink-muted">New articles are on their way — check back soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-surface-alt py-16 md:py-20">
        <Reveal
          as="div"
          className="container-wide flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
        >
          <SectionHeading
            eyebrow="Visit us"
            title="See the finishes in person"
            description={`${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}`}
          />
          <Link href="/showroom" className="btn-primary shrink-0">
            Plan your visit
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function RangeTeaser({ href, label, image }) {
  return (
    <Link href={href} className="block no-underline">
      <ProductImage image={image} ratio="4/3" fallbackLabel={`${label} range`} />
      <h3 className="mt-4 text-lg font-medium text-ink">{label} →</h3>
    </Link>
  );
}

function PlaceholderBadge() {
  return (
    <div className="card flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#eef1f6] to-[#dde3ee] dark:from-[#1c1c1f] dark:to-[#242428]">
      <span className="rounded-full bg-surface-raised px-6 py-3 text-sm font-medium text-ink shadow-none">
        Siemens · Official Partner
      </span>
    </div>
  );
}
