import { User } from 'entities/User';

export enum ArticleSortField {
  CREATED_AT = 'CREATED_AT',
  VIEWS = 'VIEWS',
  TITLE = 'TITLE'
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}

export enum ArticleView {
  LIST = 'LIST',
  GRID = 'GRID'
}

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

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

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
