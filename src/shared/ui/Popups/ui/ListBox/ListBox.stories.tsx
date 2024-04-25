import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import React from 'react';

const meta = {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  decorators: [
    Story => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof ListBox>;

type Story = StoryObj<typeof ListBox>;

export default meta;

export const Normal: Story = {
  args: {
    value: 'Item 1',
    defaultValue: 'Item 1',
    items: [
      { value: 'Item 11111111111111111', content: 'Item 11111111111111111' },
      { value: 'Item 22222222222222222', content: 'Item 22222222222222222' },
      { value: 'Item 33333333333333333', content: 'Item 33333333333333333' }
    ],
    onChange: action('onChange')
  }
};

export const Dark: Story = {
  args: {
    ...Normal.args
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Green: Story = {
  args: {
    ...Normal.args
  },
  decorators: [ThemeDecorator(Theme.GREEN)]
};

export const DirectionUpLeft: Story = {
  args: {
    ...Normal.args,
    direction: 'up-left'
  }
};

export const DirectionUpRight: Story = {
  args: {
    ...Normal.args,
    direction: 'up-right'
  }
};

export const DirectionDownLeft: Story = {
  args: {
    ...Normal.args,
    direction: 'down-left'
  }
};

export const DirectionDownRight: Story = {
  args: {
    ...Normal.args,
    direction: 'down-right'
  }
};
