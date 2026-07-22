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
