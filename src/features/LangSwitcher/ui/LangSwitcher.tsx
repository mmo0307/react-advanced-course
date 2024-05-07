import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeature
      name='isAppRedesigned'
      on={
        <Button
          variant='clearIcon'
          weight='bold'
          onClick={toggle}
        >
          {t('Короткий язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonThemes.CLEAR}
          onClick={toggle}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </ButtonDeprecated>
      }
    />
  );
});

export { LangSwitcher };
