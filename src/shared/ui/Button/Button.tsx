import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  disabled,
  size = ButtonSize.M,
  ...otherProps
}) => (
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
);

export { Button };
