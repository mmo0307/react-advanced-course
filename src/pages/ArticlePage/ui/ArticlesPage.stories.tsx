import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageAsync as ArticlesPage } from 'pages/ArticlePage/ui/ArticlesPage.async';

const meta = {
  title: 'page/ArticlePage',
  component: ArticlesPage
} satisfies Meta<typeof ArticlesPage>;

type Story = StoryObj<typeof ArticlesPage>;

export default meta;

export const Main: Story = {
  args: {}
};
