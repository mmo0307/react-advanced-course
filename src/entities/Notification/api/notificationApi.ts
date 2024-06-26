import { rtkApi } from '@/shared/api/rtlApi';

import { Notification } from '../model/types/notifications';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  })
});

export const { useGetNotificationsQuery } = notificationsApi;
