import { site } from "@/data/site";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm flex items-center justify-center bg-red text-white font-display text-[13px] font-extrabold">
            {site.initials}
          </div>
          <span className="font-body text-sm font-semibold text-navy-dark">
            {site.name} — Instalatérství
          </span>
        </div>

        <div className="flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-xs text-slate-400 hover:text-navy-dark transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="font-body text-xs text-slate-300">
          © {new Date().getFullYear()} {site.name}. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
