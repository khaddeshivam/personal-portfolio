import { ProjectGrid } from "./ProjectGrid";
import { ProjectsHeader } from "./ProjectsHeader";

export function Projects() { return <section id="featured-projects" className="project-section relative overflow-hidden bg-black py-24 text-white"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(124,58,237,.07),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(255,96,0,.05),transparent_20%)]" /><div className="relative mx-auto max-w-6xl px-6"><ProjectsHeader /><ProjectGrid /></div></section>; }
