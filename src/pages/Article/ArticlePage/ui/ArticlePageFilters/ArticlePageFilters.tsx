import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs
} from '@/entities/Article';
import { ArticleViewSelector } from '@/features/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { OrderBy } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { TabItem } from '@/shared/ui/Tabs/Tabs';

import { getArticlePageOrder } from '../../model/selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../model/selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageType } from '../../model/selectors/getArticlePageType/getArticlePageType';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

import styles from './ArticlePageFilters.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType, ArticleView } from '@/entities/Article';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlePageFilters: FC<ArticlesPageFiltersProps> = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
      if (__PROJECT__ !== 'storybook') {
        dispatch(fetchArticlesList({ replace: true }));
      }
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 1000);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));

        dispatch(articlesPageActions.setPage(1));

        debounceFetchData();
      },
      [dispatch, debounceFetchData]
    );

    const onChangeOrder = useCallback(
      (order: OrderBy) => {
        dispatch(articlesPageActions.setOrder(order));

        dispatch(articlesPageActions.setPage(1));

        debounceFetchData();
      },
      [dispatch, debounceFetchData]
    );

    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlesPageActions.setSearch(search));

        dispatch(articlesPageActions.setPage(1));

        debounceFetchData();
      },
      [dispatch, debounceFetchData]
    );

    const onChangeType = useCallback(
      (tab: TabItem) => {
        dispatch(articlesPageActions.setType(tab.value as ArticleType));

        dispatch(articlesPageActions.setPage(1));

        debounceFetchData();
      },
      [dispatch, debounceFetchData]
    );

    return (
      <VStack
        max
        gap='16'
        align='stretch'
        className={classNames('', {}, [className])}
      >
        <div className={styles.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onOrderChange={onChangeOrder}
            onSortChange={onChangeSort}
          />

          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>

        <Card>
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>

        <ArticleTypeTabs value={type} onTabClick={onChangeType} />
      </VStack>
    );
  }
);

export { ArticlePageFilters };
