const files = import.meta.glob("/src/content/images/*.{jpg,jpeg,png,webp}", {
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
};
