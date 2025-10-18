import { getAllPosts } from '$lib/utils/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
  const posts = getAllPosts();

  return {
    posts
  };
};
