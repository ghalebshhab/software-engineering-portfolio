import { FaMoon, FaSun } from 'react-icons/fa6';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? (
        <FaSun aria-hidden="true" />
      ) : (
        <FaMoon aria-hidden="true" />
      )}
    </button>
  );
}
