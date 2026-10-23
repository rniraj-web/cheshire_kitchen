"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { resolveImageUrl } from "@/lib/api";
import ImageLightbox from "./gallery/ImageLightbox";

export default function ImageCarousel({ images, ratio = "4/3" }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const go = (next) => setIndex((next + images.length) % images.length);
  const current = { ...images[index], url: resolveImageUrl(images[index].url) };

  return (
    <div className="card relative aspect-[4/3] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={current.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Enlarge photo: ${current.alt}`}
            className="absolute inset-0 cursor-zoom-in"
          >
            <Image
              src={current.url}
              alt={current.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={index === 0}
              className="object-cover"
            />
          </button>
        </motion.div>
      </AnimatePresence>

      <ImageLightbox
        image={lightboxOpen ? current : null}
        onClose={() => setLightboxOpen(false)}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lifted"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lifted"
          >
            <ChevronIcon direction="right" />
          </button>

          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Showroom photos"
          >
            {images.map((image, i) => (
              <button
                key={image.url}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
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
