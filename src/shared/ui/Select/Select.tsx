import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Select.module.scss';

export interface SelectOption {
  value: string;

  content: string;
}

interface SelectProps {
  className?: string;

  label?: string;

  options?: SelectOption[];

  value?: string;

  onChange?: (value: string) => void;

  readonly?: boolean;
}

export const Select = memo(
  ({ className, label, options, onChange, value, readonly }: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    const optionsList = useMemo(
      () =>
        options?.map(opt => (
          <option
            className={styles.option}
            value={opt.value}
            key={Math.random()}
          >
            {opt.content}
          </option>
        )),
      [options]
    );

    return (
      <div className={classNames(styles.Wrapper, {}, [className])}>
        {label && <span className={styles.label}>{`${label}>`}</span>}
        <select
          disabled={readonly}
          className={styles.select}
          value={value}
          onChange={onChangeHandler}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);
