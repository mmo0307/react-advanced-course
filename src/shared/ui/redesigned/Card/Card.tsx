import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { mapPaddingToClass } from './model/consts';
import { CardProps } from './model/types';

import styles from './Card.module.scss';

export const Card = ({
  className,
  children,
  max,
  variant = 'normal',
  padding = '24',
  border = 'round',
  tagname: Tag = 'div',
  ...otherProps
}: CardProps) => {
  const paddingClass = mapPaddingToClass[padding];

  const additional = [
    className,
    styles[variant],
    styles[paddingClass],
    styles[border]
  ];

  return (
    <Tag
      className={classNames('', { [styles.max]: max }, additional)}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};
