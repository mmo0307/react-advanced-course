import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'page/ArticlesPageFilters',
  component: ArticlesPageFilters
} satisfies Meta<typeof ArticlesPageFilters>;

type Story = StoryObj<typeof ArticlesPageFilters>;

export default meta;

export const Main: Story = {
  args: {}
};
