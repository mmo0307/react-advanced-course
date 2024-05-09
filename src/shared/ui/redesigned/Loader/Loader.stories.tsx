import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta = {
  title: 'redesigned/shared/Loader',
  component: Loader
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export default meta;

export const Template: Story = {
  args: {}
};
