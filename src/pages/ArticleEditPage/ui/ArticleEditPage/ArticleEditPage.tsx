import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo(
  ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
      <Page className={classNames(styles.ArticleEditPage, {}, [className])}>
        {id}
      </Page>
    );
  }
);

export default ArticleEditPage;
