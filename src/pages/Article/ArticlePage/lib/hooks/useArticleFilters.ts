import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { OrderBy } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';

import { getArticlePageOrder } from '../../model/selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../model/selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../model/selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageType } from '../../model/selectors/getArticlePageType/getArticlePageType';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

const useArticleFilters = () => {
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

  return {
    view,
    order,
    sort,
    search,
    type,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType
  };
};

export { useArticleFilters };
