import React, { memo } from 'react';

import { ArticleViewSelector } from '@/features/Article';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
  className?: string;
}

const ViewSelectorContainer = memo(
  ({ className }: ViewSelectorContainerProps) => {
    const { view, onChangeView } = useArticleFilters();

    return (
      <ArticleViewSelector
        className={classNames('', {}, [className])}
        view={view}
        onViewClick={onChangeView}
      />
    );
  }
);

export { ViewSelectorContainer };
