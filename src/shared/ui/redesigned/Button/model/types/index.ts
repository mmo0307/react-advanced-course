import { ButtonHTMLAttributes, ReactNode } from 'react';

import {
  ButtonFontSize,
  ButtonSize,
  ButtonVariant,
  WeightVariant
} from '../../model/consts';

/**
 * Button extend the standard HTML button element with additional properties
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Button theme. Responsible for the visual (in a frame, without styles, color opposite to the theme of the application, etc.)
   */
  variant?: ButtonVariant;
  /**
   * Flag that makes the button square
   */
  square?: boolean;
  /**
   *  Button size according to design system
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
  /**
   *  Button font-size according to design system
   */
  fontSize?: ButtonFontSize;
  /**
   *  Weight according to design system
   */
  weight?: WeightVariant;
  /**
   *  Left Icon for button according to design system
   */
  addonLeft?: ReactNode;
  /**
   *  Right Icon for button according to design system
   */
  addonRight?: ReactNode;
}

export type { ButtonProps };
