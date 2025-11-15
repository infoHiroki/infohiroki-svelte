/**
 * テーマ切り替えユーティリティ
 * ダークモード/ライトモードの切り替えとlocalStorageへの永続化
 */

export type Theme = 'light' | 'dark';

/**
 * 現在のテーマを取得
 */
export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = localStorage.getItem('theme') as Theme | null;
  if (storedTheme) return storedTheme;

  // システム設定を確認（prefers-color-scheme）
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

/**
 * テーマを設定
 */
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

/**
 * テーマを切り替え
 */
export function toggleTheme(): Theme {
  const currentTheme = getCurrentTheme();
  const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
}

/**
 * システム設定変更を監視
 */
export function watchSystemTheme(callback: (theme: Theme) => void): void {
  if (typeof window === 'undefined') return;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handler = (e: MediaQueryListEvent) => {
    const theme: Theme = e.matches ? 'dark' : 'light';
    callback(theme);
  };

  mediaQuery.addEventListener('change', handler);
}
