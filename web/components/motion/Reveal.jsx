"use client";

import { motion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  fade = true,
  direction = null,
}) {
  const Component = motion[as] ?? motion.div;

  const x = direction === "left" ? -100 : direction === "right" ? 100 : 0;

  return (
    <Component
      initial={{
        opacity: fade ? 0 : 1,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
