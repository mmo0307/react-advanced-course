import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { PageError } from './PageError';

const meta = {
  title: 'widgets/PageError',
  component: PageError
} satisfies Meta<typeof PageError>;

type Story = StoryObj<typeof PageError>;

export default meta;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const DARK: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
