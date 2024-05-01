import React, { memo } from 'react';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import styles from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ButtonThemes } from '@/shared/ui/Button';

interface ArticleViewSelectorProps {
  className?: string;

  view: ArticleView;

  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon
  },
  {
    view: ArticleView.GRID,
    icon: GridIcon
  }
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={Math.random()}
            theme={ButtonThemes.CLEAR}
            onClick={onClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames('', {
                [styles.notSelected]: viewType.view !== view
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);
