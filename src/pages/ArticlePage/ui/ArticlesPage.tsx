import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticlesPage.module.scss';

interface ArticlePageProps {
  className?: string;
}

function ArticlesPage({ className }: ArticlePageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticlePage, {}, [className])}>
      {t('ArticlePage')}
    </div>
  );
}

export default ArticlesPage;
