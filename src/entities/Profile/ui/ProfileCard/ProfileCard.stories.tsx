import type { Meta, StoryObj } from '@storybook/react';

import { Index } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ProfileCard } from '../ProfileCard/ProfileCard';

import avatar from '@/shared/assets/tests/avatar.jpg';

const meta = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard
} satisfies Meta<typeof ProfileCard>;

type Story = StoryObj<typeof ProfileCard>;

export default meta;

export const ProfileCardTemplate: Story = {
  args: {
    data: {
      username: 'admin',
      age: '22',
      country: Index.Ukraine,
      lastName: 'Mishin',
      firstName: 'Misha',
      city: 'asf',
      currency: Currency.USD,
      avatar
    }
  }
};

export const ProfileCardError: Story = {
  args: {
    error: 'true'
  }
};

export const ProfileCardLoading: Story = {
  args: {
    isLoading: true
  }
};

export const ProfileCardDark: Story = {
  ...ProfileCardTemplate,
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const ProfileCardErrorDark: Story = {
  ...ProfileCardError,
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const ProfileCardLoadingDark: Story = {
  ...ProfileCardLoading,
  decorators: [ThemeDecorator(Theme.DARK)]
};
