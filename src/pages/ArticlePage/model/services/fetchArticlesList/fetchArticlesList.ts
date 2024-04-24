import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQuertParams/addQueryParams';

import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';
import { getArticlePageNumber } from '../../selectors/getArticlePageNumber/getArticlePageNumber';
import { getArticlePageOrder } from '../../selectors/getArticlePageOrder/getArticlePageOrder';
import { getArticlePageSearch } from '../../selectors/getArticlePageSearch/getArticlePageSearch';
import { getArticlePageSort } from '../../selectors/getArticlePageSort/getArticlePageSort';
import { getArticlePageType } from '../../selectors/getArticlePageType/getArticlePageType';
import { ArticleType } from 'entities/Article/model/const';

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
  const type = getArticlePageType(getState());

  try {
    addQueryParams({
      order,
      sort,
      type,
      search
    });

    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort.toLowerCase(),
        q: search,
        type: type === ArticleType.ALL ? undefined : type
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
