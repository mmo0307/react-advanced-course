import React, { FC, PropsWithChildren } from 'react';

import { ANIMATION_DELAY } from '@/shared/const/animation';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeature } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';

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
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(
          styles.Modal,
          { [styles.opened]: isOpen, [styles.isClosing]: isClosing },
          [
            className,
            theme,
            'app_modal',
            toggleFeature({
              name: 'isAppRedesigned',
              on: () => styles.modalNew,
              off: () => styles.modalOld
            })
          ]
        )}
      >
        <Overlay onClick={close} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};

export { Modal };
