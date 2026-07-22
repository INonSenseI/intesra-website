import raw from "@/content/site.txt?raw";
import { parseFields } from "@/data/parseContent";

// Výchozí hodnoty použité, pokud v site.txt něco chybí — web tak nikdy
// nezůstane úplně bez kontaktních údajů kvůli jednomu překlepu.
const defaults = {
  Jmeno: "Jakub Šrajer",
  Zkratka: "JŠ",
  Role: "Instalatér",
  LetPraxe: "15",
  Telefon: "+420 777 123 456",
  Email: "jakub@srajer-instalater.cz",
  Oblast: "Ostrava a okolí",
  Region: "Frýdek-Místek · Ostrava · Okolí",
  Vyjezd: "Výjezd do 2 hodin",
  OdpovedDoby: "Odpovíme do 30 minut.",
};

const fields = { ...defaults, ...parseFields(raw) };
const phoneDigitsOnly = fields.Telefon.replace(/\s+/g, "");

export const site = {
  name: fields.Jmeno,
  initials: fields.Zkratka,
  role: fields.Role,
  experienceYears: Number(fields.LetPraxe) || Number(defaults.LetPraxe),
  phoneDisplay: fields.Telefon,
  phoneHref: `tel:${phoneDigitsOnly}`,
  email: fields.Email,
  serviceArea: fields.Oblast,
  regionTagline: fields.Region,
  responseWindow: fields.Vyjezd,
  responseTime: fields.OdpovedDoby,
} as const;
