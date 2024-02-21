import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
  const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
}

export default ArticleDetailsPage;
