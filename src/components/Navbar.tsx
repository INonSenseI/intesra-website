import { useState, useEffect } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Automatické zavření mobilního menu při přechodu na desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const desktopNavLinkColor = scrolled
    ? "text-white/70 hover:text-white"
    : "text-navy-dark hover:text-red";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-[0_1px_0_rgba(255,255,255,0.08)]"
          : mobileMenuOpen
            ? "bg-navy md:bg-transparent" // Na mobilu s otevřeným menu tmavá, na desktopu transparentní!
            : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-red text-white font-display text-base font-extrabold">
            {site.initials}
          </div>
          <span className="font-body text-white font-semibold tracking-wide text-sm md:text-base">
            {site.name}{" "}
            <span className="opacity-50 font-normal hidden sm:inline">
              — {site.role}
            </span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#sluzby"
            onClick={(e) => handleNavClick(e, "sluzby")}
            className={`font-body text-sm font-medium transition-colors duration-200 ${desktopNavLinkColor}`}
          >
            Služby
          </a>
          <a
            href="#galerie"
            onClick={(e) => handleNavClick(e, "galerie")}
            className={`font-body text-sm font-medium transition-colors duration-200 ${desktopNavLinkColor}`}
          >
            Galerie
          </a>
          <a
            href="#kontakt"
            onClick={(e) => handleNavClick(e, "kontakt")}
            className="font-body px-4 py-2 bg-red text-white text-sm font-semibold rounded-sm transition-all duration-200 hover:opacity-90 active:scale-95"
          >
            Kontakt
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-white rounded-sm transition-colors"
          aria-label="Otevřít menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`grid md:hidden transition-all duration-300 ease-in-out bg-navy border-b border-white/10 ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none border-transparent"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-4">
            <a
              href="#sluzby"
              onClick={(e) => handleNavClick(e, "sluzby")}
              className="font-body text-base font-semibold text-white/80 hover:text-white transition-colors"
            >
              Služby
            </a>
            <a
              href="#galerie"
              onClick={(e) => handleNavClick(e, "galerie")}
              className="font-body text-base font-semibold text-white/80 hover:text-white transition-colors"
            >
              Galerie
            </a>
            <a
              href="#kontakt"
              onClick={(e) => handleNavClick(e, "kontakt")}
              className="font-body text-center px-4 py-2.5 bg-red text-white text-sm font-semibold rounded-sm transition-all duration-200 active:scale-95"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
