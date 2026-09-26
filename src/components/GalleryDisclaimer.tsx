//import Eyebrow from "./ui/Eyebrow";

export default function GalleryDisclaimer() {
  return (
    <section id="sluzby" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Hlavička */}
        <div className="mb-16">
          {/*<Eyebrow label="Proč zde nejsou fotky?" />*/}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display leading-none text-[clamp(40px,6vw,72px)] font-extrabold text-navy-dark">
              REFERENCE
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10">
          {[
            "Soukromí mých klientů je pro mě prioritou.",
            "Základem je pro mě spokojenost zákazníka a vždy vyhovět jeho požadavkům.",
            "Fotky projektů nejsou veřejné, protože ctím soukromí svých klientů a zachovávám profesionální přístup.",
          ].map((text) => (
            <div key={text} className="relative flex flex-1 min-w-0">
              {/* black offset */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-red" />

              {/* blue card */}
              <div className="relative z-10 flex flex-1 items-center justify-center gap-4 rounded-sm border-5 border-surface bg-navy p-4">
                <p className="text-white text-center font-medium">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
