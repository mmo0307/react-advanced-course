import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string;

  value?: Currency;

  onChange?: (value: Currency) => void;

  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <ListBox
            label={t('Укажите валюту')}
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            readonly={readonly}
            defaultValue={t('Укажите валюту')}
            onChange={onChangeHandler}
            direction='top right'
            labelDirection='row'
          />
        }
        off={
          <ListBoxDeprecated
            label={t('Укажите валюту')}
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            readonly={readonly}
            defaultValue={t('Укажите валюту')}
            onChange={onChangeHandler}
            direction='up-right'
          />
        }
      />
    );
  }
);
