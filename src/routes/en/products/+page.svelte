<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.products.meta.title}</title>
  <meta name="description" content={t.products.meta.description}>

  <!-- OGP Tags -->
  <meta property="og:title" content={t.products.meta.title}>
  <meta property="og:description" content={t.products.meta.description}>
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.products.meta.title}>
  <meta name="twitter:description" content={t.products.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/products">
</svelte:head>

<style>
  .card-links {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .link-button {
    display: inline-block;
    padding: 8px 16px;
    background: #E73E8F;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  .link-button:hover {
    background: #d12975;
    color: white;
  }
</style>

<div class="hero-sub">
  <div class="container">
    <h1 class="page-title">{t.products.title}</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <p>{t.products.intro}</p>
    </section>

    <section class="section">
      <div class="card-grid">
        <div class="card" id="koemoji">
          <div class="card-header">
            <h3 class="card-title">{t.products.koemoji.title}</h3>
            <p class="card-subtitle">{t.products.koemoji.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.products.koemoji.feature}</p>
            <p>{@html t.products.koemoji.characteristics}</p>
            <p>{@html t.products.koemoji.tech}</p>
            <p>{@html t.products.koemoji.platform}</p>
            <div class="card-links">
              <a href="https://github.com/infoHiroki/KoeMoji-Go" target="_blank" class="link-button">{t.products.koemoji.linkGo}</a>
              <a href="https://github.com/infoHiroki/KoeMojiAuto-cli" target="_blank" class="link-button">{t.products.koemoji.linkPython}</a>
              <a href="https://koemoji.hmtc.jp/index.html" target="_blank" class="link-button">{t.products.koemoji.linkSite}</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.products.youtubeMojicopy.title}</h3>
            <p class="card-subtitle">{t.products.youtubeMojicopy.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.products.youtubeMojicopy.feature}</p>
            <p>{@html t.products.youtubeMojicopy.characteristics}</p>
            <p>{@html t.products.youtubeMojicopy.tech}</p>
            <p>{@html t.products.youtubeMojicopy.platform}</p>
            <div class="card-links">
              <a href="https://chromewebstore.google.com/detail/youtubemojicopy/ejeafnfdgeipigfackgkhcgfbjiijbgf" target="_blank" class="link-button">{t.products.youtubeMojicopy.linkStore}</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.products.notionTasker.title}</h3>
            <p class="card-subtitle">{t.products.notionTasker.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.products.notionTasker.feature}</p>
            <p>{@html t.products.notionTasker.tech}</p>
            <p>{@html t.products.notionTasker.platform}</p>
            <div class="card-links">
              <a href="https://chromewebstore.google.com/detail/notiontasker/pkbibgfhgicoahenebmkhbklkffjdfea" target="_blank" class="link-button">{t.products.notionTasker.linkStore}</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.products.website.title}</h3>
            <p class="card-subtitle">{t.products.website.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.products.website.feature}</p>
            <p>{@html t.products.website.characteristics}</p>
            <p>{@html t.products.website.tech}</p>
            <p>{@html t.products.website.support}</p>
            <div class="card-links">
              <a href="/en/contact" class="link-button">{t.products.website.linkContact}</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.products.webapp.title}</h3>
            <p class="card-subtitle">{t.products.webapp.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.products.webapp.feature}</p>
            <p>{@html t.products.webapp.characteristics}</p>
            <p>{@html t.products.webapp.tech}</p>
            <p>{@html t.products.webapp.platform}</p>
            <div class="card-links">
              <a href="/en/contact" class="link-button">{t.products.webapp.linkContact}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
