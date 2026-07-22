import { useState } from "react";
import ProjectTabs from "./ProjectTabs";
import ProjectDetail from "./ProjectDetail";
import Lightbox from "./Lightbox";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects } from "@/data/projects";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const activeProject = projects[activeIndex];

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <section id="galerie" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <Eyebrow label="Realizace" />
          <h2 className="font-display text-5xl md:text-7xl font-bold text-navy-dark leading-none">
            VYBRANÉ PROJEKTY
          </h2>
        </div>

        <ProjectTabs
          projects={projects}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <ProjectDetail project={activeProject} isEven={activeIndex % 2 === 0} onImageOpen={setActiveLightboxImage} />
      </div>

      {activeLightboxImage && (
        <Lightbox src={activeLightboxImage} alt={activeProject.title} onClose={() => setActiveLightboxImage(null)} />
      )}
    </section>
  );
}
