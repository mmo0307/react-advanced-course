import { EntityState } from '@reduxjs/toolkit';
import { OrderBy } from '@/shared/types';
import {
  ArticleType,
  ArticleView,
  ArticleSortField,
  Article
} from '@/entities/Article';

interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;

  error?: string;

  view: ArticleView;

  //PAGINATION
  pageNumber: number;

  limit: number;

  hasMore: boolean;

  //FILTERS
  orderBy: OrderBy;

  sortBy: ArticleSortField;

  search: string;

  type: ArticleType;

  _inited?: boolean;
}

export type { ArticlesPageSchema };
