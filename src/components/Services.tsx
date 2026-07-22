import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/data/services";

export default function Services() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sluzby" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Hlavička */}
        <div className="mb-16">
          <Eyebrow label="Co dělám" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display leading-none text-[clamp(40px,6vw,72px)] font-extrabold text-navy-dark">
              SLUŽBY
            </h2>
            <p className="font-body max-w-sm text-sm leading-relaxed text-slate-500">
              Vše od drobné opravy po velkou rekonstrukci. Poradím, nacením a
              odvedu práci na jedničku.
            </p>
          </div>
        </div>

        {/* Grid karet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.accent ? "bg-navy-dark" : "bg-white"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-red opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div
                  className={`w-10 h-10 rounded-sm flex items-center justify-center mb-6 ${
                    service.accent ? "bg-red/15" : "bg-surface"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      service.accent ? "text-red" : "text-navy-dark"
                    }`}
                  />
                </div>

                <h3
                  className={`font-display mb-3 text-2xl font-bold ${
                    service.accent ? "text-white" : "text-navy-dark"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`font-body text-sm leading-relaxed mb-6 ${
                    service.accent ? "text-white/65" : "text-slate-500"
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-body text-xs px-2 py-1 rounded-sm font-medium uppercase tracking-wide ${
                        service.accent
                          ? "bg-white/10 text-white/70"
                          : "bg-border/60 text-slate-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#kontakt"
            onClick={handleScrollToContact}
            className="font-display inline-flex items-center gap-3 px-8 py-4 bg-red text-white font-bold rounded-sm text-xl tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
          >
            NEZÁVAZNÁ POPTÁVKA
          </a>
        </div>
      </div>
    </section>
  );
}
