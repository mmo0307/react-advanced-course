import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { LoginSchema } from '@/features/AuthByUserName';
import { ScrollObjSchema } from '@/features/ScrollSave';
import { ArticleDetailsPageSchema } from '@/pages/Article/ArticleDetailsPage/model/types';
import { ArticlesPageSchema } from '@/pages/Article/ArticlePage';
import { rtkApi } from '@/shared/api/rtlApi';
import { ProfileSchema } from '@/features/editableProfileCard';

export interface StateSchema {
  user: UserSchema;

  scrollPosition: ScrollObjSchema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  //Async Reducers
  profile?: ProfileSchema;

  loginForm?: LoginSchema;

  articleDetails?: ArticleDetailsSchema;

  addCommentForm?: AddCommentFormSchema;

  articlesPage?: ArticlesPageSchema;

  articleDetailsPage?: ArticleDetailsPageSchema;
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
}

export interface ThunkConfig<T> {
  rejectValue: T;

  extra: ThunkExtraArg;

  state: StateSchema;
}
