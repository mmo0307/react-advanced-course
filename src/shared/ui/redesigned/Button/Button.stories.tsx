import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

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
    variant: 'clear'
  }
};

export const Outline: Story = {
  args: {
    ...Template.args,
    variant: 'outlined'
  }
};

export const OutlineSave: Story = {
  args: {
    ...Template.args,
    variant: 'outlinedSave'
  }
};

export const Square: Story = {
  args: {
    ...Template.args,
    children: '>>',
    square: true
  }
};

export const ClearSizeM: Story = {
  args: {
    ...Clear.args,
    size: 'm'
  }
};

export const ClearSizeL: Story = {
  args: {
    ...Clear.args,
    size: 'l'
  }
};

export const ClearSizeXl: Story = {
  args: {
    ...Clear.args,
    size: 'xl'
  }
};

export const OutlineSizeM: Story = {
  args: {
    ...Outline.args,
    size: 'm'
  }
};

export const OutlineSizeL: Story = {
  args: {
    ...Outline.args,
    size: 'l'
  }
};

export const OutlineSizeXl: Story = {
  args: {
    ...Outline.args,
    size: 'xl'
  }
};

export const OutlineSaveSizeM: Story = {
  args: {
    ...OutlineSave.args,
    size: 'm'
  }
};

export const OutlineSaveSizeL: Story = {
  args: {
    ...OutlineSave.args,
    size: 'l'
  }
};

export const OutlineSaveSizeXL: Story = {
  args: {
    ...OutlineSave.args,
    size: 'xl'
  }
};
