import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleEditPage from './ArticleEditPage';

const meta = {
  title: 'page/Article/ArticleEditPage',
  component: ArticleEditPage
} satisfies Meta<typeof ArticleEditPage>;

type Story = StoryObj<typeof ArticleEditPage>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({})]
};
