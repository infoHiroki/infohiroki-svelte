<script lang="ts">
  import { page } from '$app/stores';

  $: currentPath = $page.url.pathname;
  $: isActive = (path: string) => currentPath === path;
</script>

<!-- モバイル用ヘッダー -->
<header class="mobile-header">
  <div class="mobile-header-content">
    <a href="/" class="mobile-logo">
      <img src="/images/logo.svg" alt="infoHiroki Logo" width="36" height="36">
      <span class="mobile-title">infoHiroki</span>
    </a>
    <button class="hamburger-button" aria-label="メニューを開く">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
</header>

<!-- デスクトップ用サイドバー / モバイル用オーバーレイメニュー -->
<aside class="sidebar">
  <div class="sidebar-header">
    <a href="/" class="site-title">
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
        <a href="/" class="nav-link">ホーム</a>
      </li>
      <li class="nav-item{isActive('/blog') ? ' active' : ''}">
        <a href="/blog" class="nav-link">ブログ</a>
      </li>
      <li class="nav-item{isActive('/services') ? ' active' : ''}">
        <a href="/services" class="nav-link">サービス</a>
      </li>
      <li class="nav-item{isActive('/products') ? ' active' : ''}">
        <a href="/products" class="nav-link">開発製品</a>
      </li>
      <li class="nav-item{isActive('/results') ? ' active' : ''}">
        <a href="/results" class="nav-link">実績</a>
      </li>
      <li class="nav-item{isActive('/about') ? ' active' : ''}">
        <a href="/about" class="nav-link">スキルスタック</a>
      </li>
      <li class="nav-item{isActive('/faq') ? ' active' : ''}">
        <a href="/faq" class="nav-link">FAQ</a>
      </li>
      <li class="nav-item{isActive('/contact') ? ' active' : ''}">
        <a href="/contact" class="nav-link">お問い合わせ</a>
      </li>
    </ul>
  </nav>
</aside>

<!-- モバイル用オーバーレイ -->
<div class="mobile-overlay"></div>
