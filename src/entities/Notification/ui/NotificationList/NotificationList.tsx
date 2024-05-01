import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';
import { View } from '@/shared/ui/View';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000
  });

  return (
    <VStack
      gap='16'
      className={classNames('', {}, [className])}
    >
      <View.Condition if={isLoading}>
        <Skeleton
          width='100%'
          height='80px'
          border='8px'
        />
        <Skeleton
          width='100%'
          height='80px'
          border='8px'
        />
        <Skeleton
          width='100%'
          height='80px'
          border='8px'
        />
      </View.Condition>

      <View.Condition if={!isLoading}>
        {notifications?.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </View.Condition>
    </VStack>
  );
};

export { NotificationList };
