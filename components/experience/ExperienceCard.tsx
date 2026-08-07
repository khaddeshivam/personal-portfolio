"use client";

import { motion } from "framer-motion";
import type { SecondaryExperience } from "@/types/experience";
import { TechBadges } from "./TechBadges";

export function ExperienceCard({ item, index }: { item: SecondaryExperience; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-2xl border border-white/[.09] bg-[#121216] p-6 transition-colors duration-300 hover:border-violet-400/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-display text-base font-bold text-white">{item.company}</h4>
          <p className="mt-1 text-xs font-semibold text-fuchsia-300">{item.role}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-500">{item.duration}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
      <div className="mt-4"><TechBadges items={item.skills} /></div>
    </motion.article>
  );
}
