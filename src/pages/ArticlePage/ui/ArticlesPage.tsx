import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'feature/ArticleViewSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';

import { getArticlePageIsLoading } from '../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageView } from '../model/selectors/getArticlePageView/getArticlePageView';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../model/slices/articlesPageSlice';

import styles from './ArticlesPage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

function ArticlesPage({ className }: ArticlePageProps) {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlePageView);
  const isLoading = useSelector(getArticlePageIsLoading);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());

    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(styles.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />

        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default ArticlesPage;
