import { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Template: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '123', content: 'Первый пункт' },
      { value: '1234', content: 'Второй пункт' }
    ]
  }
};
