"use client";

import { motion } from "framer-motion";
import { timeline, timelineCopy } from "@/data/timeline";

export function Timeline() {
  return <section id="timeline" className="section-shell pt-0"><div className="mb-12 max-w-2xl"><p className="mb-3 font-mono text-xs uppercase tracking-[.16em] text-orange-300">{timelineCopy.eyebrow}</p><h2 className="font-display text-4xl font-bold tracking-[-.045em] text-white md:text-5xl">{timelineCopy.title}</h2><p className="mt-4 text-base leading-7 text-zinc-400">{timelineCopy.description}</p></div><div className="relative ml-3 border-l border-white/10 md:ml-0">{timeline.map((item, index) => <motion.article key={item.period} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .45, delay: index * .08 }} className="relative ml-7 pb-9 last:pb-0 md:ml-10"><span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-[#08080a] bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(168,85,247,.7)] md:-left-[47px]" /><div className="rounded-2xl border border-white/[.09] bg-[#121216] p-5 transition hover:border-violet-400/50 md:p-6"><p className="font-mono text-xs text-fuchsia-300">{item.period}</p><h3 className="mt-2 font-display text-xl font-bold tracking-[-.03em] text-white">{item.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{item.detail}</p></div></motion.article>)}</div></section>;
}
