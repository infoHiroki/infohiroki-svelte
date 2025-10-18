<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
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
