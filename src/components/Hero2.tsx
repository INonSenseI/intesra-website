export default function Hero() {
  const services = [
    { label: "VODA", icon: <WaterIcon /> },
    { label: "PLYN", icon: <GasIcon /> },
    { label: "TEPLO", icon: <FlameIcon /> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left: photo panel */}
      <div className="relative w-full md:w-[42%] h-64 md:h-screen flex-shrink-0 bg-navy-dark">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=1200&fit=crop&auto=format"
          alt="Profesionální instalatér při práci"
          className="w-full h-full object-cover opacity-[0.55] mix-blend-luminosity"
        />
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          <div className="pl-5 font-body text-[11px] font-semibold text-white/30 tracking-[0.3em] uppercase [writing-mode:vertical-rl] [transform:rotate(180deg)]">
            Frýdek-Místek · Ostrava · Okolí
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red" />
      </div>

      {/* Right: content panel */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-24 pb-20 bg-white">
        {/* Eyebrow */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <div className="h-px w-8 bg-red hidden md:block" />
          <span className="font-body text-[11px] font-semibold text-red tracking-[0.2em] uppercase text-center md:text-left">
            Jakub Šrajer · 15 let praxe
          </span>
        </div>

        {/* Services block */}
        <div className="mb-10 w-full">
          <div className="flex items-center justify-center md:justify-start mb-4 text-center md:text-left">
            <h1 className="font-display font-extrabold text-navy-dark text-4xl md:text-7xl uppercase tracking-tight leading-tight text-center md:text-left">
              Instalatérské technologie
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-3 md:flex md:flex-col md:gap-0 border-t border-border/60">
            {services.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1.5 py-2.5 text-center
                           md:flex-row md:items-center md:justify-start md:gap-4 md:py-2.5 md:text-left
                           md:border-b md:border-border/60"
              >
                <span className="text-red/80 flex-shrink-0">{s.icon}</span>
                <span className="font-display font-bold text-navy-dark/75 leading-none tracking-tight text-lg sm:text-xl md:text-[clamp(24px,3vw,36px)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Centered CTA wrapper when layout goes vertical */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left w-full">
          {/* Subtitle */}
          <p className="font-body text-xs font-medium text-slate-500 tracking-[0.12em] uppercase mb-6">
            Opravy · Rekonstrukce · Havárie
          </p>

          <div className="h-px bg-border mb-8 w-full max-w-[180px] md:max-w-[280px]" />

          {/* Phone CTA */}
          <p className="font-body text-[11px] font-bold text-red tracking-[0.2em] uppercase mb-2.5">
            Zavolejte přímo
          </p>
          <a
            href="tel:+420777123456"
            className="group inline-flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full md:w-auto"
          >
            <span className="font-display font-extrabold text-navy-dark leading-none tracking-tight text-3xl sm:text-4xl md:text-[clamp(32px,4.5vw,54px)] transition-colors duration-200 group-hover:text-red">
              +420 777 123 456
            </span>
            <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-red transition-transform duration-200 group-hover:scale-110 shadow-sm">
              <PhoneIcon />
            </div>
          </a>
          <p className="font-body text-[13px] text-slate-400 mt-4 md:mt-3">
            Výjezd do 2 hodin. Cena dohodnutá předem.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 18z" />
    </svg>
  );
}

function WaterIcon() {
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
      <path d="M12 2C6 9 4 13.5 4 16a8 8 0 0 0 16 0c0-2.5-2-7-8-14z" />
    </svg>
  );
}

function GasIcon() {
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
      <path d="M10 2h4" />
      <path d="M12 2v3" />
      <rect x="6" y="8" width="12" height="13" rx="3" />
      <path d="M6 12h12" />
    </svg>
  );
}

function FlameIcon() {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
