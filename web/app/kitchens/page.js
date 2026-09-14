import { getRanges, safe } from "@/lib/api";
import RangeAccordion from "@/components/RangeAccordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";

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
        <Reveal fade={false}>
          <SectionHeading
            eyebrow="Kitchens"
            title="Four countries of kitchen craftsmanship"
            description="From precision German engineering to Italian design flair, every range is shown in full in our showroom — browse a taste of each below."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10" fade={false}>
          <RangeAccordion ranges={ranges} typeLabel="kitchen" />
        </Reveal>
      </div>
    </section>
  );
}
