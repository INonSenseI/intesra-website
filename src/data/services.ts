import type { ComponentType } from "react";
import { parseFields } from "@/data/parseContent";
import {
  WrenchIcon,
  BathroomIcon,
  GasIcon,
  PipeIcon,
  KitchenIcon,
  MagnifierIcon,
} from "@/components/icons";

export interface Service {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  tags: string[];
  accent?: boolean;
}

// Klíč, který si přítel napíše do pole "Ikona:" -> komponenta ikony.
// Když napíše neplatný klíč, použije se WrenchIcon a do konzole se napíše varování.
const ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  klic: WrenchIcon,
  koupelna: BathroomIcon,
  plamen: GasIcon,
  trubka: PipeIcon,
  kuchyne: KitchenIcon,
  lupa: MagnifierIcon,
};

const files = import.meta.glob("/src/content/services/*.txt", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

interface Entry {
  service: Service;
  order: number;
}

const entries: Entry[] = [];

for (const [path, raw] of Object.entries(files)) {
  const fields = parseFields(raw);
  const missing = ["Nazev", "Popis"].filter((key) => !fields[key]);

  if (missing.length > 0) {
    console.warn(
      `[obsah] Soubor ${path} nemá vyplněné pole: ${missing.join(", ")}. Tato služba se na webu nezobrazí.`,
    );
    continue;
  }

  const iconKey = (fields.Ikona || "klic").toLowerCase();
  const icon = ICONS[iconKey];
  if (!icon) {
    console.warn(`[obsah] Soubor ${path}: neznámá ikona "${fields.Ikona}". Použita výchozí ikona.`);
  }

  entries.push({
    order: Number(fields.Poradi) || 999,
    service: {
      icon: icon ?? WrenchIcon,
      title: fields.Nazev,
      description: fields.Popis,
      tags: (fields.Stitky ?? "")
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      accent: (fields.Zvyraznit ?? "").toLowerCase() === "ano",
    },
  });
}

entries.sort((a, b) => a.order - b.order);

export const services: Service[] = entries.map((entry) => entry.service);
