import React, { memo, PropsWithChildren, useCallback, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeature } from '@/shared/lib/features';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import {
  AnimationProvider,
  useAnimationLibs
} from '../../../lib/components/AnimationProvider/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';

interface DrawerProps extends PropsWithChildren {
  className?: string;

  lazy?: boolean;

  isOpen?: boolean;

  onClose?: () => void;
}

const DrawerContent = memo(
  ({ className, children, onClose, isOpen }: DrawerProps) => {
    const height = window.innerHeight - 100;

    const { Spring, Gesture } = useAnimationLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
      api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
      if (isOpen) {
        openDrawer();
      }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...Spring.config.stiff, velocity },
        onResolve: onClose
      });
    };

    const bind = Gesture.useDrag(
      ({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel
      }) => {
        if (my < -70) cancel();

        if (last) {
          if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
            close();
          } else {
            openDrawer();
          }
        } else {
          api.start({ y: my, immediate: true });
        }
      },
      {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true
      }
    );

    if (!isOpen) {
      return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
      <Portal element={document.getElementById('app') ?? document.body}>
        <div
          className={classNames(styles.Drawer, {}, [
            className,
            theme,
            'app_drawer',
            toggleFeature({
              name: 'isAppRedesigned',
              on: () => styles.modalNew,
              off: () => styles.modalOld
            })
          ])}
        >
          <Overlay onClick={close} />

          <Spring.a.div
            className={styles.sheet}
            style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            {...bind()}
          >
            {children}
          </Spring.a.div>
        </div>
      </Portal>
    );
  }
);

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);

export { Drawer };
