import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect, Index } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme
} from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { View } from '@/shared/ui/redesigned/View';

import { Profile } from '../../model/types/profile';
import { ProfileCardSkeleton } from '../ProfileCardSkeleton/ProfileCardSkeleton';

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
    <ToggleFeature
      name={'isAppRedesigned'}
      on={
        <VStack
          max
          gap='16'
          justify='center'
          className={classNames(styles.profileCard, {}, [className])}
        >
          <View.Condition if={Boolean(isLoading)}>
            <Card max>
              <VStack
                gap='16'
                align='center'
              >
                <Skeleton
                  variant='circle'
                  width={128}
                  height={128}
                />

                <ProfileCardSkeleton />
              </VStack>
            </Card>
          </View.Condition>

          <View.Condition if={Boolean(error)}>
            <Text
              theme='error'
              title={t('Произошла ошибка при загрузке профиля')}
              text={t('Попробуйте обновить страницу')}
              align={TextAlign.CENTER}
            />
          </View.Condition>

          <View.Condition if={!Boolean(isLoading) && !Boolean(error)}>
            <VStack
              max
              gap='32'
            >
              <View.Condition if={Boolean(data?.avatar)}>
                <HStack
                  justify='center'
                  max
                  className={styles.avatarWrapper}
                >
                  <Avatar
                    size={128}
                    src={data?.avatar}
                  />
                </HStack>
              </View.Condition>

              <HStack
                max
                gap={'24'}
              >
                <VStack
                  max
                  gap={'16'}
                >
                  <Input
                    value={data?.firstName}
                    label={t('Имя')}
                    placeholder={t('Имя')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    data-testid='ProfileCard.firstName'
                  />

                  <Input
                    value={data?.lastName}
                    label={t('Фамилия')}
                    placeholder={t('Фамилия')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    data-testid='ProfileCard.lastName'
                  />

                  <Input
                    value={data?.age}
                    label={t('Возраст')}
                    placeholder={t('Возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    data-testid='ProfileCard.age'
                  />

                  <Input
                    value={data?.city}
                    label={t('Город')}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                    data-testid='ProfileCard.city'
                  />
                </VStack>

                <VStack
                  max
                  gap={'16'}
                >
                  <Input
                    value={data?.username}
                    label={t('Имя пользователя')}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    data-testid='ProfileCard.username'
                  />

                  <Input
                    value={data?.avatar}
                    label={t('Ссылку на аватар')}
                    placeholder={t('Ссылку на аватар')}
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
                </VStack>
              </HStack>
            </VStack>
          </View.Condition>
        </VStack>
      }
      off={
        <VStack
          max
          gap='16'
          justify='center'
          className={classNames(
            styles.profileCard,
            {
              [styles.editing]: Boolean(!readonly),
              [styles.loading]: Boolean(isLoading),
              [styles.hasError]: Boolean(error)
            },
            [className]
          )}
        >
          <View.Condition if={Boolean(isLoading)}>
            <LoaderDeprecated />
          </View.Condition>

          <View.Condition if={Boolean(error)}>
            <TextDeprecated
              theme={TextTheme.ERROR}
              title={t('Произошла ошибка при загрузке профиля')}
              text={t('Попробуйте обновить страницу')}
              align={TextAlign.CENTER}
            />
          </View.Condition>

          <View.Condition if={!Boolean(isLoading) && !Boolean(error)}>
            <View.Condition if={Boolean(data?.avatar)}>
              <AvatarDeprecated src={data?.avatar} />
            </View.Condition>

            <InputDeprecated
              value={data?.firstName}
              placeholder={t('Ваше имя')}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid='ProfileCard.firstName'
            />

            <InputDeprecated
              value={data?.lastName}
              placeholder={t('Ваша фамилия')}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid='ProfileCard.lastName'
            />

            <InputDeprecated
              value={data?.age}
              placeholder={t('Ваш возраст')}
              onChange={onChangeAge}
              readonly={readonly}
              data-testid='ProfileCard.age'
            />

            <InputDeprecated
              value={data?.city}
              placeholder={t('Город')}
              onChange={onChangeCity}
              readonly={readonly}
              data-testid='ProfileCard.city'
            />

            <InputDeprecated
              value={data?.username}
              placeholder={t('Введите имя пользователя')}
              onChange={onChangeUsername}
              readonly={readonly}
              data-testid='ProfileCard.username'
            />

            <InputDeprecated
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
      }
    />
  );
};

export { ProfileCard };
