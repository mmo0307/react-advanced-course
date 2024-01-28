import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfilePage } from 'pages/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'page/ProfilePage',
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;

export default meta;

export const Profile: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
};

export const Profile_DARK: Story = {
  ...Profile,
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
