<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.faq.meta.title}</title>
  <meta name="description" content={t.faq.meta.description}>

  <!-- OGP Tags -->
  <meta property="og:title" content={t.faq.meta.title}>
  <meta property="og:description" content={t.faq.meta.description}>
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.faq.meta.title}>
  <meta name="twitter:description" content={t.faq.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/faq">
</svelte:head>

<div class="hero-sub">
  <div class="container">
    <h1 class="page-title">{t.faq.title}</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <div class="faq-simple">
        <div class="faq-item">
          <div class="faq-q">{t.faq.items.target.q}</div>
          <div class="faq-a">{@html t.faq.items.target.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.flow.q}</div>
          <div class="faq-a">{@html t.faq.items.flow.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.pricing.q}</div>
          <div class="faq-a">{@html t.faq.items.pricing.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.contract.q}</div>
          <div class="faq-a">{@html t.faq.items.contract.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.online.q}</div>
          <div class="faq-a">{@html t.faq.items.online.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.security.q}</div>
          <div class="faq-a">{@html t.faq.items.security.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.tools.q}</div>
          <div class="faq-a">{@html t.faq.items.tools.a}</div>
        </div>

        <div class="faq-item">
          <div class="faq-q">{t.faq.items.knowledge.q}</div>
          <div class="faq-a">{@html t.faq.items.knowledge.a}</div>
        </div>
      </div>
    </section>
  </div>
</div>
