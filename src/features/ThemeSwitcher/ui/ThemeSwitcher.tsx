import React, { FC, memo, useCallback } from 'react';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { ButtonThemes } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Theme } from '@/shared/const/theme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(
  ({ className }: ThemeSwitcherProps) => {
    const dispatch = useAppDispatch();

    const { theme, toggleTheme } = useTheme();

    const onToggleTheme = useCallback(() => {
      toggleTheme((theme) => {
        dispatch(saveJsonSettings({ theme }));
      });
    }, [toggleTheme]);

    return (
      <Button
        theme={ButtonThemes.CLEAR}
        className={classNames('', {}, [className])}
        onClick={onToggleTheme}
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
