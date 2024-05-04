import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

function ForbiddenPage() {
  const { t } = useTranslation();
  return (
    <Page data-testid='ForbiddenPage'>
      {t('У вас нет доступпа к єтой странице')}
    </Page>
  );
}

export default ForbiddenPage;
