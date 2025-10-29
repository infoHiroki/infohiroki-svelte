import { getAllPosts } from '$lib/utils/posts';
import type { RequestHandler } from './$types';

const SITE_URL = 'https://infohiroki.com';

export const GET: RequestHandler = async () => {
  const posts = getAllPosts();

  // 固定ページのURL
  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: 'blog', changefreq: 'daily', priority: '0.9' },
    { url: 'services', changefreq: 'monthly', priority: '0.8' },
    { url: 'products', changefreq: 'monthly', priority: '0.8' },
    { url: 'results', changefreq: 'monthly', priority: '0.8' },
    { url: 'about', changefreq: 'monthly', priority: '0.8' },
    { url: 'faq', changefreq: 'monthly', priority: '0.7' },
    { url: 'contact', changefreq: 'monthly', priority: '0.7' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}/${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};

export const prerender = true;
