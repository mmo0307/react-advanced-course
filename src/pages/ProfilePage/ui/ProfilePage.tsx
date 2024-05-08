import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { View } from '@/shared/ui/redesigned/View';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  return (
    <ToggleFeature
      name={'isAppRedesigned'}
      on={
        <Page
          data-testid='ProfilePage'
          className={classNames('', {}, [className])}
        >
          <VStack
            gap='16'
            align='normal'
          >
            <View.Condition if={!id}>
              <Text text={t('Профиль не найден')} />
            </View.Condition>

            <View.Condition if={Boolean(id)}>
              <EditableProfileCard id={id as string} />
            </View.Condition>
          </VStack>
        </Page>
      }
      off={
        <Page
          data-testid='ProfilePage'
          className={classNames('', {}, [className])}
        >
          <VStack
            gap='16'
            justify='center'
          >
            <View.Condition if={!id}>
              <Text text={t('Профиль не найден')} />
            </View.Condition>

            <View.Condition if={Boolean(id)}>
              <EditableProfileCard id={id as string} />
            </View.Condition>
          </VStack>
        </Page>
      }
    />
  );
};

export default ProfilePage;
