import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ImageModal from "@/components/ImageModal";
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
    body: "Every design is presented as a photorealistic CAD render before you commit, so you can see and tweak exactly how your finished room will look.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="section-surface pt-14 pb-16 md:pt-20">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal fade={false}>
            <p className="eyebrow mb-5">Why Cheshire Kitchens & Bedrooms</p>
            <h1 className="text-left">
              Celebrating {YEARS_TRADING} years of excellence
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
              For {YEARS_TRADING} years, we have built a proud history of
              quality, trust and success. This year, we are celebrating five
              decades of experience and looking forward to the future.
            </p>
          </Reveal>
          <Reveal delay={0.15} fade={false}>
            <ProductImage
              image={{
                url: "/images/about-us/storefront.jpeg",
                alt: "Our showroom, Hazel Grove",
              }}
              ratio="4/3"
              fallbackLabel="Our showroom, Hazel Grove"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-surface-alt py-16 md:py-20">
        <Reveal
          as="div"
          className="container-wide max-w-3xl space-y-6 text-center leading-relaxed text-ink"
        >
          <p className="text-left md:text-justify">
            Our story began when in 1976, Shirley Sharp established the business
            and as demand quickly grew, was soon joined by husband Alan and son
            Gary, cementing our foundation as a true family-run business.
          </p>

          <p className="text-left md:text-justify">
            7 years later, with Shirley taking a more relaxed role, Lee Gowland
            joined the team to work alongside Gary, with Gary&rsquo;s wife Rita
            joining soon after.
          </p>
          <p className="text-left md:text-justify">
            Once Shirley & Alan retired in 1996, the next 22 years saw the team
            of Gary, Rita & Lee continuing to work together, designing and
            project managing thousands of kitchens and bedrooms.
          </p>
          <p className="text-left md:text-justify">
            Following Gary & Rita&rsquo;s retirement in 2018, Family traditions
            now continue to live on through Lee, his daughter Charlotte and son
            Max.
          </p>
          <p className="text-left md:text-justify">
            Whether working from complex architect plans, conducting detailed
            personal site surveys, or starting with a customer&rsquo;s own
            measurements, we bring together half a century of craftsmanship and
            design expertise to every project.
          </p>
          <p className="text-left md:text-justify">
            While technology and interior trends have evolved over the last 50
            years, our passion remains unchanged, delivering exceptional,
            personalised design, supply and installation to our local community.
          </p>
          <Link href="/showroom" className="btn-primary mt-4 inline-flex">
            Visit the showroom
          </Link>
        </Reveal>
      </section>

      <section className="section-surface py-16 md:py-20">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Why Cheshire Kitchens?"
            />
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {VALUES.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.08}>
                <h3 className="text-lg font-medium text-ink">{value.title}</h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-ink-muted">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
