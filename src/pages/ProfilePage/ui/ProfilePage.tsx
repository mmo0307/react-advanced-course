import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { View } from '@/shared/ui/redesigned/View';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  return (
    <Page
      data-testid='ProfilePage'
      className={classNames('', {}, [className])}
    >
      <View.Condition if={!id}>
        <Text text={t('Профиль не найден')} />
      </View.Condition>

      <View.Condition if={Boolean(id)}>
        <EditableProfileCard id={id as string} />
      </View.Condition>
    </Page>
  );
};

export default ProfilePage;
