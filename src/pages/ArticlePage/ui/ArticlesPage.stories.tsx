import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageAsync as ArticlesPage } from 'pages/ArticlePage/ui/ArticlesPage.async';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'page/ArticlePage',
  component: ArticlesPage
} satisfies Meta<typeof ArticlesPage>;

type Story = StoryObj<typeof ArticlesPage>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({})]
};
