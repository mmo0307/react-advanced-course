import { InputHTMLAttributes, ReactNode } from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;

  value?: string;

  onChange?: (value: string) => void;

  label?: string;

  readonly?: boolean;

  addonLeft?: ReactNode;

  addonRight?: ReactNode;

  size?: InputSize;
}

export type { InputProps };
