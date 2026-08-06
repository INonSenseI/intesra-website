const files = import.meta.glob("/src/content/images/*.{jpg,jpeg,png,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function find(baseName: string, fallback: string): string {
  for (const [path, url] of Object.entries(files)) {
    const fileName = path.split("/").pop()?.toLowerCase() ?? "";
    if (fileName.startsWith(`${baseName}.`)) return url;
  }
  return fallback;
}

// Stejné jako find(), ale bez záložní fotky — pro věci, které nemají smysluplnou
// výchozí náhradu (logo, ikona webu). Když soubor chybí, prostě se nic nezobrazí.
function findOptional(baseName: string): string | undefined {
  for (const [path, url] of Object.entries(files)) {
    const fileName = path.split("/").pop()?.toLowerCase() ?? "";
    if (fileName.startsWith(`${baseName}.`)) return url;
  }
  return undefined;
}

// Pokud přítel nepřidá src/content/images/hero.jpg nebo about.jpg,
// použijí se tyto (dočasné) stock fotky.
export const siteImages = {
  hero: find(
    "hero",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=1200&fit=crop&auto=format",
  ),
  about: find(
    "about",
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=960&fit=crop&auto=format",
  ),
  // Logo v hlavičce a patičce. Dokud soubor nepřidá, zobrazí se místo něj
  // barevný čtvereček s iniciálami (pole Zkratka v site.txt) — web se tím nerozbije.
  logo: findOptional("logo"),
  // Ikonka webu v záložce prohlížeče. Dokud soubor nepřidá, prohlížeč použije svou výchozí ikonu.
  favicon: findOptional("favicon"),
};
