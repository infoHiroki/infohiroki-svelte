# infoHiroki Website SvelteKit移行プロジェクト - 設計書

## プロジェクト概要

### プロジェクト名
infoHiroki Website SvelteKit版

### 目的
- 既存Go版ポートフォリオサイトをSvelteKit（TypeScript）に完全移行
- サーバー代を無料化（Railway $5-10/月 → Cloudflare Pages $0/月）
- TypeScript/SvelteKit習得によるフリーランス案件対応力向上

### 技術スタック
- フレームワーク: SvelteKit
- 言語: TypeScript
- Markdown処理: marked + gray-matter
- ホスティング: Cloudflare Pages（完全無料）
- デプロイ: Git push → 自動ビルド

### 移行元サイト
- 現在: Go + Gin + blackfriday v2 @ Railway
- 記事数: 95記事（Markdown）
- ページ数: 9ページ
- CSS: 1,958行
- 画像: 49個

## 設計原則

### KISS (Keep It Simple, Stupid)
- 複雑な状態管理ライブラリ不使用
- シンプルなファイルベース構成
- 必要最小限の依存関係

### YAGNI (You Aren't Gonna Need It)
- 将来的な機能は実装しない
- 現在必要な静的サイト生成に集中

### DRY (Don't Repeat Yourself)
- コンポーネントの再利用
- ユーティリティ関数の共通化

### ピクセルパーフェクト
- 既存デザインを100%再現
- CSS/JS/画像をそのまま移植

## ディレクトリ構造

```
infohiroki-svelte/
├── src/
│   ├── routes/
│   │   ├── +page.svelte              # ホーム
│   │   ├── +layout.svelte            # 全体レイアウト
│   │   ├── blog/
│   │   │   ├── +page.svelte         # ブログ一覧
│   │   │   └── [slug]/+page.svelte  # 記事詳細
│   │   ├── services/+page.svelte
│   │   ├── about/+page.svelte
│   │   └── contact/+page.svelte
│   ├── lib/
│   │   ├── components/              # 共通コンポーネント
│   │   ├── content/blog/            # 95記事
│   │   ├── utils/posts.ts           # 記事取得ロジック
│   │   └── types/blog.ts            # 型定義
│   └── app.html
├── static/
│   ├── css/style.css                # 既存CSS完全移植
│   ├── js/main.js                   # 既存JS完全移植
│   └── images/                      # 49個の画像
└── scripts/
    └── convert-frontmatter.ts       # フロントマター変換
```

## データモデル

### BlogPost型定義

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  date: string;
  content: string;
}
```

### Markdownフロントマター形式

```markdown
---
title: "記事タイトル"
description: "説明文"
icon: "/images/icon.webp"
tags: ["タグ1", "タグ2"]
date: "2024-03-29"
---

# 本文
```

## 実装チェックリスト

### Phase 1: プロジェクト初期化 ✅
- [x] SvelteKitプロジェクト作成
- [x] TypeScript設定
- [x] adapter-static インストール

### Phase 2: 静的ファイル移行
- [ ] CSS ファイルコピー
- [ ] JavaScript ファイルコピー
- [ ] 画像ファイルコピー

### Phase 3: Markdown記事準備
- [ ] 95記事ファイルコピー
- [ ] フロントマター変換スクリプト作成
- [ ] 全記事フロントマター変換実行

### Phase 4: コンポーネント実装
- [ ] Header.svelte
- [ ] Footer.svelte
- [ ] ArticleCard.svelte
- [ ] +layout.svelte

### Phase 5: ページ実装
- [ ] ホームページ（/）
- [ ] ブログ一覧（/blog）
- [ ] ブログ記事詳細（/blog/[slug]）
- [ ] その他固定ページ

### Phase 6: SEO設定
- [ ] メタタグ設定
- [ ] sitemap.xml生成

### Phase 7: テスト
- [ ] 全ページ表示確認
- [ ] ビルド成功確認

### Phase 8: デプロイ
- [ ] GitHub リポジトリ作成
- [ ] Cloudflare Pages 設定
- [ ] Railway 解約

## 成功基準

### 機能要件
- ✅ 全9ページが正常に表示
- ✅ 95記事すべてが正常に表示
- ✅ 既存デザインと100%一致

### 非機能要件
- ✅ Lighthouse Performance 95+
- ✅ サーバー代 $0/月

### 学習成果
- ✅ TypeScript/SvelteKit完全習得
- ✅ フリーランス案件対応力向上

## 想定スケジュール

合計: 4-5時間

## 今後の拡張予定（YAGNI原則により今は実装しない）

- タグフィルタリング機能
- 全文検索機能
- ダークモード
- コメント機能

---

Last Updated: 2025-10-18
