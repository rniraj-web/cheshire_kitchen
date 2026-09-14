import Counter from "./motion/Counter";
import Reveal from "./motion/Reveal";

const STATS = [
  { value: 50, suffix: "", label: "Years of craftsmanship" },
  { static: "1976", label: "Founded in Hazel Grove" },
  { value: 1000, suffix: "+", label: "Kitchens designed" },
  { value: 5, suffix: "", label: "Brand ranges in showroom" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {STATS.map((stat, idx) => (
        <Reveal key={stat.label} delay={idx * 0.08} className="text-left">
          <p className="font-display text-4xl font-semibold text-gradient md:text-5xl">
            {stat.static ?? <Counter value={stat.value} suffix={stat.suffix} />}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
