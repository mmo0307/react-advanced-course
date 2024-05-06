import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { ButtonSize, ButtonThemes } from './model/consts';
import { ButtonProps } from './model/types';

import styles from './Button.module.scss';

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Button = memo(
  ({
    className,
    children,
    theme = ButtonThemes.OUTLINE,
    square,
    disabled,
    fullWidth,
    size = ButtonSize.M,
    ...otherProps
  }: ButtonProps) => (
    <button
      type='button'
      className={classNames(
        styles.Button,
        {
          [styles[theme]]: true,
          [styles[size]]: true,
          [styles.square]: square,
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth
        },
        [className, styles[theme]]
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
);

export { Button };
