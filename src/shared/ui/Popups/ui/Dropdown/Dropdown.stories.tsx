import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';
import React from 'react';

const meta = {
  title: 'shared/Popups/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export default meta;

export const Normal: Story = {
  args: {
    trigger: <Button>{'Text'}</Button>,
    items: [
      {
        content: 'first'
      },
      {
        content: 'second'
      },
      {
        content: 'third'
      }
    ]
  }
};
