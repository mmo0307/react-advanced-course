import React from 'react';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleDetailsPageReducer } from '@/pages/Article';
import { addCommentFormReducer } from '@/features/addCommentForm';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,

  profile: profileReducer,

  articleDetails: articleDetailsReducer,

  articleDetailsPage: articleDetailsPageReducer,

  addCommentForm: addCommentFormReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
