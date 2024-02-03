import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;

  data?: Profile;

  isLoading?: boolean;

  error?: string;

  readonly?: boolean;

  onChangeLastname?: (value?: string) => void;

  onChangeFirstname?: (value?: string) => void;

  onChangeCity?: (value?: string) => void;

  onChangeAge?: (value?: string) => void;

  onChangeUsername?: (value?: string) => void;

  onChangeAvatar?: (value?: string) => void;

  onChangeCurrency?: (currency: Currency) => void;

  onChangeCountry?: (country: Country) => void;
}

const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency
}) => {
  const { t } = useTranslation('profile');

  return (
    <div
      className={classNames(
        styles.ProfileCard,
        {
          [styles.editing]: Boolean(!readonly),
          [styles.loading]: Boolean(isLoading),
          [styles.hasError]: Boolean(error)
        },
        [className]
      )}
    >
      <View.Condition if={Boolean(isLoading)}>
        <Loader />
      </View.Condition>

      <View.Condition if={Boolean(error)}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </View.Condition>

      <View.Condition if={!Boolean(isLoading) && !Boolean(error)}>
        <div className={styles.data}>
          <View.Condition if={Boolean(data?.avatar)}>
            <Avatar src={data?.avatar} />
          </View.Condition>

          <Input
            value={data?.firstName}
            placeholder={t('Ваше имя')}
            onChange={onChangeFirstname}
            readonly={readonly}
          />

          <Input
            value={data?.lastName}
            placeholder={t('Ваша фамилия')}
            onChange={onChangeLastname}
            readonly={readonly}
          />

          <Input
            value={data?.age}
            placeholder={t('Ваш возраст')}
            onChange={onChangeAge}
            readonly={readonly}
          />

          <Input
            value={data?.city}
            placeholder={t('Город')}
            onChange={onChangeCity}
            readonly={readonly}
          />

          <Input
            value={data?.username}
            placeholder={t('Введите имя пользователя')}
            onChange={onChangeUsername}
            readonly={readonly}
          />

          <Input
            value={data?.avatar}
            placeholder={t('Введите ссылку на аватар')}
            onChange={onChangeAvatar}
            readonly={readonly}
          />

          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />

          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </div>
      </View.Condition>
    </div>
  );
};

export { ProfileCard };
