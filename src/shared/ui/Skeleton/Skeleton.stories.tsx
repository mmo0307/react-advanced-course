import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Skeleton',
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
    border: '50%',
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
    border: '50%',
    width: 100,
    height: 100
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
