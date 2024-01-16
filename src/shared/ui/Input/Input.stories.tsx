import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';

const meta = {
  title: 'shared/Input',
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
