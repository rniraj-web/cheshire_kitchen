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
    body: "Every design is presented as a photorealistic CAD render before you commit, so you can see - and tweak - exactly how your finished room will look.",
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
              For {YEARS_TRADING} years, we&rsquo;ve built a proud history of
              quality, trust and success. This year, we&rsquo;re celebrating
              five decades of experience and looking forward to the future.
            </p>
          </Reveal>
          <Reveal delay={0.15} fade={false}>
            <ProductImage
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
            Cheshire Kitchens and Bedrooms was established by Shirley Sharp in
            1976. After an extremely good start to the business she was soon
            joined by her husband Alan and son Gary. Gary and wife Rita now own
            and run the business alongside Lee Gowland. Lee joined the company
            in 1983 and has over 30 years of kitchen design experience. Daniel
            Jones joined the company much more recently in 2013 but brought with
            him 5 years of previous experience within the industry. Between
            Gary, Lee and Daniel, they have designed and project managed
            thousands of kitchens. Working from architect&rsquo;s plans,
            personal site surveys and customers own measurements, they are all
            still enjoying the challenge that each individual design brings.
          </p>

          <p className="text-left md:text-justify">
            The design process usually begins with a visit to our extensive
            showroom on the A6 in Hazel Grove, Stockport. This visit will allow
            you to get a feel for our product offering, whilst receiving expert
            advice on each option. This is also the best time to bring along
            some rough measurements
            <ImageModal
              image="/images/examples/Example_kitchen_measurements.jpg"
              alt="Example of kitchen measurements"
            />
            or an architect&rsquo;s plan of the room. This enables us to better
            advise you on design possibilities and from this we can produce a
            guide price for the kitchen. Following on from this initial meeting
            we can book an appointment to attend the property, carrying out a
            full survey, giving us all the information to produce a full design
            and quotation. Our design presentations include photorealistic
            images of the design, rendered from the most up to date CAD design
            software{" "}
            <ImageModal
              image="/images/examples/Rendered-Image-Example.jpg"
              alt="Example of a kitchen CAD design"
            />
            . Giving you the best example of how your kitchen will look and
            letting you tweak every component to ensure the resulting living
            space will suit you&rsquo;re lifestyle perfectly.
          </p>

          <p className="text-left md:text-justify">
            For both Kitchens and Bedrooms we have our own team of in house
            fitters and can project manage each job from start to finish if
            required. We can also work on a supply only basis for both personal
            or builders jobs. For each of the above options we can produce
            plans, including finished building plans, electrical plans, ducting
            plans and so on. All of which ensures the installation runs
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
