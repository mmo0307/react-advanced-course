import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageNumber } from 'pages/ArticlePage/model/selectors/getArticlePageNumber/getArticlePageNumber';

import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';
import { getArticlePageOrder } from '../../selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../selectors/getArticlePageSort/getArticlePageSort';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const limit = getArticlePageLimit(getState());
  const order = getArticlePageOrder(getState());
  const sort = getArticlePageSort(getState());
  const search = getArticlePageSearch(getState());
  const page = getArticlePageNumber(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort.toLowerCase(),
        q: search
      }
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
