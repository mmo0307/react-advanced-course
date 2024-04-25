import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

function ForbiddenPage() {
  const { t } = useTranslation();
  return <Page>{t('У вас нет доступпа к єтой странице')}</Page>;
}

export default ForbiddenPage;
