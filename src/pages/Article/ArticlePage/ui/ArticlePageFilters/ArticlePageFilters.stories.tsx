import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlePageFilters } from './ArticlePageFilters';

const meta = {
  title: 'page/Article/ArticlesFilters',
  component: ArticlePageFilters
} satisfies Meta<typeof ArticlePageFilters>;

type Story = StoryObj<typeof ArticlePageFilters>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({})]
};
