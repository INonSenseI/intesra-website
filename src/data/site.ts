import raw from "@/content/site.txt?raw";
import { parseFields } from "@/data/parseContent";

// Výchozí hodnoty použité, pokud v site.txt něco chybí — web tak nikdy
// nezůstane úplně bez kontaktních údajů kvůli jednomu překlepu.
// LetPraxe a Vyjezd v tomto seznamu záměrně nejsou: jsou to jediná dvě pole,
// která smí být na webu úplně schovaná (viz níže), takže výchozí hodnota pro ně je "nezobrazeno".
const defaults = {
  Jmeno: "Jakub Šrajer",
  Zkratka: "JŠ",
  Role: "Instalatér",
  Telefon: "+420 777 123 456",
  Email: "jakub@srajer-instalater.cz",
  Oblast: "Ostrava a okolí",
  Region: "Frýdek-Místek · Ostrava · Okolí",
  OdpovedDoby: "Odpovíme do 30 minut.",
};

const parsed = parseFields(raw);
const fields = { ...defaults, ...parsed };
const phoneDigitsOnly = fields.Telefon.replace(/\s+/g, "");

// Prázdná hodnota nebo úplně smazaný řádek = pole se na webu nezobrazí.
const experienceYearsRaw = parsed.LetPraxe?.trim() ? Number(parsed.LetPraxe) : undefined;
const responseWindow = parsed.Vyjezd?.trim() ? parsed.Vyjezd.trim() : undefined;

export const site = {
  name: fields.Jmeno,
  initials: fields.Zkratka,
  role: fields.Role,
  experienceYears:
    experienceYearsRaw !== undefined && !Number.isNaN(experienceYearsRaw)
      ? experienceYearsRaw
      : undefined,
  phoneDisplay: fields.Telefon,
  phoneHref: `tel:${phoneDigitsOnly}`,
  email: fields.Email,
  serviceArea: fields.Oblast,
  regionTagline: fields.Region,
  responseWindow,
  responseTime: fields.OdpovedDoby,
} as const;
