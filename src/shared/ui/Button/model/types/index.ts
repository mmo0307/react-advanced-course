import { ButtonHTMLAttributes } from 'react';
import { ButtonThemes, ButtonSize } from '../../model/consts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;

  theme?: ButtonThemes;

  square?: boolean;

  size?: ButtonSize;

  disabled?: boolean;

  fullWidth?: boolean;
}

export type { ButtonProps };
