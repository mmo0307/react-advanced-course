import React, { FC, memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { View } from 'shared/ui/View/View';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

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
