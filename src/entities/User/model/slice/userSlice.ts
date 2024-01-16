import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

//export const { increment, decrement } = counterSlice.actions;
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
