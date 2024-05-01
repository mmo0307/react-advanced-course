import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { View } from '@/shared/ui/View';

import { Comment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;

  comment?: Comment;

  isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = memo(
  ({ className, comment, isLoading }: CommentCardProps) => (
    <>
      <View.Condition if={Boolean(isLoading)}>
        <div
          className={classNames(
            styles.CommentCard,
            {
              [styles.loading]: isLoading
            },
            [className]
          )}
          data-testid='CommentCard.Loading'
        >
          <div className={styles.header}>
            <Skeleton
              width={30}
              height={30}
              border='50%'
            />

            <Skeleton
              height={16}
              width={100}
              className={styles.username}
            />
          </div>

          <Skeleton
            className={styles.text}
            width='100%'
            height={50}
          />
        </div>
      </View.Condition>

      <View.Condition if={Boolean(!isLoading && comment)}>
        <VStack
          max
          gap='8'
          className={classNames(styles.CommentCard, {}, [className])}
          data-testid='CommentCard.Content'
        >
          <AppLink
            to={getRouteProfile(comment?.user.id as string)}
            className={styles.header}
          >
            <Avatar
              className={styles.avatar}
              src={comment?.user.avatar}
              alt={comment?.user.username}
            />

            <Text
              className={styles.username}
              title={comment?.user.username}
            />
          </AppLink>

          <Text
            className={styles.text}
            text={comment?.text}
          />
        </VStack>
      </View.Condition>
    </>
  )
);

export { CommentCard };
