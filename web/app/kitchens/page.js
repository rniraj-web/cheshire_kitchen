import { getRanges, safe } from "@/lib/api";
import RangeAccordion from "@/components/RangeAccordion";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Kitchens",
  description:
    "Explore our kitchen ranges — Rational (German), Ewe (Austrian), Snaidero (Italian) and Callerton (UK) — handcrafted and fitted across Cheshire.",
};

export default async function KitchensPage() {
  const ranges = await safe(getRanges("kitchen"), []);

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Kitchens"
          title="Four countries of kitchen craftsmanship"
          description="From precision German engineering to Italian design flair, every range is shown in full in our showroom — browse a taste of each below."
        />
        <div className="mt-10">
          <RangeAccordion ranges={ranges} typeLabel="kitchen" />
        </div>
      </div>
    </section>
  );
}
