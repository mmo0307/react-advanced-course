import React from 'react';
import { Story } from '@storybook/react';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/Article/testing';

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
