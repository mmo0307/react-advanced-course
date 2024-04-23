import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { View } from 'shared/ui/View/View';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { getProfileCanEdit, getProfileReadonly } from '../../model/selectors';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;

  id: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({
  className,
  id
}) => {
  const { t } = useTranslation();

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

export { EditableProfileCardHeader };