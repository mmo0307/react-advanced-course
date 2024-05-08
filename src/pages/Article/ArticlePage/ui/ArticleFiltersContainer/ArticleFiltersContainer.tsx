import React, { FC } from 'react';

import { ArticlesFilters } from '@/widgets/Article';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticleFiltersContainerProps {
  className?: string;
}

const ArticleFiltersContainer: FC<ArticleFiltersContainerProps> = ({
  className
}) => {
  const {
    order,
    sort,
    search,
    type,
    onChangeType,
    onChangeOrder,
    onChangeSort,
    onChangeSearch
  } = useArticleFilters();

  return (
    <ArticlesFilters
      search={search}
      type={type}
      sort={sort}
      order={order}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeType={onChangeType}
      onChangeSort={onChangeSort}
      className={className}
    />
  );
};

export { ArticleFiltersContainer };
