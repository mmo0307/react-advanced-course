import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleSortField } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { OrderBy } from 'shared/types';

import { ArticlesPageSchema } from '../../model/types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticleType, ArticleView } from 'entities/Article/model/const';

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

  limit: 9,

  sortBy: ArticleSortField.CREATED_AT,

  orderBy: 'asc',

  search: '',

  type: ArticleType.ALL,

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
    setOrder: (state, action: PayloadAction<OrderBy>) => {
      state.orderBy = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sortBy = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
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
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;

        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;

        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      });
  }
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
