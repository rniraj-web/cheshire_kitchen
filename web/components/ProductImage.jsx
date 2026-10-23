"use client";

import { useState } from "react";
import Image from "next/image";
import { resolveImageUrl } from "@/lib/api";
import PlaceholderImage from "./PlaceholderImage";
import ImageLightbox from "./gallery/ImageLightbox";

const RATIO_CLASSES = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export default function ProductImage({
  image,
  ratio = "4/3",
  fallbackLabel,
  className = "",
  enlargeable = false,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!image?.url) {
    return (
      <PlaceholderImage
        label={fallbackLabel}
        ratio={ratio}
        className={className}
      />
    );
  }

  const resolvedImage = { ...image, url: resolveImageUrl(image.url) };

  return (
    <>
      <div
        role={enlargeable ? "button" : undefined}
        tabIndex={enlargeable ? 0 : undefined}
        onClick={enlargeable ? () => setLightboxOpen(true) : undefined}
        onKeyDown={
          enlargeable
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setLightboxOpen(true);
                }
              }
            : undefined
        }
        aria-label={enlargeable ? `Enlarge photo: ${image.alt}` : undefined}
        className={`card relative overflow-hidden ${RATIO_CLASSES[ratio] ?? RATIO_CLASSES["4/3"]} ${enlargeable ? "cursor-zoom-in" : ""} ${className}`}
      >
        <Image
          src={resolvedImage.url}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      {enlargeable && (
        <ImageLightbox
          image={lightboxOpen ? resolvedImage : null}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
