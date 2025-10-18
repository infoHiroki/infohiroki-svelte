# infoHiroki Website - SvelteKit版

Go版からTypeScript/SvelteKitに完全移行したポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: SvelteKit
- **言語**: TypeScript
- **Markdown処理**: marked + gray-matter
- **ホスティング**: Cloudflare Pages（無料）
- **デプロイ**: Git push → 自動ビルド

## プロジェクト構成

- 記事数: 102記事（Markdown）
- ページ数: 10ページ（Home, Blog, Services, Products, Results, About, FAQ, Contact, Error, 個別記事）
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

## 主な機能

- レスポンシブデザイン（モバイル/タブレット/デスクトップ対応）
- ブログ記事一覧（3カラムグリッド）
- Markdownベースのブログシステム
- SEO対応（OGP、Twitterカード）
- 404エラーページ

## 最近の更新

- 2025-10-19: ブログカードグリッドレイアウト修正（均等幅、オーバーフロー対応）
- 2025-10-19: 全ページ移行完了（Go版からSvelteKitへ）
- 2025-10-18: プロジェクト初期セットアップ

---

Last Updated: 2025-10-19
