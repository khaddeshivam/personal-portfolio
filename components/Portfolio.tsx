"use client";

import { ArrowUpRight, ChevronRight, Code2, FileText, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { achievements, coreStack, floatingTech, footerLinks, navigation, profile, sectionMeta, stats, story } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Github, Linkedin } from "@/components/icons/BrandIcons";

const reveal = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal} transition={{ duration: 0.5 }} className="mb-12 max-w-2xl"><p className="mb-3 font-mono text-xs uppercase tracking-[.16em] text-orange-300">{eyebrow}</p><h2 className="font-display text-4xl font-bold tracking-[-.045em] text-white md:text-5xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>}</motion.div> }

export function Navbar() { const [open, setOpen] = useState(false); const progress = useScrollProgress(); return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5"><div className="mx-auto max-w-6xl"><div className="overflow-hidden rounded-[22px] border border-white/[.07] bg-[#0b0b0e]/85 shadow-2xl shadow-black/30 backdrop-blur-xl"><div className="h-px origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400" style={{ transform: `scaleX(${progress})` }} /><div className="flex h-16 items-center justify-between px-4 sm:px-5"><a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold"><span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 font-mono text-xs">SK</span>{profile.name.split(" ")[0]}</a><nav className="hidden items-center gap-1 lg:flex">{navigation.map(({ label, href, icon: Icon }) => <a className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white" href={href} key={href}><Icon size={15} />{label}</a>)}</nav><a className="hidden items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-bold text-zinc-950 shadow-[0_8px_24px_rgba(249,115,22,.25)] transition hover:-translate-y-0.5 sm:flex" href="#contact">Let’s talk <ChevronRight size={16} /></a><button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 lg:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button></div><AnimatePresence>{open && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 px-4 pb-3 lg:hidden">{navigation.map(({ label, href, icon: Icon }) => <a onClick={() => setOpen(false)} className="flex items-center gap-3 py-3 text-sm text-zinc-300" href={href} key={href}><Icon size={16} />{label}</a>)}</motion.nav>}</AnimatePresence></div></div></header> }

export function Hero() { const reduced = useReducedMotion(); return <section id="home" className="relative isolate overflow-hidden px-5 pb-20 pt-44 text-center md:pb-28 md:pt-52"><div className="orbit-field" /><div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_24%,rgba(111,55,205,.13),transparent_28%),radial-gradient(circle_at_82%_62%,rgba(236,72,153,.07),transparent_20%)]" />{floatingTech.map((tech, index) => <motion.div key={tech.label} animate={reduced ? {} : { y: [0, -14, 0] }} transition={{ duration: 5 + index * .4, repeat: Infinity, ease: "easeInOut", delay: index * .35 }} className={`float-tech hidden md:flex ${tech.className}`}>{tech.label}</motion.div>)}<motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .55 }} className="relative mx-auto max-w-5xl"><div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-xs text-zinc-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />{profile.availability}</div><h1 className="font-display text-[3.25rem] font-bold leading-[.98] tracking-[-.065em] text-white sm:text-7xl lg:text-[6.15rem]"><span>{profile.hero.lead}</span><br /><span className="accent-text">{profile.hero.accent}</span><br /><span>{profile.hero.tail}</span></h1><p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">{profile.hero.description}</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild><a href="#featured-projects">Explore my work <ArrowUpRight size={17} /></a></Button><Button asChild variant="ghost"><a href={`mailto:${profile.email}`}>Get in touch <Mail size={16} /></a></Button></div></motion.div></section> }

export function StackStrip() { return <div className="border-y border-white/[.08] bg-white/[.015]"><div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5"><span className="font-mono text-[11px] uppercase tracking-[.16em] text-zinc-600">Core stack</span><div className="flex flex-wrap gap-x-7 gap-y-2">{coreStack.map(item => <span className="font-mono text-sm text-zinc-400" key={item}>{item}</span>)}</div></div></div> }

export function Story() { return <section id="story" className="section-shell"><SectionHeading {...sectionMeta.story} /><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/[.09] bg-[#121216]"><div className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400" /><img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" /><div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-zinc-200 backdrop-blur-md"><span className="font-semibold">{profile.role}</span><span className="text-zinc-400">{profile.location}</span></div></motion.div><div className="space-y-8"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ duration: .5 }} className="space-y-5 text-[1.02rem] leading-8 text-zinc-400">{story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</motion.div><div className="grid grid-cols-2 gap-3">{stats.map((stat, i) => <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ duration: .4, delay: i * .08 }} className="rounded-2xl border border-white/[.09] bg-[#131318] p-5 md:p-6" key={stat.label}><p className="accent-text font-display text-3xl font-bold tracking-[-.05em] md:text-4xl">{stat.value}</p><p className="mt-2 text-sm leading-5 text-zinc-500">{stat.label}</p></motion.div>)}</div></div></div></section> }

export function Achievements() { return <section id="achievements" className="section-shell pt-0"><SectionHeading {...sectionMeta.achievements} /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{achievements.map((item, i) => <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ duration: .4, delay: i * .06 }} className="rounded-2xl border border-white/[.09] bg-[#121216] p-6 text-center transition hover:border-violet-400/50" key={item.title}><span className="text-3xl">{item.icon}</span><p className="mt-3 font-semibold text-zinc-100">{item.title}</p><p className="mt-1 text-sm text-zinc-500">{item.detail}</p></motion.div>)}</div></section> }

export function Contact() { return <section id="contact" className="section-shell pt-0"><div className="relative overflow-hidden rounded-[30px] border border-white/[.1] bg-[#131318] px-6 py-14 text-center md:px-12 md:py-20"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,.18),transparent_36%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,.14),transparent_35%)]" /><h2 className="font-display text-4xl font-bold tracking-[-.055em] md:text-5xl">{sectionMeta.contact.title} <span className="accent-text">{sectionMeta.contact.accent}</span></h2><p className="mx-auto mt-5 max-w-lg text-zinc-400">{sectionMeta.contact.description}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild><a href={`mailto:${profile.email}`}>Email me <Mail size={16} /></a></Button><Button asChild variant="ghost"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a></Button><Button asChild variant="ghost"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a></Button></div></div></section> }

export function Footer() {
  return (
    <footer className="border-t border-white/[.08]">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <a href="#home" className="font-display text-lg font-bold text-white">{profile.name}</a>
            <p className="mt-1 text-sm font-semibold text-fuchsia-300">{profile.role}</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">{profile.tagline}</p>
          </div>
          <div className="md:justify-self-center">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-zinc-600">Quick links</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map(link => <li key={link.href}><a href={link.href} className="text-sm text-zinc-400 transition hover:text-white">{link.label}</a></li>)}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-zinc-600 md:text-right">Elsewhere</p>
            <div className="mt-4 flex gap-2.5 md:justify-end">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-icon-btn"><Github size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-icon-btn"><Linkedin size={17} /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="footer-icon-btn"><Code2 size={17} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="footer-icon-btn"><Mail size={17} /></a>
              <a href="/shivam-khadde-resume.pdf" download aria-label="Resume" className="footer-icon-btn"><FileText size={17} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/[.06] pt-6 text-center text-xs text-zinc-600 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 {profile.name}.</p>
          <p>Designed &amp; developed with <span className="text-rose-400">❤</span> using Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </motion.div>
    </footer>
  );
}
