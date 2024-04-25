import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, PropsWithChildren } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal';

interface DrawerProps extends PropsWithChildren {
  className?: string;

  lazy?: boolean;

  isOpen?: boolean;

  onClose?: () => void;
}

const Drawer = memo(
  ({ className, children, onClose, isOpen, lazy }: DrawerProps) => {
    const { theme } = useTheme();

    const { isClosing, isMounted, close } = useModal({
      animationDelay: 300,
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
            styles.Drawer,
            {
              [styles.opened]: isOpen,
              [styles.isClosing]: isClosing
            },
            [className, theme, 'app_drawer']
          )}
        >
          <Overlay onClick={close} />

          <div className={styles.content}>{children}</div>
        </div>
      </Portal>
    );
  }
);

export { Drawer };
