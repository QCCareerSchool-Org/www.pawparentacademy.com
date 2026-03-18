import type { Metadata } from 'next';

import { Blog } from './blog';
import { blogPosts, featuredTags } from './posts';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Blog',
};

const BlogIndexPage: PageComponent = () => <Blog posts={blogPosts} featuredTags={featuredTags} />;

export default BlogIndexPage;
