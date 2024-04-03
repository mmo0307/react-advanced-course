import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

import { CommentCard } from '../CommentCard/CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard
} satisfies Meta<typeof CommentCard>;

type Story = StoryObj<typeof CommentCard>;

export default meta;

export const Main: Story = {
  args: {
    comment: {
      id: '3',
      text: 'some comment 3',
      user: {
        id: '1',
        username: 'admin',
        avatar:
          'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
      }
    }
  },
  decorators: [RouterDecorator]
};
