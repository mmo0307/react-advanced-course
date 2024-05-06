import React, { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonThemes } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { View } from '@/shared/ui/redesigned/View';

import { ArticleBlockType, ArticleView } from '../../model/const';
import { Article, ArticleTextBlockType } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import EyeIcon from '@/shared/assets/icons/eye.svg';

import styles from './ArticleItem.module.scss';

interface ArticleItemProps {
  className?: string;

  article: Article;

  view: ArticleView;

  target?: HTMLAttributeAnchorTarget;
}

const ArticleItem: FC<ArticleItemProps> = memo(
  ({ className, article, view, target }: ArticleItemProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
      navigate(getRouteArticleDetails(article.id));
    }, [article.id, navigate]);

    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlockType;

    return (
      <AppLink
        to={getRouteArticleDetails(article.id)}
        className={classNames(styles.ArticleItem, {}, [
          className,
          styles[view]
        ])}
        target={target}
        data-testid='ArticleListItem'
      >
        <View.Condition if={view === ArticleView.GRID}>
          <Card className={styles.card}>
            <div className={styles.imageWrapper}>
              <AppImage
                fallback={
                  <Skeleton
                    width={'100%'}
                    height={250}
                  />
                }
                alt={article.title}
                src={article.img}
                className={styles.img}
              />

              <Text
                text={article.createdAt}
                className={styles.date}
              />
            </div>

            <div className={styles.infoWrapper}>
              <Text
                text={article.type.join(', ')}
                className={styles.types}
              />

              <>
                <Text
                  text={String(article.views)}
                  className={styles.views}
                />

                <Icon Svg={EyeIcon} />
              </>
            </div>

            <Text
              text={article.title}
              className={styles.title}
            />
          </Card>
        </View.Condition>

        <View.Condition if={view === ArticleView.LIST}>
          <Card className={styles.card}>
            <div className={styles.header}>
              <Avatar
                size={30}
                src={article.user?.avatar}
              />

              <Text
                text={article.user?.username}
                className={styles.username}
              />

              <Text
                text={article.createdAt}
                className={styles.date}
              />
            </div>

            <Text
              title={article.title}
              className={styles.title}
            />

            <Text
              text={article.type.join(', ')}
              className={styles.types}
            />

            <AppImage
              src={article.img}
              fallback={
                <Skeleton
                  width={200}
                  height={200}
                />
              }
              className={styles.img}
              alt={article.title}
            />

            {textBlock && (
              <ArticleTextBlock
                block={textBlock}
                className={styles.textBlock}
              />
            )}

            <div className={styles.footer}>
              <Button
                onClick={onOpenArticle}
                theme={ButtonThemes.OUTLINE}
              >
                {t('Читать далее...')}
              </Button>

              <>
                <Text
                  text={String(article.views)}
                  className={styles.views}
                />

                <Icon Svg={EyeIcon} />
              </>
            </div>
          </Card>
        </View.Condition>
      </AppLink>
    );
  }
);

export { ArticleItem };
