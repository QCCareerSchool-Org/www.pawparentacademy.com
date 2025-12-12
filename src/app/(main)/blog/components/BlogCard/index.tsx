import Image from 'next/image';
import Link from 'next/link';

import styles from './BlogCard.module.scss';
import type { BlogPost } from '../../blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, title, excerpt, imageUrl, tags, publishedOn } = post;
  const href = `/blog/${slug}`;

  return (
    <article className={styles.card}>
      {imageUrl && (
        <Link href={href} className={styles.imageWrapper}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      )}
      <div className={styles.content}>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span className={styles.tag} key={`${title}-${tag}`}>
              {tag}
            </span>
          ))}
        </div>
        <span className={styles.date}>{publishedOn}</span>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link className={styles.cta} href={href}>
          Read More
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5 1L17 8L10.5 15M1 8H16.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
