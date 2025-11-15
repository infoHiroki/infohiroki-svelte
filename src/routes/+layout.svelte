<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <!-- ファビコン -->
  <link rel="icon" type="image/svg+xml" href="/images/logo.svg">

  <!-- テーマ初期化（FOUC防止のため最優先で実行） -->
  <script>
    (function() {
      // localStorageからテーマを取得
      const storedTheme = localStorage.getItem('theme');

      if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
      } else {
        // システム設定を確認
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }
    })();
  </script>

  <link rel="stylesheet" href="/css/style.css">
  <script src="/js/main.js"></script>
</svelte:head>

<div class="site-layout">
  <Header />

  <div class="main-wrapper">
    <main class="site-main">
      <slot />
    </main>

    <Footer />
  </div>
</div>
