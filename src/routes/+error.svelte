<script lang="ts">
  import { page } from '$app/stores';

  $: status = $page.status;
  $: message = $page.error?.message || 'エラーが発生しました';
</script>

<svelte:head>
  <title>{status === 404 ? 'ページが見つかりません' : 'エラー'} | infoHiroki</title>
</svelte:head>

<div class="page-content">
  <div class="container">
    <div class="error-container">
      <h1 class="error-code">{status}</h1>
      <h2 class="error-title">{status === 404 ? 'ページが見つかりません' : 'エラーが発生しました'}</h2>
      <p class="error-description">
        {#if status === 404}
          申し訳ございませんが、お探しのページは存在しないか、移動された可能性があります。<br>
          URLをご確認いただくか、以下のリンクからサイトをご覧ください。
        {:else}
          申し訳ございません。エラーが発生しました。<br>
          {message}
        {/if}
      </p>
      <div class="error-actions">
        <a href="/" class="error-button error-button-primary">ホームに戻る</a>
        <a href="/blog" class="error-button error-button-secondary">ブログを見る</a>
        <a href="/contact" class="error-button error-button-secondary">お問い合わせ</a>
      </div>
    </div>
  </div>
</div>
