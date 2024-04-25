import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../const';

export interface ArticleBlockBase {
  id: string;

  type: ArticleBlockType;
}

export interface ArticleTextBlockType extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;

  title?: string;

  paragraphs: string[];
}

export interface ArticleImageBlockType extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;

  title: string;

  src: string;
}

export interface ArticleCodeBlockType extends ArticleBlockBase {
  type: ArticleBlockType.CODE;

  code: string;
}

export type ArticleBlock =
  | ArticleCodeBlockType
  | ArticleImageBlockType
  | ArticleTextBlockType;

export interface Article {
  id: string;

  title: string;

  subtitle: string;

  img: string;

  views: number;

  createdAt: string;

  type: ArticleType[];

  blocks: ArticleBlock[];

  user: User;
}
