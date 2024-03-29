import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'page/AboutPage',
  component: AboutPage
} satisfies Meta<typeof AboutPage>;

type Story = StoryObj<typeof AboutPage>;

export default meta;

export const About: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
};

export const About_DARK: Story = {
  ...About,
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
