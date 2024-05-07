import React, { FC, memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import {
  Button as ButtonDeprecated,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';

import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import ThemeIconRedesigned from '@/shared/assets/icons/theme.svg';
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
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <Icon
            clickable
            width={40}
            height={40}
            Svg={ThemeIconRedesigned}
            onClick={onToggleTheme}
          />
        }
        off={
          <ButtonDeprecated
            theme={ButtonThemes.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleTheme}
          >
            {theme === Theme.DARK ? (
              <MoonIcon
                width={40}
                height={40}
              />
            ) : (
              <SunIcon
                width={40}
                height={40}
              />
            )}
          </ButtonDeprecated>
        }
      />
    );
  }
);

export { ThemeSwitcher };
