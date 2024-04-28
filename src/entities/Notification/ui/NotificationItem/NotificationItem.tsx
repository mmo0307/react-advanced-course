import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationItem.module.scss';
import { Text } from '@/shared/ui/Text';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Notification } from '../../model/types/notifications';
import { View } from '@/shared/ui/View';

interface NotificationItemProps {
  className?: string;

  notification: Notification;
}

const NotificationItem: FC<NotificationItemProps> = ({
  className,
  notification
}) => (
  <Card
    theme={CardTheme.OUTLINED}
    className={classNames(styles.NotificationItem, {}, [className])}
  >
    <View.Condition if={Boolean(notification.href)}>
      <a
        target='_blank'
        rel='noreferrer'
        href={notification.href as string}
        className={classNames(styles.link, {}, [className])}
      >
        <Text title={notification.title} text={notification.description} />
      </a>
    </View.Condition>

    <View.Condition if={!Boolean(notification.href)}>
      <Text title={notification.title} text={notification.description} />
    </View.Condition>
  </Card>
);

export { NotificationItem };
