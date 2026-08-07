"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { resumeCopy, resumeLeftCopy } from "@/data/resume";
import { ResumePreview } from "./ResumePreview";
import { ResumeStats } from "./ResumeStats";
import { ResumeButtons } from "./ResumeButtons";

export function ResumeCTA() {
  return (
    <section id="resume" className="section-shell pt-0">
      <div className="grid grid-cols-1 items-end gap-y-6 pb-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-7">
          <FileText className="mb-4 h-6 w-6 text-orange-400" />
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[.14em] text-orange-400">{resumeCopy.eyebrow}</p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">{resumeCopy.title}</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-400 md:text-base md:leading-7 lg:col-span-5">{resumeCopy.description}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[30px] border border-white/[.1] bg-[#0e0e12]/80 p-8 backdrop-blur-2xl transition-colors duration-500 hover:border-white/[.16] md:p-12 lg:p-14"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(249,115,22,.09),transparent_38%),radial-gradient(circle_at_88%_82%,rgba(59,130,246,.08),transparent_38%)]" />
        <div className="resume-noise pointer-events-none absolute inset-0 -z-10" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-3xl font-bold tracking-[-.03em] text-white md:text-4xl">{resumeLeftCopy.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400 md:text-[15px] md:leading-7">{resumeLeftCopy.description}</p>
            <ResumeStats />
            <ResumeButtons />
          </div>
          <ResumePreview />
        </div>
      </motion.div>
    </section>
  );
}
