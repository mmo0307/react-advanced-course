import React from 'react';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
