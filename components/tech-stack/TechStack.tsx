import { techRowOne, techRowTwo, techStackCopy } from "@/data/tech-stack";
import { TechMarqueeRow } from "./TechMarqueeRow";

export function TechStack() {
  return (
    <section id="skills" className="section-shell pt-0">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[.16em] text-orange-300">{techStackCopy.eyebrow}</p>
        <h2 className="font-display text-4xl font-bold tracking-[-.045em] text-white md:text-5xl">{techStackCopy.title}</h2>
      </div>
      <div className="space-y-5">
        <TechMarqueeRow items={techRowOne} direction="left" duration={34} />
        <TechMarqueeRow items={techRowTwo} direction="right" duration={40} />
      </div>
    </section>
  );
}
