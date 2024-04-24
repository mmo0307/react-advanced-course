import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

function AdminPanelPage() {
  const { t } = useTranslation();
  return <Page>{t('Админка')}</Page>;
}

export default AdminPanelPage;
