import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleDetailsComments.module.scss';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsComments';
import { getArticleCommentsIsLoading } from '../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from '@/shared/ui/Stack';

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

        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    );
  }
);

export { ArticleDetailsComments };
