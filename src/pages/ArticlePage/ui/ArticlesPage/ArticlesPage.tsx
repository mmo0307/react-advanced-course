import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';
import { Page } from 'widgets/Page/ui/Page';

import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { fetchArticlesPage } from '../../model/services/fetchArticlesPage/fetchArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer,
  getArticles
} from '../../model/slices/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import styles from './ArticlesPage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

function ArticlesPage({ className }: ArticlePageProps) {
  const { t } = useTranslation();

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlePageView);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initArticlesPage(searchParams));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(styles.ArticlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <View.Condition if={Boolean(error)}>
          <Text title={t('Произошла ошибка при загрузке статьи')} />
        </View.Condition>

        <View.Condition if={!Boolean(error)}>
          <ArticlesPageFilters />

          <ArticleList articles={articles} view={view} isLoading={isLoading} />
        </View.Condition>
      </Page>
    </DynamicModuleLoader>
  );
}

export default ArticlesPage;
