import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { View } from '@/shared/ui/deprecated/View';

import { getProfileCanEdit, getProfileReadonly } from '../../model/selectors';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

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
            <Button
              theme={ButtonThemes.OUTLINE}
              onClick={onEdit}
              data-testid='EditableProfileCardHeader.EditButton'
            >
              {t('Редактировать')}
            </Button>
          </View.Condition>

          <View.Condition if={!Boolean(readonly)}>
            <HStack gap='4'>
              <Button
                theme={ButtonThemes.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid='EditableProfileCardHeader.CancelButton'
              >
                {t('Отменить')}
              </Button>

              <Button
                theme={ButtonThemes.OUTLINE}
                onClick={onSave}
                data-testid='EditableProfileCardHeader.SaveButton'
              >
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
