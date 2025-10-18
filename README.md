# infoHiroki Website - SvelteKit版

Go版からTypeScript/SvelteKitに完全移行したポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: SvelteKit
- **言語**: TypeScript
- **Markdown処理**: marked + gray-matter
- **ホスティング**: Cloudflare Pages（無料）
- **デプロイ**: Git push → 自動ビルド

## プロジェクト構成

- 記事数: 95記事（Markdown）
- ページ数: 9ページ
- 完全静的サイト生成（SSG）

## ローカル開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## デプロイ

```bash
git push origin main
```

Cloudflare Pagesが自動的にビルド・デプロイします。

## 詳細

詳しい設計情報は [DESIGN.md](./DESIGN.md) を参照してください。

## 移行元

- [infohiroki-go](../infohiroki-go) - Go + Gin版（アーカイブ）

---

Last Updated: 2025-10-18
