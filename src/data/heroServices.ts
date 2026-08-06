import type { ComponentType } from "react";
import raw from "@/content/hero.txt?raw";
import { parseFields } from "@/data/parseContent";
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

const defaults: [string, string][] = [
  ["voda", "VODA"],
  ["plyn", "PLYN"],
  ["teplo", "TEPLO"],
];

const fields = parseFields(raw);

export const heroServices: HeroService[] = [1, 2, 3].map((slot) => {
  const [defaultIcon, defaultLabel] = defaults[slot - 1];
  const iconKey = (fields[`Ikona${slot}`] || defaultIcon).toLowerCase().trim();
  const label = fields[`Text${slot}`]?.trim() || defaultLabel;

  if (!ICONS[iconKey]) {
    console.warn(
      `[obsah] hero.txt: neznámá ikona "${fields[`Ikona${slot}`]}" u Ikona${slot}. Použita výchozí ikona vody.`,
    );
  }

  return { label, icon: ICONS[iconKey] ?? WaterIcon };
});
