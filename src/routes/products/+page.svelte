<svelte:head>
  <title>開発製品紹介 | infoHiroki</title>
  <meta name="description" content="infoHirokiが開発した業務効率化ツールをご紹介します">

  <!-- OGPタグ -->
  <meta property="og:title" content="開発製品紹介 | infoHiroki">
  <meta property="og:description" content="infoHirokiが開発した業務効率化ツールをご紹介します">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="ja_JP">

  <!-- Twitterカード -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="開発製品紹介 | infoHiroki">
  <meta name="twitter:description" content="infoHirokiが開発した業務効率化ツールをご紹介します">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/products">
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
    <h1 class="page-title">開発製品紹介</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <p>infoHirokiでは、実際の業務で使える効率化ツールを開発・提供しています。すべて実際の導入実績があり、現場で使われている製品です。</p>
    </section>

    <section class="section">
      <div class="card-grid">
        <div class="card" id="koemoji">
          <div class="card-header">
            <h3 class="card-title">Koemoji-Go</h3>
            <p class="card-subtitle">オールインワン音声処理システム</p>
          </div>
          <div class="card-body">
            <p><strong>機能：</strong> 録音→文字起こし→AI要約の完全自動化</p>
            <p><strong>特徴：</strong> GUI/TUI対応、フォルダ監視、シングルバイナリ配布</p>
            <p><strong>技術：</strong> Go、Fyne、FasterWhisper、OpenAI API</p>
            <p><strong>対応：</strong> Windows、macOS（Apple Silicon対応）</p>
            <div class="card-links">
              <a href="https://github.com/infoHiroki/KoeMoji-Go" target="_blank" class="link-button">GitHub (Go版)</a>
              <a href="https://github.com/infoHiroki/KoeMojiAuto-cli" target="_blank" class="link-button">GitHub (Python版)</a>
              <a href="https://koemoji.hmtc.jp/index.html" target="_blank" class="link-button">紹介ページ</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">YouTube MojiCopy</h3>
            <p class="card-subtitle">Chrome拡張機能</p>
          </div>
          <div class="card-body">
            <p><strong>機能：</strong> プロンプト保存機能付きYouTube文字起こしコピー</p>
            <p><strong>特徴：</strong> 「要約して」等のプロンプト＋文字起こしでLLMに直接ペースト可能</p>
            <p><strong>技術：</strong> JavaScript、Chrome Extension API</p>
            <p><strong>対応：</strong> ChatGPT、Claude等のLLMとの連携</p>
            <div class="card-links">
              <a href="https://chromewebstore.google.com/detail/youtubemojicopy/ejeafnfdgeipigfackgkhcgfbjiijbgf" target="_blank" class="link-button">Chrome Store</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">NotionTasker</h3>
            <p class="card-subtitle">Notion連携Chrome拡張</p>
          </div>
          <div class="card-body">
            <p><strong>機能：</strong> WebページからNotionへ直接タスク・メモ追加</p>
            <p><strong>技術：</strong> JavaScript、Notion API、Chrome Extension</p>
            <p><strong>対応：</strong> Notion データベースと連携</p>
            <div class="card-links">
              <a href="https://chromewebstore.google.com/detail/notiontasker/pkbibgfhgicoahenebmkhbklkffjdfea" target="_blank" class="link-button">Chrome Store</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Webサイト制作</h3>
            <p class="card-subtitle">コーポレートサイト・LP制作</p>
          </div>
          <div class="card-body">
            <p><strong>機能：</strong> 企業サイト、ランディングページ、ブログサイト</p>
            <p><strong>特徴：</strong> レスポンシブ対応、SEO最適化、高速表示</p>
            <p><strong>技術：</strong> HTML/CSS、JavaScript、静的サイトジェネレーター</p>
            <p><strong>対応：</strong> お問い合わせフォーム、アナリティクス連携</p>
            <div class="card-links">
              <a href="/contact" class="link-button">お問い合わせ</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Webアプリケーション</h3>
            <p class="card-subtitle">カスタム業務システム開発</p>
          </div>
          <div class="card-body">
            <p><strong>機能：</strong> 顧客管理、在庫管理、予約システム等</p>
            <p><strong>特徴：</strong> 完全カスタマイズ、データベース連携</p>
            <p><strong>技術：</strong> JavaScript、React、Node.js、PostgreSQL</p>
            <p><strong>対応：</strong> Vercel、Firebase等のクラウドデプロイ</p>
            <div class="card-links">
              <a href="/contact" class="link-button">お問い合わせ</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LINE連絡セクション -->
    <section class="line-contact-footer">
      <div class="container">
        <h3>💬 製品についてご相談ください</h3>
        <p>開発製品の導入や詳細について、LINEでお気軽にご相談ください</p>
        <a href="https://lin.ee/8ymv2Nw" target="_blank" rel="noopener noreferrer" class="line-button-footer">
          LINEで相談する
        </a>
      </div>
    </section>
  </div>
</div>
