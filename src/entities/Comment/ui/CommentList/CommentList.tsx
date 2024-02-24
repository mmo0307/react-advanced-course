import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment';
import { Comment } from 'entities/Comment/model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;

  comments?: Comment[];

  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = memo(
  ({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(styles.CommentList, {}, [className])}>
        {comments?.length ? (
          comments.map((comment, index) => (
            <CommentCard
              key={index}
              isLoading={isLoading}
              className={styles.comment}
              comment={comment}
            />
          ))
        ) : (
          <Text text={t('Комментарии отсутствуют')} />
        )}
      </div>
    );
  }
);

export { CommentList };
