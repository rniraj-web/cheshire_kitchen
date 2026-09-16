"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

// Opens quickly, closes slowly — the slow close is deliberate (requested
// explicitly), giving the enlarged photo a moment to settle rather than
// snapping shut.
const OPEN_DURATION = 0.3;
const CLOSE_DURATION = 0.9;

export default function ImageLightbox({ project, onClose }) {
  const image = project?.coverImage;

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          key={image.url}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: CLOSE_DURATION, ease: "easeInOut" } }}
          transition={{ duration: OPEN_DURATION }}
        >
          <motion.button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close image"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl leading-none text-black shadow-lg md:top-6 md:right-6"
            initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 90, transition: { duration: CLOSE_DURATION, ease: "easeInOut" } }}
            transition={{ duration: OPEN_DURATION, delay: 0.1 }}
          >
            &times;
          </motion.button>

          <motion.div
            className="relative h-[80vh] w-[95vw] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, transition: { duration: CLOSE_DURATION, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: OPEN_DURATION, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src={image.url} alt={image.alt} fill sizes="95vw" className="object-contain" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
