import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Article,
  ArticleItem,
  ArticleSkeleton,
  ArticleView
} from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
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
    .map(() => (
      <ArticleSkeleton
        className={styles.card}
        key={Math.random()}
        view={view}
      />
    ));

const ArticleList: FC<ArticleListProps> = memo(
  ({
    className,
    articles,
    isLoading,
    view = ArticleView.GRID
  }: ArticleListProps) => {
    const { t } = useTranslation();

    return (
      <>
        <View.Condition if={Boolean(!isLoading && !articles.length)}>
          <Text title={t('Статьи не найдены')} size={TextSize.L} />
        </View.Condition>

        <View.Condition if={!Boolean(!isLoading && !articles.length)}>
          <div
            className={classNames(styles.ArticleList, {}, [
              className,
              styles[view]
            ])}
          >
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

            <View.Condition if={Boolean(isLoading)}>
              {getSkeletons(view)}
            </View.Condition>
          </div>
        </View.Condition>
      </>
    );
  }
);

export { ArticleList };
