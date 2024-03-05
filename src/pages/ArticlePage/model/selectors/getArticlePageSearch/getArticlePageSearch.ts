import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageSearch = (state: StateSchema) =>
  state.articlesPage?.search || '';
