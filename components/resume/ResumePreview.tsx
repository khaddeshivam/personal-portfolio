"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export function ResumePreview() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-60, 60], [6, -6]), { stiffness: 120, damping: 14 });
  const rotateY = useSpring(useTransform(mx, [-60, 60], [-6, 6]), { stiffness: 120, damping: 14 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() { mx.set(0); my.set(0); }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1400 }}
      className="relative mx-auto flex w-full max-w-[300px] justify-center py-4"
    >
      <motion.div style={{ rotateX, rotateY }} className="relative">
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-[radial-gradient(circle,rgba(249,115,22,.16),transparent_65%)] blur-2xl" />

          <div className="relative aspect-[3/4.1] w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-50 shadow-[0_40px_80px_-20px_rgba(0,0,0,.65)] md:w-[300px]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-40" />
            <div className="relative z-0 h-full w-full p-6">
              <div className="h-3 w-2/3 rounded bg-zinc-800" />
              <div className="mt-2 h-2 w-1/2 rounded bg-orange-400/70" />
              <div className="mt-3 flex gap-2">
                <div className="h-1.5 w-8 rounded bg-zinc-300" />
                <div className="h-1.5 w-10 rounded bg-zinc-300" />
                <div className="h-1.5 w-6 rounded bg-zinc-300" />
              </div>
              <div className="mt-5 h-px w-full bg-zinc-200" />
              <div className="mt-4 h-2 w-1/3 rounded bg-zinc-700" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1.5 w-full rounded bg-zinc-200" />
                <div className="h-1.5 w-11/12 rounded bg-zinc-200" />
                <div className="h-1.5 w-4/5 rounded bg-zinc-200" />
              </div>
              <div className="mt-4 h-2 w-1/3 rounded bg-zinc-700" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1.5 w-full rounded bg-zinc-200" />
                <div className="h-1.5 w-3/4 rounded bg-zinc-200" />
              </div>
              <div className="mt-4 h-2 w-1/4 rounded bg-zinc-700" />
              <div className="mt-2 flex flex-wrap gap-1.5">
                {Array.from({ length: 8 }).map((_, i) => <div key={i} className="h-3.5 w-10 rounded-full bg-zinc-200" />)}
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 z-20 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-orange-300 backdrop-blur-md">
            Updated 2026
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
