import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';

const meta = {
  title: 'shared/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

export default meta;

export const Normal: Story = {
  args: {}
};
