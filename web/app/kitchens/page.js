import { getRanges, safe } from "@/lib/api";
import RangeAccordion from "@/components/RangeAccordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
import { BUSINESS, whatsappHref } from "@/lib/config";

export const metadata = {
  title: "Kitchens",
  description:
    "Explore our kitchen ranges - Rational (German), Ewe (Austrian), Snaidero (Italian) and Callerton (UK) - handcrafted and fitted across Cheshire.",
};

export default async function KitchensPage() {
  const ranges = await safe(getRanges("kitchen"), []);

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <Reveal fade={false}>
          <SectionHeading
            className="align-items-center"
            eyebrow="Kitchens"
            title="Four countries of kitchen craftsmanship"
            description="From precision German engineering to Italian design flair, every range is shown in full in our showroom - browse a taste of each below."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-10" fade={false}>
          <RangeAccordion ranges={ranges} typeLabel="kitchen" />
        </Reveal>

        <Reveal className="container-wide mt-10" direction="up">
          <div
            className="
      relative overflow-hidden rounded-2xl
      border border-hairline
      bg-surface-raised
      p-6
      shadow-[0_12px_40px_rgba(37,99,235,0.08)]
      md:p-10
      dark:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
    "
          >
            {/* Subtle blue glow */}
            <div
              className="
        pointer-events-none absolute
        -right-24 -top-24
        h-64 w-64
        rounded-full
        bg-blue-500/10
        blur-3xl
        dark:bg-blue-500/15
      "
            />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* Left content */}
              <div className="max-w-xl">
                <p className="eyebrow mb-3 text-blue-600 dark:text-blue-400">
                  Visit us
                </p>

                <h2 className="text-ink">Come and see our showroom</h2>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted md:text-base">
                  See our kitchens and bedrooms in person, explore the finishes
                  and speak to our team about your project.
                </p>

                {/* Opening hours */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      Opening hours
                    </p>

                    <p className="mt-1 text-sm font-medium text-ink">
                      9:30am – 5pm, Monday to Saturday
                    </p>

                    <p className="text-sm text-ink-muted">
                      Closed all day Sunday
                    </p>
                  </div>
                </div>

                {/* Contact actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={BUSINESS.phoneHref} className="btn-primary">
                    Call {BUSINESS.phoneDisplay}
                  </a>

                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              {/* Right CTA */}
              <div className="shrink-0 md:pl-8">
                <Link
                  href="/showroom"
                  className="group btn-primary inline-flex items-center gap-2"
                >
                  Visit the showroom
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
