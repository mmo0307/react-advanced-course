import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'page/MainPage',
  component: MainPage
} satisfies Meta<typeof MainPage>;

type Story = StoryObj<typeof MainPage>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const Main_DARK: Story = {
  ...Main,
  decorators: [ThemeDecorator(Theme.DARK)]
};
