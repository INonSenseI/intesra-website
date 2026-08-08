import raw from "@/content/texty.txt?raw";
import { parseFields, getField, splitBreaks, splitList } from "@/data/parseContent";

const fields = parseFields(raw);
const field = (key: string) => getField(fields, key);

// Žádné neviditelné výchozí texty — prázdné/smazané pole odpovídající text
// na webu responzivně schová (viz kapitola 2 návodu).
//
// Nadpisy a odstavce, které dřív bývaly rozdělené na víc polí (řádek 1,
// řádek 2, ...), jsou teď jedno pole. Znak "|" v hodnotě znamená "tady
// zalom na nový řádek/odstavec" — bez "|" se text sám zalomí podle šířky
// obrazovky. Počet řádků/odstavců si tak volí ten, kdo obsah píše, ne kód.
export const texts = {
  heroHeadingLines: splitBreaks(field("HeroNadpis")),
  heroPopis: field("HeroPopis"),

  aboutHeadingLines: splitBreaks(field("OMneNadpis")),
  aboutParagraphs: splitBreaks(field("OMneText")),
  aboutHighlights: splitList(field("OMneVyhody")),
  aboutBadgeSmall: field("OMneOdznakMaly"),
  aboutBadgeLarge: field("OMneOdznakVelky"),

  servicesIntro: field("SluzbyPopis"),
  servicesButton: field("SluzbyTlacitko"),

  contactHeadingLines: splitBreaks(field("KontaktNadpis")),
  contactIntro: field("KontaktText"),
  // Odesílací tlačítko formuláře je jediná výjimka s výchozím textem v tomto
  // souboru: je to jediný způsob, jak formulář odeslat, takže schování by
  // rozbilo funkčnost stránky (ne jen vzhled). Když pole necháš prázdné,
  // tlačítko zůstane a použije se text "ODESLAT POPTÁVKU".
  contactButton: field("KontaktTlacitko") ?? "ODESLAT POPTÁVKU",
} as const;
