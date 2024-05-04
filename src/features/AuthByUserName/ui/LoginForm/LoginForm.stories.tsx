import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { LoginFormAsync as LoginForm } from './LoginForm.async';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export default meta;

export const Template: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: '123' }
    })
  ]
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'fff', error: 'ERROR' }
    })
  ]
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true }
    })
  ]
};
