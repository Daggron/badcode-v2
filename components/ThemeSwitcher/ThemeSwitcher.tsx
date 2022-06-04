import React, { useEffect } from 'react';
import useSound from 'use-sound';
import { getTheme, switchTheme } from '../../utils/toggleTheme';

import styles from './ThemeSwitcher.module.css';

type Props = {
  /**
   * whether the sound is muted or not.
   */
  isMuted?: boolean;
};

function ThemeSwitcher(props: Props) {
  const [theme, setTheme] = React.useState('light');
  const [play] = useSound('/click.mp3', {
    volume: 0.25,
  });

  useEffect(() => {
    const storedTheme = getTheme();
    setTheme(storedTheme);
  }, []);

  const toggleThemeHandler = () => {
    if (!props.isMuted) {
      play();
    }
    switchTheme(theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={styles.themeSwitchWrapper}>
      <button
        className={`${styles.themeSwitch} ${styles.toggle}`}
        onClick={toggleThemeHandler}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        type="button"
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
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

ThemeSwitcher.defaultProps = {
  isMuted: false,
};

export default ThemeSwitcher;
