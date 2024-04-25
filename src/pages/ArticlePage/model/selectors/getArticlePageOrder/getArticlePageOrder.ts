import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageOrder = (state: StateSchema) =>
  state.articlesPage?.orderBy ?? 'asc';
