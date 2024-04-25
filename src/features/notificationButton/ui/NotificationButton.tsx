import React, { FC, memo, useCallback, useState } from 'react';
import styles from './NotificationButton.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/model/consts';
import { Icon } from '@/shared/ui/Icon/Icon';
import Notification from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider/AnimationProvider';

interface NotificationButtonProps {
  className?: string;
}

const NotificationButton: FC<NotificationButtonProps> = memo(
  ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpedDrawer = useCallback(() => {
      setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false);
    }, []);

    const trigger: JSX.Element = (
      <Button onClick={onOpedDrawer} theme={ButtonThemes.CLEAR}>
        <Icon Svg={Notification} inverted />
      </Button>
    );

    return (
      <div>
        <MobileView>
          {trigger}

          <AnimationProvider>
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
              <NotificationList className={styles.notifications} />
            </Drawer>
          </AnimationProvider>
        </MobileView>

        <BrowserView>
          <Popover
            className={className}
            direction='down-left'
            trigger={trigger}
          >
            <NotificationList className={styles.notifications} />
          </Popover>
        </BrowserView>
      </div>
    );
  }
);

export { NotificationButton };