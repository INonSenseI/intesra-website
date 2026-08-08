/**
 * Parser pro jednoduché textové soubory ve formátu:
 *
 *   Klíč: Hodnota
 *   DalšíKlíč: Další hodnota
 *
 * - Prázdné řádky se přeskakují.
 * - Řádky začínající na # se přeskakují (komentář).
 * - Vše až za první dvojtečkou na řádku je hodnota (i kdyby text obsahoval další dvojtečky).
 */
export function parseFields(raw: string): Record<string, string> {
  const fields: Record<string, string> = {};

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key) fields[key] = value;
  }

  return fields;
}

/**
 * Získá jedno pole ze souboru. Vrací undefined, pokud řádek chybí nebo je
 * hodnota prázdná — to je jednotné pravidlo pro celý web: smazání obsahu
 * pole odpovídající kus stránky responzivně schová, nikdy nedosazuje
 * "neviditelný" výchozí text, který by smazání předstíral jako funkční.
 */
export function getField(fields: Record<string, string>, key: string): string | undefined {
  const value = fields[key];
  return value && value.trim() ? value.trim() : undefined;
}

/**
 * Rozdělí hodnotu pole na více kusů podle znaku "|" — používá se všude tam,
 * kde dřív bylo uměle víc polí pro "řádek 1", "řádek 2" atd. Místo pevného
 * počtu polí je jedno pole a "|" znamená "tady chci zalomit na nový
 * řádek/odstavec". Bez "|" vznikne jeden kus a text se zalomí sám podle
 * šířky obrazovky (responzivně). S jedním, dvěma, třemi i více "|" vznikne
 * odpovídající počet kusů — počet řádků/odstavců si tak určuje autor obsahu,
 * ne kód.
 */
export function splitBreaks(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
}

/** Rozdělí hodnotu pole na seznam položek oddělených čárkou (štítky, výhody...). */
export function splitList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}
