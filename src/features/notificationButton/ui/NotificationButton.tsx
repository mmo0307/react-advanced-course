import React, { FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import { Button, ButtonThemes } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Popover } from '@/shared/ui/deprecated/Popups';

import Notification from '@/shared/assets/icons/notification.svg';

import styles from './NotificationButton.module.scss';

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
      <Button
        onClick={onOpedDrawer}
        theme={ButtonThemes.CLEAR}
      >
        <Icon
          Svg={Notification}
          inverted
        />
      </Button>
    );

    return (
      <div>
        <MobileView>
          {trigger}

          <Drawer
            isOpen={isOpen}
            onClose={onCloseDrawer}
          >
            <NotificationList className={styles.notifications} />
          </Drawer>
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
