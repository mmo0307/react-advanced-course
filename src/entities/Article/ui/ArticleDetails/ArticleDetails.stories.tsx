import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from 'entities/Article';

const meta = {
  title: 'page/ArticleDetails',
  component: ArticleDetails
} satisfies Meta<typeof ArticleDetails>;

type Story = StoryObj<typeof ArticleDetails>;

export default meta;

export const Main: Story = {
  args: {}
};
