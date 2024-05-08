import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ArticleSortSelector,
  ArticleTypeTabs,
  ArticleViewSelector
} from '@/features/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import styles from './ArticlePageFilters.module.scss';

interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlePageFilters: FC<ArticlesPageFiltersProps> = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();

    const {
      order,
      sort,
      view,
      search,
      type,
      onChangeType,
      onChangeOrder,
      onChangeSort,
      onChangeView,
      onChangeSearch
    } = useArticleFilters();

    return (
      <VStack
        max
        gap='16'
        align='stretch'
        className={classNames('', {}, [className])}
      >
        <div className={styles.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onOrderChange={onChangeOrder}
            onSortChange={onChangeSort}
          />

          <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
          />
        </div>

        <Card>
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>

        <ArticleTypeTabs
          value={type}
          onTabClick={onChangeType}
        />
      </VStack>
    );
  }
);

export { ArticlePageFilters };
