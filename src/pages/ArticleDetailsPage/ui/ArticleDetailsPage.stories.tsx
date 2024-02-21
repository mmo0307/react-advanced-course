import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

const meta = {
  title: 'page/ArticleDetailsPage',
  component: ArticleDetailsPage
} satisfies Meta<typeof ArticleDetailsPage>;

type Story = StoryObj<typeof ArticleDetailsPage>;

export default meta;

export const Main: Story = {
  args: {}
};
