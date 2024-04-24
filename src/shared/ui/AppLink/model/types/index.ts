import { LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import { AppLinkThemes } from '../../model/consts';

interface AppLinkProps extends LinkProps {
  className?: string;

  theme?: AppLinkThemes;

  children?: ReactNode;
}

export type { AppLinkProps };
