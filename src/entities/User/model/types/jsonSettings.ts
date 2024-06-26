import { Theme } from '@/shared/const/theme';

interface Settings {
  theme: Theme;

  isFirstVisit: boolean;

  isArticlesPageHasBeenOpen: boolean;
}

type JsonSettings = Partial<Settings>;

export type { JsonSettings };
