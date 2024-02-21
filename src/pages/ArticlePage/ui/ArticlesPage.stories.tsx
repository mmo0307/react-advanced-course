import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPage } from 'pages/ArticlePage';

const meta = {
  title: 'page/ArticlePage',
  component: ArticlesPage
} satisfies Meta<typeof ArticlesPage>;

type Story = StoryObj<typeof ArticlesPage>;

export default meta;

export const Main: Story = {
  args: {}
};
