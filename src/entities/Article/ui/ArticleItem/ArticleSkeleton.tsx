import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { View } from '@/shared/ui/redesigned/View';

import { ArticleView } from '../../model/const';

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
      <ToggleFeature
        name={'isAppRedesigned'}
        on={
          <>
            <View.Condition if={view === ArticleView.LIST}>
              <Card className={styles.card}>
                <div className={styles.header}>
                  <Skeleton
                    borderRadius='50%'
                    height={30}
                    width={30}
                  />

                  <Skeleton
                    width={150}
                    height={16}
                    className={styles.username}
                  />

                  <Skeleton
                    width={150}
                    height={16}
                    className={styles.date}
                  />
                </div>

                <Skeleton
                  width={250}
                  height={24}
                  className={styles.title}
                />

                <Skeleton
                  height={200}
                  className={styles.img}
                />

                <div className={styles.footer}>
                  <Skeleton
                    height={36}
                    width={200}
                  />
                </div>
              </Card>
            </View.Condition>

            <View.Condition if={view === ArticleView.GRID}>
              <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Skeleton
                    width={200}
                    height={200}
                    className={styles.img}
                  />
                </div>

                <div className={styles.infoWrapper}>
                  <Skeleton
                    width={130}
                    height={16}
                  />
                </div>

                <Skeleton
                  width={150}
                  height={16}
                  className={styles.title}
                />
              </Card>
            </View.Condition>
          </>
        }
        off={
          <>
            <View.Condition if={view === ArticleView.LIST}>
              <CardDeprecated className={styles.card}>
                <div className={styles.header}>
                  <SkeletonDeprecated
                    border='50%'
                    height={30}
                    width={30}
                  />

                  <SkeletonDeprecated
                    width={150}
                    height={16}
                    className={styles.username}
                  />

                  <SkeletonDeprecated
                    width={150}
                    height={16}
                    className={styles.date}
                  />
                </div>

                <SkeletonDeprecated
                  width={250}
                  height={24}
                  className={styles.title}
                />

                <SkeletonDeprecated
                  height={200}
                  className={styles.img}
                />

                <div className={styles.footer}>
                  <SkeletonDeprecated
                    height={36}
                    width={200}
                  />
                </div>
              </CardDeprecated>
            </View.Condition>

            <View.Condition if={view === ArticleView.GRID}>
              <CardDeprecated className={styles.card}>
                <div className={styles.imageWrapper}>
                  <SkeletonDeprecated
                    width={200}
                    height={200}
                    className={styles.img}
                  />
                </div>

                <div className={styles.infoWrapper}>
                  <SkeletonDeprecated
                    width={130}
                    height={16}
                  />
                </div>

                <SkeletonDeprecated
                  width={150}
                  height={16}
                  className={styles.title}
                />
              </CardDeprecated>
            </View.Condition>
          </>
        }
      />
    </div>
  )
);
