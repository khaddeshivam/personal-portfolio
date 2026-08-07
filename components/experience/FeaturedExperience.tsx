"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { featuredExperience } from "@/data/experience";
import { TechBadges } from "./TechBadges";

export function FeaturedExperience() {
  const exp = featuredExperience;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/[.09] bg-[#121216] p-7 transition-colors duration-500 hover:border-violet-400/40 md:p-10"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[.08] blur-3xl transition-opacity duration-500 group-hover:opacity-150" />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            {exp.status}
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-[-.03em] text-white md:text-3xl">{exp.company}</h3>
          <p className="mt-1 text-sm font-semibold text-fuchsia-300">{exp.role}</p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <p className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-400">{exp.period}</p>
          <p className="flex items-center gap-1.5 text-xs text-zinc-500"><MapPin size={12} />{exp.location}</p>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-400 md:text-[15px] md:leading-7">{exp.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {exp.highlights.map(item => <span className="rounded-full border border-white/[.08] bg-white/[.03] px-3 py-1.5 text-xs text-zinc-300" key={item}>{item}</span>)}
      </div>

      <div className="mt-6"><TechBadges items={exp.stack} size="md" /></div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/[.08] pt-6">
        {exp.stats.map(stat => (
          <div key={stat.label}>
            <p className="accent-text font-display text-2xl font-bold tracking-[-.04em] md:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs leading-4 text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
