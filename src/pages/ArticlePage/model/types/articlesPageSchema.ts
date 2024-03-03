import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;

  error?: string;

  view: ArticleView;

  pageNumber: number;

  limit?: number;

  hasMore: boolean;

  _inited?: boolean;
}

export type { ArticlesPageSchema };
