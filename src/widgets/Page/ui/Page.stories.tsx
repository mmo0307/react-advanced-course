import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Text } from '@/shared/ui/Text';

import { Page } from './Page';

const meta = {
  title: 'widgets/Page',
  component: Page
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof Page>;

export default meta;

export const Main: Story = {
  args: {
    children: (
      <Text
        title='test'
        text='text text'
      />
    )
  },
  decorators: [RouterDecorator, StoreDecorator({})]
};
