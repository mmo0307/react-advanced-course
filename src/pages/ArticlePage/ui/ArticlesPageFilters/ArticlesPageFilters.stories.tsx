import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'page/Article/ArticlesFilters',
  component: ArticlesPageFilters
} satisfies Meta<typeof ArticlesPageFilters>;

type Story = StoryObj<typeof ArticlesPageFilters>;

export default meta;

export const Main: Story = {
  args: {},
  decorators: [RouterDecorator, StoreDecorator({})]
};
