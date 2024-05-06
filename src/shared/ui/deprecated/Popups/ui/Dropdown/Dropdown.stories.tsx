import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'deprecated/shared/Popups/Dropdown',
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
