import {
  WaterIcon,
  GasIcon,
  ElectricIcon,
  PhoneIcon,
} from "@/components/icons";
import { site } from "@/data/site";
import { siteImages } from "@/data/siteImages";

const heroServices = [
  { label: "VODA", icon: WaterIcon },
  { label: "PLYN", icon: GasIcon },
  { label: "ELEKTRIKA", icon: ElectricIcon },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Fotka vlevo */}
      <div className="relative w-full md:w-[42%] h-64 md:h-screen flex-shrink-0 bg-navy-dark">
        <img
          src={siteImages.hero}
          alt="Profesionální instalatér při práci"
          className="w-full h-full object-cover opacity-[0.55] mix-blend-luminosity"
        />
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          <div className="pl-5 font-body text-[11px] font-semibold text-white/30 tracking-[0.3em] uppercase [writing-mode:vertical-rl] [transform:rotate(180deg)]">
            {site.regionTagline}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red" />
      </div>

      {/* Obsah vpravo */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-24 pb-20 bg-white">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
          <div className="h-px w-8 bg-red hidden md:block" />
          <span className="font-body text-[11px] font-semibold text-red tracking-[0.2em] uppercase text-center md:text-left">
            {site.name} · {site.experienceYears} let praxe
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10 md:flex md:flex-col md:gap-0">
          {heroServices.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 py-2 text-center
                         md:flex-row md:items-center md:justify-start md:gap-5 md:py-4 md:text-left
                         md:border-b md:border-border md:last:border-b-0"
            >
              <span className="text-red flex-shrink-0">
                <Icon />
              </span>
              <span className="font-display font-extrabold text-navy-dark leading-none tracking-tight text-2xl sm:text-3xl md:text-[clamp(44px,6.5vw,76px)]">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
          <p className="font-body text-xs font-medium text-slate-400 tracking-[0.12em] uppercase mb-7">
            Opravy · Rekonstrukce · Havárie
          </p>

          <div className="h-px bg-border mb-8 w-full max-w-[180px] md:max-w-[280px]" />

          <p className="font-body text-[11px] font-semibold text-slate-400 tracking-[0.2em] uppercase mb-2.5">
            Zavolejte přímo
          </p>
          <a
            href={site.phoneHref}
            className="group inline-flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full md:w-auto"
          >
            <span className="font-display font-extrabold text-navy-dark leading-none tracking-tight text-3xl sm:text-4xl md:text-[clamp(26px,3.5vw,44px)] transition-colors duration-200 group-hover:text-red">
              {site.phoneDisplay}
            </span>
            <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-red transition-transform duration-200 group-hover:scale-110 shadow-sm">
              <PhoneIcon size={18} className="text-white" strokeWidth={2.5} />
            </div>
          </a>
          <p className="font-body text-[13px] text-slate-400 mt-4 md:mt-3">
            {site.responseWindow}. Cena dohodnutá předem.
          </p>
        </div>
      </div>
    </section>
  );
}
