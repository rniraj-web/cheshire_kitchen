import { getRanges, safe } from "@/lib/api";
import RangeAccordion from "@/components/RangeAccordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Bedrooms",
  description: "Explore our Daval (UK) bedroom range — handcrafted and fitted across Cheshire.",
};

export default async function BedroomsPage() {
  const ranges = await safe(getRanges("bedroom"), []);

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <Reveal fade={false}>
          <SectionHeading
            eyebrow="Bedrooms"
            title="Fitted bedrooms, built to fit your room exactly"
            description="Our Daval range is shown in full in our showroom — browse a taste of it below."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10" fade={false}>
          <RangeAccordion ranges={ranges} typeLabel="bedroom" />
        </Reveal>
      </div>
    </section>
  );
}
