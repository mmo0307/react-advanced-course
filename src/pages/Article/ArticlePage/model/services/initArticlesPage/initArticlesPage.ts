import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField } from '@/entities/Article';
import { OrderBy } from '@/shared/types/sort';

import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { ArticleType } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlePageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get('order') as OrderBy;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const typeFromUrl = searchParams.get('search') as ArticleType;
    const searchFromUrl = searchParams.get('search');

    dispatch(articlesPageActions.setOrder(orderFromUrl || 'desc'));

    dispatch(articlesPageActions.setSort(sortFromUrl || 'CREATED_AT'));

    dispatch(articlesPageActions.setType(typeFromUrl || 'ALL'));

    dispatch(articlesPageActions.setSearch(searchFromUrl || ''));

    dispatch(articlesPageActions.initState());

    dispatch(fetchArticlesList({}));
  }
});
