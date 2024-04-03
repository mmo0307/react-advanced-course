import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from '../ArticleTypeTabs/ArticleTypeTabs';

const meta = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs
} satisfies Meta<typeof ArticleTypeTabs>;

type Story = StoryObj<typeof ArticleTypeTabs>;

export default meta;

export const Main: Story = {
  args: {}
};
