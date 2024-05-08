import { HeaderTagType, Size, TextAlign, TextVariant } from '../consts';

interface TextProps {
  className?: string;

  title?: string;

  text?: string;

  theme?: TextVariant;

  align?: TextAlign;

  size?: Size;

  tagname?: HeaderTagType;

  'data-testid'?: string;

  bold?: boolean;
}

export type { TextProps };
