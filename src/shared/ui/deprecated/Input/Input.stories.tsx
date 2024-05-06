import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'deprecated/shared/Input',
  component: Input
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export default meta;

export const Template: Story = {
  args: {
    placeholder: 'Placeholder',
    value: 'Value'
  }
};
