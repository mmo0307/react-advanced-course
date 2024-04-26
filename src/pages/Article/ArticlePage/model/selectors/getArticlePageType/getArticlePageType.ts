import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType } from '@/entities/Article/model/const';

export const getArticlePageType = (state: StateSchema) =>
  state.articlesPage?.type ?? ArticleType.ALL;
