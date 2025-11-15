<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.contact.meta.title}</title>
  <meta name="description" content={t.contact.meta.description}>

  <!-- OGP Tags -->
  <meta property="og:title" content={t.contact.meta.title}>
  <meta property="og:description" content={t.contact.meta.description}>
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.contact.meta.title}>
  <meta name="twitter:description" content={t.contact.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/contact">
</svelte:head>

<div class="hero-sub">
  <div class="container">
    <h1 class="page-title">{t.contact.title}</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <p>{t.contact.intro}</p>
    </section>

    <section class="section">
      <h2>{t.contact.email.title}</h2>
      <p>{t.contact.email.description}</p>
      <p class="email-contact">
        <a href="mailto:info.hirokitakamura@gmail.com" class="email-link">info.hirokitakamura@gmail.com</a>
      </p>
      <p class="note">{t.contact.email.note}</p>
    </section>
  </div>
</div>
