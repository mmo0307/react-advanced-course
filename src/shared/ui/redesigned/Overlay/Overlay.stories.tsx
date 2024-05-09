import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './Overlay';

const meta = {
  title: 'redesigned/shared/Overlay',
  component: Overlay
} satisfies Meta<typeof Overlay>;

type Story = StoryObj<typeof Overlay>;

export default meta;

export const Normal: Story = {
  args: {}
};
