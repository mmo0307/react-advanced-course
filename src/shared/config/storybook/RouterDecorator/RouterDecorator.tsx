import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoryContext } from '@storybook/react';

type StoryFunction = (context: StoryContext) => React.ReactNode;

export const RouterDecorator = (story: StoryFunction) => (
  <Router>{story({} as StoryContext)}</Router>
);
