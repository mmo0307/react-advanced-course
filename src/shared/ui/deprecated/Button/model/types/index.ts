import { ButtonHTMLAttributes } from 'react';

import { ButtonSize, ButtonThemes } from '../../model/consts';

/**
 * Button extend the standard HTML button element with additional properties
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Button theme. Responsible for the visual (in a frame, without styles, color opposite to the theme of the application, etc.)
   */
  theme?: ButtonThemes;
  /**
   * Flag that makes the button square
   */
  square?: boolean;
  /**
   *Button size according to design system
   */
  size?: ButtonSize;
  /**
   * Flag responsible for the operation of the button
   */
  disabled?: boolean;
  /**
   * Enlarges the button to the full free width
   */
  fullWidth?: boolean;
}

export type { ButtonProps };
