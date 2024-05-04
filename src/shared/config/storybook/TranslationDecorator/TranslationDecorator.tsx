import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { Story } from '@storybook/react';

const TranslationDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<div>Loading...</div>}>
    <I18nextProvider i18n={i18n}>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
);

export { TranslationDecorator };
