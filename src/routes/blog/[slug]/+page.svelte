<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} | infoHiroki</title>
  <meta name="description" content={post.description} />
  <link rel="stylesheet" href="/css/style.css" />
</svelte:head>

<main class="container">
  <article class="blog-detail">
    <header class="article-header">
      <div class="article-meta">
        <span class="article-icon">{post.icon}</span>
        <time datetime={post.date}>{post.date}</time>
      </div>
      <h1>{post.title}</h1>
      <p class="description">{post.description}</p>
      <div class="tags">
        {#each post.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </header>
    
    <div class="article-content">
      {@html post.content}
    </div>
    
    <footer class="article-footer">
      <a href="/blog" class="back-link">← ブログ一覧に戻る</a>
    </footer>
  </article>
</main>

<style>
  .blog-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .article-header {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .article-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .article-icon {
    font-size: 2rem;
  }
  
  time {
    color: var(--color-text-light);
    font-size: 0.9rem;
  }
  
  h1 {
    font-size: 2rem;
    margin: 1rem 0;
    line-height: 1.4;
  }
  
  .description {
    color: var(--color-text-light);
    font-size: 1rem;
    line-height: 1.6;
    margin: 1rem 0;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .tag {
    background: var(--color-border);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    color: var(--color-text-light);
  }
  
  .article-content {
    line-height: 1.8;
    font-size: 1rem;
    color: var(--color-text);
  }
  
  .article-content :global(h1) {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e0e0e0;
  }
  
  .article-content :global(h2) {
    font-size: 1.5rem;
    margin: 1.8rem 0 1rem;
  }
  
  .article-content :global(h3) {
    font-size: 1.2rem;
    margin: 1.5rem 0 0.8rem;
  }
  
  .article-content :global(p) {
    margin: 1rem 0;
  }
  
  .article-content :global(ul),
  .article-content :global(ol) {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  .article-content :global(li) {
    margin: 0.5rem 0;
  }
  
  .article-content :global(code) {
    background: var(--color-border);
    color: var(--color-text);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  .article-content :global(pre) {
    background: var(--color-border);
    color: var(--color-text);
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1rem 0;
  }
  
  .article-content :global(pre code) {
    background: none;
    padding: 0;
  }
  
  .article-content :global(blockquote) {
    border-left: 4px solid var(--color-border);
    padding-left: 1rem;
    margin: 1rem 0;
    color: var(--color-text-light);
    font-style: italic;
  }
  
  .article-content :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 1.5rem 0;
  }
  
  .article-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
  
  .article-content :global(th),
  .article-content :global(td) {
    border: 1px solid var(--color-border);
    padding: 0.75rem;
    text-align: left;
  }

  .article-content :global(th) {
    background: var(--color-border);
    color: var(--color-text);
    font-weight: bold;
  }
  
  .article-footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e0e0e0;
  }
  
  .back-link {
    display: inline-block;
    color: #0066cc;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #0066cc;
    border-radius: 5px;
    transition: background 0.2s, color 0.2s;
  }
  
  .back-link:hover {
    background: #0066cc;
    color: white;
  }
</style>
