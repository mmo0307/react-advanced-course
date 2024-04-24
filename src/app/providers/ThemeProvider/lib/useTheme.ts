import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { Theme } from '../model/consts';

interface UseThemeResult {
  theme: Theme;

  toggleTheme: () => void;
}

function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;

      case Theme.DARK:
        newTheme = Theme.GREEN;
        break;

      case Theme.GREEN:
        newTheme = Theme.LIGHT;
        break;

      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}

export { useTheme };
