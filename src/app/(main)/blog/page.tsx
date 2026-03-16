'use client';

import { useMemo, useState } from 'react';

import type { BlogPost } from './blog-posts';
import { blogPosts } from './blog-posts';
import styles from './BlogPage.module.scss';
import { BlogCard } from './components/BlogCard';
import type { Tag } from './types';
import { featuredTags } from './types';
import type { PageComponent } from '@/app/serverComponent';

const BlogIndexPage: PageComponent = () => {
  const [ activeTag, setActiveTag ] = useState<typeof featuredTags[number] | undefined>();

  const postsByDate = useMemo(() => {
    return [ ...blogPosts ].sort(dateSort);
  }, []);

  const filteredPosts = useMemo(() => {
    if (typeof activeTag === 'undefined') {
      return postsByDate;
    }
    return postsByDate.filter(post => post.tags.includes(activeTag));
  }, [ activeTag, postsByDate ]);

  const handleClick = (tag?: Tag) => {
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
};

export default BlogIndexPage;

const dateSort = (a: BlogPost, b: BlogPost) => {
  const dateA = a.publishedOn ? new Date(a.publishedOn).getTime() : 0;
  const dateB = b.publishedOn ? new Date(b.publishedOn).getTime() : 0;
  return dateB - dateA;
};
