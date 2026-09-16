"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProjectImageModal({ image, alt = "Project image" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // coverImage is:
  // { url: "/images/gallery/example.jpg", alt: "..." }
  const imageUrl = image?.url;

  // Don't render anything if there is no image URL
  if (!imageUrl) {
    return null;
  }

  const imageAlt = image?.alt || alt;

  return (
    <>
      {/* Gallery image */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full cursor-zoom-in text-left"
        aria-label={`View ${imageAlt}`}
      >
        <div className="card relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
            <span className="translate-y-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View image
            </span>
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-8"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-black shadow-lg transition-transform duration-200 hover:scale-105 md:right-6 md:top-6"
            aria-label="Close image"
          >
            &times;
          </button>

          {/* Large image */}
          <div
            className="relative h-[90vh] w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="95vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
