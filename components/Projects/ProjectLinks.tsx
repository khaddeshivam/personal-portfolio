import { ExternalLink } from "lucide-react";
import type { FeaturedProject } from "@/types/project";
import { Github } from "@/components/icons/BrandIcons";

export function ProjectLinks({ project }: { project: FeaturedProject }) {
  if (!project.githubUrl && !project.liveUrl) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-2.5">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/[.12] px-4 py-2 text-xs font-semibold text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white"
        >
          <Github size={14} />
          GitHub
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/[.12] px-4 py-2 text-xs font-semibold text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white"
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      )}
    </div>
  );
}
