import type { FeaturedProject } from "@/types/project";
import { ProjectTech } from "./ProjectTech";

export function ProjectContent({ project }: { project: FeaturedProject }) { return <div><p className="text-xs font-bold uppercase tracking-[.12em] text-orange-400">{project.category}</p><h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">{project.name}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">{project.description}</p><ProjectTech items={project.tech} /></div> }
