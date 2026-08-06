import raw from "@/content/texty.txt?raw";
import { parseFields } from "@/data/parseContent";

// Výchozí texty použité, pokud v texty.txt něco chybí nebo je prázdné.
const defaults = {
  HeroNadpis: "Instalatérské technologie",
  HeroPopis: "Opravy · Rekonstrukce · Havárie",

  OMneNadpis1: "SPOLEHLIVOST",
  OMneNadpis2: "NA PRVNÍM MÍSTĚ",
  OMneText1:
    "Jmenuji se Jakub Šrajer a instalatérskému řemeslu se věnuji již přes 15 let. Za tu dobu jsem realizoval stovky zakázek — od rychlých oprav po kompletní rekonstrukce koupelen a kuchyní.",
  OMneText2:
    "Každou práci dokončuji načas, v dohodnutém rozsahu a s plnou zárukou. Po sobě vždy uklidím a odvezu odpad. Žádná překvapení na faktuře.",
  OMneVyhody: "Záruka na práci 2 roky, Výjezd do 2 hodin, Cena dohodnutá předem, Čistota na pracovišti",
  OMneOdznakMaly: "Certifikát",
  OMneOdznakVelky: "Instalatér 1. třídy",

  SluzbyPopis: "Vše od drobné opravy po velkou rekonstrukci. Poradím, nacením a odvedu práci na jedničku.",
  SluzbyTlacitko: "NEZÁVAZNÁ POPTÁVKA",

  KontaktNadpis1: "POJĎME TO",
  KontaktNadpis2: "VYŘEŠIT",
  KontaktText: "Napište mi co potřebujete, rád se vám ozvu zpět.",
  KontaktTlacitko: "ODESLAT POPTÁVKU",
};

const parsed = parseFields(raw);

// Prázdný řetězec ("Pole:") se chová stejně jako smazaný řádek — použije se výchozí text.
function field(key: keyof typeof defaults): string {
  const value = parsed[key];
  return value && value.trim() ? value : defaults[key];
}

export const texts = {
  heroHeading: field("HeroNadpis"),
  heroPopis: field("HeroPopis"),

  aboutHeading1: field("OMneNadpis1"),
  aboutHeading2: field("OMneNadpis2"),
  aboutText1: field("OMneText1"),
  aboutText2: field("OMneText2"),
  aboutHighlights: field("OMneVyhody")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean),
  aboutBadgeSmall: field("OMneOdznakMaly"),
  aboutBadgeLarge: field("OMneOdznakVelky"),

  servicesIntro: field("SluzbyPopis"),
  servicesButton: field("SluzbyTlacitko"),

  contactHeading1: field("KontaktNadpis1"),
  contactHeading2: field("KontaktNadpis2"),
  contactIntro: field("KontaktText"),
  contactButton: field("KontaktTlacitko"),
} as const;
