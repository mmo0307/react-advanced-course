import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo(
  ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();

    return <Page className={classNames('', {}, [className])}>{id}</Page>;
  }
);

export default ArticleEditPage;
