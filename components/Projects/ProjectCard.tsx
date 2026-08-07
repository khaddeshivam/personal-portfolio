import type { FeaturedProject } from "@/types/project";
import { ProjectContent } from "./ProjectContent";
import { ProjectImage } from "./ProjectImage";

export function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) { return <article className="project-cell group"><ProjectContent project={project} /><ProjectImage project={project} index={index} /></article>; }
