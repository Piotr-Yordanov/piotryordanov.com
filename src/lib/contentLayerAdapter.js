import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const allPostsNewToOld =
  allPosts?.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  }) || [];

export { allPosts };

const posts = allPostsNewToOld.map((post) => ({
  slug: post.slug,
  date: post.date,
  title: post.title,
  description: post.description,
  path: post.path,
  tags: post.tags,
}));

export default posts;
