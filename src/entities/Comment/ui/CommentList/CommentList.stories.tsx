import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
  title: 'page/CommentList',
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
            'https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png'
        }
      },
      {
        id: '3',
        text: 'some comment 3',
        user: {
          id: '1',
          username: 'admin',
          avatar:
            'https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png'
        }
      },
      {
        id: '3',
        text: 'some comment 3',
        user: {
          id: '1',
          username: 'admin',
          avatar:
            'https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png'
        }
      }
    ]
  }
};
