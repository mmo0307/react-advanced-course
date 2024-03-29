import React, { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkThemes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;

  theme?: AppLinkThemes;

  children?: ReactNode;
}

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
