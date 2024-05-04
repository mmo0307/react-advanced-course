import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { AppLinkThemes } from '../../model/consts';

interface AppLinkProps extends LinkProps {
  className?: string;

  theme?: AppLinkThemes;

  children?: ReactNode;
}

export type { AppLinkProps };
