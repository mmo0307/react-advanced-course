import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Button.module.scss';
import { ButtonSize, ButtonThemes } from './model/consts';
import { ButtonProps } from './model/types';

const Button = memo(
  ({
    className,
    children,
    theme = ButtonThemes.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  }: ButtonProps) => (
    <button
      type='button'
      className={classNames(
        styles.Button,
        {
          [styles[theme]]: true,
          [styles.square]: square,
          [styles[size]]: true,
          [styles.disabled]: disabled
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
