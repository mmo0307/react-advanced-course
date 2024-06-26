import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { CardTheme } from './model/consts';
import { CardProps } from './model/types';

import styles from './Card.module.scss';

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card = memo(
  ({
    className,
    children,
    max,
    theme = CardTheme.NORMAL,
    ...otherProps
  }: CardProps) => (
    <div
      className={classNames(styles.Card, { [styles.max]: max }, [
        className,
        styles[theme]
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
);
