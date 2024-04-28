import React, { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import { View } from '@/shared/ui/View';

import { Article, ArticleTextBlockType } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import styles from './ArticleItem.module.scss';
import { ArticleBlockType, ArticleView } from '../../model/const';
import { ButtonThemes } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/const/router';

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
      navigate(`${RoutePath.article_details}/${article.id}`);
    }, [article.id, navigate]);

    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlockType;

    return (
      <AppLink
        to={`${RoutePath.article_details}/${article.id}`}
        className={classNames(styles.ArticleItem, {}, [
          className,
          styles[view]
        ])}
        target={target}
      >
        <View.Condition if={view === ArticleView.GRID}>
          <Card className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                alt={article.title}
                src={article.img}
                className={styles.img}
              />

              <Text text={article.createdAt} className={styles.date} />
            </div>

            <div className={styles.infoWrapper}>
              <Text text={article.type.join(', ')} className={styles.types} />

              <>
                <Text text={String(article.views)} className={styles.views} />

                <Icon Svg={EyeIcon} />
              </>
            </div>

            <Text text={article.title} className={styles.title} />
          </Card>
        </View.Condition>

        <View.Condition if={view === ArticleView.LIST}>
          <Card className={styles.card}>
            <div className={styles.header}>
              <Avatar size={30} src={article.user?.avatar} />

              <Text text={article.user?.username} className={styles.username} />

              <Text text={article.createdAt} className={styles.date} />
            </div>

            <Text title={article.title} className={styles.title} />

            <Text text={article.type.join(', ')} className={styles.types} />

            <img src={article.img} className={styles.img} alt={article.title} />

            {textBlock && (
              <ArticleTextBlock
                block={textBlock}
                className={styles.textBlock}
              />
            )}

            <div className={styles.footer}>
              <Button onClick={onOpenArticle} theme={ButtonThemes.OUTLINE}>
                {t('Читать далее...')}
              </Button>

              <>
                <Text text={String(article.views)} className={styles.views} />

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
