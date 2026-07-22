import type { Project } from "@/components/gallery/types";
import { parseFields } from "@/data/parseContent";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const infoFiles = import.meta.glob("/src/content/projects/*/info.txt", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const imageFiles = import.meta.glob("/src/content/projects/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function folderNameOf(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 2];
}

function fileNameOf(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1].toLowerCase();
}

// fotky seskupené podle složky: { "01-koupelna-vinohrady": { "pred.jpg": "/assets/...", ... } }
const imagesByFolder: Record<string, Record<string, string>> = {};
for (const [path, url] of Object.entries(imageFiles)) {
  const folder = folderNameOf(path);
  (imagesByFolder[folder] ??= {})[fileNameOf(path)] = url;
}

function findImage(images: Record<string, string>, baseName: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const url = images[`${baseName}.${ext}`];
    if (url) return url;
  }
  return undefined;
}

function findGridImages(images: Record<string, string>): string[] {
  const pattern = /^foto-(\d+)\.(jpg|jpeg|png|webp)$/;
  return Object.keys(images)
    .filter((name) => pattern.test(name))
    .sort((a, b) => Number(a.match(pattern)![1]) - Number(b.match(pattern)![1]))
    .slice(0, 4)
    .map((name) => images[name]);
}

type Media = Pick<Project, "mediaType" | "image" | "images" | "beforeImage" | "afterImage">;

function detectMedia(images: Record<string, string>): Media | null {
  const before = findImage(images, "pred");
  const after = findImage(images, "po");
  if (before && after) {
    return { mediaType: "before-after", beforeImage: before, afterImage: after };
  }

  const grid = findGridImages(images);
  if (grid.length >= 2) {
    return { mediaType: "grid", images: grid };
  }

  const single = findImage(images, "foto");
  if (single) {
    return { mediaType: "single", image: single };
  }

  return null;
}

interface Entry {
  project: Project;
  order: number;
}

const entries: Entry[] = [];
let nextId = 1;

for (const [path, raw] of Object.entries(infoFiles)) {
  const folder = folderNameOf(path);
  const fields = parseFields(raw);
  const required = ["Nazev", "Popis", "Stitek", "Rok", "Delka"];
  const missing = required.filter((key) => !fields[key]);

  if (missing.length > 0) {
    console.warn(
      `[obsah] Projekt ve složce "${folder}" nemá vyplněné pole: ${missing.join(", ")} v info.txt. Projekt se na webu nezobrazí.`,
    );
    continue;
  }

  const media = detectMedia(imagesByFolder[folder] ?? {});
  if (!media) {
    console.warn(
      `[obsah] Projekt ve složce "${folder}": nenašly se správně pojmenované fotky ` +
        `(pred.jpg + po.jpg, nebo foto-1.jpg až foto-4.jpg, nebo foto.jpg). Projekt se na webu nezobrazí.`,
    );
    continue;
  }

  entries.push({
    order: Number(fields.Poradi) || 999,
    project: {
      id: nextId++,
      tag: fields.Stitek,
      year: fields.Rok,
      title: fields.Nazev,
      description: fields.Popis,
      duration: fields.Delka,
      ...media,
    },
  });
}

entries.sort((a, b) => a.order - b.order);

export const projects: Project[] = entries.map((entry) => entry.project);
