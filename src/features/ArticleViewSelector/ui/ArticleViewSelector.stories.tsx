import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article/model/const';

const meta = {
  title: 'feature/ArticleViewSelector',
  component: ArticleViewSelector
} satisfies Meta<typeof ArticleViewSelector>;

type Story = StoryObj<typeof ArticleViewSelector>;

export default meta;

export const Example: Story = {
  args: {
    view: ArticleView.GRID,
    onViewClick: action(ArticleView.LIST)
  }
};
