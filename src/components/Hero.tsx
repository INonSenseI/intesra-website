import { PhoneIcon } from "@/components/icons";
import { site } from "@/data/site";
import { siteImages } from "@/data/siteImages";
import { texts } from "@/data/texts";
import { heroServices } from "@/data/heroServices";

export default function Hero() {
  // "Jméno · X let praxe" — obě části jsou nepovinné, spojí se jen ty, které
  // opravdu existují. Když nezůstane nic, celý řádek se schová.
  const eyebrowText = [site.name, site.experienceYears !== undefined ? `${site.experienceYears} let praxe` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left: photo panel */}
      <div className="relative w-full md:w-[42%] h-64 md:h-screen flex-shrink-0 bg-navy-dark">
        <img
          src={siteImages.hero}
          alt="Profesionální instalatér při práci"
          className="w-full h-full object-cover opacity-[0.55] mix-blend-luminosity"
        />
        {site.regionTagline && (
          <div className="absolute left-0 top-0 bottom-0 flex items-center">
            <div className="pl-5 font-body text-[11px] font-semibold text-white/30 tracking-[0.3em] uppercase [writing-mode:vertical-rl] [transform:rotate(180deg)]">
              {site.regionTagline}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red" />
      </div>

      {/* Right: content panel */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-24 pb-20 bg-white">
        {/* Eyebrow */}
        {eyebrowText && (
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <div className="h-px w-8 bg-red hidden md:block" />
            <span className="font-body text-[11px] font-semibold text-red tracking-[0.2em] uppercase text-center md:text-left">
              {eyebrowText}
            </span>
          </div>
        )}

        {/* Services block */}
        {(texts.heroHeadingLines.length > 0 || heroServices.length > 0) && (
          <div className="mb-10 w-full">
            {texts.heroHeadingLines.length > 0 && (
              <div className="flex items-center justify-center md:justify-start mb-4 text-center md:text-left">
                <h1 className="font-display font-extrabold text-navy-dark text-4xl md:text-7xl uppercase tracking-tight leading-tight text-center md:text-left">
                  {texts.heroHeadingLines.map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h1>
              </div>
            )}

            {heroServices.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:flex md:flex-col md:flex-nowrap md:justify-start md:gap-0 border-t border-border/60">
                {heroServices.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 py-2.5 text-center
                               md:flex-row md:items-center md:justify-start md:gap-4 md:py-2.5 md:text-left
                               md:border-b md:border-border/60"
                  >
                    <span className="text-red/80 flex-shrink-0">
                      <Icon />
                    </span>
                    <span className="font-display font-bold text-navy-dark/75 leading-none tracking-tight text-lg sm:text-xl md:text-[clamp(24px,3vw,36px)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
          {texts.heroPopis && (
            <p className="font-body text-xs font-medium text-slate-500 tracking-[0.12em] uppercase mb-6">
              {texts.heroPopis}
            </p>
          )}

          <div className="h-px bg-border mb-8 w-full max-w-[180px] md:max-w-[280px]" />

          {site.phoneDisplay && (
            <>
              <p className="font-body text-[11px] font-bold text-red tracking-[0.2em] uppercase mb-2.5">
                Zavolejte přímo
              </p>
              <a
                href={site.phoneHref}
                className="group inline-flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full md:w-auto"
              >
                <span className="font-display font-extrabold text-navy-dark leading-none tracking-tight text-3xl sm:text-4xl md:text-[clamp(32px,4.5vw,54px)] transition-colors duration-200 group-hover:text-red">
                  {site.phoneDisplay}
                </span>
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-red transition-transform duration-200 group-hover:scale-110 shadow-sm">
                  <PhoneIcon size={18} className="text-white" strokeWidth={2.5} />
                </div>
              </a>
              <p className="font-body text-[13px] text-slate-400 mt-4 md:mt-3">
                {site.responseWindow ? `${site.responseWindow}. ` : ""}Cena dohodnutá předem.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
