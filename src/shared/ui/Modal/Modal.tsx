import React, { FC, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { ANIMATION_DELAY } from '@/shared/const/animation';

interface ModalProps extends PropsWithChildren {
  className?: string;

  isOpen?: boolean;

  onClose?: () => void;

  lazy?: boolean;
}

const Modal: FC<ModalProps> = ({
  className,
  children,
  lazy,
  isOpen,
  onClose
}) => {
  const { theme } = useTheme();

  const { isClosing, isMounted, close } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose
  });

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
        <Overlay onClick={close} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};

export { Modal };
