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
│   │   ├── components/
│   │   │   ├── Header.svelte   # モバイル/デスクトップ対応ヘッダー
│   │   │   └── Footer.svelte   # フッターコンポーネント
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
│       ├── +layout.svelte      # グローバルレイアウト
│       ├── +layout.ts          # プリレンダー設定
│       ├── +page.svelte        # ホームページ
│       ├── +error.svelte       # 404エラーページ
│       ├── blog/
│       │   ├── +page.ts        # ブログ一覧データ取得
│       │   ├── +page.svelte    # ブログ一覧ページ
│       │   └── [slug]/
│       │       ├── +page.ts    # 記事詳細データ取得
│       │       └── +page.svelte # 記事詳細ページ
│       ├── services/+page.svelte    # サービスページ
│       ├── products/+page.svelte    # 開発製品ページ
│       ├── results/+page.svelte     # 実績ページ
│       ├── about/+page.svelte       # スキルスタックページ
│       ├── faq/+page.svelte         # FAQページ
│       └── contact/+page.svelte     # お問い合わせページ
│
├── static/                     # 静的ファイル（完全移植済み）
│   ├── css/
│   │   └── style.css           # 1,958行CSS（Go版から完全コピー）
│   ├── js/
│   │   └── main.js             # JavaScript機能移植
│   └── images/                 # 100+個の画像ファイル
│       ├── logo.svg
│       ├── hero.svg
│       ├── icons/              # 20個のブランドアイコン
│       │   ├── claude.svg
│       │   ├── notion.png
│       │   └── ...
│       └── note/               # ブログ画像（100+枚）
│
├── docs/                       # プロジェクトドキュメント
│   ├── beginner-guide.html     # 初心者向けSvelteKitガイド
│   ├── migration-story.html    # Go→SvelteKit移行ストーリー
│   └── system-explanation.html # システム詳細説明
│
├── build/                      # 本番ビルド出力（静的サイト）
│
└── scripts/
    └── add-frontmatter.ts      # Frontmatter自動変換スクリプト
```

## 🎯 開発原則

### 設計思想（KISS・YAGNI・DRY・Golangの哲学を踏襲）

#### 1. KISS (Keep It Simple, Stupid)
**シンプルさを最優先する設計**

- ✅ **複雑なデータベース不要**: ファイルベース、ビルド時静的生成で十分
- ✅ **必要最小限の機能**: 現在必要な機能のみを実装
- ✅ **理解しやすいコード**: 誰が読んでも分かるコード、コメント不要なほど明確
- ✅ **直感的な構造**: ディレクトリ構造、命名規則がプロジェクトの意図を反映
- ❌ **過度な抽象化禁止**: 将来の拡張性のための過度な抽象化は避ける
- ❌ **魔法の回避**: マクロ、メタプログラミング等の「魔法」を使わない

**実践例:**
```typescript
// ✅ Good: シンプルで明確
export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(parseMarkdownFile)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

// ❌ Bad: 過度な抽象化
class PostRepository implements IRepository<BlogPost> {
  constructor(private strategy: ILoadStrategy) {}
  // 不要な複雑性...
}
```

#### 2. YAGNI (You Aren't Gonna Need It)
**今必要でない機能は実装しない**

- ✅ **現在の要件のみ実装**: 将来使うかもしれない機能は実装しない
- ✅ **機能追加は後から**: 必要になってから実装する（リファクタリング前提）
- ✅ **仕様のオーバーエンジニアリング回避**: 現状の102記事で十分なら拡張不要
- ❌ **"将来のため"禁止**: 検索機能、タグフィルタリング等は必要になってから
- ❌ **汎用化の罠**: 「いつか使う」ための汎用関数は作らない

**実践例:**
```typescript
// ✅ Good: 今必要な機能のみ
export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  // シンプルに1記事取得
}

// ❌ Bad: 不要な汎用化
export function getPostsByQuery(query: QueryBuilder): BlogPost[] {
  // 今は使わない複雑な検索機能...
}
```

#### 3. DRY (Don't Repeat Yourself)
**重複を避け、再利用可能にする**

- ✅ **コンポーネントの再利用**: Header/Footerなど共通UIパーツは1箇所で管理
- ✅ **共通処理の関数化**: Markdown解析、日付ソート等は関数化
- ✅ **型定義の一元管理**: `BlogPost`型を1箇所で定義、全体で再利用
- ✅ **CSSの再利用**: 既存の1,958行CSSをそのまま活用、重複スタイル削除
- ❌ **コピペ禁止**: 同じコードを2箇所に書かない
- ❌ **マジックナンバー禁止**: 定数は名前付きで定義

**実践例:**
```typescript
// ✅ Good: 共通処理を関数化
function parseMarkdownFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { /* BlogPost */ };
}

