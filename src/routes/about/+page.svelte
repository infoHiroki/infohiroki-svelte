<svelte:head>
  <title>スキルスタック | infoHiroki</title>
  <meta name="description" content="エンジニアプロフィール - Go/Python/生成AI開発の技術スタック">

  <!-- OGPタグ -->
  <meta property="og:title" content="スキルスタック | infoHiroki">
  <meta property="og:description" content="エンジニアプロフィール - Go/Python/生成AI開発の技術スタック">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="infoHiroki">
  <meta property="og:locale" content="ja_JP">

  <!-- Twitterカード -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="スキルスタック | infoHiroki">
  <meta name="twitter:description" content="エンジニアプロフィール - Go/Python/生成AI開発の技術スタック">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://infohiroki.com/about">
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
    <h1 class="page-title">スキルスタック</h1>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <section class="section">
      <h2>プログラミング言語</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><img src="/images/icons/python.png" class="tech-icon" alt="Python">Python</h3>
          <p>データ分析、AI/ML、Webアプリケーション開発</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/javascript.png" class="tech-icon" alt="JavaScript">JavaScript/TypeScript</h3>
          <p>フロントエンド・バックエンド開発</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/go.png" class="tech-icon" alt="Go">Go</h3>
          <p>マイクロサービス、API開発</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🗄️</span>SQL</h3>
          <p>PostgreSQL、MySQL、データ分析</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>フレームワーク・ライブラリ</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><span class="tech-icon">⚛️</span>React/Next.js</h3>
          <p>Webアプリケーション開発、SSG/SSR</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🌶️</span>FastAPI/Flask</h3>
          <p>軽量Python Webフレームワーク、REST API開発</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🟢</span>Node.js/Express</h3>
          <p>バックエンドAPI、リアルタイム通信</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🧮</span>TensorFlow/PyTorch</h3>
          <p>機械学習、深層学習モデル開発</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>AI・機械学習</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><span class="tech-icon">🤖</span>LLM活用</h3>
          <p>OpenAI API、Claude、カスタムGPT開発</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">📈</span>データ分析</h3>
          <p>pandas、numpy、scikit-learn</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🧠</span>自然言語処理</h3>
          <p>テキスト分析、感情分析、文書生成</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">🔧</span>モデル運用</h3>
          <p>APIデプロイ、バージョン管理、スクリプト自動化</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>インフラ・ツール</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><span class="tech-icon">☁️</span>クラウドサービス</h3>
          <p>Vercel、Supabase、Firebase</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/docker.png" class="tech-icon" alt="Docker">コンテナ</h3>
          <p>Docker、ローカル開発環境</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/github.png" class="tech-icon" alt="GitHub Actions">自動化</h3>
          <p>GitHub Actions、デプロイ自動化</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">📉</span>分析・モニタリング</h3>
          <p>Google Analytics、Sentry、エラートラッキング</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>業務効率化・ツール</h2>
      <div class="skill-category">
        <div class="skill-item">
          <h3><img src="/images/icons/notion.png" class="tech-icon" alt="Notion">Notion</h3>
          <p>ワークスペース設計、API活用、自動化</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">⚡</span>Zapier/Make</h3>
          <p>ワークフロー自動化、システム連携</p>
        </div>
        <div class="skill-item">
          <h3><img src="/images/icons/github.png" class="tech-icon" alt="GitHub">Git/GitHub</h3>
          <p>バージョン管理、チーム開発、OSS貢献</p>
        </div>
        <div class="skill-item">
          <h3><span class="tech-icon">📊</span>プロジェクト管理</h3>
          <p>アジャイル開発、スクラム、リーン手法</p>
        </div>
      </div>
    </section>

    <!-- LINE連絡セクション -->
    <section class="line-contact-footer">
      <div class="container">
        <h3>💬 お気軽にご相談ください</h3>
        <p>技術的なお悩みや業務効率化について、LINEでお気軽にご相談ください</p>
        <a href="https://lin.ee/8ymv2Nw" target="_blank" rel="noopener noreferrer" class="line-button-footer">
          LINEで相談する
        </a>
      </div>
    </section>
  </div>
</div>
