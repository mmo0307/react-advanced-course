import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'feature/addCommentForm';
import { LoginSchema } from 'feature/AuthByUserName';
import { ScrollObjSchema } from 'feature/ScrollSave';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import { ArticlesPageSchema } from 'pages/ArticlePage';

export interface StateSchema {
  user: UserSchema;

  scrollPosition: ScrollObjSchema;

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
