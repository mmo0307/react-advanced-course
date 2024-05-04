import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

import { fetchArticlesRecommendations } from '../../model/services/fetchArticleRecommendation/fetchArticleRecommendation';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article, string>({
  selectId: (recommendation: Article) => recommendation.id
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  );

const initialState =
  recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,

    error: undefined,

    ids: [],

    entities: {}
  });

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined;

        state.isLoading = true;
      })
      .addCase(
        fetchArticlesRecommendations.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;

          recommendationsAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsRecommendationsReducer } =
  articleDetailsRecommendationsSlice;
