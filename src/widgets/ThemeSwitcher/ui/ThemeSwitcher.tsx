import React, { FC, memo } from 'react';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/model/consts';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
  ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
      <Button
        theme={ButtonThemes.CLEAR}
        className={classNames('', {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? (
          <MoonIcon width={30} />
        ) : (
          <SunIcon width={30} />
        )}
      </Button>
    );
  }
);

export { ThemeSwitcher };
