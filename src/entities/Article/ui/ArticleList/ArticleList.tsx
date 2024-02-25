import React, { FC, memo } from 'react';
import { Article } from 'entities/Article';
import { ArticleItem, ArticleSkeleton, ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { View } from 'shared/ui/View/View';

import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;

  articles: Article[];

  isLoading?: boolean;

  view: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleSkeleton className={styles.card} key={index} view={view} />
    ));

const ArticleList: FC<ArticleListProps> = memo(
  ({
    className,
    articles,
    isLoading,
    view = ArticleView.GRID
  }: ArticleListProps) => (
    <div
      className={classNames(styles.ArticleList, {}, [className, styles[view]])}
    >
      <View.Condition if={Boolean(isLoading)}>
        {getSkeletons(view)}
      </View.Condition>

      <View.Condition if={Boolean(articles.length && !isLoading)}>
        {articles.map(article => (
          <ArticleItem
            key={Math.random()}
            article={article}
            view={view}
            className={styles.card}
          />
        ))}
      </View.Condition>
    </div>
  )
);

export { ArticleList };
