import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlePageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;
