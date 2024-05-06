import React, {
  InputHTMLAttributes,
  memo,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;

  value?: string | number;

  onChange?: (value: string) => void;

  autofocus?: boolean;

  readonly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const [caretPosition, setCaretPosition] = useState<number>(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);

        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);

      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
      setCaretPosition((e.target as HTMLInputElement)?.selectionStart || 0);
    };

    return (
      <div className={classNames(styles.InputWrapper, {}, [className])}>
        {placeholder && (
          <div className={styles.placeholder}>{`${placeholder}>`}</div>
        )}

        <div className={styles.caretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={classNames(
              styles.input,
              {
                [styles.readonly]: readonly
              },
              [className]
            )}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            readOnly={readonly}
            {...otherProps}
          />

          {isCaretVisible && (
            <span
              className={styles.caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  }
);

export { Input };
