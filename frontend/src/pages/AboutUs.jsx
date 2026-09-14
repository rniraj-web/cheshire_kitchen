import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const VALUES = [
  {
    title: "Designed around how you live",
    body: "We start with a conversation about your household, not a catalogue. Storage, seating and layout all follow from how the room is actually used.",
  },
  {
    title: "Built in our own workshop",
    body: "Every cabinet is made a short drive from the showroom, by joiners you can meet. Nothing is outsourced or dropshipped from a catalogue supplier.",
  },
  {
    title: "Fitted by the people who built it",
    body: "The same team that measured your room and built your cabinetry carries out the installation, so problems are solved by people who understand the piece.",
  },
  {
    title: "One point of contact, start to finish",
    body: "You'll have a single designer for the whole project, from first sketch to snagging visit, rather than being passed between departments.",
  },
];

export default function WhyUs() {
  return (
    <>
      <section className="container-wide grid gap-10 pt-14 pb-16 md:grid-cols-2 md:items-center md:pt-20">
        <div>
          <p className="eyebrow mb-5">Why Cheshire Kitchens & Bedrooms</p>
          <h1 className="text-4xl leading-[1.1] md:text-5xl">
            Celebrating 50 Years of Excellence
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-400">
            For 50 years, we’ve built a proud history of quality, trust and
            success. This year, we’re celebrating five decades of experience and
            looking forward to the future.
          </p>
        </div>
        <ImagePlaceholder
          label="Our showroom shopfront, Hale"
          ratio="aspect-[4/3]"
        />
      </section>
      {/* <section className="hairline border-ink-100 py-16">
        <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
          <ImagePlaceholder
            label="Workshop — joiner at the bench"
            ratio="aspect-[4/3]"
            className="order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <SectionHeading
              eyebrow="Our workshop"
              title="Every piece starts as timber, not a flat-pack"
              description="Our joiners work from solid and veneered timber, cut and assembled to the exact dimensions of your room. It takes longer than ordering standard cabinet widths — we think that's the point."
            />
          </div>
        </div>
      </section> */}
      {/* grid gap-10 md:grid-cols-2 */}
      <section className="hairline border-ink-100 bg-stone-100 py-16">
        <div className="container-wide md:items-center">
          <div>
            <p>
              Cheshire Kitchens and Bedrooms was established by Shirley Sharp in
              1976. After an extremely good start to the business she was soon
              joined by her husband Alan and son Gary. Gary and wife Rita now
              own and run the business alongside Lee Gowland. Lee joined the
              company in 1983 and has over 30 years of kitchen design
              experience. Daniel Jones joined the company much more recently in
              2013 but brought with him 5 years of previous experience within
              the industry. Between Gary, Lee and Daniel, they have designed and
              project managed thousands of kitchens. Working from architect’s
              plans, personal site surveys and customers own measurements, they
              are all still enjoying the challenge that each individual design
              brings.
            </p>
            <p>
              The design process usually begins with a visit to our extensive
              showroom on the A6 in Hazel Grove, Stockport. This visit will
              allow you to get a feel for our product offering, whilst receiving
              expert advice on each option. This is also the best time to bring
              along some rough measurements (click here for an example) or an
              architect’s plan of the room. This enables us to better advise you
              on design possibilities and from this we can produce a guide price
              for the kitchen. Following on from this initial meeting we can
              book an appointment to attend the property, carrying out a full
              survey, giving us all the information to produce a full design and
              quotation. Our design presentations include photorealistic images
              of the design, rendered from the most up to date CAD design
              software (click here for an example). Giving you the best example
              of how your kitchen will look and letting you tweak every
              component to ensure the resulting living space will suit you’re
              lifestyle perfectly.
            </p>
            <p>
              For both Kitchens and Bedrooms we have our own team of in house
              fitters and can project manage each job from start to finish if
              required. We can also work on a supply only basis for both
              personal or builders jobs. For each of the above options we can
              produce plans, including finished building plans, electrical
              plans, ducting plans and so on. All of which ensures the
              installation runs smoothly.
            </p>
          </div>
          <div>
            <Link to="/showroom" className="btn-primary mt-8">
              Visit the showroom
            </Link>
          </div>
          <ImagePlaceholder
            label="The Cheshire Kitchens team"
            ratio="aspect-[4/3]"
          />
        </div>
      </section>
    </>
  );
}

// Cheshire Kitchens and Bedrooms was established by Shirley Sharp in 1976. After an extremely good start to the business she was soon joined by her husband Alan and son Gary. Gary and wife Rita now own and run the business alongside Lee Gowland. Lee joined the company in 1983 and has over 30 years of kitchen design experience. Daniel Jones joined the company much more recently in 2013 but brought with him 5 years of previous experience within the industry. Between Gary, Lee and Daniel, they have designed and project managed thousands of kitchens. Working from architect’s plans, personal site surveys and customers own measurements, they are all still enjoying the challenge that each individual design brings.
// The design process usually begins with a visit to our extensive showroom on the A6 in Hazel Grove, Stockport. This visit will allow you to get a feel for our product offering, whilst receiving expert advice on each option. This is also the best time to bring along some rough measurements (click here for an example) or an architect’s plan of the room. This enables us to better advise you on design possibilities and from this we can produce a guide price for the kitchen. Following on from this initial meeting we can book an appointment to attend the property, carrying out a full survey, giving us all the information to produce a full design and quotation. Our design presentations include photorealistic images of the design, rendered from the most up to date CAD design software (click here for an example). Giving you the best example of how your kitchen will look and letting you tweak every component to ensure the resulting living space will suit you’re lifestyle perfectly.
// For both Kitchens and Bedrooms we have our own team of in house fitters and can project manage each job from start to finish if required. We can also work on a supply only basis for both personal or builders jobs. For each of the above options we can produce plans, including finished building plans, electrical plans, ducting plans and so on. All of which ensures the installation runs smoothly.
