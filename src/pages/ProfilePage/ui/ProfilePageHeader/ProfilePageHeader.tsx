import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData
} from 'entities/Profile';
import { getProfileCanEdit } from 'entities/Profile/model/selectors/getProfileCanEdit/getProfileCanEdit';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const canEdit = useSelector(getProfileCanEdit);

  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (id) {
      dispatch(updateProfileData());
    }
  }, [dispatch]);

  return (
    <HStack
      max
      justify='space-between'
      className={classNames('', {}, [className])}
    >
      <Text title={t('Профиль')} />

      <View.Condition if={Boolean(canEdit)}>
        <>
          <View.Condition if={Boolean(readonly)}>
            <Button theme={ButtonThemes.OUTLINE} onClick={onEdit}>
              {t('Редактировать')}
            </Button>
          </View.Condition>

          <View.Condition if={!Boolean(readonly)}>
            <HStack gap='4'>
              <Button theme={ButtonThemes.OUTLINE_RED} onClick={onCancelEdit}>
                {t('Отменить')}
              </Button>

              <Button theme={ButtonThemes.OUTLINE} onClick={onSave}>
                {t('Сохранить')}
              </Button>
            </HStack>
          </View.Condition>
        </>
      </View.Condition>
    </HStack>
  );
};

export { ProfilePageHeader };
