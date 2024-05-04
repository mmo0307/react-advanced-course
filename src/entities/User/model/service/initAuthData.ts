import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getAuthDataById } from '../../api/userApi';
import { User } from '../../model/types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localeStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getAuthDataById(userId)).unwrap();

      return response;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
