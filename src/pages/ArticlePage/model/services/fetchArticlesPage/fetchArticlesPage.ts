import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getArticlePageHasMore } from '../../selectors/getArticlePageHasMore/getArticlePageHasMore';
import { getArticlePageIsLoading } from '../../selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageNumber } from '../../selectors/getArticlePageNumber/getArticlePageNumber';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const fetchArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const page = getArticlePageNumber(getState());
  const hasMore = getArticlePageHasMore(getState());
  const isLoading = getArticlePageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));

    dispatch(
      fetchArticlesList({
        page: page + 1
      })
    );
  }
});
