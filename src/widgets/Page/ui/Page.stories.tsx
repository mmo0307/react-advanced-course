import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';

import { Page } from './Page';

const meta = {
  title: 'widget/Page',
  component: Page
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof Page>;

export default meta;

export const Main: Story = {
  args: {
    children: <Text title='test' text='text text' />
  }
};
