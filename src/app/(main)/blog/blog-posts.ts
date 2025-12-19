import { yorkieGroomingStylesPost } from './posts/13-most-popular-yorkie-grooming-styles';
import { bestDogBrushForSheddingPost } from './posts/best-dog-brush-for-shedding';
import { bestDogNailGrinderPost } from './posts/best-dog-nail-grinder';
import { bestDogShampooPost } from './posts/best-dog-shampoo-for-itchy-skin-allergies-and-odor';
import { cockerSpanielCutsPost } from './posts/cocker-spaniel-haircuts';
import { howToGroomAPomeranianPost } from './posts/how-to-groom-a-pomeranian-step-by-step-guide';
import { malteseHaircutsPost } from './posts/maltese-haircuts-and-grooming-tips';
import { pomeranianHaircutsPost } from './posts/pomeranian-haircuts';
import { schnauzerHaircutsPost } from './posts/schnauzer-haircuts-and-grooming-styles';
import { shihTzuHaircutsPost } from './posts/shih-tzu-haircuts';
import { goldendoodleGroomingGuidePost } from './posts/the-ultimate-guide-to-grooming-your-goldendoodle-at-home';
import { huskyGroomingGuidePost } from './posts/the-ultimate-husky-grooming-guide';
import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  shihTzuHaircutsPost,
  schnauzerHaircutsPost,
  goldendoodleGroomingGuidePost,
  bestDogNailGrinderPost,
  bestDogShampooPost,
  cockerSpanielCutsPost,
  pomeranianHaircutsPost,
  howToGroomAPomeranianPost,
  malteseHaircutsPost,
  huskyGroomingGuidePost,
  bestDogBrushForSheddingPost,
  yorkieGroomingStylesPost,
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export type { BlogPost } from './types';
