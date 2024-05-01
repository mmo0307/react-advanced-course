import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export default meta;

export const Main: Story = {
  args: {
    children: (
      <Text
        title='test'
        text='text text'
      />
    )
  }
};
