import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from 'widgets/Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export default meta;

export const Light: Story = {
  decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)]
};

export const DARK: Story = {
  decorators: [RouterDecorator, ThemeDecorator(Theme.DARK)]
};
