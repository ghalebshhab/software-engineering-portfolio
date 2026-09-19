import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#050810' : '#f5f7fc');
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* Theme remains usable when storage is unavailable. */
    }
  }, [theme]);
  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
