import type { Meta, StoryObj } from '@storybook/react';

import { TextAlign, TextSize, TextTheme } from './model/consts';
import { Text } from './Text';

const meta = {
  title: 'deprecated/shared/Text',
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

export const TitleSizeM: Story = {
  args: {
    title: 'Title',
    size: TextSize.M
  }
};

export const TextsSizeM: Story = {
  args: {
    text: 'Texts',
    size: TextSize.M
  }
};

export const TitleSizeL: Story = {
  args: {
    title: 'Title',
    size: TextSize.L
  }
};

export const TextsSizeL: Story = {
  args: {
    text: 'Texts',
    size: TextSize.L
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

export const SizeL: Story = {
  args: {
    title: 'Title L',
    text: 'Texts L',
    size: TextSize.L
  }
};

export const SizeM: Story = {
  args: {
    title: 'Title M',
    text: 'Texts M',
    size: TextSize.M
  }
};

export const SizeS: Story = {
  args: {
    title: 'Title S',
    text: 'Texts S',
    size: TextSize.S
  }
};
