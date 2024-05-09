import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Modal } from './Modal';

const meta = {
  title: 'redesigned/shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export default meta;

export const Light: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isOpen: true,
    lazy: true
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
};

export const DARK: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isOpen: true,
    lazy: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
