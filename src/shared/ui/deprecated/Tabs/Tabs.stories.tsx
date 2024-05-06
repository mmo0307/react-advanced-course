import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta = {
  title: 'deprecated/shared/Tabs',
  component: Tabs
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export default meta;

export const Main: Story = {
  args: {
    tabs: [
      {
        value: '1',
        content: 'Tab 1'
      },
      {
        value: '2',
        content: 'Tab 2'
      },
      {
        value: '3',
        content: 'Tab 3'
      },
      {
        value: '4',
        content: 'Tab 4'
      }
    ],

    value: '3',

    onTabClick: action('onTabClick')
  }
};
