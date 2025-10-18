# infoHiroki Website SvelteKit移植プロジェクト - Claude Code設定

## 📋 プロジェクト概要

### システム名
infoHiroki Website SvelteKit版（Go版からの完全移植）

### 目的
既存のinfoHirokiウェブサイト（Go + Gin + blackfriday v2）をSvelteKit + TypeScriptで完全移植し、無料ホスティング（Cloudflare Pages）に移行

### コア機能
- **ピクセルパーフェクト移植**: 既存デザインの完全再現
- **Markdownブログ**: 102記事のフロントマター付きMarkdown記事
- **静的サイト生成**: サーバーレス・無料ホスティング対応
- **SEO完全対応**: メタタグ、OGP、サイトマップ対応

## 🏗️ 技術アーキテクチャ

### 基本構成
```
SvelteKit + TypeScript + Static Adapter（静的サイト生成）
```

### 技術スタック
| 層 | 技術 | バージョン | 理由 |
|---|------|-----------|------|
| **Frontend Framework** | SvelteKit | 2.x | 最もHTMLライクな構文・学習曲線が緩やか |
| **言語** | TypeScript | 5.x | 型安全性・キャリア開発（Web開発フリーランス志向） |
| **Static Adapter** | @sveltejs/adapter-static | 3.x | 静的サイト生成・無料ホスティング対応 |
| **Markdown処理** | marked | 12.x | 高速・GitHub互換 |
| **Frontmatter解析** | gray-matter | 4.x | YAML frontmatter標準ライブラリ |
| **ビルドツール** | Vite | 5.x | 高速ビルド・HMR対応 |
| **CSS** | 既存CSS移植 | - | 1,958行の完全デザインシステムを維持 |

### 移植元（Go版）との比較
| 項目 | Go版 | SvelteKit版 |
|------|------|-------------|
| **サーバー** | Railway（$5-10/月） | Cloudflare Pages（無料） |
| **データ管理** | ファイルベース（メモリキャッシュ） | 静的ビルド時に全記事処理 |
| **メタデータ** | main.go内のswitch文 | 各Markdownファイルのfrontmatter |
| **レンダリング** | サーバーサイド（Gin） | ビルド時静的生成 |
| **テンプレート** | Go標準template | Svelte（コンポーネント） |
| **記事数** | 95記事 → **102記事**（追加7記事） |

## 📁 プロジェクト構造

```
infohiroki-svelte/
├── CLAUDE.md                   # このファイル
├── README.md                   # プロジェクト説明
├── DESIGN.md                   # 設計書・実装チェックリスト
├── package.json                # npm依存関係
├── svelte.config.js            # SvelteKit設定（static adapter）
├── vite.config.ts              # Viteビルド設定
├── tsconfig.json               # TypeScript設定
├── .gitignore                  # Git除外設定
│
├── src/
│   ├── lib/
│   │   ├── types/
│   │   │   └── blog.ts         # BlogPost型定義
│   │   ├── utils/
│   │   │   └── posts.ts        # 記事取得ユーティリティ
│   │   └── content/
│   │       └── blog/           # 102個のMarkdownファイル
│   │           ├── 2024-03-27-notion-save-to-notion-extension.md
│   │           ├── 2024-03-29-chatgpt-reskilling-guide.md
│   │           ├── 2025-09-20-go-complete-history.md
│   │           └── ... (102ファイル)
│   │
│   └── routes/
│       ├── blog/
│       │   ├── +page.ts        # ブログ一覧データ取得
│       │   ├── +page.svelte    # ブログ一覧ページ
│       │   └── [slug]/
│       │       ├── +page.ts    # 記事詳細データ取得
│       │       └── +page.svelte # 記事詳細ページ
│       └── (その他のページ - 未実装)
│
├── static/                     # 静的ファイル（完全移植済み）
│   ├── css/
│   │   └── style.css           # 1,958行CSS（Go版から完全コピー）
│   ├── js/
│   │   └── main.js             # JavaScript機能移植
│   └── images/                 # 49個の画像ファイル
│       ├── logo.svg
│       ├── hero.svg
│       ├── icons/              # 20個のブランドアイコン
│       │   ├── claude.svg
│       │   ├── notion.png
│       │   └── ...
│       └── note/               # ブログ画像
│
└── scripts/
    └── add-frontmatter.ts      # Frontmatter自動変換スクリプト
```

