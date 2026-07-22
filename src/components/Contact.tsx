import { useState, type FormEvent } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { PhoneIcon, MailIcon, LocationIcon, CheckIcon } from "@/components/icons";
import { site } from "@/data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Kontaktní údaje */}
          <div>
            <Eyebrow label="Kontakt" />

            <h2 className="font-display leading-none mb-8 text-white text-[clamp(40px,6vw,72px)] font-extrabold">
              POJĎME TO
              <br />
              VYŘEŠIT
            </h2>

            <p className="font-body mb-12 leading-relaxed text-white/60 text-[16px]">
              Napište mi co potřebujete, rád se vám ozvu zpět.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 p-5 rounded-sm border border-white/10 transition-all duration-200 hover:bg-white/5 group"
              >
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-red">
                  <PhoneIcon className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-widest mb-1 text-white/40">Telefon</div>
                  <div className="font-display text-white font-bold text-[22px] group-hover:text-red-dark transition-colors">
                    {site.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 p-5 rounded-sm border border-white/10 transition-all duration-200 hover:bg-white/5 group"
              >
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-white/[0.08]">
                  <MailIcon className="text-white/70" />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-widest mb-1 text-white/40">E-mail</div>
                  <div className="font-body text-white font-medium text-[15px] group-hover:text-red-dark transition-colors">
                    {site.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-sm border border-white/10">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 bg-white/[0.08]">
                  <LocationIcon className="text-white/70" />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-widest mb-1 text-white/40">
                    Oblast působení
                  </div>
                  <div className="font-body text-white font-medium text-[15px]">{site.serviceArea}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulář */}
          <div className="flex items-start">
            {sent ? (
              <div className="w-full flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-red">
                  <CheckIcon size={28} className="text-white" />
                </div>
                <h3 className="font-display text-white mb-2 text-[32px] font-extrabold">OZVEME SE!</h3>
                <p className="font-body text-white/50">Zpráva odeslána. {site.responseTime}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Jméno *"
                    type="text"
                    required
                    placeholder="Jan Novák"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <FormField
                    label="Telefon"
                    type="tel"
                    placeholder="+420 777 000 000"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                </div>

                <FormField
                  label="E-mail *"
                  type="email"
                  required
                  placeholder="jan@email.cz"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />

                <div>
                  <label className="font-body block text-xs uppercase tracking-widest mb-2 text-white/40">
                    Popis práce *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Popište co potřebujete opravit nebo nainstalovat..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="font-body w-full px-4 py-3 rounded-sm text-white placeholder-white/25 outline-none transition-all duration-200 resize-none bg-white/[0.06] border border-white/[0.12] text-[15px]"
                  />
                </div>

                <button
                  type="submit"
                  className="font-display w-full py-4 bg-red text-white font-bold rounded-sm text-xl tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 mt-2"
                >
                  ODESLAT POPTÁVKU
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

function FormField({ label, type, placeholder, value, onChange, required }: FormFieldProps) {
  return (
    <div>
      <label className="font-body block text-xs uppercase tracking-widest mb-2 text-white/40">{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-body w-full px-4 py-3 rounded-sm text-white placeholder-white/25 outline-none transition-all duration-200 bg-white/[0.06] border border-white/[0.12] text-[15px]"
      />
    </div>
  );
}
