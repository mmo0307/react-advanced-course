import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Currency } from '../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

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
      <ListBox
        label={t('Укажите валюту')}
        className={classNames('', {}, [className])}
        items={options}
        value={value}
        readonly={readonly}
        defaultValue={t('Укажите валюту')}
        onChange={onChangeHandler}
        direction='up-right'
      />
    );
  }
);
