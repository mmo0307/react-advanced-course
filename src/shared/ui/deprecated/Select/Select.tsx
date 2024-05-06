import React, { ChangeEvent } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;

  content: string;
}

interface SelectProps<T extends string> {
  className?: string;

  label?: string;

  options?: SelectOption<T>[];

  value?: T;

  onChange?: (value: T) => void;

  readonly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Select = <T extends string>({
  className,
  label,
  options,
  onChange,
  value,
  readonly
}: SelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  return (
    <div className={classNames(styles.Wrapper, {}, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        {options?.map((opt) => (
          <option
            className={styles.option}
            value={opt.value}
            key={Math.random()}
          >
            {opt.content}
          </option>
        ))}
      </select>
    </div>
  );
};
