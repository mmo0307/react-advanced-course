import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Index, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Text } from '@/shared/ui/Text';
import { View } from '@/shared/ui/View';

import { Profile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { TextAlign, TextTheme } from '@/shared/ui/Text';

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

  onChangeCountry?: (country: Index) => void;
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
    <VStack
      max
      gap='16'
      justify='center'
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
        <View.Condition if={Boolean(data?.avatar)}>
          <Avatar src={data?.avatar} />
        </View.Condition>

        <Input
          value={data?.firstName}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
          readonly={readonly}
          data-testid='ProfileCard.firstName'
        />

        <Input
          value={data?.lastName}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastname}
          readonly={readonly}
          data-testid='ProfileCard.lastName'
        />

        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          onChange={onChangeAge}
          readonly={readonly}
          data-testid='ProfileCard.age'
        />

        <Input
          value={data?.city}
          placeholder={t('Город')}
          onChange={onChangeCity}
          readonly={readonly}
          data-testid='ProfileCard.city'
        />

        <Input
          value={data?.username}
          placeholder={t('Введите имя пользователя')}
          onChange={onChangeUsername}
          readonly={readonly}
          data-testid='ProfileCard.username'
        />

        <Input
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          onChange={onChangeAvatar}
          readonly={readonly}
          data-testid='ProfileCard.avatar'
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
      </View.Condition>
    </VStack>
  );
};

export { ProfileCard };
