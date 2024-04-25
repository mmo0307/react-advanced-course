import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationItem.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from '@/shared/ui/Card/Card';
import { CardTheme } from '@/shared/ui/Card/model/consts';
import { Notification } from '../../model/types/notifications';
import { View } from '@/shared/ui/View/View';

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
