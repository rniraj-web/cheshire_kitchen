import Image from "next/image";
import { resolveImageUrl } from "@/lib/api";
import PlaceholderImage from "./PlaceholderImage";

const RATIO_CLASSES = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export default function ProductImage({ image, ratio = "4/3", fallbackLabel, className = "" }) {
  if (!image?.url) {
    return <PlaceholderImage label={fallbackLabel} ratio={ratio} className={className} />;
  }

  return (
    <div className={`card relative overflow-hidden ${RATIO_CLASSES[ratio] ?? RATIO_CLASSES["4/3"]} ${className}`}>
      <Image
        src={resolveImageUrl(image.url)}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
}
