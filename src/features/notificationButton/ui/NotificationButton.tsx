import React, { FC, memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import { ToggleFeature } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

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
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <Icon
            Svg={Notification}
            width={20}
            height={20}
            clickable
            onClick={onOpedDrawer}
          />
        }
        off={
          <ButtonDeprecated
            onClick={onOpedDrawer}
            theme={ButtonThemes.CLEAR}
          >
            <IconDeprecated
              Svg={Notification}
              width={20}
              height={20}
            />
          </ButtonDeprecated>
        }
      />
    );

    return (
      <div>
        <ToggleFeature
          name={'isAppRedesigned'}
          on={
            <>
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
                  direction='bottom left'
                  trigger={trigger}
                >
                  <NotificationList className={styles.notifications} />
                </Popover>
              </BrowserView>
            </>
          }
          off={
            <>
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
                <PopoverDeprecated
                  className={className}
                  direction='down-left'
                  trigger={trigger}
                >
                  <NotificationList className={styles.notifications} />
                </PopoverDeprecated>
              </BrowserView>
            </>
          }
        />
      </div>
    );
  }
);

export { NotificationButton };
