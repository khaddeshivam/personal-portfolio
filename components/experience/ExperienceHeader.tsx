import { BriefcaseBusiness } from "lucide-react";
import { experienceCopy } from "@/data/experience";

export function ExperienceHeader() { return <div className="grid grid-cols-1 items-end gap-y-6 pb-12 lg:grid-cols-12 lg:gap-x-16"><div className="lg:col-span-7"><BriefcaseBusiness className="mb-4 h-6 w-6 text-orange-400" /><p className="mb-3 font-mono text-xs font-bold uppercase tracking-[.14em] text-orange-400">{experienceCopy.eyebrow}</p><h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">{experienceCopy.title}</h2></div><p className="max-w-md text-sm leading-6 text-zinc-400 md:text-base md:leading-7 lg:col-span-5">{experienceCopy.description}</p></div>; }
