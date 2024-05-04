import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlePage from './ArticlePage';

const meta = {
  title: 'page/Article/ArticlePage',
  component: ArticlePage
} satisfies Meta<typeof ArticlePage>;

type Story = StoryObj<typeof ArticlePage>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({})]
};
