import raw from "@/content/site.txt?raw";
import { parseFields, getField } from "@/data/parseContent";

// Žádné z polí v tomto souboru nemá "neviditelný" výchozí text. Když pole
// smažeš nebo necháš prázdné, odpovídající kus webu (řádek, tlačítko,
// celá karta...) se responzivně schová — layout se sám srovná, nic se
// nerozbije. Viz kapitola 2 a 3 návodu.
const fields = parseFields(raw);
const field = (key: string) => getField(fields, key);

const phone = field("Telefon");
const experienceYearsRaw = field("LetPraxe");
const experienceYears = experienceYearsRaw !== undefined ? Number(experienceYearsRaw) : undefined;

export const site = {
  name: field("Jmeno"),
  initials: field("Zkratka"),
  role: field("Role"),
  experienceYears: experienceYears !== undefined && !Number.isNaN(experienceYears) ? experienceYears : undefined,
  phoneDisplay: phone,
  phoneHref: phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined,
  email: field("Email"),
  serviceArea: field("Oblast"),
  regionTagline: field("Region"),
  responseWindow: field("Vyjezd"),
  responseTime: field("OdpovedDoby"),
} as const;
