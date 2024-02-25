import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleBlock, ArticleBlockType } from 'entities/Article';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;

  id: string;
}

const reducer: ReducersList = {
  articleDetails: articleDetailsReducer
};

const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlock
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlock
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlock
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        <View.Condition if={Boolean(isLoading)}>
          <>
            <Skeleton
              className={styles.avatar}
              width={200}
              height={200}
              border='50%'
            />

            <Skeleton className={styles.title} width={300} height={32} />

            <Skeleton className={styles.skeleton} width={600} height={24} />

            <Skeleton className={styles.skeleton} width='100%' height={200} />

            <Skeleton className={styles.skeleton} width='100%' height={200} />
          </>
        </View.Condition>

        <View.Condition if={Boolean(error)}>
          <Text
            align={TextAlign.CENTER}
            title={t('Произошла ошибка при загрузке статьи.')}
          />
        </View.Condition>

        <View.Condition if={Boolean(!isLoading && !error)}>
          <>
            <div className={styles.avatarWrapper}>
              <Avatar size={200} src={article?.img} className={styles.avatar} />
            </div>

            <Text
              className={styles.title}
              title={article?.title}
              text={article?.subtitle}
              size={TextSize.L}
            />

            <div className={styles.articleInfo}>
              <Icon className={styles.icon} Svg={EyeIcon} />

              <Text text={String(article?.views)} />
            </div>

            <div className={styles.articleInfo}>
              <Icon className={styles.icon} Svg={CalendarIcon} />

              <Text text={article?.createdAt} />
            </div>

            {article?.blocks.map(renderBlock)}
          </>
        </View.Condition>
      </div>
    </DynamicModuleLoader>
  );
});

export { ArticleDetails };
