import Link from "next/link";
import Reveal from "./motion/Reveal";

export default function FreeMeasureBanner() {
  return (
    <section className="section-surface py-16 md:py-20">
      <div className="container-wide">
        <Reveal
          as="div"
          className="card flex flex-col items-start gap-6 bg-navy px-8 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14"
        >
          <div className="max-w-xl">
            <h2 className="text-white">Free No-Obligation Home Measure and Design Service</h2>
            <p className="mt-3 text-left text-base text-white/85">
              Enquire today and one of our designers will visit your home, take measurements and
              talk through the possibilities — no cost, no obligation.
            </p>
          </div>
          <Link href="/showroom" className="btn-pill shrink-0 bg-white text-navy hover:bg-white/90">
            Enquire today
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
