import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { ButtonProps } from './model/types';

import styles from './Button.module.scss';

const Button = memo(
  ({
    className,
    children,
    variant = 'clear',
    disabled,
    fontSize = 'small',
    size = 'm',
    weight = 'normal',
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  }: ButtonProps) => (
    <button
      type='button'
      className={classNames(
        styles.button,
        {
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth,
          [styles.withAddonLeft]: Boolean(addonLeft),
          [styles.withAddonRight]: Boolean(addonRight)
        },
        [
          className,
          styles[variant],
          styles[fontSize],
          styles[size],
          styles[weight]
        ]
      )}
      disabled={disabled}
      {...otherProps}
    >
      {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}

      {children}

      {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
    </button>
  )
);

export { Button };
