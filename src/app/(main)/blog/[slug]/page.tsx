import Image from 'next/image';
import { notFound } from 'next/navigation';

import { blogPosts, getBlogPostBySlug } from '../posts';
import styles from './BlogArticle.module.scss';
import type { GenerateMetadata, PageComponent } from '@/serverComponent';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Params = {
  slug: string;
};

const fallbackArticleHtml = '<p>New article coming soon. Check back shortly!</p>';

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export const generateMetadata: GenerateMetadata<Params> = async ({ params }) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonical = post.canonicalUrl ?? `https://www.pawparentacademy.com/blog/${post.slug}`;
  const description = post.description ?? post.excerpt;
  const heroImage = post.heroImage ?? post.imageUrl;

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: { type: 'article', title: post.title, description, url: canonical, tags: post.tags, images: heroImage ? [ { url: heroImage } ] : undefined },
    twitter: { card: 'summary_large_image', title: post.title, description, images: heroImage ? [ heroImage ] : undefined },
  };
};

const BlogArticlePage: PageComponent<Params> = async ({ params }) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const heroImage = post.heroImage ?? post.imageUrl;
  const heroAlt = post.heroImageAlt ?? post.title;
  const contentHtml = post.contentHtml ?? fallbackArticleHtml;

  return (
    <article className={`container ${styles.article}`}>
      <header className={styles.header}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.tags}>
          {post.tags.map(tag => <span className={styles.tag} key={`${post.slug}-${tag}`}>{tag}</span>)}
        </div>
        <span className={styles.date}>{post.publishedOn}</span>
      </header>

      {heroImage && (
        <div className={styles.heroImage}>
          <Image src={heroImage} alt={heroAlt} fill sizes="(max-width: 900px) 100vw, 900px" />
        </div>
      )}

      <section className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export default BlogArticlePage;
