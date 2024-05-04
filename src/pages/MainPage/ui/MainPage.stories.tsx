import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { MainPageAsync as MainPage } from '../ui/MainPage.async';

const meta = {
  title: 'page/MainPage',
  component: MainPage
} satisfies Meta<typeof MainPage>;

type Story = StoryObj<typeof MainPage>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
};

export const Main_DARK: Story = {
  ...Main,
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
