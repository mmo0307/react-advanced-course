import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList
} satisfies Meta<typeof CommentList>;

type Story = StoryObj<typeof CommentList>;

export default meta;

export const Main: Story = {
  args: {
    comments: [
      {
        id: '3',
        text: 'some comment 3',
        user: {
          id: '1',
          username: 'admin',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
        }
      },
      {
        id: '3',
        text: 'some comment 3',
        user: {
          id: '1',
          username: 'admin',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
        }
      },
      {
        id: '3',
        text: 'some comment 3',
        user: {
          id: '1',
          username: 'admin',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
        }
      }
    ]
  },
  decorators: [RouterDecorator]
};
