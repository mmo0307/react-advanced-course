import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const inited = getArticlePageInited(getState());

  if (!inited) {
    dispatch(articlesPageActions.initState());

    dispatch(fetchArticlesList({}));
  }
});
