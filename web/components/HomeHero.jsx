"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import MagneticButton from "./motion/MagneticButton";
import { resolveImageUrl } from "@/lib/api";
import { BUSINESS, YEARS_TRADING } from "@/lib/config";

const HEADLINE_WORDS = ["Kitchens", "and", "bedrooms,", "built", "around"];
const SLIDE_DURATION = 5000;

// Above-the-fold hero content animates via transform only (never opacity):
// Chrome's Largest Contentful Paint heuristic excludes elements with an
// in-progress opacity animation until it settles, which would otherwise
// push LCP out by the animation's delay + duration. A translateY/scale
// "rise into place" still reads as a deliberate entrance without that cost.
// The background carousel is the exception that proves the rule: its first
// slide renders at a resolved opacity-100 with no transition (see below), so
// it never has an in-progress animation during the initial paint — only
// later auto-rotations (well after LCP is recorded) ever cross-fade.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const wordVariant = {
  hidden: { y: 28 },
  show: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const riseIn = {
  hidden: { y: 20 },
  show: { y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomeHero({ heroImages = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <section className="scrim-dark relative flex min-h-[600px] items-center overflow-hidden md:min-h-[85vh]">
      {/* Background carousel — only the current slide is ever mounted, so
          the initial paint fetches exactly one (priority) image rather than
          all five. AnimatePresence's initial={false} means that first slide
          renders straight into its resolved, fully-opaque state (no fade-in
          during the LCP-measurement window); only later auto-rotations —
          which happen well after LCP is recorded — cross-fade. */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={heroImages[index]?.url ?? index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {heroImages[index] && (
              <Image
                src={resolveImageUrl(heroImages[index].url)}
                alt={heroImages[index].alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left-to-right scrim, referencing the reference site's hero treatment:
          opaque where the text sits, fading out so the photo reads fully on
          the right. Ours uses the brand navy rather than white since our
          hero copy is light-on-dark here. */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/15" />
      {/* Additional flat scrim on top, requested separately from the L-R
          gradient above — keeps centered text legible everywhere regardless
          of which carousel photo (light or dark) is showing, since centered
          copy now sits over the part of the image the gradient fades out. */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide text-white uppercase backdrop-blur"
        >
          Celebrating {YEARS_TRADING} years · 1976–2026
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-x-3 text-white"
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span key={i} variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={wordVariant}
            className="inline-block bg-gradient-to-r from-[#f0c396] to-white bg-clip-text text-transparent"
          >
            how you live.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={riseIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/85"
        >
          For half a century, Cheshire Kitchens & Bedrooms has designed, built and fitted
          handcrafted kitchens and bedrooms across Cheshire — from first sketch to final fit.
        </motion.p>

        <motion.div
          variants={riseIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <MagneticButton>
            <Link href="/showroom" className="btn-primary">
              Enquire today
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href={BUSINESS.phoneHref}
              className="btn-pill border border-white/40 text-white hover:bg-white/10"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </MagneticButton>
        </motion.div>

        {heroImages.length > 1 && (
          <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Featured rooms">
            {heroImages.map((image, i) => (
              <button
                key={image.url}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="group flex h-6 min-w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-white" : "w-1.5 bg-white/40 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
