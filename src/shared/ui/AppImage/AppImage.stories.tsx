import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta = {
  title: 'shared/AppImage',
  component: AppImage
} satisfies Meta<typeof AppImage>;

type Story = StoryObj<typeof AppImage>;

export default meta;

export const Normal: Story = {
  args: {}
};
