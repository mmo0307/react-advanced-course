import { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CountrySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect
} satisfies Meta<typeof CurrencySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {}
};
