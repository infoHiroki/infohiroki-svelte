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

- 2025-10-19: プロジェクト進捗90%完了（デプロイ待ち）
- 2025-10-19: プリレンダー設定追加（日本語IDリンク警告抑制）
- 2025-10-19: 初心者向けHTMLガイド・移行ストーリー・システム説明ドキュメント追加
- 2025-10-19: ブログカードグリッドレイアウト修正（均等幅、オーバーフロー対応）
- 2025-10-19: 全ページ移行完了（Go版からSvelteKitへ）
- 2025-10-18: プロジェクト初期セットアップ

## プロジェクト進捗

**現在の進捗: 約90%完了**

✅ 完了済み:
- 全10ページ実装完了（Home, Blog, Services, Products, Results, About, FAQ, Contact, Error, 記事詳細）
- 102記事のMarkdownブログシステム
- レスポンシブデザイン（モバイル/タブレット/デスクトップ）
- SEO対応（OGP、Twitterカード）
- 本番ビルド成功

🚧 残りタスク:
- Cloudflare Pagesデプロイ（本番公開）
- Railway解約（コスト削減完了）

---

Last Updated: 2025-10-19
