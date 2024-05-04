import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localeStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../service/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';

const initialState: UserSchema = {
  _inited: false
};

export const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;

      if (action.payload.features) {
        setFeatureFlags(action.payload.features);
      }
    },

    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        const userData = JSON.parse(user) as User;

        state.authData = userData;

        if (userData.features) {
          setFeatureFlags(userData.features);
        }
      }

      state._inited = true;
    },

    logout: (state) => {
      state.authData = undefined;

      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      }
    );
  }
});

//export const { increment, decrement } = counterSlice.actions;
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
