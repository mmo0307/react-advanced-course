import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDatailsPageHeader/ArticleDetailsPageHeader';

import styles from './ArticleDetailsPage.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { View } from '@/shared/ui/View';
import { ArticleRating } from '@/features/Article';
import { ArticleRecommendationsList } from '@/features/Article';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
  const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();

  const articleRatingCard = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id as string} />,
    off: () => <Card>{t('Оценка статей скоро появиться!')}</Card>
  });

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <View.Condition if={!id}>{t('Статья не найдена')}</View.Condition>

        <View.Condition if={Boolean(id)}>
          <VStack
            max
            gap='16'
          >
            <ArticleDetailsPageHeader />

            <ArticleDetails id={id as string} />

            {articleRatingCard}

            <ArticleRecommendationsList />

            <ArticleDetailsComments id={id as string} />
          </VStack>
        </View.Condition>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
