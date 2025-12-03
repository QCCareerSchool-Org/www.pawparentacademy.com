import { blogPosts, getBlogPostBySlug } from './src/app/(main)/blog/blog-posts.ts';

console.log('Total posts:', blogPosts.length);
console.log('Shih Tzu post found:', Boolean(getBlogPostBySlug('shih-tzu-haircuts')));
const post = getBlogPostBySlug('shih-tzu-haircuts');
console.log(post);
if (post) {
	console.log('Slug characters:', post.slug.split('').map((ch) => ch.charCodeAt(0)));
}
