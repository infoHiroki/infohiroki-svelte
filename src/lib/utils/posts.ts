import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { BlogPost } from '$lib/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/lib/content/blog');

/**
 * 全記事を取得（日付降順）
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: data.slug || slug,
        title: data.title || 'タイトル未設定',
        description: data.description || '',
        icon: data.icon || '📝',
        tags: data.tags || [],
        date: data.date || new Date().toISOString().split('T')[0],
        content: marked(content)
      } as BlogPost;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)); // 日付降順
  
  return posts;
}

/**
 * 個別記事を取得
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: data.slug || slug,
      title: data.title || 'タイトル未設定',
      description: data.description || '',
      icon: data.icon || '📝',
      tags: data.tags || [],
      date: data.date || new Date().toISOString().split('T')[0],
      content: marked(content)
    } as BlogPost;
  } catch (error) {
    console.error(`記事が見つかりません: ${slug}`, error);
    return null;
  }
}

/**
 * 記事の総数を取得
 */
export async function getPostCount(): Promise<number> {
  const posts = await getAllPosts();
  return posts.length;
}
