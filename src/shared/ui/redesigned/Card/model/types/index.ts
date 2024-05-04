import { HTMLAttributes, ReactNode } from 'react';

import { CardTheme } from '../consts';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;

  children: ReactNode;

  theme?: CardTheme;

  max?: boolean;
}

export type { CardProps };
