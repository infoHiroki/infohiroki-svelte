<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { posts } = data;
</script>

<svelte:head>
  <title>ブログ | infoHiroki</title>
  <meta name="description" content="エンジニア・AI・生成AI・DXに関する技術ブログ記事一覧" />
  <link rel="stylesheet" href="/css/style.css" />
</svelte:head>

<main class="container">
  <section class="blog-header">
    <h1>📝 ブログ</h1>
    <p class="blog-count">全 {posts.length} 記事</p>
  </section>

  <section class="blog-list">
    {#each posts as post}
      <article class="blog-card">
        <a href="/blog/{post.slug}">
          <div class="card-header">
            <span class="article-icon">{post.icon}</span>
            <time datetime={post.date}>{post.date}</time>
          </div>
          <h2>{post.title}</h2>
          <p class="description">{post.description}</p>
          <div class="tags">
            {#each post.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </a>
      </article>
    {/each}
  </section>
</main>

<style>
  /* 既存のstyle.cssを使用するため、追加のスタイルは最小限 */
  .blog-header {
    text-align: center;
    margin: 2rem 0;
  }
  
  .blog-count {
    color: #666;
    font-size: 0.9rem;
  }
  
  .blog-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .blog-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .blog-list {
      grid-template-columns: 1fr;
    }
  }
  
  .blog-card {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
    min-width: 0;
    overflow: hidden;
  }
  
  .blog-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .blog-card a {
    text-decoration: none;
    color: inherit;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .article-icon {
    font-size: 1.5rem;
  }
  
  time {
    color: var(--color-text-light);
    font-size: 0.85rem;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: 1.3rem;
    color: var(--color-text);
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .description {
    color: var(--color-text-light);
    font-size: 0.9rem;
    margin: 0.5rem 0 1rem;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tag {
    background: var(--color-border);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    color: var(--color-text-light);
  }
</style>
