"use client";

import { useMemo, useState } from 'react';
import { BlogCard } from './components/BlogCard';
import styles from './BlogPage.module.scss';
import { blogPosts } from './blog-posts';

const featuredTags = ['All Topics', 'DIY Dog Grooming', 'DIY Grooming', 'Dog Grooming Tools', 'Dog Nail Trimming', 'Breed Guides'];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string>(featuredTags[0]);
  const filteredPosts = useMemo(() => {
    if (activeTag === 'All Topics') {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Paw Parent Academy</p>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.description}>
          Actionable tutorials, pro tips, and gear guides to help you keep your pup fresh between salon visits.
        </p>
      </header>

      <div className={styles.filters}>
        {featuredTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={styles.filterButton}
            data-active={tag === activeTag}
            aria-pressed={tag === activeTag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <section className={styles.grid}>
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
