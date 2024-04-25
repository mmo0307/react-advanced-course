import React, {
  FC,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps extends PropsWithChildren {
  className?: string;

  isOpen?: boolean;

  onClose?: () => void;

  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({
  className,
  children,
  lazy,
  isOpen,
  onClose
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();

        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // Новые ссылки!!!
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);

      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          styles.Modal,
          { [styles.opened]: isOpen, [styles.isClosing]: isClosing },
          [className, theme, 'app_modal']
        )}
      >
        <Overlay onClick={onClose} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};

export { Modal };
