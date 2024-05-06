import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsComments';

import styles from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string;

  id: string;
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
  ({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);

    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack
        data-testid='ArticleRecommendationsList'
        gap='16'
        max
        className={classNames('', {}, [className])}
      >
        <Text
          size={TextSize.L}
          className={styles.commentTitle}
          title={t('Комментарии')}
        />

        <AddCommentForm onSendComment={onSendComment} />

        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </VStack>
    );
  }
);

export { ArticleDetailsComments };
