import { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'redesigned/shared/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
};

export const Circle: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100
  }
};

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const CircleDark: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
