import { StoryObj } from '@storybook/react';

// eslint-disable-next-line plugin-checker/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => StoryObj) => story();
