import { useContext } from 'react';
import { Theme } from '../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localeStorage';
import { ThemeContext } from '../context/ThemeContext';

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
