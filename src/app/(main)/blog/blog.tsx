'use client';

import type { Metadata } from 'next';
import type { FC } from 'react';
import { memo, useMemo, useState } from 'react';

import styles from './blog.module.scss';
import { BlogCard } from './components/BlogCard';
import type { BlogPost, FeaturedTag } from './posts';

export const metadata: Metadata = {
  title: 'Blog',
};

interface Props {
  posts: BlogPost[];
  featuredTags: FeaturedTag[];
}

export const Blog: FC<Props> = memo(({ posts, featuredTags }) => {
  const [ activeTag, setActiveTag ] = useState<FeaturedTag>();

  const postsByDate = useMemo(() => {
    return [ ...posts ].sort(dateSort);
  }, [ posts ]);

  const filteredPosts = useMemo(() => {
    if (typeof activeTag === 'undefined') {
      return postsByDate;
    }
    return postsByDate.filter(post => post.tags.includes(activeTag));
  }, [ activeTag, postsByDate ]);

  const handleClick = (tag?: FeaturedTag) => {
    setActiveTag(tag);
  };

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.description}>Actionable tutorials, pro tips, and gear guides to help you keep your pup fresh between salon visits.</p>
      </header>

      <div className={styles.filters}>
        <button key="All Topics" type="button" className={styles.filterButton} data-active={typeof activeTag === 'undefined'} aria-pressed={typeof activeTag === 'undefined'} onClick={() => handleClick()}>All Topics</button>
        {featuredTags.map(tag => <button key={tag} type="button" className={styles.filterButton} data-active={tag === activeTag} aria-pressed={tag === activeTag} onClick={() => handleClick(tag)}>{tag}</button>)}
      </div>

      <section className={styles.grid}>
        {filteredPosts.map(post => <BlogCard key={post.slug} post={post} />)}
      </section>
    </div>
  );
});

Blog.displayName = 'Blog';

const dateSort = (a: BlogPost, b: BlogPost) => {
  const dateA = a.publishedOn ? new Date(a.publishedOn).getTime() : 0;
  const dateB = b.publishedOn ? new Date(b.publishedOn).getTime() : 0;
  return dateB - dateA;
};
