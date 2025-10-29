# infoHiroki Website - SvelteKit版

**🎉 Go版からTypeScript/SvelteKitへの完全移行プロジェクト完了！**

Go + Gin + blackfriday v2 で構築されていた infoHiroki ウェブサイトを、SvelteKit + TypeScript で完全移植し、無料ホスティング（Cloudflare Pages）に移行したポートフォリオサイトです。

## 🚀 本番環境

- **URL**: https://infohiroki.com/
- **ホスティング**: Cloudflare Pages（無料・CDN・SSL自動）
- **デプロイ**: Git push → 自動ビルド・デプロイ
- **Analytics**: Google Analytics (G-6C7H2DHNGQ)
- **SEO**: sitemap.xml生成（110ページ）

## 技術スタック

- **フレームワーク**: SvelteKit 2.x
- **言語**: TypeScript 5.x (strict mode)
- **Static Adapter**: @sveltejs/adapter-static 3.x
- **Markdown処理**: marked 12.x + gray-matter 4.x
- **ビルドツール**: Vite 5.x
- **CSS**: 既存CSS完全移植（1,958行）
- **ホスティング**: Cloudflare Pages（無料）

## プロジェクト構成

- **記事数**: 102記事（Markdown + Frontmatter）
- **固定ページ**: 8ページ（Home, Blog, Services, Products, Results, About, FAQ, Contact）
- **エラーページ**: 404対応
- **総ページ数**: 110ページ（sitemap.xml に含まれる）
- **静的サイト生成**: 完全SSG（サーバーレス）

## 移行の成果

### コスト削減
- **Railway（Go版）**: 月額 $5-10 → **Cloudflare Pages**: $0
- **年間削減額**: **約 $60-120**

### パフォーマンス向上
- 静的サイト生成による超高速表示
- CDN配信（Cloudflare）による世界中で高速アクセス
- ビルド時に全記事処理（サーバー負荷ゼロ）

### 保守性向上
- TypeScript厳格モードによる型安全性
- コンポーネント化による再利用性
- アトミックコミット原則によるGit管理

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

### コア機能
- ✅ レスポンシブデザイン（モバイル/タブレット/デスクトップ対応）
- ✅ ブログ記事一覧（3カラムグリッド）
- ✅ Markdownベースのブログシステム（102記事）
- ✅ Frontmatterメタデータ管理
- ✅ 404エラーページ

### SEO・Analytics
- ✅ 全ページOGP対応（Open Graph Protocol）
- ✅ Twitterカード対応
- ✅ Canonical URL設定
- ✅ sitemap.xml自動生成（110ページ）
- ✅ Google Analytics統合（G-6C7H2DHNGQ）

### デプロイ・運用
- ✅ Cloudflare Pages自動デプロイ
- ✅ カスタムドメイン設定（infohiroki.com）
- ✅ SSL/TLS自動有効化
- ✅ Git push → 自動ビルド・デプロイ

## プロジェクト履歴

### 2025-10-29: 完全移行完了（100%）
- ✅ Google Analytics実装（G-6C7H2DHNGQ）
- ✅ sitemap.xml生成機能実装（110ページ）
- ✅ カスタムドメイン移行完了（infohiroki.com）
- ✅ Railway解約完了（コスト削減：月額$5-10 → $0）
- ✅ プロジェクト完了宣言

### 2025-10-19: デプロイ準備完了（90%）
- ✅ プリレンダー設定追加（日本語IDリンク警告抑制）
- ✅ 初心者向けHTMLガイド・移行ストーリー・システム説明ドキュメント追加
- ✅ ブログカードグリッドレイアウト修正（均等幅、オーバーフロー対応）
- ✅ 全ページ移行完了（Go版からSvelteKitへ）

### 2025-10-18: プロジェクト開始
- ✅ SvelteKit + TypeScript環境構築
- ✅ 静的ファイル移植（CSS 1,958行、JavaScript、画像100+個）

## プロジェクト完了

**🎉 プロジェクト進捗: 100%完了**

すべてのタスクが完了し、本番環境で正常稼働中です。

✅ 完了項目:
- 全110ページ実装・デプロイ完了
- 102記事のMarkdownブログシステム完全移行
- Google Analytics統合
- sitemap.xml生成
- カスタムドメイン移行（infohiroki.com）
- Railway解約によるコスト削減完了

## 関連ドキュメント

- [CLAUDE.md](./CLAUDE.md) - プロジェクト詳細設計・開発原則
- [DESIGN.md](./DESIGN.md) - 設計書・実装チェックリスト
- [docs/beginner-guide.html](./docs/beginner-guide.html) - 初心者向けSvelteKitガイド
- [docs/migration-story.html](./docs/migration-story.html) - Go→SvelteKit移行ストーリー
- [docs/system-explanation.html](./docs/system-explanation.html) - システム詳細説明

## 移行元

- [infohiroki-go](../infohiroki-go) - Go + Gin版（アーカイブ・Railway解約済み）

---

**Last Updated: 2025-10-29**
**Status: 本番稼働中（https://infohiroki.com/）**
**Cost: $0/月（Cloudflare Pages無料プラン）**
