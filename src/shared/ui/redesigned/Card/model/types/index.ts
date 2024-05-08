import { HTMLAttributes, ReactNode } from 'react';

type CardVariant = 'normal' | 'outlined' | 'light';

type CardPadding = '0' | '8' | '16' | '24';

type CardRound = 'round' | 'default';

type TagNameType = keyof HTMLElementTagNameMap;

interface CardProps extends HTMLAttributes<ValueOf<HTMLElementTagNameMap>> {
  className?: string;

  children: ReactNode;

  variant?: CardVariant;

  padding?: CardPadding;

  border?: CardRound;

  max?: boolean;

  tagname?: TagNameType;
}

export type { CardPadding, CardProps, CardRound, CardVariant, TagNameType };
