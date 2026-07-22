import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { ExpandIcon } from "@/components/icons";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  onFullscreenRequest: (url: string) => void;
}

export default function BeforeAfterSlider({ before, after, onFullscreenRequest }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => setContainerWidth(el.getBoundingClientRect().width);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  const showBeforeLabel = sliderPosition > 12;
  const showAfterLabel = sliderPosition < 88;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[320px] sm:min-h-[400px] md:min-h-[480px] overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => {
        if (e.touches[0]) handleStart(e.touches[0].clientX);
      }}
    >
      <img src={after} alt="Po realizaci" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

      <button
        type="button"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onFullscreenRequest(after);
        }}
        className={`absolute bottom-4 right-4 z-40 flex items-center gap-1.5 rounded-sm bg-red/90 hover:bg-red px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-zoom-in pointer-events-auto hover:scale-105 active:scale-95 shadow-md
          ${showAfterLabel ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <span>Po</span>
        <ExpandIcon />
      </button>

      <div
        className={`absolute inset-y-0 left-0 z-10 overflow-hidden pointer-events-none
          ${isDragging ? "transition-none" : "transition-[width] duration-200 ease-out"}`}
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={before}
          alt="Před realizací"
          className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
          style={{ width: containerWidth }}
        />
      </div>

      <button
        type="button"
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onFullscreenRequest(before);
        }}
        className={`absolute bottom-4 left-4 z-40 flex items-center gap-1.5 rounded-sm bg-navy/80 hover:bg-navy px-3 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-zoom-in pointer-events-auto hover:scale-105 active:scale-95 shadow-md
          ${showBeforeLabel ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <span>Před</span>
        <ExpandIcon />
      </button>

      <div
        className={`absolute top-0 bottom-0 z-30 flex w-1 items-center justify-center bg-white pointer-events-none shadow-lg
          ${isDragging ? "transition-none" : "transition-[left] duration-200 ease-out"}`}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white shadow-md">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-navy)" strokeWidth={3}>
            <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