// ❌ Bad: 同じ処理を2箇所に書く
// getAllPosts() 内でMarkdown解析
// getPostBySlug() 内でも同じMarkdown解析
```

#### 4. Golang哲学の踏襲
**Go言語の設計思想をTypeScript/SvelteKitに適用**

##### 4.1. 明示的であること（Explicit over Implicit）
- ✅ **型は明示的**: `any`型禁止、すべて明示的に型定義
- ✅ **エラーハンドリング明示**: try-catchで明示的にエラー処理
- ✅ **null安全**: `| null`型で明示的にnull許容を表現
- ❌ **暗黙的型変換禁止**: TypeScript strict mode有効化

```typescript
// ✅ Good: 明示的な型とエラーハンドリング
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return parsePost(fileContents);
  } catch (error) {
    console.error(`記事が見つかりません: ${slug}`, error);
    return null; // 明示的にnullを返す
  }
}

// ❌ Bad: 暗黙的なエラー無視
export function getPostBySlug(slug: string): BlogPost {
  const file = fs.readFileSync(`${slug}.md`, 'utf8'); // エラー時の挙動不明
  return parsePost(file);
}
```

##### 4.2. 正統性（Orthogonality）
- ✅ **1つの責任**: 関数・コンポーネントは1つの責任のみ持つ
- ✅ **疎結合**: モジュール間の依存を最小化
- ✅ **高凝集**: 関連する機能は1箇所に集める

```typescript
// ✅ Good: 責任分離
// posts.ts: データ取得のみ
// +page.server.ts: ルーティング・データ渡し
// +page.svelte: UI表示のみ

// ❌ Bad: 責任混在
// posts.ts内でUIロジックも含む
```

##### 4.3. 小さなインターフェース（Small Interfaces）
- ✅ **最小限のAPI**: 公開関数は必要最小限のみ
- ✅ **シンプルな型定義**: `BlogPost`型は7フィールドのみ
- ❌ **肥大化防止**: 不要なメソッド・プロパティを追加しない

```typescript
// ✅ Good: 必要最小限のAPI
export function getAllPosts(): BlogPost[] { /* */ }
export function getPostBySlug(slug: string): BlogPost | null { /* */ }
export function getPostCount(): number { /* */ }

// ❌ Bad: 不要なメソッド追加
export function getPostsByTag(tag: string): BlogPost[] { /* */ } // 今は不要
export function searchPosts(query: string): BlogPost[] { /* */ } // 今は不要
```

##### 4.4. 組み込みの優先（Use Built-in）
- ✅ **標準ライブラリ優先**: Node.js標準の`fs`、`path`を活用
- ✅ **軽量ライブラリ**: `marked`、`gray-matter`のみ、大規模FW不要
- ❌ **過度な依存禁止**: 不要なnpmパッケージは追加しない

##### 4.5. テスタビリティ（Design for Testing）
- ✅ **純粋関数**: 副作用のない関数を優先（テスト容易）
- ✅ **関数の分割**: 小さな関数に分割してユニットテスト可能に
- ✅ **型安全**: TypeScript strict modeでコンパイル時エラー検出

### コーディング規約

#### 命名規則
- **変数・関数**: `camelCase`（例: `getAllPosts`, `blogPost`）
- **型・インターフェース**: `PascalCase`（例: `BlogPost`, `PageServerLoad`）
- **コンポーネント**: `PascalCase`（例: `Header.svelte`, `BlogCard.svelte`）
- **ファイル名**: `kebab-case`（例: `blog-list.svelte`）またはSvelteKit規約（`+page.svelte`）
- **定数**: `UPPER_SNAKE_CASE`（例: `MAX_POSTS_PER_PAGE`）

#### TypeScript厳格ルール
- ✅ **strict mode有効**: `tsconfig.json`で`"strict": true`
- ❌ **`any`型禁止**: すべて明示的に型定義
- ❌ **`@ts-ignore`禁止**: 型エラーは修正する、無視しない
- ✅ **null安全**: `| null`で明示的にnull許容を表現

#### Svelteコンポーネントルール
- ✅ **単一ファイルコンポーネント**: `.svelte`ファイル1つで完結
- ✅ **Props型定義**: `export let data: PageData;`で型付け
- ✅ **スタイルスコープ**: `<style>`タグはコンポーネント内スコープ
- ✅ **ロジック分離**: 複雑なロジックは`src/lib/utils/`に分離

#### Gitコミットルール
- **フォーマット**: 絵文字 + 日本語 + アトミックコミット原則
- **粒度**: 1コミット = 1つの論理的変更
- **メッセージ**: 「何を」変更したかを明確に

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

### Cloudflare Pages構成（本番稼働中）

#### 全体構成
```
Internet → Cloudflare Pages（無料・CDN・SSL）
              ↓
          静的HTML/CSS/JS/画像ファイル
