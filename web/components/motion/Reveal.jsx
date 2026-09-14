"use client";

import { motion } from "motion/react";

export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div", fade = true }) {
  const Component = motion[as] ?? motion.div;

  // `fade=false` for anything that can appear in the initial viewport (hero
  // sections). Chrome's Largest Contentful Paint heuristic excludes elements
  // with an in-progress opacity animation until it settles, so an
  // opacity:0 initial state on above-the-fold content directly delays LCP.
  // Below-the-fold content (the default) is safe to fade — it's outside the
  // initial viewport and can't be an LCP candidate until scrolled to anyway.
  return (
    <Component
      initial={fade ? { opacity: 0, y } : { y }}
      whileInView={fade ? { opacity: 1, y: 0 } : { y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
