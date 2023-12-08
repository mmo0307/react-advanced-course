import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemes;
}

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  children,
  theme = ButtonThemes.CLEAR,
  ...otherProps
}) => (
  <button
    className={classNames(styles.ThemeSwitcher, {}, [className, styles[theme]])}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

export { Button };
