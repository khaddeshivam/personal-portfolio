"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import { ArrowDownToLine, Eye } from "lucide-react";

type Ripple = { id: number; x: number; y: number };

export function ResumeButtons() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function addRipple(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples(prev => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 650);
  }

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="/shivam-khadde-resume.pdf"
        download
        onClick={addRipple}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-zinc-950 shadow-[0_10px_30px_rgba(249,115,22,.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(249,115,22,.5)]"
      >
        {ripples.map(r => (
          <span
            key={r.id}
            className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-white/50"
            style={{ left: r.x, top: r.y, transform: "translate(-50%,-50%)", animation: "resume-ripple .65s ease-out" }}
          />
        ))}
        <ArrowDownToLine size={17} />
        Download Resume
      </a>
      <a
        href="/shivam-khadde-resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[.06]"
      >
        <Eye size={17} />
        Preview Resume
      </a>
    </div>
  );
}
