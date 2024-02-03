import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextAlign, TextTheme } from './Text';

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

export const TextsError: Story = {
  args: {
    ...Texts.args,
    theme: TextTheme.ERROR
  }
};

export const TitlePrimary: Story = {
  args: {
    ...Title.args,
    theme: TextTheme.PRIMARY
  }
};

export const TextsPrimary: Story = {
  args: {
    ...Texts.args,
    theme: TextTheme.PRIMARY
  }
};

export const TitleAlignLeft: Story = {
  args: {
    ...Title.args,
    align: TextAlign.LEFT
  }
};

export const TitleAlignCenter: Story = {
  args: {
    ...Title.args,
    align: TextAlign.CENTER
  }
};

export const TitleAlignRight: Story = {
  args: {
    ...Title.args,
    align: TextAlign.RIGHT
  }
};

export const TextAlignLeft: Story = {
  args: {
    ...Texts.args,
    align: TextAlign.LEFT
  }
};

export const TextAlignCenter: Story = {
  args: {
    ...Texts.args,
    align: TextAlign.CENTER
  }
};

export const TextAlignRight: Story = {
  args: {
    ...Texts.args,
    align: TextAlign.RIGHT
  }
};
