import { getRanges, safe } from "@/lib/api";
import RangeAccordion from "@/components/RangeAccordion";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Bedrooms",
  description: "Explore our Daval (UK) bedroom range — handcrafted and fitted across Cheshire.",
};

export default async function BedroomsPage() {
  const ranges = await safe(getRanges("bedroom"), []);

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Bedrooms"
          title="Fitted bedrooms, built to fit your room exactly"
          description="Our Daval range is shown in full in our showroom — browse a taste of it below."
        />
        <div className="mt-10">
          <RangeAccordion ranges={ranges} typeLabel="bedroom" />
        </div>
      </div>
    </section>
  );
}
