const RATIO_CLASSES = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export default function PlaceholderImage({ label, ratio = "4/3", className = "" }) {
  return (
    <div
      className={`card flex items-center justify-center bg-gradient-to-br from-[#eef1f6] to-[#dde3ee] dark:from-[#1c1c1f] dark:to-[#242428] ${RATIO_CLASSES[ratio] ?? RATIO_CLASSES["4/3"]} ${className}`}
    >
      <span className="max-w-[70%] text-center text-sm text-ink-muted">{label}</span>
    </div>
  );
}
