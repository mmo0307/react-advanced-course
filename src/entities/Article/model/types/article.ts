export enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}

export interface ArticleBlockBase {
  id: string;

  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;

  title?: string;

  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;

  title: string;

  src: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;

  code: string;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export enum ArticleType {
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
}