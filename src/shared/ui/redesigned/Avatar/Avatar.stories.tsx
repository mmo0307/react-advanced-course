import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import avatar from '@/shared/assets/images/avatar.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export default meta;

export const Template: Story = {
  args: {
    src: avatar
  }
};
