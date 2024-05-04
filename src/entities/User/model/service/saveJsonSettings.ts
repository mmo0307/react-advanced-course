import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../../model/types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../../model/selectors/getJsonSettings/getJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>(
  'user/saveJsonSettings',

  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const currentJsonSettings = getJsonSettings(getState());

    if (!userData) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.id,
          jsonSettings: {
            ...currentJsonSettings,
            ...newJsonSettings
          }
        })
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue('');
      }

      return response.jsonSettings;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
