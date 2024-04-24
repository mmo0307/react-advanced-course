import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors
} from '../../model/selectors';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Index } from 'entities/Country';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from 'entities/Profile';
import { View } from 'shared/ui/View/View';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from 'shared/ui/Stack';
import { ValidateProfileError } from '../../model/consts';
import { TextTheme } from 'shared/ui/Text/model/consts';

interface EditableProfileCardProps {
  className?: string;

  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer
};

export const EditableProfileCard = memo(
  ({ className, id }: EditableProfileCardProps) => {
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);

    const isLoading = useSelector(getProfileIsLoading);

    const error = useSelector(getProfileError);

    const readonly = useSelector(getProfileReadonly);

    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
      [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
      [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        'Имя и фамилия обязательны'
      ),
      [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст')
    };

    const onChangeFirstname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }));
      },
      [dispatch]
    );

    const onChangeLastname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }));
      },
      [dispatch]
    );

    const onChangeCity = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
      },
      [dispatch]
    );

    const onChangeAge = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
      },
      [dispatch]
    );

    const onChangeUsername = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
      },
      [dispatch]
    );

    const onChangeAvatar = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
      },
      [dispatch]
    );

    const onChangeCurrency = useCallback(
      (currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
      },
      [dispatch]
    );

    const onChangeCountry = useCallback(
      (country: Index) => {
        dispatch(profileActions.updateProfile({ country }));
      },
      [dispatch]
    );

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id));
      }
    });

    return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
        <VStack gap='16' max className={classNames('', {}, [className])}>
          <EditableProfileCardHeader id={id as string} />

          <View.Condition if={Boolean(validateErrors?.length)}>
            {validateErrors?.map((err: ValidateProfileError) => (
              <Text
                key={Math.random()}
                theme={TextTheme.ERROR}
                text={validateErrorTranslates[err]}
                data-testid='EditableProfileCard.Error'
              />
            ))}
          </View.Condition>

          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </DynamicModuleLoader>
    );
  }
);
