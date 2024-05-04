import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

const meta = {
  title: 'entities/RatingCard',
  component: RatingCard
} satisfies Meta<typeof RatingCard>;

type Story = StoryObj<typeof RatingCard>;

export default meta;

export const Normal: Story = {
  args: {}
};
