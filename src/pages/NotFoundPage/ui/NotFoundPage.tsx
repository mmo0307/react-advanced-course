import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Page
      data-testid='NotFoundPage'
      className={classNames(styles.NotFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </Page>
  );
};

export { NotFoundPage };
