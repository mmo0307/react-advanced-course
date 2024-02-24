import React, { FC, memo } from 'react';
import { Comment } from 'entities/Comment/model/types/comment';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;

  comment: Comment;

  isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = memo(
  ({ className, comment, isLoading }: CommentCardProps) => (
    <>
      <View.Condition if={Boolean(isLoading)}>
        <div className={classNames(styles.CommentCard, {}, [className])}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} border='50%' />

            <Skeleton height={16} width={100} className={styles.username} />
          </div>

          <Skeleton className={styles.text} width='100%' height={50} />
        </div>
      </View.Condition>

      <View.Condition if={Boolean(!isLoading)}>
        <div className={classNames(styles.CommentCard, {}, [className])}>
          <AppLink
            to={`${RoutePath.profile}/${comment.user.id}`}
            className={styles.header}
          >
            <Avatar
              className={styles.avatar}
              src={comment.user.avatar}
              alt={comment.user.username}
            />

            <Text className={styles.username} title={comment.user.username} />
          </AppLink>

          <Text className={styles.text} text={comment.text} />
        </div>
      </View.Condition>
    </>
  )
);

export { CommentCard };
