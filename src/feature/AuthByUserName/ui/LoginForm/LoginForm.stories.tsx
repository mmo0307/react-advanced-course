import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export default meta;

export const Template: Story = {
  args: {}
  // decorators: [
  //   StoreDecorator({
  //     loginForm: { username: '123', password: '123' }
  //   })
  // ]
};

// export const WithError: Story = {
//   args: {}
//   // decorators: [
//   //   StoreDecorator({
//   //     loginForm: { username: '123', password: 'asd', error: 'ERROR' }
//   //   })
//   // ]
// };
//
// export const Loading: Story = {
//   args: {}
//   // decorators: [
//   //   StoreDecorator({
//   //     loginForm: { isLoading: true }
//   //   })
//   // ]
// };
