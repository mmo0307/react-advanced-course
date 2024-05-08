import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { View } from '@/shared/ui/redesigned/View';

import { Notification } from '../../model/types/notifications';

import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;

  notification: Notification;
}

const NotificationItem = memo(
  ({ className, notification }: NotificationItemProps) => {
    const content = (
      <ToggleFeature
        name='isAppRedesigned'
        off={
          <CardDeprecated
            theme={CardTheme.OUTLINED}
            className={classNames(styles.notificationItem, {}, [className])}
          >
            <TextDeprecated title={notification?.title} />
            <TextDeprecated text={notification?.description} />
          </CardDeprecated>
        }
        on={
          <Card
            padding='0'
            className={classNames(styles.notificationItemRedesigned, {}, [
              className
            ])}
          >
            <Text
              title={notification?.title}
              text={notification?.description}
            />
          </Card>
        }
      />
    );

    return (
      <>
        <View.Condition if={Boolean(notification?.href)}>
          <ToggleFeature
            name='isAppRedesigned'
            off={
              <AppLinkDeprecated
                className={styles.notificationItem}
                to={`${import.meta.env.VITE_LOCAL_DOMAIN_NAME}${
                  notification.href
                }`}
              >
                {content}
              </AppLinkDeprecated>
            }
            on={
              <AppLink
                className={styles.notificationItem}
                to={`${import.meta.env.VITE_LOCAL_DOMAIN_NAME}${
                  notification.href
                }`}
              >
                {content}
              </AppLink>
            }
          />
        </View.Condition>

        <View.Condition if={!Boolean(notification?.href)}>
          {content}
        </View.Condition>
      </>
    );
  }
);

export { NotificationItem };
