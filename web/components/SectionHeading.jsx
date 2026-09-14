export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink-muted leading-relaxed text-left">{description}</p>
      )}
    </div>
  );
}
