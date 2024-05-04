import { useContext } from 'react';
import { Theme } from '../../const/theme';
import { ThemeContext } from '../context/ThemeContext';

interface UseThemeResult {
  theme: Theme;

  toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction: (theme: Theme) => void) => {
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

    saveAction(newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}

export { useTheme };
