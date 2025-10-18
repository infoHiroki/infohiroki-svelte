import * as fs from 'fs';
import * as path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src/lib/content/blog');

// タイトルからアイコンを抽出（Go版のロジックを移植）
function extractIconFromTitle(title: string): string {
  if (!title) return '📝';
  
  const titleLower = title.toLowerCase();
  
  // 特定のキーワードベースでアイコンを決定
  if (titleLower.includes('chatgpt') || titleLower.includes('ai') || 
      titleLower.includes('リスキリング') || titleLower.includes('llmo')) {
    return '🤖';
  }
  if (titleLower.includes('notion')) {
    return '📝';
  }
  if (titleLower.includes('go') || titleLower.includes('golang')) {
    return '🐹';
  }
  
  // タイトルの最初の文字が絵文字の場合はそれを使用
  const firstChar = title.charAt(0);
  const emojiList = ['🐹', '📖', '🔖', '📝', '🚀', '💡', '🎯', '⚡', '🌟', '🤖'];
  if (emojiList.includes(firstChar)) {
    return firstChar;
  }
  
  return '📝'; // デフォルト
}

// Markdownファイルからタイトルを抽出
function extractTitleFromMarkdown(content: string): string {
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ')) {
      const title = trimmed.substring(2).trim();
      if (title) return title;
    }
  }
  return 'タイトル未設定';
}

// Markdownファイルから説明文を抽出
function extractDescriptionFromMarkdown(content: string): string {
  const lines = content.split('\n');
  
  // 🎯 中心的な主張セクションを探す
  let inCentralClaim = false;
  for (const line of lines) {
    const trimmed = line.trim();
    
    // 中心的な主張セクションの開始
    if (trimmed.includes('🎯 中心的な主張')) {
      inCentralClaim = true;
      continue;
    }
    
    // 次のセクションに到達したら終了
    if (inCentralClaim && trimmed.startsWith('##')) {
      break;
    }
    
    // 中心的な主張セクション内の最初の段落を使用
    if (inCentralClaim && trimmed && !trimmed.startsWith('#')) {
      // Markdownの強調記号を削除してプレーンテキストに
      let cleanText = trimmed.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '');
      
      // 最初の文章のみを取得（。で区切る）
      const sentences = cleanText.split('。');
      if (sentences.length > 0 && sentences[0]) {
        const firstSentence = sentences[0];
        if (firstSentence.length > 150) {
          return firstSentence.substring(0, 150) + '...';
        }
        return firstSentence + '。';
      }
      
      // 句点がない場合は最初の150文字
      if (cleanText.length > 150) {
        return cleanText.substring(0, 150) + '...';
      }
      return cleanText;
    }
  }
  
  // 中心的な主張が見つからない場合は従来の方法
  for (const line of lines) {
    const trimmed = line.trim();
    
    // 空行や見出し、画像、テーブル記号はスキップ
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('![') ||
        trimmed.startsWith('---') || trimmed.startsWith('|') ||
        trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      continue;
    }
    
    // 最初の有効な段落を説明文として使用
    if (trimmed.length > 20) {
      let cleanText = trimmed.replace(/\*\*/g, '');
      if (cleanText.length > 150) {
        return cleanText.substring(0, 150) + '...';
      }
      return cleanText;
    }
  }
  
  return 'Markdownで作成された記事';
}

// ファイル名から日付を抽出
function extractDateFromSlug(slug: string): string {
  // YYYY-MM-DD形式を期待
  if (slug.length >= 10 && slug[4] === '-' && slug[7] === '-') {
    return slug.substring(0, 10);
  }
  return new Date().toISOString().split('T')[0];
}

// タグを生成（タイトルと説明文から）
function generateTags(title: string, description: string): string[] {
  const tags: string[] = [];
  const text = (title + ' ' + description).toLowerCase();
  
  // キーワードマッピング
  const keywords = {
    'ChatGPT': ['chatgpt', 'chat gpt'],
    'AI': ['ai', '人工知能', 'llm', 'llmo'],
    'Notion': ['notion'],
    'Go': ['go', 'golang'],
    'リスキリング': ['リスキリング', 'reskilling'],
    'プログラミング': ['プログラミング', 'programming', 'コーディング'],
    '生成AI': ['生成ai', '生成'],
  };
  
  for (const [tag, patterns] of Object.entries(keywords)) {
    if (patterns.some(pattern => text.includes(pattern))) {
      tags.push(tag);
    }
  }
  
  return tags.length > 0 ? tags : ['ブログ'];
}

// フロントマターを追加
function addFrontmatter(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 既にフロントマターがある場合はスキップ
  if (content.startsWith('---')) {
    console.log(`⏭️  スキップ: ${path.basename(filePath)} (既にフロントマターあり)`);
    return;
  }
  
  const fileName = path.basename(filePath, '.md');
  const title = extractTitleFromMarkdown(content);
  const description = extractDescriptionFromMarkdown(content);
  const icon = extractIconFromTitle(title);
  const date = extractDateFromSlug(fileName);
  const tags = generateTags(title, description);
  
  const frontmatter = `---
title: "${title}"
description: "${description}"
icon: "${icon}"
tags: ${JSON.stringify(tags)}
date: "${date}"
slug: "${fileName}"
---

${content}`;
  
  fs.writeFileSync(filePath, frontmatter, 'utf-8');
  console.log(`✅ 追加: ${fileName}`);
  console.log(`   タイトル: ${title}`);
  console.log(`   アイコン: ${icon}`);
  console.log(`   タグ: ${tags.join(', ')}`);
}

// メイン処理
function main() {
  console.log('📝 フロントマター変換スクリプト開始...\n');
  
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  
  console.log(`対象ファイル数: ${files.length}件\n`);
  
  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    try {
      addFrontmatter(filePath);
    } catch (error) {
      console.error(`❌ エラー: ${file}`, error);
    }
  }
  
  console.log(`\n✅ 完了: ${files.length}件の記事を処理しました`);
}

main();
