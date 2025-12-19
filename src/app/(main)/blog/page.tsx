'use client';

import { useMemo, useState } from 'react';

import { blogPosts } from './blog-posts';
import styles from './BlogPage.module.scss';
import { BlogCard } from './components/BlogCard';

const featuredTags = [ 'All Topics', 'DIY Dog Grooming', 'DIY Grooming', 'Dog Grooming Tools', 'Dog Nail Trimming', 'Breed Guides' ];

export default function BlogPage() {
  const [ activeTag, handleClick ] = useState<string>(featuredTags[0]);
  const postsByDate = useMemo(() => {
    return [ ...blogPosts ].sort((a, b) => {
      const dateA = a.publishedOn ? new Date(a.publishedOn).getTime() : 0;
      const dateB = b.publishedOn ? new Date(b.publishedOn).getTime() : 0;
      return dateB - dateA;
    });
  }, []);
  const filteredPosts = useMemo(() => {
    if (activeTag === 'All Topics') {
      return postsByDate;
    }
    return postsByDate.filter(post => post.tags.includes(activeTag));
  }, [ activeTag, postsByDate ]);

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
        {featuredTags.map(tag => (
          <button
            key={tag}
            type="button"
            className={styles.filterButton}
            data-active={tag === activeTag}
            aria-pressed={tag === activeTag}
            onClick={() => handleClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <section className={styles.grid}>
        {filteredPosts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
