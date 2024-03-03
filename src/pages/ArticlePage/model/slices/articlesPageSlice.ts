import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlePage';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article, string>({
  selectId: (article: Article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  state => state.articlesPage || articlesAdapter.getInitialState()
);

const initialState = articlesAdapter.getInitialState<ArticlesPageSchema>({
  isLoading: false,

  error: undefined,

  view: ArticleView.GRID,

  pageNumber: 1,

  hasMore: true,

  ids: [],

  entities: {},

  _inited: false
});

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;

      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    initState: state => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView;

      state.view = view;

      state.limit = view === ArticleView.GRID ? 9 : 4;

      state._inited = true;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesList.pending, state => {
        state.error = undefined;

        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;

          articlesAdapter.addMany(state, action.payload);

          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      });
  }
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
