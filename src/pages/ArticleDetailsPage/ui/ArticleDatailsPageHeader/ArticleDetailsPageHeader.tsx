import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from 'entities/Article/model/selectors';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { View } from 'shared/ui/View/View';

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle/getCanEditArticle';

import styles from './ArticleDetailsPageHeader.module.scss';

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
      <div
        className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}
      >
        <Button theme={ButtonThemes.OUTLINE} onClick={onBackToList}>
          {t('Назад к  списку')}
        </Button>

        <View.Condition if={canEdit}>
          <Button
            className={styles.editBtn}
            theme={ButtonThemes.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Редактировать')}
          </Button>
        </View.Condition>
      </div>
    );
  }
);

export { ArticleDetailsPageHeader };
