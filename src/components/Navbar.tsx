import { useState, useEffect } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-red text-white font-display text-base font-extrabold">
            {site.initials}
          </div>
          <span className="font-body text-white font-semibold tracking-wide text-sm md:text-base">
            {site.name}{" "}
            <span className="opacity-50 font-normal hidden sm:inline">— {site.role}</span>
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#sluzby" className="font-body text-white/70 hover:text-white text-sm transition-colors duration-200 hidden md:block">
            Služby
          </a>
          <a href="#galerie" className="font-body text-white/70 hover:text-white text-sm transition-colors duration-200 hidden md:block">
            Galerie
          </a>
          <a
            href="#kontakt"
            className="font-body px-4 py-2 bg-red text-white text-sm font-semibold rounded-sm transition-all duration-200 hover:opacity-90 active:scale-95"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
