import { site } from "@/data/site";
import { siteImages } from "@/data/siteImages";

interface LogoBadgeProps {
  size?: "sm" | "md";
}

// Zobrazí logo z src/content/images/logo.* — pokud ho přítel nenahraje,
// zobrazí barevný čtvereček s iniciálami (pole Zkratka v site.txt) jako dosud.
export default function LogoBadge({ size = "md" }: LogoBadgeProps) {
  const dimension = size === "sm" ? "w-7 h-7" : "w-8 h-8";
  const textSize = size === "sm" ? "text-[13px]" : "text-base";

  if (siteImages.logo) {
    return (
      <img
        src={siteImages.logo}
        alt={site.name}
        className={`${dimension} rounded-sm object-contain flex-shrink-0`}
      />
    );
  }

  return (
    <div
      className={`${dimension} rounded-sm flex items-center justify-center bg-red text-white font-display ${textSize} font-extrabold flex-shrink-0`}
    >
      {site.initials}
    </div>
  );
}
