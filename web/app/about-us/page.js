import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { YEARS_TRADING } from "@/lib/config";

export const metadata = {
  title: "About Us",
  description:
    "Why Cheshire Kitchens? Founded in 1976, we're a family-run team designing, building and fitting kitchens and bedrooms across Cheshire.",
};

const VALUES = [
  {
    title: "Designed around how you live",
    body: "We start with a conversation about your household, not a catalogue. Storage, seating and layout all follow from how the room is actually used.",
  },
  {
    title: "Our own team, start to finish",
    body: "The same team that measures your room and designs your kitchen carries out the installation, so problems are solved by people who understand the project.",
  },
  {
    title: "One point of contact",
    body: "You'll have a single designer for the whole project, from first sketch to snagging visit, rather than being passed between departments.",
  },
  {
    title: "Photorealistic design previews",
    body: "Every design is presented as a photorealistic CAD render before you commit, so you can see — and tweak — exactly how your finished room will look.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="section-surface pt-14 pb-16 md:pt-20">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow mb-5">Why Cheshire Kitchens & Bedrooms</p>
            <h1 className="text-left">Celebrating {YEARS_TRADING} years of excellence</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
              For {YEARS_TRADING} years, we&rsquo;ve built a proud history of quality, trust and
              success. This year, we&rsquo;re celebrating five decades of experience and looking
              forward to the future.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ProductImage ratio="4/3" fallbackLabel="Our showroom, Hazel Grove" />
          </Reveal>
        </div>
      </section>

      <section className="section-surface-alt py-16 md:py-20">
        <Reveal as="div" className="container-wide max-w-3xl space-y-6 text-left leading-relaxed text-ink">
          <p>
            Cheshire Kitchens and Bedrooms was established by Shirley Sharp in 1976. After an
            extremely good start to the business, she was soon joined by her husband Alan and son
            Gary. Gary and wife Rita now own and run the business alongside Lee Gowland. Lee
            joined the company in 1983 and has over 30 years of kitchen design experience. Daniel
            Jones joined the company much more recently in 2013 but brought with him 5 years of
            previous experience within the industry. Between Gary, Lee and Daniel, they have
            designed and project managed thousands of kitchens, working from architects&rsquo;
            plans, personal site surveys and customers&rsquo; own measurements — and they&rsquo;re
            all still enjoying the challenge that each individual design brings.
          </p>
          <p>
            The design process usually begins with a visit to our extensive showroom in Hazel
            Grove, Stockport. This visit lets you get a feel for our product offering while
            receiving expert advice on each option — and it&rsquo;s the best time to bring along
            rough measurements or an architect&rsquo;s plan of the room, so we can advise on
            design possibilities and produce a guide price. Following that initial meeting, we
            book an appointment to survey the property, giving us everything needed to produce a
            full design and quotation, presented as photorealistic CAD renders so you can see
            exactly how your finished kitchen will look.
          </p>
          <p>
            For both kitchens and bedrooms we have our own in-house team of fitters and can
            project manage each job from start to finish, or work on a supply-only basis for
            personal or builders&rsquo; projects. For every option we can produce full plans —
            including building, electrical and ducting plans — to keep the installation running
            smoothly.
          </p>
          <Link href="/showroom" className="btn-primary mt-4 inline-flex">
            Visit the showroom
          </Link>
        </Reveal>
      </section>

      <section className="section-surface py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="Why Cheshire Kitchens?" />
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {VALUES.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.08}>
                <h3 className="text-lg font-medium text-ink">{value.title}</h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-ink-muted">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
