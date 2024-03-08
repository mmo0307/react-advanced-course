import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlesPageAsync as ArticlesPage } from './ArticlesPage.async';

const meta = {
  title: 'page/Article/ArticlePage',
  component: ArticlesPage
} satisfies Meta<typeof ArticlesPage>;

type Story = StoryObj<typeof ArticlesPage>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({})]
};
