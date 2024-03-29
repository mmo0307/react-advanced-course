import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment';
import { Comment } from 'entities/Comment/model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

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
        <View.Condition if={Boolean(isLoading)}>
          <>
            <CommentCard isLoading className={styles.comment} />

            <CommentCard isLoading className={styles.comment} />

            <CommentCard isLoading className={styles.comment} />
          </>
        </View.Condition>

        <View.Condition if={Boolean(!isLoading)}>
          <View.Condition if={Boolean(comments?.length)}>
            {comments?.map(comment => (
              <CommentCard
                key={Math.random()}
                isLoading={isLoading}
                className={styles.comment}
                comment={comment}
              />
            ))}
          </View.Condition>

          <View.Condition if={!Boolean(comments?.length)}>
            <Text text={t('Комментарии отсутствуют')} />
          </View.Condition>
        </View.Condition>
      </div>
    );
  }
);

export { CommentList };
