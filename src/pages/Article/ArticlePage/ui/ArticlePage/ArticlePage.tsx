import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ArticlePageGreeting } from '@/features/Article';
import { StickyContentLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

import { fetchArticlesPage } from '../../model/services/fetchArticlesPage/fetchArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleFiltersContainer } from '../ArticleFiltersContainer/ArticleFiltersContainer';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { ViewSelectorContainer } from '../ArticleViewSelectorContainer/ArticleViewSelectorContainer';

import styles from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

function ArticlePage({ className }: ArticlePageProps) {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

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
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <StickyContentLayout
            left={<ViewSelectorContainer />}
            right={<ArticleFiltersContainer />}
            content={
              <Page
                data-testid='ArticlePage'
                className={classNames(styles.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
              >
                <ArticleInfiniteList />

                <ArticlePageGreeting />
              </Page>
            }
          />
        }
        off={
          <Page
            data-testid='ArticlePage'
            className={classNames(styles.ArticlesPage, {}, [className])}
            onScrollEnd={onLoadNextPart}
          >
            <ArticlePageFilters />

            <ArticleInfiniteList />

            <ArticlePageGreeting />
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
}

export default ArticlePage;
