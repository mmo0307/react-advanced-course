import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';
import { AppLinkThemes } from './model/consts';
import { AppLinkProps } from './model/types';

const AppLink = memo(
  ({
    className,
    children,
    to,
    theme = AppLinkThemes.PRIMARY,
    ...otherProps
  }: AppLinkProps) => (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
);

export { AppLink };
