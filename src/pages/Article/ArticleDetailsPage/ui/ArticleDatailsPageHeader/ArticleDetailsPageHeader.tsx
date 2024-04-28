import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { View } from '@/shared/ui/View';

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';

import { HStack } from '@/shared/ui/Stack';
import { ButtonThemes } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
  ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
      <HStack
        max
        justify='space-between'
        className={classNames('', {}, [className])}
      >
        <Button theme={ButtonThemes.OUTLINE} onClick={onBackToList}>
          {t('Назад к  списку')}
        </Button>

        <View.Condition if={canEdit}>
          <Button theme={ButtonThemes.OUTLINE} onClick={onEditArticle}>
            {t('Редактировать')}
          </Button>
        </View.Condition>
      </HStack>
    );
  }
);

export { ArticleDetailsPageHeader };
