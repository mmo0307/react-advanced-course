import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from 'widgets/Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar
} satisfies Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export default meta;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
};

export const DARK: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
