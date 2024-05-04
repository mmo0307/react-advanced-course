import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { View } from '@/shared/ui/deprecated/View';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;

  comments?: Comment[];

  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = memo(
  ({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation();

    return (
      <VStack
        gap='16'
        max
        className={classNames('', {}, [className])}
      >
        <View.Condition if={Boolean(isLoading)}>
          <>
            <CommentCard isLoading />

            <CommentCard isLoading />

            <CommentCard isLoading />
          </>
        </View.Condition>

        <View.Condition if={Boolean(!isLoading)}>
          <View.Condition if={Boolean(comments?.length)}>
            {comments?.map((comment) => (
              <CommentCard
                key={Math.random()}
                isLoading={isLoading}
                comment={comment}
              />
            ))}
          </View.Condition>

          <View.Condition if={!Boolean(comments?.length)}>
            <Text text={t('Комментарии отсутствуют')} />
          </View.Condition>
        </View.Condition>
      </VStack>
    );
  }
);

export { CommentList };
