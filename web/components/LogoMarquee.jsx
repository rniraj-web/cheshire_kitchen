const BRANDS = ["Rational", "Ewe", "Snaidero", "Callerton", "Daval", "Siemens"];

function BrandRow({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {BRANDS.map((brand) => (
        <span
          key={brand}
          className="font-display text-2xl font-semibold tracking-tight text-ink-muted/70 md:text-3xl"
        >
          {brand}
        </span>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden py-2" role="group" aria-label="Brand partners: Rational, Ewe, Snaidero, Callerton, Daval, Siemens">
      <div className="marquee-track flex w-max">
        <BrandRow />
        <BrandRow ariaHidden />
      </div>
    </div>
  );
}
