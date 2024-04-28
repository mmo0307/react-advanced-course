import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line plugin-checker/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

/* eslint-disable react/display-name */
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  </BrowserRouter>
);
