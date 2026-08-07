"use client";

import { motion } from "framer-motion";
import { experienceSummary } from "@/data/experience";

export function ExperienceSummary() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
      className="relative overflow-hidden rounded-[28px] border border-white/[.09] bg-[#121216] p-7 md:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-[.16em] text-orange-300">At a glance</p>
      <div className="mt-6 space-y-5">
        {experienceSummary.map((item, i) => (
          <div className={i > 0 ? "border-t border-white/[.08] pt-5" : ""} key={item.label}>
            <p className="text-xs uppercase tracking-[.08em] text-zinc-600">{item.label}</p>
            <p className="mt-1.5 font-display text-lg font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
