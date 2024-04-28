import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Index } from '../model/consts';
import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProps {
  className?: string;

  value?: Index;

  onChange?: (value: Index) => void;

  readonly?: boolean;
}

const options = [
  { value: Index.Armenia, content: Index.Armenia },
  { value: Index.Russia, content: Index.Russia },
  { value: Index.Belarus, content: Index.Belarus },
  { value: Index.Kazakhstan, content: Index.Kazakhstan },
  { value: Index.Ukraine, content: Index.Ukraine }
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Index);
      },
      [onChange]
    );

    return (
      // <Select
      //   className={classNames('', {}, [className])}
      //   label={t('Укажите страну')}
      //   options={options}
      //   value={value}
      //   onChange={onChangeHandler}
      //   readonly={readonly}
      // />

      <ListBox
        className={classNames('', {}, [className])}
        label={t('Укажите страну')}
        defaultValue={t('Укажите страну')}
        items={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);
