import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageInited = (state: StateSchema) =>
  state.articlesPage?._inited;
