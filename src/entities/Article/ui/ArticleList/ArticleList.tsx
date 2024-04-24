import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';
import { PAGE_ID } from 'widgets/Page/ui/Page';

import { Article } from '../../model/types/article';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleSkeleton } from '../ArticleItem/ArticleSkeleton';

import styles from './ArticleList.module.scss';
import { ArticleView } from '../../model/const';
import { TextSize } from 'shared/ui/Text/model/consts';

interface ArticleListProps {
  className?: string;

  articles: Article[];

  isLoading?: boolean;

  target?: HTMLAttributeAnchorTarget;

  view?: ArticleView;

  virtualized?: boolean;
}

interface RowProps
  extends Omit<
    ListRowProps,
    'columnIndex' | 'isScrolling' | 'isVisible' | 'parent'
  > {
  articles: Article[];

  itemsPerRow: number;

  view: ArticleView;

  target?: HTMLAttributeAnchorTarget;
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

const Row = ({
  index,
  key,
  style,
  articles,
  view,
  target,
  itemsPerRow
}: RowProps) => {
  const fromIndex = index * itemsPerRow;

  const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

  const visibleArticles = articles.slice(fromIndex, toIndex);

  return (
    <div key={key} style={style} className={styles.row}>
      {visibleArticles.map(article => (
        <ArticleItem
          key={Math.random()}
          className={styles.card}
          article={article}
          target={target}
          view={view}
        />
      ))}
    </div>
  );
};

export const ArticleList = memo(
  ({
    className,
    articles,
    view = ArticleView.GRID,
    isLoading,
    target,
    virtualized = true
  }: ArticleListProps) => {
    const { t } = useTranslation();

    const isBig = view === ArticleView.LIST;

    const itemsPerRow = isBig ? 1 : 3;

    const rowCount = isBig
      ? articles.length
      : Math.ceil(articles.length / itemsPerRow);

    return (
      <>
        <View.Condition if={Boolean(!isLoading && !articles.length)}>
          <div
            className={classNames(styles.ArticleList, {}, [
              className,
              styles[view]
            ])}
          >
            <Text size={TextSize.L} title={t('Статьи не найдены')} />
          </div>
        </View.Condition>

        <View.Condition if={!Boolean(!isLoading && !articles.length)}>
          <View.Condition if={virtualized}>
            <WindowScroller
              scrollElement={document.getElementById(PAGE_ID) as Element}
            >
              {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop
              }) => (
                <div
                  /* eslint-disable-next-line */
                  // @ts-ignore
                  ref={registerChild}
                  className={classNames(styles.ArticleList, {}, [
                    className,
                    styles[view]
                  ])}
                >
                  <List
                    height={height ?? 700}
                    rowCount={rowCount}
                    rowHeight={isBig ? 700 : 320}
                    rowRenderer={({ index, key, style }) => (
                      <Row
                        index={index}
                        key={key}
                        style={style}
                        articles={articles}
                        itemsPerRow={itemsPerRow}
                        view={view}
                        target={target}
                      />
                    )}
                    width={width ? width - 80 : 700}
                    autoHeight
                    onScroll={onChildScroll}
                    isScrolling={isScrolling}
                    scrollTop={scrollTop}
                  />

                  {isLoading && getSkeletons(view)}
                </div>
              )}
            </WindowScroller>
          </View.Condition>

          <View.Condition if={!virtualized}>
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
        </View.Condition>
      </>
    );
  }
);
