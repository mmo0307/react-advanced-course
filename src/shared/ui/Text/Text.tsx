import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string;

  title?: string;

  text?: string;

  theme?: TextTheme;

  align?: TextAlign;

  size?: TextSize;
}

const Text = memo(
  ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  }: TextProps) => (
    <div
      className={classNames(
        styles.Text,
        { [styles[theme]]: true, [styles[align]]: true, [styles[size]]: true },
        [className]
      )}
    >
      {title && <p className={styles.title}>{title}</p>}

      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
);

export { Text };
