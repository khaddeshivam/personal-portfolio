import type { TechItem } from "@/data/tech-stack";
import { TechCard } from "./TechCard";

export function TechMarqueeRow({ items, direction, duration }: { items: TechItem[]; direction: "left" | "right"; duration: number }) {
  const loop = [...items, ...items];
  return (
    <div className="tech-marquee">
      <div className="tech-marquee-track gap-5" style={{ animationDuration: `${duration}s`, animationDirection: direction === "right" ? "reverse" : "normal" }}>
        {loop.map((tech, i) => <TechCard tech={tech} key={`${tech.name}-${i}`} />)}
      </div>
    </div>
  );
}
