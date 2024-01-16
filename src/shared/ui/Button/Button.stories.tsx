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

export const ClearInverted: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.CLEAR_INVERTED
  }
};

export const Outline: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.OUTLINE
  }
};

export const Background: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.BACKGROUND
  }
};

export const BackgroundInverted: Story = {
  args: {
    ...Template.args,
    theme: ButtonThemes.BACKGROUND_INVERTED
  }
};

export const Square: Story = {
  args: {
    ...Template.args,
    children: '>>',
    theme: ButtonThemes.BACKGROUND,
    square: true
  }
};

export const ClearSizeM: Story = {
  args: {
    ...Clear.args,
    size: ButtonSize.M
  }
};

export const ClearSizeL: Story = {
  args: {
    ...Clear.args,
    size: ButtonSize.L
  }
};

export const ClearSizeXl: Story = {
  args: {
    ...Clear.args,
    size: ButtonSize.XL
  }
};

export const ClearInvertedSizeM: Story = {
  args: {
    ...ClearInverted.args,
    size: ButtonSize.M
  }
};

export const ClearInvertedSizeL: Story = {
  args: {
    ...ClearInverted.args,
    size: ButtonSize.L
  }
};

export const ClearInvertedSizeXl: Story = {
  args: {
    ...ClearInverted.args,
    size: ButtonSize.XL
  }
};

export const OutlineSizeM: Story = {
  args: {
    ...Outline.args,
    size: ButtonSize.M
  }
};

export const OutlineSizeL: Story = {
  args: {
    ...Outline.args,
    size: ButtonSize.L
  }
};

export const OutlineSizeXl: Story = {
  args: {
    ...Outline.args,
    size: ButtonSize.XL
  }
};

export const BackgroundSizeM: Story = {
  args: {
    ...Background.args,
    size: ButtonSize.M
  }
};

export const BackgroundSizeL: Story = {
  args: {
    ...Background.args,
    size: ButtonSize.L
  }
};

export const BackgroundSizeXl: Story = {
  args: {
    ...Background.args,
    size: ButtonSize.XL
  }
};

export const BackgroundInvertedSizeM: Story = {
  args: {
    ...BackgroundInverted.args,
    size: ButtonSize.M
  }
};

export const BackgroundInvertedSizeL: Story = {
  args: {
    ...BackgroundInverted.args,
    size: ButtonSize.L
  }
};

export const BackgroundInvertedSizeXl: Story = {
  args: {
    ...BackgroundInverted.args,
    size: ButtonSize.XL
  }
};

export const SquareSizeM: Story = {
  args: {
    ...Square.args,
    size: ButtonSize.M
  }
};

export const SquareSizeL: Story = {
  args: {
    ...Square.args,
    size: ButtonSize.L
  }
};

export const SquareSizeXl: Story = {
  args: {
    ...Square.args,
    size: ButtonSize.XL
  }
};
