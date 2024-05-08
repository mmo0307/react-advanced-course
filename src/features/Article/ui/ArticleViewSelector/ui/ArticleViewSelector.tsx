import React, { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';

import styles from './ArticleViewSelector.module.scss';

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
        <ToggleFeature
          name={'isAppRedesigned'}
          on={
            <>
              <Card
                padding='8'
                className={classNames(styles.articleViewChangerRedesigned, {}, [
                  className
                ])}
              >
                <HStack gap='8'>
                  {viewTypes.map((viewType) => (
                    <Icon
                      key={viewType.view}
                      Svg={viewType.icon}
                      className={classNames(
                        styles.selectedRedesigned,
                        {
                          [styles.notSelectedRedesigned]: viewType.view !== view
                        },
                        []
                      )}
                      clickable
                      onClick={onClick(viewType.view)}
                    />
                  ))}
                </HStack>
              </Card>
            </>
          }
          off={
            <>
              {viewTypes.map((viewType) => (
                <ButtonDeprecated
                  key={Math.random()}
                  theme={ButtonThemes.CLEAR}
                  onClick={onClick(viewType.view)}
                >
                  <IconDeprecated
                    width={30}
                    height={30}
                    Svg={viewType.icon}
                    className={classNames('', {
                      [styles.notSelected]: viewType.view !== view
                    })}
                  />
                </ButtonDeprecated>
              ))}
            </>
          }
        />
      </div>
    );
  }
);
