import React from 'react';
import { useTranslation } from 'react-i18next';
import { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
  title: 'shared/Page',
  component: Page
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageStory: Story = {
  args: {
    children: <span>{useTranslation().t('PageStory')}</span>
  }
};
