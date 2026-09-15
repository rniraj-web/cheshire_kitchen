import Link from "next/link";
import { getBlogPosts, getRanges, safe } from "@/lib/api";
import { BUSINESS } from "@/lib/config";
import ProductImage from "@/components/ProductImage";
import SectionHeading from "@/components/SectionHeading";
import FreeMeasureBanner from "@/components/FreeMeasureBanner";
import Reveal from "@/components/motion/Reveal";
import HomeHero from "@/components/HomeHero";
import LogoMarquee from "@/components/LogoMarquee";
import StatsBar from "@/components/StatsBar";
import SpotlightCard from "@/components/motion/SpotlightCard";

export default async function HomePage() {
  const [kitchenRanges, bedroomRanges, posts] = await Promise.all([
    safe(getRanges("kitchen"), []),
    safe(getRanges("bedroom"), []),
    safe(getBlogPosts(), []),
  ]);

  const heroImages = [...kitchenRanges, ...bedroomRanges]
    .map((range) => range.images?.[0])
    .filter(Boolean);

  return (
    <>
      <HomeHero heroImages={heroImages} />

      {/* Trust strip */}
      <div className="section-surface-alt border-t border-hairline py-8">
        <div className="container-wide">
          <p className="mb-4 text-center text-xs font-medium tracking-wide text-ink-muted uppercase">
            Trusted brands in our showroom
          </p>
          <LogoMarquee />
        </div>
      </div>

      {/* Stats */}
      <section className="section-surface py-16 md:py-20">
        <div className="container-wide">
          <StatsBar />
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

      {/* Ranges showcase — asymmetric bento layout */}
      <section className="section-surface-alt py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="Our ranges"
              title="Kitchens and bedrooms, from four countries of craftsmanship"
              description="Rational, Ewe, Snaidero and Callerton for kitchens; Daval for bedrooms — each range shown in full in our showroom."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <Reveal delay={0.1} className="md:col-span-3">
              <RangeTeaser href="/kitchens" label="Kitchens" ratio="4/3" image={kitchenRanges[0]?.images?.[0]} />
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-2">
              <RangeTeaser href="/bedrooms" label="Bedrooms" ratio="3/4" image={bedroomRanges[0]?.images?.[0]} />
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
                  <SpotlightCard className="card block">
                    <Link href={`/inspiration/${post.slug}`} className="block no-underline">
                      <ProductImage image={post.coverImage} ratio="4/3" fallbackLabel={post.title} className="card-flat" />
                      <div className="p-5">
                        <h3 className="text-lg font-medium text-ink">{post.title}</h3>
                        <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
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

function RangeTeaser({ href, label, image, ratio = "4/3" }) {
  return (
    <SpotlightCard className="card block h-full">
      <Link href={href} className="block h-full no-underline">
        <ProductImage image={image} ratio={ratio} fallbackLabel={`${label} range`} className="card-flat" />
        <div className="p-5">
          <h3 className="text-lg font-medium text-ink">{label} →</h3>
        </div>
      </Link>
    </SpotlightCard>
  );
}

function PlaceholderBadge() {
  return (
    <div className="card flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#eef1f6] to-[#dde3ee] dark:from-[#1c1c1f] dark:to-[#242428]">
      <span className="rounded-full bg-surface-raised px-6 py-3 text-sm font-medium text-ink shadow-lifted">
        Siemens · Official Partner
      </span>
    </div>
  );
}
