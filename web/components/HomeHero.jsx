"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ProductImage from "./ProductImage";
import MagneticButton from "./motion/MagneticButton";
import { BUSINESS, YEARS_TRADING } from "@/lib/config";

const HEADLINE_WORDS = ["Kitchens", "and", "bedrooms,", "built", "around"];

// Above-the-fold hero content animates via transform only (never opacity):
// Chrome's Largest Contentful Paint heuristic excludes elements with an
// in-progress opacity animation until it settles, which would otherwise
// push LCP out by the animation's delay + duration. A translateY/scale
// "rise into place" still reads as a deliberate entrance without that cost.
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

export default function HomeHero({ heroImage }) {
  return (
    <section className="hero-mesh section-surface relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-raised px-4 py-1.5 shadow-sm"
          >
            Celebrating {YEARS_TRADING} years · 1976–2026
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-3 text-left"
          >
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span key={i} variants={wordVariant} className="inline-block">
                {word}
              </motion.span>
            ))}
            <motion.span variants={wordVariant} className="text-gradient inline-block">
              how you live.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={riseIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-md text-left text-base leading-relaxed text-ink-muted"
          >
            For half a century, Cheshire Kitchens & Bedrooms has designed, built and fitted
            handcrafted kitchens and bedrooms across Cheshire — from first sketch to final fit.
          </motion.p>

          <motion.div
            variants={riseIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Link href="/showroom" className="btn-primary">
                Enquire today
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={BUSINESS.phoneHref} className="btn-outline">
                Call {BUSINESS.phoneDisplay}
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <ProductImage image={heroImage} ratio="4/3" fallbackLabel="Signature kitchen installation" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 hidden rounded-2xl border border-hairline bg-surface-raised px-5 py-3 shadow-lifted sm:block"
          >
            <p className="font-display text-2xl font-semibold text-gradient">{YEARS_TRADING} yrs</p>
            <p className="text-xs text-ink-muted">Est. 1976</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-hairline bg-surface-raised px-5 py-3 shadow-lifted sm:block"
          >
            <p className="text-sm font-medium text-ink">Free Design Visit</p>
            <p className="text-xs text-ink-muted">No obligation</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
