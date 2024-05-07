import { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps, PropsWithChildren {
  className?: string;

  variant?: 'primary' | 'outlined' | 'red';

  activeClassName?: string;
}

export type { AppLinkProps };
