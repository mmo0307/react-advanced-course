import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { AddCommentFormAsync as AddCommentForm } from './AddCommentForm.async';

const meta = {
  title: 'feature/AddCommentForm',
  component: AddCommentForm
} satisfies Meta<typeof AddCommentForm>;

type Story = StoryObj<typeof AddCommentForm>;

export default meta;

export const Main: Story = {
  args: {
    onSendComment: action('onSendComment')
  },
  decorators: [StoreDecorator({})]
};

export const WithError: Story = {
  args: {
    onSendComment: action('onSendComment')
  },
  decorators: [
    StoreDecorator({
      addCommentForm: {
        error: 'error'
      }
    })
  ]
};
