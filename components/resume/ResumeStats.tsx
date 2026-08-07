import { resumeChips } from "@/data/resume";

export function ResumeStats() {
  return (
    <div className="mt-8 divide-y divide-white/[.08] border-t border-white/[.08]">
      {resumeChips.map(chip => (
        <div key={chip.label} className="flex flex-wrap items-center justify-between gap-2 py-3.5">
          <span className="text-xs uppercase tracking-[.08em] text-zinc-500">{chip.label}</span>
          <span className="text-right text-sm font-semibold text-zinc-100">{chip.value}</span>
        </div>
      ))}
    </div>
  );
}
