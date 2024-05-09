import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta = {
  title: 'redesigned/shared/Popups/Popover',
  component: Popover
} satisfies Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export default meta;

export const Normal: Story = {
  args: {}
};
