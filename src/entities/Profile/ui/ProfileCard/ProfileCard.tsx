import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation();

  const data = useSelector(getProfileData);

  // const isLoading = useSelector(getProfileIsLoading);
  //
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />

        <Button className={styles.editBtn} theme={ButtonThemes.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>

      <div className={styles.data}>
        <Input
          className={styles.input}
          value={data?.firstName}
          placeholder={t('Ваше имя')}
        />
        <Input
          className={styles.input}
          value={data?.lastName}
          placeholder={t('Ваша фамилия')}
        />
      </div>
    </div>
  );
};

export { ProfileCard };
