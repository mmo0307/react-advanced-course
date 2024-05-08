import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector, ArticleTypeTabs } from '@/features/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderBy } from '@/shared/types/sort';
import { Input } from '@/shared/ui/deprecated/Input';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

import styles from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;

  search: string;

  type: ArticleType;

  sort: ArticleSortField;

  order: OrderBy;

  onChangeOrder: (newOrder: OrderBy) => void;

  onChangeSearch: (newSearch: string) => void;

  onChangeType: (newTab: TabItem) => void;

  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticlesFilters: FC<ArticlesFiltersProps> = ({
  className,
  search,
  type,
  sort,
  order,
  onChangeOrder,
  onChangeSearch,
  onChangeType,
  onChangeSort
}) => {
  const { t } = useTranslation();

  return (
    <Card padding='0'>
      <VStack
        gap='32'
        align='start'
        className={classNames(styles.articleFiltersWidget, {}, [className])}
      >
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />

        <ArticleTypeTabs
          value={type}
          onTabClick={onChangeType}
        />

        <ArticleSortSelector
          order={order}
          sort={sort}
          onOrderChange={onChangeOrder}
          onSortChange={onChangeSort}
        />
      </VStack>
    </Card>
  );
};

export { ArticlesFilters };
