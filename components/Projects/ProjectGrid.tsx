import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() { return <div className="grid grid-cols-1 border-y border-white/[.1] md:grid-cols-2">{featuredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>; }
