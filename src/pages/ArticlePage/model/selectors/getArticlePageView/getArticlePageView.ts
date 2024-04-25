import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article/model/const';

export const getArticlePageView = (state: StateSchema) =>
  state.articlesPage?.view ?? ArticleView.GRID;
