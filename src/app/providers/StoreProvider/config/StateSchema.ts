import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUserName';

export interface StateSchema {
  user: UserSchema;

  //Async Reducers
  profile?: ProfileSchema;

  loginForm?: LoginSchema;
  //Async Reducers
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;

  reduce: (state: StateSchema, action: AnyAction) => StateSchema;

  add: (key: StateSchemaKey, reducer: Reducer) => void;

  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;

  //navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;

  extra: ThunkExtraArg;

  state: StateSchema;
}
