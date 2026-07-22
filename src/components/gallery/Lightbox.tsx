import { useEffect } from "react";
import { CloseIcon } from "@/components/icons";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  // Zakážeme scrollování na pozadí, dokud je lightbox otevřený
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-sm p-4 md:p-8 transition-all duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
        aria-label="Zavřít"
      >
        <CloseIcon />
      </button>

      <div
        className="relative max-w-full max-h-[90vh] md:max-h-[85vh] overflow-hidden rounded-sm select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-auto h-auto max-w-full max-h-[90vh] md:max-h-[85vh] object-contain shadow-2xl border border-white/5"
        />
      </div>
    </div>
  );
}
