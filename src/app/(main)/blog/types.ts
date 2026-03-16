export const tags = [ 'DIY Dog Grooming', 'DIY Grooming', 'Dog Grooming Tools', 'Dog Nail Trimming', 'Breed Guides', 'Dog Grooming', 'Dog Bathing' ] as const;

export type Tag = typeof tags[number];

export const featuredTags: Tag[] = [ 'DIY Dog Grooming', 'DIY Grooming', 'Dog Grooming Tools', 'Dog Nail Trimming', 'Breed Guides' ] as const;

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description?: string;
  imageUrl: string;
  heroImage?: string;
  heroImageAlt?: string;
  tags: Tag[];
  publishedOn: string;
  canonicalUrl?: string;
  contentHtml?: string;
}
