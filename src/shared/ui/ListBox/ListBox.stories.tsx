import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'shared/ListBox',
  component: ListBox
} satisfies Meta<typeof ListBox>;

type Story = StoryObj<typeof ListBox>;

export default meta;

export const Normal: Story = {
  args: {
    value: 'Item 1',
    defaultValue: 'Item 1',
    items: [
      { value: 'Item 1', content: 'Item 1' },
      { value: 'Item 2', content: 'Item 2' },
      { value: 'Item 3', content: 'Item 3' }
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

export const DirectionUp: Story = {
  args: {
    ...Normal.args,
    direction: 'up'
  }
};
