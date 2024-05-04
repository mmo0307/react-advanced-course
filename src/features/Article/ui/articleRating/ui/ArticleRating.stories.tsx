import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

const meta = {
  title: 'feature/Article/ArticleRating',
  component: ArticleRating
} satisfies Meta<typeof ArticleRating>;

type Story = StoryObj<typeof ArticleRating>;

export default meta;

export const Normal: Story = {
  args: {}
};
