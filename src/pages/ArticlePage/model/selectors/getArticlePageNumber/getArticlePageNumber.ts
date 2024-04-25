import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageNumber = (state: StateSchema) =>
  state.articlesPage?.pageNumber || 1;
