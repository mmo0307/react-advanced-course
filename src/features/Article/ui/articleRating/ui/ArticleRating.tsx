import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import {
  useGetArticleRatingQuery,
  useRateArticleMutation
} from '../api/articleRatingApi';
import { RatingCard } from '@/entities/RatingCard';
import { View } from '@/shared/ui/View';

export interface ArticleRatingProps {
  className?: string;

  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRatingQuery({
    articleId,
    userId: userData?.id ?? ''
  });

  const rating = data?.[0];

  const [rateArticleMutation] = useRateArticleMutation();

  const onRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      onRateArticle(starsCount, feedback);
    },
    [onRateArticle]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      onRateArticle(starsCount);
    },
    [onRateArticle]
  );

  return (
    <>
      <View.Condition if={Boolean(isLoading)}>
        <Skeleton width='100%' height={120} />
      </View.Condition>

      <View.Condition if={!Boolean(isLoading)}>
        <RatingCard
          onCancel={onCancel}
          onAccept={onAccept}
          rate={rating?.rate}
          className={className}
          title={t('Оцените статью')}
          feedbackTitle={t(
            'Оставьте свой отзыв о статье, это поможет улучшить качество'
          )}
          hasFeedback
        />
      </View.Condition>
    </>
  );
});

export default ArticleRating;
