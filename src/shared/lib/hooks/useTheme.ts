import { useContext } from 'react';

import { Theme } from '../../const/theme';
import { ThemeContext } from '../context/ThemeContext';
import { toggleFeature } from '../features';

interface UseThemeResult {
  theme: Theme;

  toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction: (theme: Theme) => void) => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;

      case Theme.LIGHT:
        newTheme = toggleFeature({
          name: 'isAppRedesigned',
          off: () => Theme.BLUE,
          on: () => Theme.ORANGE
        });
        break;

      case Theme.BLUE:
        newTheme = Theme.DARK;
        break;

      case Theme.ORANGE:
        newTheme = Theme.DARK;
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
