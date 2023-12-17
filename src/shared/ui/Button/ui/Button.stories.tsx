import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonThemes } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export default meta;

export const Template: Story = {
  args: {
    children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.CLEAR
  }
};

export const Outline: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.OUTLINE
  }
};

export const OutlineSizeL: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.OUTLINE,
    size: ButtonSize.L
  }
};

export const OutlineSizeXl: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.OUTLINE,
    size: ButtonSize.XL
  }
};
