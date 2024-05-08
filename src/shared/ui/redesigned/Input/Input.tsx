import React, { memo, useEffect, useRef, useState } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';
import { Text } from '../Text';

import { InputProps } from './model/types';

import styles from './Input.module.scss';

const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    label,
    autoFocus,
    readonly,
    addonLeft,
    addonRight,
    placeholder,
    size = 'm',
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref?.current?.focus();
      }
    }, [autoFocus]);

    const mods: Mods = {
      [styles.readonly]: readonly,
      [styles.focused]: isFocused,
      [styles.withAddonLeft]: Boolean(addonLeft),
      [styles.withAddonRight]: Boolean(addonRight)
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const input = (
      <div
        className={classNames(styles.inputWrapper, mods, [
          className,
          styles[size]
        ])}
      >
        {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}

        <input
          placeholder={placeholder}
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classNames(
            styles.input,
            { [styles.readonly]: readonly },
            []
          )}
          disabled={readonly}
          {...otherProps}
        />

        {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
      </div>
    );

    if (label) {
      return (
        <HStack
          gap='8'
          max
        >
          <Text text={label} />

          {input}
        </HStack>
      );
    }

    return input;
  }
);

export { Input };
