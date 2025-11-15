<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.results.meta.title}</title>
  <meta name="description" content={t.results.meta.description}>

  <!-- OGP Tags -->
  <meta property="og:title" content={t.results.meta.title}>
  <meta property="og:description" content={t.results.meta.description}>
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.results.meta.title}>
  <meta name="twitter:description" content={t.results.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/results">
</svelte:head>

<div class="hero-sub">
  <div class="container">
    <h1 class="page-title">{t.results.title}</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <div class="card-grid">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.hospital.title}</h3>
            <p class="card-subtitle">{t.results.cases.hospital.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.hospital.challenge}</p>
            <p>{@html t.results.cases.hospital.solution}</p>
            <p>{@html t.results.cases.hospital.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.dental.title}</h3>
            <p class="card-subtitle">{t.results.cases.dental.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.dental.challenge}</p>
            <p>{@html t.results.cases.dental.solution}</p>
            <p>{@html t.results.cases.dental.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.nursing.title}</h3>
            <p class="card-subtitle">{t.results.cases.nursing.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.nursing.challenge}</p>
            <p>{@html t.results.cases.nursing.solution}</p>
            <p>{@html t.results.cases.nursing.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.architecture.title}</h3>
            <p class="card-subtitle">{t.results.cases.architecture.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.architecture.challenge}</p>
            <p>{@html t.results.cases.architecture.solution}</p>
            <p>{@html t.results.cases.architecture.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.construction.title}</h3>
            <p class="card-subtitle">{t.results.cases.construction.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.construction.challenge}</p>
            <p>{@html t.results.cases.construction.solution}</p>
            <p>{@html t.results.cases.construction.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.marketing.title}</h3>
            <p class="card-subtitle">{t.results.cases.marketing.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.marketing.challenge}</p>
            <p>{@html t.results.cases.marketing.solution}</p>
            <p>{@html t.results.cases.marketing.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.restaurant.title}</h3>
            <p class="card-subtitle">{t.results.cases.restaurant.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.restaurant.challenge}</p>
            <p>{@html t.results.cases.restaurant.solution}</p>
            <p>{@html t.results.cases.restaurant.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.production.title}</h3>
            <p class="card-subtitle">{t.results.cases.production.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.production.challenge}</p>
            <p>{@html t.results.cases.production.solution}</p>
            <p>{@html t.results.cases.production.outcome}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.results.cases.training.title}</h3>
            <p class="card-subtitle">{t.results.cases.training.subtitle}</p>
          </div>
          <div class="card-body">
            <p>{@html t.results.cases.training.challenge}</p>
            <p>{@html t.results.cases.training.solution}</p>
            <p>{@html t.results.cases.training.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
