import { getPostBySlug } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    throw error(404, '記事が見つかりません');
  }

  return {
    post
  };
};
