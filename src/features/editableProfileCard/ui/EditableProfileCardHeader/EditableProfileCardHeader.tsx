import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonThemes
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { View } from '@/shared/ui/redesigned/View';

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

  const isCanEdit = useSelector(getProfileCanEdit);

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
      tagname='header'
      justify='space-between'
      className={classNames('', {}, [className])}
    >
      <TextDeprecated title={t('Профиль')} />

      <View.Condition if={isCanEdit}>
        <>
          <View.Condition if={Boolean(readonly)}>
            <ButtonDeprecated
              theme={ButtonThemes.OUTLINE}
              onClick={onEdit}
              data-testid='EditableProfileCardHeader.EditButton'
            >
              {t('Редактировать')}
            </ButtonDeprecated>
          </View.Condition>

          <View.Condition if={!Boolean(readonly)}>
            <HStack gap='4'>
              <ButtonDeprecated
                theme={ButtonThemes.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid='EditableProfileCardHeader.CancelButton'
              >
                {t('Отменить')}
              </ButtonDeprecated>

              <ButtonDeprecated
                theme={ButtonThemes.OUTLINE}
                onClick={onSave}
                data-testid='EditableProfileCardHeader.SaveButton'
              >
                {t('Сохранить')}
              </ButtonDeprecated>
            </HStack>
          </View.Condition>
        </>
      </View.Condition>
    </HStack>
  );
};

export { EditableProfileCardHeader };
