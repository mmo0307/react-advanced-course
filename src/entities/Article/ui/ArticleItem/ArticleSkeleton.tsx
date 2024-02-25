import React, { memo } from 'react';
import { ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { View } from 'shared/ui/View/View';

import styles from './ArticleItem.module.scss';

interface ArticleSkeletonProps {
  className?: string;

  view: ArticleView;
}

export const ArticleSkeleton = memo(
  ({ className, view }: ArticleSkeletonProps) => (
    <div
      className={classNames(styles.ArticleListItem, {}, [
        className,
        styles[view]
      ])}
    >
      <View.Condition if={view === ArticleView.LIST}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton border='50%' height={30} width={30} />

            <Skeleton width={150} height={16} className={styles.username} />

            <Skeleton width={150} height={16} className={styles.date} />
          </div>

          <Skeleton width={250} height={24} className={styles.title} />

          <Skeleton height={200} className={styles.img} />

          <div className={styles.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </View.Condition>

      <View.Condition if={view === ArticleView.GRID}>
        <Card className={styles.card}>
          <div className={styles.imageWrapper}>
            <Skeleton width={200} height={200} className={styles.img} />
          </div>

          <div className={styles.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>

          <Skeleton width={150} height={16} className={styles.title} />
        </Card>
      </View.Condition>
    </div>
  )
);