## 🎯 開発原則

### 設計思想
- **Pixel Perfect**: 既存デザインの完全再現
- **KISS (Keep It Simple, Stupid)**:
  - 複雑なデータベース不要、ビルド時静的生成
  - 必要最小限の機能のみ実装
  - 理解しやすく保守しやすいコード
- **YAGNI (You Aren't Gonna Need It)**:
  - 将来的に必要になるかもしれない機能は実装しない
  - 現在必要な機能のみに集中
- **DRY (Don't Repeat Yourself)**:
  - コンポーネントの再利用
  - 共通処理の関数化

### コーディング規約
- **TypeScript**: 厳格な型チェック有効（strict mode）
- **命名**: camelCase（変数・関数）、PascalCase（型・コンポーネント）
- **Svelte**: 単一ファイルコンポーネント（.svelte）
- **Gitコミット**: 絵文字 + 日本語（アトミックコミット原則）

### 移植品質基準
- **ピクセル完全一致**: CSS 1,958行を100%維持
- **機能完全移植**: JavaScript機能すべて再現
- **SEO完全対応**: メタタグ、構造化データ維持
- **パフォーマンス向上**: 静的サイト生成で超高速化

## 🔧 環境・設定

### 開発環境セットアップ
```bash
# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:5173）
npm run dev

# 本番ビルド
npm run build

# ビルド結果プレビュー
npm run preview
```

### 主要依存関係（package.json）
```json
{
  "dependencies": {
    "@sveltejs/adapter-static": "^3.0.0",
    "@sveltejs/kit": "^2.0.0",
    "gray-matter": "^4.0.3",
    "marked": "^12.0.0",
    "svelte": "^4.0.0"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

### SvelteKit設定（svelte.config.js）
```javascript
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',      // 出力先ディレクトリ
      assets: 'build',     // アセット出力先
      fallback: undefined, // SPAフォールバック無効
      precompress: false,  // 事前圧縮無効
      strict: true         // 厳格モード
    })
  }
};

export default config;
```

### TypeScript設定（tsconfig.json）
```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "strict": true,              // 厳格な型チェック
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## 📝 ブログシステム実装

### データモデル（src/lib/types/blog.ts）
```typescript
export interface BlogPost {
  slug: string;           // ファイル名（拡張子なし）
  title: string;          // 記事タイトル
  description: string;    // 記事説明文（SEO用）
  icon: string;           // アイコン絵文字（🤖📝🐹等）
  tags: string[];         // タグ配列
  date: string;           // 公開日（YYYY-MM-DD）
  content: string;        // レンダリング済みHTML
}
```

### Frontmatter形式
各Markdownファイル（102記事）は以下の形式でメタデータを保持：

```markdown
---
slug: "2024-03-29-chatgpt-reskilling-guide"
title: "ChatGPTリスキリングガイド"
description: "ChatGPTを活用したリスキリングの完全ガイド..."
icon: "🤖"
tags: ["ChatGPT", "AI", "リスキリング"]
date: "2024-03-29"
---

# ChatGPTリスキリングガイド

記事本文...
```

## 🚀 デプロイ環境

### Cloudflare Pages構成（予定）

#### 全体構成
```
Internet → Cloudflare Pages（無料・CDN・SSL）
              ↓
          静的HTML/CSS/JS/画像ファイル
```

#### Cloudflare Pages設定（予定）
```
ビルドコマンド: npm run build
出力ディレクトリ: build
Node.jsバージョン: 20
環境変数: なし（静的サイトのため不要）
```

#### カスタムドメイン設定（予定）
1. Cloudflare Pagesでプロジェクト作成
2. GitHubリポジトリ連携（自動デプロイ）
3. カスタムドメイン追加: `infohiroki.com`
4. DNSレコード設定（CNAME）
5. SSL自動設定（Let's Encrypt）

## 📊 プロジェクト現状

