import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLinkProps } from './model/types';

import styles from './AppLink.module.scss';

const AppLink = memo(
  ({
    className,
    children,
    to,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  }: AppLinkProps) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.appLink, { [activeClassName]: isActive }, [
          className,
          styles[variant]
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
);

export { AppLink };
