<script lang="ts">
  import { getTranslations } from '$lib/i18n';

  const lang = 'en';
  const t = getTranslations(lang);
</script>

<svelte:head>
  <title>{t.about.meta.title}</title>
  <meta name="description" content={t.about.meta.description}>

  <!-- OGP Tags -->
  <meta property="og:title" content={t.about.meta.title}>
  <meta property="og:description" content={t.about.meta.description}>
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content={t.about.meta.title}>
  <meta name="twitter:description" content={t.about.meta.description}>

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/en/about">
</svelte:head>

<style>
  .tech-icon {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    vertical-align: middle;
  }
  .skill-item h3 {
    display: flex;
    align-items: center;
  }
</style>

<div class="hero-sub">
  <div class="container">
    <h1 class="page-title">{t.about.title}</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h2>{t.about.programming.title}</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><img src="/images/icons/python.png" class="tech-icon" alt="Python">{t.about.programming.python.title}</h3>
          <p>{t.about.programming.python.desc}</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/javascript.png" class="tech-icon" alt="JavaScript">{t.about.programming.javascript.title}</h3>
          <p>{t.about.programming.javascript.desc}</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/go.png" class="tech-icon" alt="Go">{t.about.programming.go.title}</h3>
          <p>{t.about.programming.go.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🗄️</span>{t.about.programming.sql.title}</h3>
          <p>{t.about.programming.sql.desc}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{t.about.frameworks.title}</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><span class="tech-icon">⚛️</span>{t.about.frameworks.react.title}</h3>
          <p>{t.about.frameworks.react.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🌶️</span>{t.about.frameworks.fastapi.title}</h3>
          <p>{t.about.frameworks.fastapi.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🟢</span>{t.about.frameworks.nodejs.title}</h3>
          <p>{t.about.frameworks.nodejs.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🧮</span>{t.about.frameworks.ml.title}</h3>
          <p>{t.about.frameworks.ml.desc}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{t.about.ai.title}</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><span class="tech-icon">🤖</span>{t.about.ai.llm.title}</h3>
          <p>{t.about.ai.llm.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">📈</span>{t.about.ai.dataAnalysis.title}</h3>
          <p>{t.about.ai.dataAnalysis.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🧠</span>{t.about.ai.nlp.title}</h3>
          <p>{t.about.ai.nlp.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🔧</span>{t.about.ai.operations.title}</h3>
          <p>{t.about.ai.operations.desc}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{t.about.infrastructure.title}</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><span class="tech-icon">☁️</span>{t.about.infrastructure.cloud.title}</h3>
          <p>{t.about.infrastructure.cloud.desc}</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/docker.png" class="tech-icon" alt="Docker">{t.about.infrastructure.container.title}</h3>
          <p>{t.about.infrastructure.container.desc}</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/github.png" class="tech-icon" alt="GitHub Actions">{t.about.infrastructure.automation.title}</h3>
          <p>{t.about.infrastructure.automation.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">📉</span>{t.about.infrastructure.monitoring.title}</h3>
          <p>{t.about.infrastructure.monitoring.desc}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>{t.about.tools.title}</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><img src="/images/icons/notion.png" class="tech-icon" alt="Notion">{t.about.tools.notion.title}</h3>
          <p>{t.about.tools.notion.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">⚡</span>{t.about.tools.zapier.title}</h3>
          <p>{t.about.tools.zapier.desc}</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/github.png" class="tech-icon" alt="GitHub">{t.about.tools.git.title}</h3>
          <p>{t.about.tools.git.desc}</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">📊</span>{t.about.tools.pm.title}</h3>
          <p>{t.about.tools.pm.desc}</p>
        </div>
      </div>
    </section>
  </div>
</div>
