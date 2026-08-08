import type { ComponentType } from "react";
import raw from "@/content/hero.txt?raw";
import { parseFields, getField } from "@/data/parseContent";
import { WaterIcon, GasIcon, FlameIcon, ElectricIcon } from "@/components/icons";

export interface HeroService {
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

const ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  voda: WaterIcon,
  plyn: GasIcon,
  teplo: FlameIcon,
  elektrika: ElectricIcon,
};

const fields = parseFields(raw);
const raw_value = getField(fields, "Sluzby");

// "Sluzby" je jedno pole s libovolným počtem položek oddělených "|", každá
// ve tvaru "ikona:TEXT". Žádný pevný počet — může jich být jedna, tři nebo
// deset, web se přizpůsobí. Prázdné/neplatné položky se přeskočí (schovají),
// nerozbijí web.
export const heroServices: HeroService[] = (raw_value ?? "")
  .split("|")
  .map((chunk) => chunk.trim())
  .filter(Boolean)
  .map((chunk) => {
    const sepIndex = chunk.indexOf(":");
    const iconKey = (sepIndex === -1 ? "" : chunk.slice(0, sepIndex)).toLowerCase().trim();
    const label = (sepIndex === -1 ? chunk : chunk.slice(sepIndex + 1)).trim();

    if (!label) return null;

    const icon = ICONS[iconKey];
    if (!icon) {
      console.warn(`[obsah] hero.txt: neznámá ikona "${iconKey}" u položky "${chunk}". Použita výchozí ikona vody.`);
    }
    return { label, icon: icon ?? WaterIcon };
  })
  .filter((entry): entry is HeroService => entry !== null);
