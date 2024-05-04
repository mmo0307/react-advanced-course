import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { View } from '@/shared/ui/deprecated/View';

import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(
  ({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlePageView);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);

    return (
      <>
        <View.Condition if={Boolean(error)}>
          <Text title={t('Произошла ошибка при загрузке статьи')} />
        </View.Condition>

        <View.Condition if={!Boolean(error)}>
          <ArticleList
            className={className}
            articles={articles}
            view={view}
            isLoading={isLoading}
          />
        </View.Condition>
      </>
    );
  }
);

export { ArticleInfiniteList };
