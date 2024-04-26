import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { View } from '@/shared/ui/View/View';

import { Article } from '../../model/types/article';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleSkeleton } from '../ArticleItem/ArticleSkeleton';

import styles from './ArticleList.module.scss';
import { ArticleView } from '../../model/const';
import { TextSize } from '@/shared/ui/Text/model/consts';

interface ArticleListProps {
  className?: string;

  articles: Article[];

  isLoading?: boolean;

  target?: HTMLAttributeAnchorTarget;

  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map(() => (
      <ArticleSkeleton
        className={styles.card}
        key={Math.random()}
        view={view}
      />
    ));

export const ArticleList = memo(
  ({
    className,
    articles,
    view = ArticleView.GRID,
    isLoading,
    target
  }: ArticleListProps) => {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(styles.ArticleList, {}, [
          className,
          styles[view]
        ])}
      >
        <View.Condition if={Boolean(!isLoading && !articles.length)}>
          <Text size={TextSize.L} title={t('Статьи не найдены')} />
        </View.Condition>

        <View.Condition if={Boolean(isLoading)}>
          {getSkeletons(view)}
        </View.Condition>

        <View.Condition if={!Boolean(!isLoading && !articles.length)}>
          {articles.map(article => (
            <ArticleItem
              key={Math.random()}
              className={styles.card}
              article={article}
              target={target}
              view={view}
            />
          ))}
        </View.Condition>
      </div>
    );
  }
);
