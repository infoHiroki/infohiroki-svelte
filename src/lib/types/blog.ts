export interface BlogPost {
  slug: string;           // ファイル名（拡張子なし）例: "2024-03-29-chatgpt-reskilling-guide"
  title: string;          // 記事タイトル
  description: string;    // 記事説明文（SEO用）
  icon: string;           // アイコン画像パス 例: "/images/ChatGPT icon.webp"
  tags: string[];         // タグ配列 例: ["ChatGPT", "AI", "リスキリング"]
  date: string;           // 公開日 YYYY-MM-DD形式
  content: string;        // Markdownから変換されたHTML
}
