import { rtkApi } from '@/shared/api/rtlApi';
import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/userSchema';

interface SetJsonSettingsArg {
  userId: string;

  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings
        }
      })
    }),
    getAuthDataById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET'
      })
    })
  })
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;
export const getAuthDataById = userApi.endpoints.getAuthDataById.initiate;
