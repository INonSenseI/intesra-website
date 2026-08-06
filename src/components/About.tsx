import Eyebrow from "@/components/ui/Eyebrow";
import { siteImages } from "@/data/siteImages";
import { texts } from "@/data/texts";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Fotka — na mobilu druhá, na desktopu vpravo */}
          <div className="relative order-2 md:order-2">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-sm bg-red/10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-sm bg-navy-dark/10" />
            <div className="relative overflow-hidden rounded-sm bg-border">
              <img
                src={siteImages.about}
                alt="Jakub Šrajer - profesionální instalatér"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-3 rounded-sm bg-navy-dark">
                <div className="font-body text-white/60 text-xs uppercase tracking-widest mb-1">
                  {texts.aboutBadgeSmall}
                </div>
                <div className="font-display text-white text-lg font-bold">{texts.aboutBadgeLarge}</div>
              </div>
            </div>
          </div>

          {/* Text — na mobilu první, na desktopu vlevo */}
          <div className="order-1 md:order-1">
            <Eyebrow label="O mně" />

            <h2 className="font-display mb-6 leading-none text-[clamp(40px,6vw,64px)] font-extrabold text-navy-dark">
              {texts.aboutHeading1}
              <br />
              {texts.aboutHeading2}
            </h2>

            <p className="font-body leading-relaxed mb-6 text-[16px] text-slate-600">{texts.aboutText1}</p>
            <p className="font-body leading-relaxed mb-10 text-[16px] text-slate-600">{texts.aboutText2}</p>

            <div className="grid grid-cols-2 gap-4">
              {texts.aboutHighlights.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="text-red font-bold flex-shrink-0">✓</span>
                  <span className="font-body text-sm font-medium text-navy-dark">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
