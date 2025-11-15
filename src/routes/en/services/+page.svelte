<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.services.meta.title}</title>
  <meta name="description" content={t.services.meta.description}>

  <!-- OGP Tags -->
  <meta property="og:title" content={t.services.meta.title}>
  <meta property="og:description" content={t.services.meta.description}>
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.services.meta.title}>
  <meta name="twitter:description" content={t.services.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/services">
</svelte:head>

<div class="hero-sub">
  <div class="container">
    <h1 class="page-title">{t.services.title}</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h2>{@html t.services.subtitle}</h2>
    </section>

    <!-- Service Pricing Plans -->
    <section class="section">
      <h2 class="section-title">{t.services.pricing.title}</h2>
      <div class="service-plans">
        <div class="plan-card recommended">
          <div class="plan-badge">{t.services.pricing.advisor.badge}</div>
          <h3>{t.services.pricing.advisor.title}</h3>
          <div class="plan-price">{t.services.pricing.advisor.price}</div>
          <p>{t.services.pricing.advisor.desc}</p>
        </div>
        <div class="plan-card">
          <h3>{t.services.pricing.project.title}</h3>
          <div class="plan-price">{t.services.pricing.project.price}</div>
          <p>{t.services.pricing.project.desc}</p>
        </div>
        <div class="plan-card spot">
          <h3>{t.services.pricing.consultation.title}</h3>
          <div class="plan-price">{t.services.pricing.consultation.price}</div>
          <p>{t.services.pricing.consultation.desc}</p>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="section">
      <h2 class="section-title">{t.services.details.title}</h2>

      <div class="service-detail">
        <h3>{t.services.details.project.title}</h3>
        <ul class="service-features">
          <li>{@html t.services.details.project.phase1}</li>
          <li>{@html t.services.details.project.phase2}</li>
          <li>{@html t.services.details.project.phase3}</li>
          <li>{@html t.services.details.project.duration}</li>
        </ul>
      </div>

      <div class="service-detail">
        <h3>{t.services.details.advisor.title}</h3>
        <ul class="service-features">
          <li>{@html t.services.details.advisor.hours}</li>
          <li>{@html t.services.details.advisor.scope}</li>
          <li>{@html t.services.details.advisor.period}</li>
          <li>{@html t.services.details.advisor.support}</li>
        </ul>
      </div>

      <div class="service-detail">
        <h3>{t.services.details.consultation.title}</h3>
        <ul class="service-features">
          <li>{@html t.services.details.consultation.time}</li>
          <li>{@html t.services.details.consultation.deliverables}</li>
          <li>{@html t.services.details.consultation.content}</li>
          <li>{@html t.services.details.consultation.target}</li>
        </ul>
      </div>
    </section>

    <!-- Supported Technologies & Fields -->
    <section class="section">
      <h2 class="section-title">{t.services.technologies.title}</h2>
      <div class="card-grid">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.services.technologies.mainAI.title}</h3>
          </div>
          <div class="card-body">
            <p>{@html t.services.technologies.mainAI.content}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.services.technologies.voiceImage.title}</h3>
          </div>
          <div class="card-body">
            <p>{@html t.services.technologies.voiceImage.content}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.services.technologies.integration.title}</h3>
          </div>
          <div class="card-body">
            <p>{@html t.services.technologies.integration.content}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.services.technologies.business.title}</h3>
          </div>
          <div class="card-body">
            <p>{@html t.services.technologies.business.content}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{t.services.technologies.specialized.title}</h3>
          </div>
          <div class="card-body">
            <p>{@html t.services.technologies.specialized.content}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
