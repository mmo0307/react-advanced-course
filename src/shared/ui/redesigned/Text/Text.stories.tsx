import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'redesigned/shared/Text',
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
    size: 'size_m'
  }
};

export const TextsSizeM: Story = {
  args: {
    text: 'Texts',
    size: 'size_m'
  }
};

export const TitleSizeL: Story = {
  args: {
    title: 'Title',
    size: 'size_l'
  }
};

export const TextsSizeL: Story = {
  args: {
    text: 'Texts',
    size: 'size_l'
  }
};

export const TitleError: Story = {
  args: {
    ...Title.args,
    theme: 'error'
  }
};

export const TextsError: Story = {
  args: {
    ...Texts.args,
    theme: 'error'
  }
};

export const TitlePrimary: Story = {
  args: {
    ...Title.args,
    theme: 'primary'
  }
};

export const TextsPrimary: Story = {
  args: {
    ...Texts.args,
    theme: 'primary'
  }
};

export const TitleAlignLeft: Story = {
  args: {
    ...Title.args,
    align: 'left'
  }
};

export const TitleAlignCenter: Story = {
  args: {
    ...Title.args,
    align: 'center'
  }
};

export const TitleAlignRight: Story = {
  args: {
    ...Title.args,
    align: 'right'
  }
};

export const TextAlignLeft: Story = {
  args: {
    ...Texts.args,
    align: 'left'
  }
};

export const TextAlignCenter: Story = {
  args: {
    ...Texts.args,
    align: 'center'
  }
};

export const TextAlignRight: Story = {
  args: {
    ...Texts.args,
    align: 'right'
  }
};

export const SizeL: Story = {
  args: {
    title: 'Title L',
    text: 'Texts L',
    size: 'size_l'
  }
};

export const SizeM: Story = {
  args: {
    title: 'Title M',
    text: 'Texts M',
    size: 'size_m'
  }
};

export const SizeS: Story = {
  args: {
    title: 'Title S',
    text: 'Texts S',
    size: 'size_s'
  }
};
