import { MagnifierIcon } from "@/components/icons";

interface MediaGridProps {
  images: string[];
  alt: string;
  onImageClick: (url: string) => void;
}

export default function MediaGrid({ images, alt, onImageClick }: MediaGridProps) {
  return (
    <div className="grid grid-cols-2 h-full w-full gap-1 bg-border">
      {images.slice(0, 4).map((imgUrl, i) => (
        <div
          key={i}
          className="relative group overflow-hidden cursor-zoom-in h-full w-full"
          onClick={() => onImageClick(imgUrl)}
        >
          <img
            src={imgUrl}
            alt={`${alt} detail ${i + 1}`}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <MagnifierIcon className="text-white drop-shadow-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
