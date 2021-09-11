import React, { useEffect } from 'react';
import { getTheme, switchTheme, toggleTheme } from '../../utils/toggleTheme';

import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');

  useEffect(() => {
    const storedTheme = getTheme();
    setTheme(storedTheme);
  }, []);

  const toggleThemeHandler = () => {
    switchTheme(theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.themeSwitchWrapper}>
      <button
        className={`${styles.themeSwitch} ${styles.toggle}`}
        onClick={toggleThemeHandler}
        aria-label="Toggle theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={32}
          width={32}
          viewBox="0 0 24 24"
        >
          {theme === 'dark' ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              fill="#CBD5E0"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              fill="#374151"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

export default ThemeSwitcher;
