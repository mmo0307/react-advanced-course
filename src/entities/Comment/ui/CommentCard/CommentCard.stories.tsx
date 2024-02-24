import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';

const meta = {
  title: 'page/CommentCard',
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
          'https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png'
      }
    }
  }
};
