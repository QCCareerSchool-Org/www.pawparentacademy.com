export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description?: string;
  imageUrl: string;
  heroImage?: string;
  heroImageAlt?: string;
  tags: string[];
  publishedOn: string;
  canonicalUrl?: string;
  contentHtml?: string;
}
