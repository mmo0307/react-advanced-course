import React, { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { View } from '@/shared/ui/View';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const { id } = useParams<{ id: string }>();

  return (
    <Page className={classNames('', {}, [className])}>
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
