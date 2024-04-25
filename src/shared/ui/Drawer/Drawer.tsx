import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, PropsWithChildren } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps extends PropsWithChildren {
  className?: string;

  isOpen?: boolean;

  onClose?: () => void;
}

const Drawer = memo(({ className, children, onClose, isOpen }: DrawerProps) => {
  const { theme } = useTheme();

  return (
    <Portal>
      <div
        className={classNames(
          styles.Drawer,
          {
            [styles.opened]: isOpen
          },
          [className, theme, 'app_drawer']
        )}
      >
        <Overlay onClick={onClose} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
});

export { Drawer };
