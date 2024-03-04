import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleView
} from 'entities/Article';
import { ArticleViewSelector } from 'feature/ArticleViewSelector';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { OrderBy } from 'shared/types';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';

import { getArticlePageOrder } from '../../model/selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../model/selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

import styles from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
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

    return (
      <div className={classNames(styles.ArticlesPageFilters, {}, [className])}>
        <div className={styles.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onOrderChange={onChangeOrder}
            onSortChange={onChangeSort}
          />

          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>

        <Card className={styles.search}>
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>
      </div>
    );
  }
);

export { ArticlesPageFilters };
