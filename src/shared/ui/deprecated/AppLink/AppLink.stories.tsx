import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { AppLinkThemes } from './model/consts';
import { AppLink } from './AppLink';

const meta = {
  title: 'deprecated/shared/AppLink',
  component: AppLink
} satisfies Meta<typeof AppLink>;

type Story = StoryObj<typeof AppLink>;

export default meta;

export const Template: Story = {
  args: {
    children: 'Text',
    theme: AppLinkThemes.PRIMARY,
    to: '/about'
  },
  decorators: [RouterDecorator]
};

export const SECONDARY: Story = {
  ...Template,
  args: {
    ...Template.args,
    theme: AppLinkThemes.SECONDARY
  }
};
