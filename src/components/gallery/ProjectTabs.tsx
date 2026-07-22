import type { Project } from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

interface ProjectTabsProps {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectTabs({ projects, activeIndex, onSelect, onPrev, onNext }: ProjectTabsProps) {
  return (
    <div className="flex items-center justify-between border-b border-border mb-12 gap-2">
      <button
        onClick={onPrev}
        className="p-3 text-navy-dark hover:text-red transition-colors duration-200 shrink-0 cursor-pointer"
        aria-label="Předchozí projekt"
      >
        <ArrowLeftIcon />
      </button>

      <div className="flex items-center overflow-x-auto scrollbar-none gap-1 sm:gap-2">
        {projects.map((project, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={project.id}
              onClick={() => onSelect(idx)}
              className={`font-body py-4 px-3 sm:px-5 text-center font-semibold text-xs sm:text-sm transition-all duration-300 border-b-2 whitespace-nowrap outline-none cursor-pointer ${
                isActive ? "border-red text-navy-dark bg-surface" : "border-transparent text-slate-400 hover:text-navy-dark"
              }`}
            >
              {project.title.split("—")[0].trim()}
            </button>
          );
        })}
      </div>

      <button
        onClick={onNext}
        className="p-3 text-navy-dark hover:text-red transition-colors duration-200 shrink-0 cursor-pointer"
        aria-label="Další projekt"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
