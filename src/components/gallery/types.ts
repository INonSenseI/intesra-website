export interface Project {
  id: number;
  tag: string;
  year: string;
  title: string;
  description: string;
  duration: string;
  mediaType: "single" | "grid" | "before-after";
  image?: string;
  images?: string[];
  beforeImage?: string;
  afterImage?: string;
}
