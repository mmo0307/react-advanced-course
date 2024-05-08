import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { View } from '@/shared/ui/redesigned/View';

import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const {
    data: notifications,
    isLoading,
    isError
  } = useGetNotificationsQuery(null, {
    pollingInterval: 10000
  });

  const { t } = useTranslation();

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

      <View.Condition if={isError}>
        <ToggleFeature
          name='isAppRedesigned'
          off={
            <TextDeprecated
              text={t('error')}
              className={classNames('', {}, [className])}
            />
          }
          on={
            <Text
              text={t('error')}
              className={classNames('', {}, [className])}
            />
          }
        />
      </View.Condition>

      <View.Condition if={Boolean(!isLoading && !isError)}>
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
