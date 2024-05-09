import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { AppLink } from './AppLink';

const meta = {
  title: 'redesigned/shared/AppLink',
  component: AppLink
} satisfies Meta<typeof AppLink>;

type Story = StoryObj<typeof AppLink>;

export default meta;

export const Template: Story = {
  args: {
    children: 'Text',
    variant: 'primary',
    to: '/about'
  },
  decorators: [RouterDecorator]
};

export const Outlined: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: 'outlined'
  }
};

export const Red: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: 'red'
  }
};
