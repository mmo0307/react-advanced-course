import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export default meta;

export const Title: Story = {
  args: {
    title: 'Title'
  }
};

export const Texts: Story = {
  args: {
    text: 'Texts'
  }
};

export const TitleError: Story = {
  args: {
    ...Title.args,
    theme: TextTheme.ERROR
  }
};

export const TitlePrimary: Story = {
  args: {
    ...Title.args,
    theme: TextTheme.PRIMARY
  }
};

export const TextsError: Story = {
  args: {
    ...Texts.args,
    theme: TextTheme.ERROR
  }
};

export const TextsPrimary: Story = {
  args: {
    ...Texts.args,
    theme: TextTheme.PRIMARY
  }
};
