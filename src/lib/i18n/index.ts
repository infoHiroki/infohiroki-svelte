// 翻訳ヘルパー関数 - シンプルで明示的な実装

import { translations, type Lang, type Translations } from './translations';

/**
 * 翻訳を取得する関数
 * @param lang - 言語（'ja' | 'en'）
 * @returns 翻訳オブジェクト
 */
export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

/**
 * URLパスから言語を取得する関数
 * @param pathname - URLパス（例: '/en/about', '/ja/services'）
 * @returns 言語（'ja' | 'en'）、デフォルトは'ja'
 */
export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ja')) return 'ja';
  return 'ja'; // デフォルトは日本語
}

/**
 * 言語付きパスを生成する関数
 * @param path - パス（例: '/about', '/services'）
 * @param lang - 言語
 * @returns 言語付きパス（例: '/en/about', '/ja/services'）
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  // パスの先頭が / で始まっていない場合は追加
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`;
}

/**
 * 他の言語のパスを取得する関数
 * @param currentPath - 現在のパス（例: '/ja/about'）
 * @param targetLang - 切り替え先の言語
 * @returns 切り替え先のパス（例: '/en/about'）
 */
export function switchLang(currentPath: string, targetLang: Lang): string {
  // 現在の言語プレフィックスを削除
  const pathWithoutLang = currentPath.replace(/^\/(ja|en)/, '') || '/';
  return getLocalizedPath(pathWithoutLang, targetLang);
}

// 型をエクスポート
export type { Lang, Translations };
export { translations };
