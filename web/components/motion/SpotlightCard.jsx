"use client";

import { useRef } from "react";
import { motion } from "motion/react";

export default function SpotlightCard({ children, className = "", as = "div", lift = true }) {
  const ref = useRef(null);
  const Component = motion[as] ?? motion.div;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--spot-x", `${x}%`);
    ref.current.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={lift ? { y: -8 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`spotlight-card ${className}`}
    >
      <span className="spotlight-card-glow" aria-hidden="true" />
      {children}
    </Component>
  );
}
