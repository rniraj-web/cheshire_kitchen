import Link from "next/link";
import Reveal from "./motion/Reveal";
import MagneticButton from "./motion/MagneticButton";

export default function FreeMeasureBanner() {
  return (
    <section className="section-surface py-16 md:py-20">
      <div className="container-wide">
        <Reveal
          as="div"
          className="card relative overflow-hidden flex flex-col items-start gap-6 bg-navy px-8 py-12 text-white shadow-navy md:flex-row md:items-center md:justify-between md:px-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 85% 80%, rgba(200,112,63,0.35), transparent 45%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-xl">
            <h2 className="text-white">Free No-Obligation Home Measure and Design Service</h2>
            <p className="mt-3 text-left text-base text-white/85">
              Enquire today and one of our designers will visit your home, take measurements and
              talk through the possibilities — no cost, no obligation.
            </p>
          </div>
          <MagneticButton className="relative shrink-0">
            <Link href="/showroom" className="btn-pill bg-white text-navy hover:bg-white/90">
              Enquire today
            </Link>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
