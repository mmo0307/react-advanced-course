import { TextAlign, TextSize, TextTheme } from '../consts';

interface TextProps {
  className?: string;

  title?: string;

  text?: string;

  theme?: TextTheme;

  align?: TextAlign;

  size?: TextSize;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type { TextProps, HeaderTagType };
