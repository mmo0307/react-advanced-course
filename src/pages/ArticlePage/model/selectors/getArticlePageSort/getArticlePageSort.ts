import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';

export const getArticlePageSort = (state: StateSchema) =>
  state.articlesPage?.sortBy || ArticleSortField.CREATED_AT;
