import { getPostBySlug } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    throw error(404, '記事が見つかりません');
  }
  
  return {
    post
  };
};
