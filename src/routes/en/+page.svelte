<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.home.meta.title}</title>
  <meta name="description" content={t.home.meta.description}>

  <!-- OGPタグ -->
  <meta property="og:title" content={t.home.meta.title}>
  <meta property="og:description" content={t.home.meta.description}>
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitterカード -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.home.meta.title}>
  <meta name="twitter:description" content={t.home.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<section class="hero hero-with-bg">
  <!-- ヒーロー画像のみ表示 -->
</section>

<section class="home-intro">
  <div class="container">
    <div class="philosophy-content">
      <p class="call-to-action"><strong>{@html t.home.hero.tagline}</strong></p>

      <div class="philosophy-text">
        <p>{@html t.home.intro.p1}</p>
        <p>{@html t.home.intro.p2}</p>
        <p>{@html t.home.intro.p3}</p>
        <p>{t.home.intro.p4}</p>
        <p class="final-statement">{t.home.intro.final}</p>
      </div>
    </div>
  </div>
</section>

<section class="home-services">
  <div class="container">
    <h2>{t.home.services.title}</h2>
    <div class="service-plans">
      <div class="plan-card recommended">
        <div class="plan-badge">{t.home.services.popular}</div>
        <h3>{t.home.services.advisor.title}</h3>
        <div class="plan-price">{t.home.services.advisor.price}</div>
        <p>{t.home.services.advisor.desc}</p>
      </div>
      <div class="plan-card">
        <h3>{t.home.services.project.title}</h3>
        <div class="plan-price">{t.home.services.project.price}</div>
        <p>{t.home.services.project.desc}</p>
      </div>
    </div>
    <p class="cta">
      <a href="/en/services" class="button">{t.home.services.cta}</a>
    </p>
  </div>
</section>

<section class="home-results">
  <div class="container">
    <h2>{t.home.results.title}</h2>
    <div class="card-grid">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{t.home.results.hospital.name}</h3>
        </div>
        <div class="card-body">
          <p>{t.home.results.hospital.desc}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{t.home.results.meo.name}</h3>
        </div>
        <div class="card-body">
          <p>{t.home.results.meo.desc}</p>
        </div>
      </div>
    </div>
    <p class="cta">
      <a href="/en/results" class="button">{t.home.results.cta}</a>
    </p>
  </div>
</section>

<section class="home-about">
  <div class="container">
    <h2>{t.home.about.title}</h2>
    <div class="about-content">
      <h3>{t.home.about.name}</h3>
      <p>{@html t.home.about.p1}</p>
      <p>{@html t.home.about.p2}</p>
      <p>{@html t.home.about.p3}</p>
      <p>{@html t.home.about.p4}</p>
      <p>{@html t.home.about.p5}</p>
      <p class="about-tagline"><strong>{@html t.home.about.tagline}</strong></p>
    </div>
  </div>
</section>