```

#### Cloudflare Pages設定（本番）
```
ビルドコマンド: npm run build
出力ディレクトリ: build
Node.jsバージョン: 20
環境変数: なし（静的サイトのため不要）
カスタムドメイン: infohiroki.com
Google Analytics: G-6C7H2DHNGQ
```

#### カスタムドメイン設定（完了）
1. ✅ Cloudflare Pagesでプロジェクト作成
2. ✅ GitHubリポジトリ連携（自動デプロイ）
3. ✅ カスタムドメイン追加: `infohiroki.com`
4. ✅ DNSレコード設定（CNAME）
5. ✅ SSL自動設定（Let's Encrypt）

## 📊 プロジェクト現状

### ✅ 完了済み項目（100%）

#### コア機能実装
- [x] **プロジェクト初期化**: SvelteKit + TypeScript環境構築
- [x] **静的ファイル移植**: CSS 1,958行、JavaScript、画像100+個すべてコピー
- [x] **型定義**: BlogPost インターフェース作成
- [x] **記事移植**: 102記事Markdown化 + frontmatter付与
- [x] **Frontmatter変換スクリプト**: Go版ロジックをTypeScript移植
- [x] **ユーティリティ実装**: getAllPosts(), getPostBySlug(), getPostCount() 関数

#### UI/UXコンポーネント
- [x] **Header/Footerコンポーネント**: モバイル/デスクトップ対応サイドバー実装
- [x] **グローバルレイアウト**: src/routes/+layout.svelte 実装完了
- [x] **ホームページ**: ヒーロー、サービス、実績、About、LINE連絡セクション実装
- [x] **ブログ一覧ページ**: /blog 3カラムグリッドレイアウト実装
- [x] **ブログ詳細ページ**: /blog/[slug] 完全実装
- [x] **その他固定ページ**: services, products, results, about, faq, contact すべて実装完了
- [x] **404ページ**: +error.svelte エラーハンドリング実装

#### SEO・Analytics・最適化
- [x] **SEO対応**: 全ページOGP、Twitterカード、Canonical URL設定完了
- [x] **sitemap.xml生成**: 110ページ（固定8 + ブログ102）を含むSEO最適化完了
- [x] **robots.txt実装**: 検索エンジンクロール最適化、sitemap.xml位置通知
- [x] **Google Analytics実装**: G-6C7H2DHNGQ 全ページトラッキング有効化
- [x] **プリレンダー設定**: 全ページ静的サイト生成設定、日本語ID警告抑制
- [x] **セキュリティヘッダー**: SecurityHeaders.com グレードA獲得
  - X-Frame-Options、X-Content-Type-Options、CSP、Permissions-Policy実装
  - Strict-Transport-Security（HSTS）有効化
- [x] **依存関係更新**: vite脆弱性修正、最新版パッケージ適用

#### デプロイ・本番運用
- [x] **本番ビルド**: npm run build テスト成功、build/ディレクトリ生成確認
- [x] **Cloudflare Pagesデプロイ**: 本番公開完了（https://infohiroki-svelte.pages.dev/）
- [x] **カスタムドメイン設定**: infohiroki.com 完全移行完了
- [x] **DNS設定**: Cloudflare Pages へ完全移行
- [x] **SSL/TLS有効化**: HTTPS完全対応
- [x] **Railway解約**: コスト削減完了（月額$5-10 → $0）

#### ドキュメント・管理
- [x] **HTMLガイド**: 初心者向けSvelteKitガイド、移行ストーリー、システム説明ドキュメント作成
- [x] **開発サーバー確認**: localhost:5173で正常動作確認
- [x] **Git管理**: アトミックコミット原則に従った15+件のコミット（絵文字 + 日本語）

### 🎉 プロジェクト完了
**Go版（Railway）からSvelteKit版（Cloudflare Pages）への完全移行が成功しました！**

#### 達成した成果
- **コスト削減**: 月額$5-10 → $0（年間$60-120の削減）
- **パフォーマンス向上**: 静的サイト生成による超高速化
- **保守性向上**: TypeScript厳格モード、コンポーネント化
- **SEO最適化**: sitemap.xml生成、robots.txt実装、OGP完全対応
- **セキュリティ強化**: SecurityHeaders.com グレードA獲得、HSTS有効化
- **完全移行**: 102記事 + 8固定ページすべて移行完了

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

## 🎯 将来の拡張オプション（YAGNI原則により現時点では実装見送り）

以下の機能は、現時点では必要性が低いため実装を見送っています。
将来、明確な需要が発生した時点で実装を検討します。

### オプション機能リスト
1. **検索機能実装**: 全文検索（記事数が増えた場合に検討）
2. **タグフィルタリング機能**: タグ別記事表示（ユーザーフィードバック次第）
3. **ダークモード対応**: テーマ切り替え（要望があれば実装）
4. **コメント機能**: Giscus等の統合（コミュニティ形成が必要な場合）
5. **RSS Feed生成**: ブログ購読機能（要望があれば実装）
6. **記事内検索**: Ctrl+F以上の機能が必要になった場合

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
