import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localeStorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { initAuthData } from '../service/initAuthData';
import { saveJsonSettings } from '../service/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { User, UserSchema } from '../types/userSchema';

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

      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
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
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;

        if (payload.features) {
          setFeatureFlags(payload.features);
        }

        state._inited = true;
      }
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  }
});

//export const { increment, decrement } = counterSlice.actions;
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
