import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector, ArticleTypeTabs } from '@/features/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderBy } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { TabItem } from '@/shared/ui/redesigned/Tabs';

import SearchIcon from '@/shared/assets/icons/search.svg';

import styles from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;

  search: string;

  type: ArticleType;

  sort: ArticleSortField;

  order: OrderBy;

  onChangeOrder: (newOrder: OrderBy) => void;

  onChangeSearch: (newSearch: string) => void;

  onChangeType: (newTab: TabItem<string>) => void;

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
          size='s'
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
          addonLeft={
            <Icon
              Svg={SearchIcon}
              width={18}
              height={18}
            />
          }
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
