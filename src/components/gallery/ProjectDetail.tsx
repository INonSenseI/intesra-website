import type { Project } from "./types";
import BeforeAfterSlider from "./BeforeAfterSlider";
import MediaGrid from "./MediaGrid";
import { MagnifierIcon } from "@/components/icons";

interface ProjectDetailProps {
  project: Project;
  isEven: boolean;
  onImageOpen: (url: string) => void;
}

export default function ProjectDetail({ project, isEven, onImageOpen }: ProjectDetailProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded-sm overflow-hidden">
      {/* Média */}
      <div className={`relative min-h-[320px] sm:min-h-[400px] md:min-h-[480px] ${!isEven ? "md:order-2" : ""}`}>
        {project.mediaType === "single" && project.image && (
          <div
            className="relative h-full w-full group overflow-hidden cursor-zoom-in"
            onClick={() => onImageOpen(project.image as string)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.01] group-hover:brightness-105"
            />
            <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <MagnifierIcon size={28} className="text-white drop-shadow-md" />
            </div>
          </div>
        )}

        {project.mediaType === "grid" && project.images && (
          <MediaGrid images={project.images} alt={project.title} onImageClick={onImageOpen} />
        )}

        {project.mediaType === "before-after" && project.beforeImage && project.afterImage && (
          <BeforeAfterSlider before={project.beforeImage} after={project.afterImage} onFullscreenRequest={onImageOpen} />
        )}
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center px-8 md:px-12 py-10 md:py-12 ${!isEven ? "md:order-1" : ""} ${
          isEven ? "bg-white" : "bg-surface"
        }`}
      >
        <div className="flex items-center gap-3 mb-4 font-body">
          <span className="text-xs px-2 py-1 rounded-sm font-semibold uppercase tracking-wide text-white bg-red">
            {project.tag}
          </span>
          <span className="text-xs text-slate-400">{project.year}</span>
        </div>

        <h3 className="mb-4 font-display text-3xl md:text-4xl font-bold text-navy-dark leading-none">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-8 font-body text-slate-500">{project.description}</p>

        <div className="flex items-center gap-2 mt-auto font-body text-slate-400">
          <div className="h-px w-6 bg-red" />
          <span className="text-xs font-medium">
            Délka realizace: <strong className="text-navy">{project.duration}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
