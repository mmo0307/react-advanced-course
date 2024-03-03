import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { fetchArticlesPage } from './fetchArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesPage, {
      articlesPage: {
        pageNumber: 2,
        limit: 5,
        hasMore: true,
        isLoading: false,
        ids: [],
        entities: {}
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);

    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesPage, {
      articlesPage: {
        pageNumber: 2,
        limit: 5,
        isLoading: false,
        hasMore: false,
        ids: [],
        entities: {}
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);

    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('fetchArticlesList loading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesPage, {
      articlesPage: {
        pageNumber: 2,
        limit: 5,
        isLoading: true,
        hasMore: false,
        ids: [],
        entities: {}
      }
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');
  });
});
