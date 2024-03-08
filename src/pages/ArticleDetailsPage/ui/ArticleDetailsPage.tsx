import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList';
import { AddCommentForm } from 'feature/addCommentForm';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/ui/Page';

import { getArticleCommentsIsLoading } from '../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { getArticleRecommendationsIsLoading } from '../model/selectors/getArticleRecommendationsIsLoading/getArticleRecommendationsIsLoading';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticlesRecommendations } from '../model/services/fetchArticleRecommendation/fetchArticleRecommendation';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../model/slices';
import { getArticleComments } from '../model/slices/articleDetailsComments';
import { getArticleRecommendations } from '../model/slices/articleDetailsRecommendations';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
  const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);

  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));

    dispatch(fetchArticlesRecommendations());
  });

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Button theme={ButtonThemes.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>

        <ArticleDetails id={id} />

        <Text
          size={TextSize.L}
          className={styles.commentTitle}
          title={t('Рекомендуем')}
        />

        <ArticleList
          target={'_blank'}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={styles.recommendationsList}
        />

        <Text
          size={TextSize.L}
          className={styles.commentTitle}
          title={t('Комментарии')}
        />

        <AddCommentForm onSendComment={onSendComment} />

        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