### ✅ 完了済み項目（約60%）
- [x] **プロジェクト初期化**: SvelteKit + TypeScript環境構築
- [x] **静的ファイル移植**: CSS 1,958行、JavaScript、画像49個すべてコピー
- [x] **型定義**: BlogPost インターフェース作成
- [x] **記事移植**: 102記事Markdown化 + frontmatter付与
- [x] **Frontmatter変換スクリプト**: Go版ロジックをTypeScript移植
- [x] **ユーティリティ実装**: getAllPosts(), getPostBySlug() 関数
- [x] **ブログ一覧ページ**: /blog 完全実装
- [x] **ブログ詳細ページ**: /blog/[slug] 完全実装
- [x] **開発サーバー確認**: localhost:5173で正常動作確認
- [x] **Git初期化**: アトミックコミット7件（絵文字 + 日本語）

### 🚧 未完了項目（約40%）
- [ ] **Header/Footerコンポーネント**: 再利用可能なレイアウトパーツ
- [ ] **グローバルレイアウト**: src/routes/+layout.svelte 実装
- [ ] **ホームページ**: index.html 移植
- [ ] **その他固定ページ**: services, products, results, about, faq, contact
- [ ] **404ページ**: エラーハンドリング
- [ ] **SEO対応**: sitemap.xml、OGP画像、構造化データ
- [ ] **本番ビルド**: npm run build テスト
- [ ] **Cloudflare Pagesデプロイ**: 本番公開
- [ ] **Railway解約**: コスト削減完了

## 📝 運用・保守

### Gitコミットルール
**絵文字 + 日本語 + アトミック原則**

```bash
# 例: 新機能追加
git commit -m "✨ スキルスタックページ実装"

# 例: バグ修正
git commit -m "🐛 記事日付ソートバグ修正"

# 例: リファクタリング
git commit -m "♻️ Headerコンポーネント抽出"

# 例: ドキュメント更新
git commit -m "📝 CLAUDE.md更新"
```

**絵文字一覧:**
- ✨ 新機能追加
- 🐛 バグ修正
- ♻️ リファクタリング
- 📝 ドキュメント更新
- 🎨 デザイン調整
- 🚀 パフォーマンス改善
- 🔧 設定変更
- 📰 コンテンツ追加
- 🎉 初期化
- 📄 ファイル追加

## 🎯 次のステップ

### 優先度高（必須）
1. **Header/Footerコンポーネント作成**
2. **グローバルレイアウト実装**
3. **ホームページ移植**
4. **本番ビルドテスト**

### 優先度中（推奨）
5. **その他固定ページ実装**
6. **SEO対応（sitemap.xml等）**
7. **Cloudflare Pagesデプロイ**

### 優先度低（オプション）
8. **検索機能実装**
9. **ダークモード対応**
10. **アクセス解析（Google Analytics等）**

## 📖 参考資料

### 公式ドキュメント
- **SvelteKit**: https://kit.svelte.dev/
- **Svelte**: https://svelte.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Cloudflare Pages**: https://pages.cloudflare.com/

### 技術判断の背景
- **なぜSvelteKit？**: 最もHTMLライクで学習曲線が緩やか、フルスタック対応
- **なぜTypeScript？**: Web開発フリーランスのキャリア戦略、型安全性
- **なぜ静的サイト？**: 無料ホスティング、超高速、保守性

## 🤝 開発者向けメモ

### このプロジェクトの特徴
- **元サイト**: Go + Ginのサーバーサイドレンダリング
- **新サイト**: SvelteKit静的サイト生成
- **メタデータ方式**: Go版のswitch文 → frontmatter形式
- **コスト削減**: Railway $5-10/月 → Cloudflare Pages $0
- **記事数**: 95記事 → 102記事（移植中に7記事追加）

### 重要な設計判断
1. **データベース不使用**: ファイルベース、ビルド時処理で十分
2. **フロントマター採用**: 記事ごとに自己完結、保守性向上
3. **TypeScript厳格モード**: バグ防止、長期保守性
4. **アトミックコミット**: 変更履歴の透明性、ロールバック容易性
