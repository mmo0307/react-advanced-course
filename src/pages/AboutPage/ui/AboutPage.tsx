import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

function AboutPage() {
  const { t } = useTranslation();
  return <Page>{t('О сайте')}</Page>;
}

export default AboutPage;
