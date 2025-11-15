<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { toggleTheme, getCurrentTheme, type Theme } from '$lib/utils/theme';
  import { getLangFromPath, getTranslations, type Lang } from '$lib/i18n';

  $: currentPath = $page.url.pathname;
  $: lang = getLangFromPath(currentPath) as Lang;
  $: t = getTranslations(lang);
  $: isActive = (path: string) => currentPath === path || currentPath === `/${lang}${path}`;

  let currentTheme: Theme = 'light';

  onMount(() => {
    // 現在のテーマを取得して、確実にdata-theme属性を設定
    const theme = getCurrentTheme();
    currentTheme = theme;
    // data-theme属性が設定されていることを確認（+layout.svelteのスクリプトで設定済みのはず）
    if (document.documentElement.getAttribute('data-theme') !== theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  });

  function handleToggleTheme() {
    currentTheme = toggleTheme();
  }

  // 言語プレフィックス付きパスを生成
  function getPath(path: string): string {
    if (lang === 'en') return `/en${path}`;
    return path;
  }
</script>

<!-- モバイル用ヘッダー -->
<header class="mobile-header">
  <div class="mobile-header-content">
    <a href={getPath('/')} class="mobile-logo">
      <img src="/images/logo.svg" alt="infoHiroki Logo" width="36" height="36">
      <span class="mobile-title">infoHiroki</span>
    </a>
    <button class="theme-toggle" on:click={handleToggleTheme} aria-label={t.header.theme.toggle}>
      {#if currentTheme === 'dark'}
        <!-- 太陽アイコン（ライトモードへ切替） -->
        <svg class="theme-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4"/>
          <line x1="12" y1="1" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
        </svg>
      {:else}
        <!-- 月アイコン（ダークモードへ切替） -->
        <svg class="theme-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      {/if}
    </button>
    <button class="hamburger-button" aria-label={t.header.menu.open}>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
</header>

<!-- デスクトップ用サイドバー / モバイル用オーバーレイメニュー -->
<aside class="sidebar">
  <div class="sidebar-header">
    <a href={getPath('/')} class="site-title">
      <div class="logo">
        <img src="/images/logo.svg" alt="infoHiroki Logo" width="36" height="36">
      </div>
      <div class="title-text">
        <span class="company-name">infoHiroki</span>
      </div>
    </a>
  </div>

  <nav class="sidebar-nav">
    <ul class="nav-menu">
      <li class="nav-item{isActive('/') ? ' active' : ''}">
        <a href={getPath('/')} class="nav-link">{t.header.nav.home}</a>
      </li>
      <li class="nav-item{isActive('/blog') ? ' active' : ''}">
        <a href={getPath('/blog')} class="nav-link">{t.header.nav.blog}</a>
      </li>
      <li class="nav-item{isActive('/services') ? ' active' : ''}">
        <a href={getPath('/services')} class="nav-link">{t.header.nav.services}</a>
      </li>
      <li class="nav-item{isActive('/products') ? ' active' : ''}">
        <a href={getPath('/products')} class="nav-link">{t.header.nav.products}</a>
      </li>
      <li class="nav-item{isActive('/results') ? ' active' : ''}">
        <a href={getPath('/results')} class="nav-link">{t.header.nav.results}</a>
      </li>
      <li class="nav-item{isActive('/about') ? ' active' : ''}">
        <a href={getPath('/about')} class="nav-link">{t.header.nav.about}</a>
      </li>
      <li class="nav-item{isActive('/faq') ? ' active' : ''}">
        <a href={getPath('/faq')} class="nav-link">{t.header.nav.faq}</a>
      </li>
      <li class="nav-item{isActive('/contact') ? ' active' : ''}">
        <a href={getPath('/contact')} class="nav-link">{t.header.nav.contact}</a>
      </li>
    </ul>
  </nav>

  <!-- テーマ切り替えボタン（サイドバー最下部） -->
  <div class="sidebar-footer">
    <button class="theme-toggle-btn" on:click={handleToggleTheme} aria-label={t.header.theme.toggle}>
      {currentTheme === 'dark' ? t.header.theme.light : t.header.theme.dark}
    </button>
  </div>
</aside>

<!-- モバイル用オーバーレイ -->
<div class="mobile-overlay"></div>
