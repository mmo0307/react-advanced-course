import { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta = {
  title: 'redesigned/shared/StarRating',
  component: StarRating
} satisfies Meta<typeof StarRating>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Normal: Story = {
  args: {}
};
