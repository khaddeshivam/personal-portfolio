import type { TechItem } from "@/data/tech-stack";

export function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="flex h-[100px] w-[100px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-[22px] border border-white/[.08] bg-white/[.035] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-white/[.05] hover:shadow-[0_0_32px_rgba(139,92,246,.22)]">
      <img src={tech.icon} alt={tech.name} draggable={false} loading="lazy" className="h-12 w-12 object-contain" />
      <span className="font-mono text-[10.5px] text-zinc-400">{tech.name}</span>
    </div>
  );
}
