import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;

  title?: string;

  text?: string;

  theme?: TextTheme;
}

const Text = memo(
  ({ className, text, title, theme = TextTheme.PRIMARY }: TextProps) => (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className
      ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  )
);

export { Text };
