"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

export default function CategoryCarousel({ projects, categoryLabel, priorityFirst = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxProject, setLightboxProject] = useState(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        }
      },
      // Narrow the intersection root to a thin vertical strip through the
      // center of the track, so only the card actually centered counts.
      { root: track, rootMargin: "0px -42% 0px -42%", threshold: 0 },
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [projects.length]);

  const scrollToIndex = (index) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    cardRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  if (projects.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-9rem)] py-8 sm:px-[calc(50%-10rem)] md:gap-6 md:px-[calc(50%-12rem)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={project._id}
              ref={(el) => (cardRefs.current[i] = el)}
              data-index={i}
              type="button"
              onClick={() => (isActive ? setLightboxProject(project) : scrollToIndex(i))}
              className="card relative aspect-[4/3] w-72 shrink-0 snap-center overflow-hidden transition-[filter,opacity,transform] duration-500 ease-out sm:w-80 md:w-96"
              style={{
                opacity: isActive ? 1 : 0.45,
                filter: isActive ? "blur(0px)" : "blur(3px)",
                transform: isActive ? "scale(1)" : "scale(0.92)",
              }}
            >
              <Image
                src={project.coverImage.url}
                alt={project.coverImage.alt}
                fill
                priority={priorityFirst && i === 0}
                sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 288px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left text-white">
                <p className="text-xs font-medium tracking-wide uppercase opacity-80">{categoryLabel}</p>
                <p className="font-display text-lg font-semibold">{project.title}</p>
              </div>
              {/* Visually-hidden action hint — part of the button's text
                  content (not a separate aria-label), so it can't drift out
                  of sync with the visible title text above. */}
              <span className="sr-only">{isActive ? " — enlarge photo" : " — show this photo"}</span>
            </button>
          );
        })}
      </div>

      {projects.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label={`Previous ${categoryLabel.toLowerCase()} photo`}
            className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface-raised text-ink shadow-lifted sm:left-4"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label={`Next ${categoryLabel.toLowerCase()} photo`}
            className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface-raised text-ink shadow-lifted sm:right-4"
          >
            <ChevronIcon direction="right" />
          </button>
        </>
      )}

      <p className="mt-2 text-center text-xs text-ink-muted tabular-nums">
        {activeIndex + 1} / {projects.length}
      </p>

      <ImageLightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />
    </div>
  );
}

function ChevronIcon({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${direction === "right" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
